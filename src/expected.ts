// expected.ts

import { baseSuggestion, cppStandard, isAllowed } from './types';

// Type
export interface expectedSuggestion extends baseSuggestion {}

// Expected dictionary
const expected: Record<string, expectedSuggestion[]> = {

    // C++23
    "std::bad": [{ completion: "bad_expected_access", detail: "exception indicating checked access to an expected that contains an unexpected value", standard: "C++23" }],
    "std::exp": [{ completion: "expected",            detail: "a wrapper that contains either an expected or error value",                            standard: "C++23" }],
    "std::une": [{ completion: "unexpected",          detail: "represented as an unexpected value",                                                   standard: "C++23" },
                 { completion: "unexpect_t",          detail: "in-place construction tag for unexpected value in expected",                           standard: "C++23" }],

};

// Query
export function findExpectedSuggestions(
    wordPrefix: string,
    activeStd: cppStandard
): expectedSuggestion[] {

    let bestMatch: expectedSuggestion[] = [];

    for (let len = 3; len <= wordPrefix.length; len++) {
        const key = wordPrefix.slice(0, len);
        if (expected[key]) {
            bestMatch = expected[key].filter(s => isAllowed(s, activeStd));
        }
    }

    return bestMatch;
}