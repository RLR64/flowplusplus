// variant.ts

import { baseSuggestion, cppStandard, isAllowed } from './types';

// Type
export interface variantSuggestion extends baseSuggestion {}

// Variant dictionary
const variant: Record<string, variantSuggestion[]> = {

    // Non-member functions
    "std::mak": [{ completion: "make_optional", detail: "creates an optional object", standard: "C++17" }],

    // Helper classes
    "std::bad": [{ completion: "bad_optional_access", detail: "exception indicating checked access to an optional that doesn't contain a value", standard: "C++17" }],
    "std::nul": [{ completion: "nullopt_t",           detail: "indicator of an std::optional that does not contain a value",                     standard: "C++17" }],

    // Helpers
    "std::null": [{ completion: "nullopt", detail: "an object of type nullopt_t", standard: "C++17" }],

    "std::in_": [{ completion: "in_place",         detail: "in-place construction tag", standard: "C++17"},
                 { completion: "in_place_type",    detail: "in-place construction tag", standard: "C++17"},
                 { completion: "in_place_index",   detail: "in-place construction tag", standard: "C++17"},
                 { completion: "in_place_t",       detail: "in-place construction tag", standard: "C++17"},
                 { completion: "in_place_type_t",  detail: "in-place construction tag", standard: "C++17"},
                 { completion: "in_place_index_t", detail: "in-place construction tag", standard: "C++17"}],

    // Non-member functions
    "std::get": [{ completion: "get_if",            detail: "obtains a pointer to the value of a pointed-to variant given the index or the type (if unique), returns null on error", standard: "C++17" }],
    "std::hol": [{ completion: "holds_alternative", detail: "checks if a variant currently holds a given type",                                                                      standard: "C++17" }],
    "std::vis": [{ completion: "visit",             detail: "calls the provided functor with the arguments held by one or more variants",                                            standard: "C++17" }],

    // Helper classes
    "std::bad_": [{ completion: "bad_variant_access",    detail: "exception thrown on invalid accesses to the value of a variant",                                    standard: "C++17" }],
    "std::mon":  [{ completion: "monostate",             detail: "placeholder type for use as the first alternative in a variant of non-default-constructible types", standard: "C++17" }],
    "std::var":  [{ completion: "variant_size_v",        detail: "obtains the size of the variant's list of alternatives at compile time",                            standard: "C++17" },
                  { completion: "variant_alternative_t", detail: "obtains the type of the alternative specified by its index, at compile time",                       standard: "C++17" }],

    // Helper objects
    "std::vari": [{ completion: "variant_npos", detail: "index of the variant in the invalid state", standard: "C++17" }],

};

// Query
export function findVariantSuggestions(
    wordPrefix: string,
    activeStd: cppStandard
): variantSuggestion[] {

    let bestMatch: variantSuggestion[] = [];

    for (let len = 3; len <= wordPrefix.length; len++) {
        const key = wordPrefix.slice(0, len);
        if (variant[key]) {
            bestMatch = variant[key].filter(s => isAllowed(s, activeStd));
        }
    }

    return bestMatch;
}