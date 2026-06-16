// stop_token.ts

import { baseSuggestion, cppStandard, isAllowed } from './types';

// Type
export interface stopTokenSuggestion extends baseSuggestion {}

// Stop Token dictionary
const stoptoken: Record<string, stopTokenSuggestion[]> = {

    // Classes
    "std::inp": [{ completion: "inplace_stop_token",    detail: "a stop token that references stop state of its associated std::inplace_stop_source object", standard: "C++26" },
                 { completion: "inplace_stop_source",   detail: "a stoppable-source that is the sole owner of the stop state",                               standard: "C++26" },
                 { completion: "inplace_stop_callback", detail: "a stop callback for std::inplace_stop_token",                                               standard: "C++26" }],
    "std::nev": [{ completion: "never_stop_token",      detail: "provides a stop token interface that a stop is never possible nor requested",               standard: "C++26" }],
    "std::sto": [{ completion: "stop_token",            detail: "an interface for querying if a std::jthread cancellation request has been made",            standard: "C++20" },
                 { completion: "stop_source",           detail: "class representing a request to stop one or more std::jthreads",                            standard: "C++20" },
                 { completion: "stop_callback",         detail: "an interface for registering callbacks on std::jthread cancellation",                       standard: "C++20" },
                 { completion: "stop_callback_for_t",   detail: "obtains the callback type for a given stop token type",                                     standard: "C++26" }],
    
    // Concepts
    "std::stop": [{ completion: "stoppable_token",   detail: "specifies the basic interface of stop tokens which allows queries for stop requests and whether the stop request is possible", standard: "C++26" }],
    "std::uns":  [{ completion: "unstoppable_token", detail: "specifies a stop token that does not allow stopping",                                                                          standard: "C++26" }],
    
    // Tags
    "std::nos": [{ completion: "nostopstate",   detail: "a tag used for stop_source to indicate no associated stop-state upon construction", standard: "C++20" },
                 { completion: "nostopstate_t", detail: "a tag used for stop_source to indicate no associated stop-state upon construction", standard: "C++20" }],
};

// Query
export function findStopTokenSuggestions(
    wordPrefix: string,
    activeStd: cppStandard
): stopTokenSuggestion[] {

    let bestMatch: stopTokenSuggestion[] = [];

    for (let len = 3; len <= wordPrefix.length; len++) {
        const key = wordPrefix.slice(0, len);
        if (stoptoken[key]) {
            bestMatch = stoptoken[key].filter(s => isAllowed(s, activeStd));
        }
    }

    return bestMatch;
}