// extension.ts

import * as vscode from 'vscode';
import {
    clearStandardCache,
    getDetectedStandards
} from './standard';

export function activate(context: vscode.ExtensionContext) {

    function refreshStandards(): void {

        clearStandardCache();

        const standards =
            getDetectedStandards();

        console.log(
            `Flow++ standards: ${standards.cpp} / ${standards.c}`
        );
    }

    // Initial detection
    refreshStandards();

    // Watch compile_commands.json
    const watcher =
        vscode.workspace.createFileSystemWatcher(
            '**/compile_commands.json'
        );

    watcher.onDidCreate(refreshStandards);
    watcher.onDidChange(refreshStandards);
    watcher.onDidDelete(() => {

        clearStandardCache();
        console.log(
            'Flow++ compile_commands.json removed'
        );
    });

    context.subscriptions.push(watcher);
}

export function deactivate() {}