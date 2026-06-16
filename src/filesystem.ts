// filesystem.ts

import { baseSuggestion, cppStandard, isAllowed } from './types';

// Type
export interface filesystemSuggestion extends baseSuggestion {}

// Filesystem dictionary
const filesystem: Record<string, filesystemSuggestion[]> = {

    // C++17
    "std::bad": [{ completion: "bad_expected_access", detail: "exception indicating checked access to an expected that contains an unexpected value", standard: "C++17" }],
    "std::exp": [{ completion: "expected",            detail: "a wrapper that contains either an expected or error value",                            standard: "C++17" }],
    "std::une": [{ completion: "unexpected",          detail: "represented as an unexpected value",                                                   standard: "C++17" },
                 { completion: "unexpect_t",          detail: "in-place construction tag for unexpected value in expected",                           standard: "C++17" }],

};

// Query
export function findFilesystemSuggestions(
    wordPrefix: string,
    activeStd: cppStandard
): filesystemSuggestion[] {

    let bestMatch: filesystemSuggestion[] = [];

    for (let len = 3; len <= wordPrefix.length; len++) {
        const key = wordPrefix.slice(0, len);
        if (filesystem[key]) {
            bestMatch = filesystem[key].filter(s => isAllowed(s, activeStd));
        }
    }

    return bestMatch;
}