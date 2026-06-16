// standard.ts

import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

import { cppStandard, cStandard } from './types';

export interface detectedStandards {
    cpp: cppStandard;
    c: cStandard;
}

const DEFAULT_CPP: cppStandard = 'C++23';
const DEFAULT_C: cStandard = 'C23';

const cppMap: Record<string, cppStandard> = {
    '98': 'C++98',
    '03': 'C++03',
    '11': 'C++11',
    '14': 'C++14',
    '17': 'C++17',
    '20': 'C++20',
    '23': 'C++23',
    '26': 'C++26'
};

const cMap: Record<string, cStandard> = {
    '89': 'C89',
    '95': 'C95',
    '99': 'C99',
    '11': 'C11',
    '17': 'C17',
    '23': 'C23'
};

const searchDirs = [
    '',
    'build',
    'build/debug',
    'build/release',
    'debug',
    'release',
    'out',
    '.build',
    'cmake-build-debug',
    'cmake-build-release'
];

let cachedStandards: detectedStandards | null = null;

function parseCppStandard(command: string): cppStandard | null {

    const match =
        command.match(/-std=(?:gnu|c)\+\+(\d+)/);

    if (!match) {
        return null;
    }

    return cppMap[match[1]] ?? null;
}

function parseCStandard(command: string): cStandard | null {

    if (/-std=(?:gnu|c)\+\+/.test(command)) {
        return null;
    }

    const match =
        command.match(/-std=(?:gnu|c)(\d+)/);

    if (!match) {
        return null;
    }

    return cMap[match[1]] ?? null;
}

function findCompileCommands(): string | null {

    const folders =
        vscode.workspace.workspaceFolders;

    if (!folders) {
        return null;
    }

    for (const folder of folders) {

        for (const dir of searchDirs) {

            const candidate =
                path.join(
                    folder.uri.fsPath,
                    dir,
                    'compile_commands.json'
                );

            if (fs.existsSync(candidate)) {
                return candidate;
            }
        }
    }

    return null;
}

export function getDetectedStandards(): detectedStandards {

    if (cachedStandards) {
        return cachedStandards;
    }

    const file =
        findCompileCommands();

    if (!file) {

        cachedStandards = {
            cpp: DEFAULT_CPP,
            c: DEFAULT_C
        };

        return cachedStandards;
    }

    try {

        const raw =
            fs.readFileSync(file, 'utf8');

        const entries =
            JSON.parse(raw) as {
                command?: string;
                arguments?: string[];
            }[];

        let cpp: cppStandard = DEFAULT_CPP;
        let c: cStandard = DEFAULT_C;

        for (const entry of entries) {

            const command =
                entry.command ??
                entry.arguments?.join(' ') ??
                '';

            const cppStd =
                parseCppStandard(command);

            if (cppStd) {
                cpp = cppStd;
            }

            const cStd =
                parseCStandard(command);

            if (cStd) {
                c = cStd;
            }
        }

        cachedStandards = { cpp, c };

        console.log(
            `Flow++ standards: ${cpp}, ${c}`
        );

        return cachedStandards;

    } catch {

        cachedStandards = {
            cpp: DEFAULT_CPP,
            c: DEFAULT_C
        };

        return cachedStandards;
    }
}

export function clearStandardCache(): void {
    cachedStandards = null;
}