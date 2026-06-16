// preprocessor_c.ts

import { baseSuggestion, cStandard, isAllowed } from './types';

// C++ Type
export interface cPreprocessorSuggestion extends baseSuggestion {
    standard: cStandard;
}

// C preprocessor Dictionary
const cPreprocessor: Record<string, cPreprocessorSuggestion[]> = {

    // C89
    "#as": [{ completion: "assert",  detail: "conditionally controlled debugging macro",     standard: "C89" }],
    "#er": [{ completion: "error",   detail: "emit a compilation error message",             standard: "C89" }],
    "#in": [{ completion: "include", detail: "include a header file",                        standard: "C89" }],
    "#li": [{ completion: "line",    detail: "change the current line number and file name", standard: "C89" }],
    "#pr": [{ completion: "pragma",  detail: "implementation-specific compiler instruction", standard: "C89" }],
    "#de": [{ completion: "define",  detail: "define a macro",                               standard: "C89" }],
    "#un": [{ completion: "undef",   detail: "undefine a macro",                             standard: "C89" }],
    "#i":  [{ completion: "if",      detail: "begin conditional preprocessing block",        standard: "C89" }],
    "#if": [{ completion: "ifdef",   detail: "check whether a macro is defined",             standard: "C89" }],
    "#ifn":[{ completion: "ifndef",  detail: "check whether a macro is not defined",         standard: "C89" }],
    "#el": [{ completion: "elif",    detail: "alternative conditional preprocessing branch", standard: "C89" }],
    "#els":[{ completion: "else",    detail: "fallback conditional preprocessing branch",    standard: "C89" }],
    "#en": [{ completion: "endif",   detail: "end conditional preprocessing block",          standard: "C89" }],

    // C23
    "#eli":  [{ completion: "elifdef",  detail: "conditional branch if macro is defined",     standard: "C23" }],
    "#elif": [{ completion: "elifndef", detail: "conditional branch if macro is not defined", standard: "C23" }],
    "#em":   [{ completion: "embed",    detail: "embed binary resources into the program",    standard: "C23" }],
    "#wa":   [{ completion: "warning",  detail: "emit a compilation warning message",         standard: "C23" }],
};

// Query
export function findCPreprocessorSuggestions(
    wordPrefix: string,
    activeStd: cStandard
): cPreprocessorSuggestion[] {

    let bestMatch: cPreprocessorSuggestion[] = [];

    for (let len = 3; len <= wordPrefix.length; len++) {
        const key = wordPrefix.slice(0, len);
        if (cPreprocessor[key]) {
            bestMatch = cPreprocessor[key].filter(s => isAllowed(s, activeStd));
        }
    }

    return bestMatch;
}