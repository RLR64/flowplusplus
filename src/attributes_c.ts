// attributes_c.ts

import { baseSuggestion, cStandard, isAllowed } from './types';

// Type
export interface attributeSuggestion extends baseSuggestion {}

// C Attributes dictionary
const c_attribute: Record<string, attributeSuggestion[]> = {

    // C23
    "[[de": [{ completion: "[[deprecated]]",   detail: "indicates that the use of the name or entity declared with this attribute is allowed, but discouraged for some reason", standard: "C23" },
             { completion: "[[deprecated()]]", detail: "indicates that the use of the name or entity declared with this attribute is allowed, but discouraged for some reason", standard: "C23" }],

    "[[fa": [{ completion: "[[fallthrough]]", detail: "indicates that the fall through from the previous case label is intentional and should not be diagnosed by a compiler that warns on fall-through", standard: "C23" }],

    "[[ma": [{ completion: "[[maybe_unused]]", detail: "suppresses compiler warnings on unused entities, if any", standard: "C23" }],

    "[[no": [{ completion: "[[nodiscard]]",   detail: "encourages the compiler to issue a warning if the return value is discarded", standard: "C23" },
             { completion: "[[nodiscard()]]", detail: "encourages the compiler to issue a warning if the return value is discarded", standard: "C23" },
             { completion: "[[noreturn]]",    detail: "indicates that the function does not return",                                 standard: "C23" }],

    "[[re": [{ completion: "[[reproducible]]", detail: "indicates that a function is effectless and idempotent", standard: "C23" }],

    "[[un": [{ completion: "[[unsequenced]]", detail: "indicates that a function is stateless, effectless, idempotent and independent", standard: "C23" }],
};

// Query
export function findCAttributeSuggestions(
    wordPrefix: string,
    activeStd: cStandard
): attributeSuggestion[] {

    let bestMatch: attributeSuggestion[] = [];

    for (let len = 3; len <= wordPrefix.length; len++) {
        const key = wordPrefix.slice(0, len);
        if (c_attribute[key]) {
            bestMatch = c_attribute[key].filter(s => isAllowed(s, activeStd));
        }
    }

    return bestMatch;
}