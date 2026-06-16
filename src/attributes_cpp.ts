// attributes_cpp.ts

import { baseSuggestion, cppStandard, isAllowed } from './types';

// Type
export interface attributeSuggestion extends baseSuggestion {}

// C++ Attributes dictionary
const cpp_attribute: Record<string, attributeSuggestion[]> = {

    // C++11
    "[[no": [{ completion: "[[noreturn]]", detail: "indicates that the function does not return", standard: "C++11" }],

    // C++14
    "[[de": [{ completion: "[[deprecated]]",   detail: "indicates that the use of the name or entity declared with this attribute is allowed",                                  standard: "C++14" },
             { completion: "[[deprecated()]]", detail: "indicates that the use of the name or entity declared with this attribute is allowed, but discouraged for some reason", standard: "C++14" }],

    // C++17
    "[[fa": [{ completion: "[[fallthrough]]",  detail: "indicates that the fall through from the previous case label is intentional and should not be diagnosed by a compiler that warns on fall-through", standard: "C++17" }],
    "[[ma": [{ completion: "[[maybe_unused]]", detail: "suppresses compiler warnings on unused entities, if any",                                                                                          standard: "C++17" }],
    "[[nod": [{ completion: "[[nodiscard]]",   detail: "encourages the compiler to issue a warning if the return value is discarded",                                                                      standard: "C++17" }],

    // C++20
    "[[nodi": [{ completion: "[[nodiscard()]]",      detail: "encourages the compiler to issue a warning if the return value is discarded with message",                                                                       standard: "C++20" }],
    "[[li": [{ completion: "[[likely]]",             detail: "indicates that the compiler should optimize for the case where a path of execution through a statement is more or less likely than any other path of execution", standard: "C++20" }],
    "[[ul": [{ completion: "[[unlikely]]",           detail: "indicates that the compiler should optimize for the case where a path of execution through a statement is more or less likely than any other path of execution", standard: "C++20" }],
    "[[no_": [{ completion: "[[no_unique_address]]", detail: "indicates that a non-static data member need not have an address distinct from all other non-static data members of its class",                                  standard: "C++20" }],
    
    // C++23
    "[[as": [{ completion: "[[assume()]]", detail: "specifies that the expression will always evaluate to true at a given point", standard: "C++23" }],

    // C++26
    "[[ind": [{ completion: "[[indeterminate]]", detail: "specifies that an object has an indeterminate value if it is not initialized", standard: "C++26" }],
};

// Query
export function findAttributeSuggestions(
    wordPrefix: string,
    activeStd: cppStandard
): attributeSuggestion[] {

    let bestMatch: attributeSuggestion[] = [];

    for (let len = 3; len <= wordPrefix.length; len++) {
        const key = wordPrefix.slice(0, len);
        if (cpp_attribute[key]) {
            bestMatch = cpp_attribute[key].filter(s => isAllowed(s, activeStd));
        }
    }

    return bestMatch;
}