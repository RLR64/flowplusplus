// concepts.ts

import { baseSuggestion, cppStandard, isAllowed } from './types';

// Type
export interface conceptSuggestion extends baseSuggestion {}

// Concepts dictionary
const concepts: Record<string, conceptSuggestion[]> = {

    // Concepts
    "std::sam": [{ completion: "same_as<",                     detail: "two types are exactly the same",                  standard: "C++20" }],
    "std::der": [{ completion: "derived_from<",                detail: "type is derived from a base class",               standard: "C++20" }],
    "std::con": [{ completion: "convertible_to<",              detail: "type can be implicitly and explicitly converted", standard: "C++20" },
                 { completion: "constructible_from<",          detail: "type can be constructed from arguments",          standard: "C++20" }],
    "std::des": [{ completion: "destructible<",                detail: "type can be destroyed",                           standard: "C++20" }],
    "std::mov": [{ completion: "move_constructible<",          detail: "type can be move constructed",                    standard: "C++20" },
                 { completion: "movable<",                     detail: "type supports move operations",                   standard: "C++20" }],
    "std::cop": [{ completion: "copy_constructible<",          detail: "type can be copy constructed",                    standard: "C++20" },
                 { completion: "copyable<",                    detail: "type supports copy operations",                   standard: "C++20" }],
    "std::ass": [{ completion: "assignable_from<",             detail: "type can be assigned from another type",          standard: "C++20" }],
    "std::swa": [{ completion: "swappable<",                   detail: "type can be swapped",                             standard: "C++20" },
                 { completion: "swappable_with<",              detail: "two types can be swapped",                        standard: "C++20" }],
    "std::eq":  [{ completion: "equality_comparable<",         detail: "type supports == and !=",                         standard: "C++20" },
                 { completion: "equality_comparable_with<",    detail: "two types can be compared for equality",          standard: "C++20" }],
    "std::tot": [{ completion: "totally_ordered<",             detail: "type supports full ordering comparisons",         standard: "C++20" },
                 { completion: "totally_ordered_with<",        detail: "two types support full ordering comparisons",     standard: "C++20" }],
    "std::reg": [{ completion: "regular<",                     detail: "type behaves like a regular value",               standard: "C++20" }],
    "std::sem": [{ completion: "semiregular<",                 detail: "type is copyable and default constructible",      standard: "C++20" }],
    "std::inv": [{ completion: "invocable<",                   detail: "callable object can be invoked",                  standard: "C++20" },
                 { completion: "invoke_result_t<",             detail: "result type of invoking a callable",              standard: "C++20" }],
    "std::pre": [{ completion: "predicate<",                   detail: "callable returns a boolean-testable result",      standard: "C++20" }],
    "std::rel": [{ completion: "relation<",                    detail: "callable defines a relation between types",       standard: "C++20" }],
    "std::str": [{ completion: "strict_weak_order<",           detail: "callable defines a strict weak ordering",         standard: "C++20" }],
    "std::com": [{ completion: "common_reference_with<",       detail: "two types share a common reference type",         standard: "C++20" },
                 { completion: "common_with<",                 detail: "two types share a common type",                   standard: "C++20" },
                 { completion: "comparison_common_type_with<", detail: "comparison helper concept",                       standard: "C++20" }],
    "std::int": [{ completion: "integral<",                    detail: "integral type",                                   standard: "C++20" }],
    "std::sig": [{ completion: "signed_integral<",             detail: "signed integral type",                            standard: "C++20" }],
    "std::uns": [{ completion: "unsigned_integral<",           detail: "unsigned integral type",                          standard: "C++20" }],
    "std::flo": [{ completion: "floating_point<",              detail: "floating-point type",                             standard: "C++20" }],
};

// Query
export function findConceptSuggestions(
    wordPrefix: string,
    activeStd: cppStandard
): conceptSuggestion[] {

    let bestMatch: conceptSuggestion[] = [];

    for (let len = 3; len <= wordPrefix.length; len++) {
        const key = wordPrefix.slice(0, len);
        if (concepts[key]) {
            bestMatch = concepts[key].filter(s => isAllowed(s, activeStd));
        }
    }

    return bestMatch;
}