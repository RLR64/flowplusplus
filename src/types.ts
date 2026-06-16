// types.ts

// C++ standard
export type cppStandard =
    | "C++98"
    | "C++03"
    | "C++11"
    | "C++14"
    | "C++17"
    | "C++20"
    | "C++23"
    | "C++26";

export const stdOrderCpp: cppStandard[] = [
    "C++98",
    "C++03",
    "C++11",
    "C++14",
    "C++17",
    "C++20",
    "C++23",
    "C++26",
];

// C standard
export type cStandard =
    | "C89"
    | "C95"
    | "C99"
    | "C11"
    | "C17"
    | "C23";

export const stdOrderC: cStandard[] = [
    "C89",
    "C95",
    "C99",
    "C11",
    "C17",
    "C23",
];

// Union
export type languageStandard = cppStandard | cStandard;

// Base suggestion interface
// All suggestion types extend this
export interface baseSuggestion {
    completion: string;
    detail:     string;
    standard:   languageStandard;
}

// Guard
// Picks the correct order array based on whether the active standard is C or C++
export function isAllowed(s: baseSuggestion, activeStd: languageStandard): boolean {
    if (activeStd.startsWith('C++')) {
        const order = stdOrderCpp as readonly string[];
        return order.indexOf(s.standard) <= order.indexOf(activeStd);
    } else {
        const order = stdOrderC as readonly string[];
        return order.indexOf(s.standard) <= order.indexOf(activeStd);
    }
}