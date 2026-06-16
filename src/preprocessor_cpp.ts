// preprocessor_cpp.ts

import { baseSuggestion, cppStandard, isAllowed } from './types';

// Type
export interface cppPreprocessorSuggestion extends baseSuggestion {
    standard: cppStandard;
}

// preprocessor_cpp Dictionary
const cppPreprocessor: Record<string, cppPreprocessorSuggestion[]> = {

    // C++98
    "#as": [{ completion: "assert",  detail: "conditionally controlled debugging macro",     standard: "C++98" }],
    "#er": [{ completion: "error",   detail: "emit a compilation error message",             standard: "C++98" }],
    "#in": [{ completion: "include", detail: "include a header file",                        standard: "C++98" }],
    "#li": [{ completion: "line",    detail: "change the current line number and file name", standard: "C++98" }],
    "#pr": [{ completion: "pragma",  detail: "implementation-specific compiler instruction", standard: "C++98" }],
    "#de": [{ completion: "define",  detail: "define a macro",                               standard: "C++98" }],
    "#un": [{ completion: "undef",   detail: "undefine a macro",                             standard: "C++98" }],
    "#i":  [{ completion: "if",      detail: "begin conditional preprocessing block",        standard: "C++98" }],
    "#if": [{ completion: "ifdef",   detail: "check whether a macro is defined",             standard: "C++98" }],
    "#ifn":[{ completion: "ifndef",  detail: "check whether a macro is not defined",         standard: "C++98" }],
    "#el": [{ completion: "elif",    detail: "alternative conditional preprocessing branch", standard: "C++98" }],
    "#els":[{ completion: "else",    detail: "fallback conditional preprocessing branch",    standard: "C++98" }],
    "#en": [{ completion: "endif",   detail: "end conditional preprocessing block",          standard: "C++98" }],

    // C++23
    "#eli":  [{ completion: "elifdef",  detail: "conditional branch if macro is defined",     standard: "C++23" }],
    "#elif": [{ completion: "elifndef", detail: "conditional branch if macro is not defined", standard: "C++23" }],
    "#wa":   [{ completion: "warning",  detail: "emit a compilation warning message",         standard: "C++23" }],

    // C++26
    "#em": [{ completion: "embed", detail: "embed binary resources into the program", standard: "C++26" }],
};

// Query
export function findCppPreprocessorSuggestions(
    wordPrefix: string,
    activeStd: cppStandard
): cppPreprocessorSuggestion[] {

    let bestMatch: cppPreprocessorSuggestion[] = [];

    for (let len = 3; len <= wordPrefix.length; len++) {
        const key = wordPrefix.slice(0, len);
        if (cppPreprocessor[key]) {
            bestMatch = cppPreprocessor[key].filter(s => isAllowed(s, activeStd));
        }
    }

    return bestMatch;
}