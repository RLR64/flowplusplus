// optional.ts

import { baseSuggestion, cppStandard, isAllowed } from './types';

// Type
export interface optionalSuggestion extends baseSuggestion {}

// Optional dictionary
const optional: Record<string, optionalSuggestion[]> = {

    // Non-member functions
    "std::mak": [{ completion: "make_optional", detail: "creates an optional object", standard: "C++17" }],

    // Helper classes
    "std::bad": [{ completion: "bad_optional_access", detail: "exception indicating checked access to an optional that doesn't contain a value", standard: "C++17" }],
    "std::nul": [{ completion: "nullopt_t", detail: "indicator of an std::optional that does not contain a value",                               standard: "C++17" }],

    // Helpers
    "std::null": [{ completion: "nullopt", detail: "an object of type nullopt_t", standard: "C++17" }],

    "std::in_": [{ completion: "in_place",         detail: "in-place construction tag", standard: "C++17"},
                 { completion: "in_place_type",    detail: "in-place construction tag", standard: "C++17"},
                 { completion: "in_place_index",   detail: "in-place construction tag", standard: "C++17"},
                 { completion: "in_place_t",       detail: "in-place construction tag", standard: "C++17"},
                 { completion: "in_place_type_t",  detail: "in-place construction tag", standard: "C++17"},
                 { completion: "in_place_index_t", detail: "in-place construction tag", standard: "C++17"}],
};

// Query
export function findOptionalSuggestions(
    wordPrefix: string,
    activeStd: cppStandard
): optionalSuggestion[] {

    let bestMatch: optionalSuggestion[] = [];

    for (let len = 3; len <= wordPrefix.length; len++) {
        const key = wordPrefix.slice(0, len);
        if (optional[key]) {
            bestMatch = optional[key].filter(s => isAllowed(s, activeStd));
        }
    }

    return bestMatch;
}