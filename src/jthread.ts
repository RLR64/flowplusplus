// jthread.ts

import { baseSuggestion, cppStandard, isAllowed } from './types';

// Type
export interface filesystemSuggestion extends baseSuggestion {}

// jthread dictionary
const filesystem: Record<string, filesystemSuggestion[]> = {

    // Observers
    "std::jthread::get": [{ completion: "get_id",               detail: "returns the id of the thread",                                                        standard: "C++20" }],
    "std::jthread::har": [{ completion: "hardware_concurrency", detail: "[static]",                                                                            standard: "C++20" }],
    "std::jthread::joi": [{ completion: "join",                 detail: "waits for the thread to finish its execution",                                        standard: "C++20" },
                          { completion: "joinable",             detail: "checks whether the thread is joinable, i.e. potentially running in parallel context", standard: "C++20" }],
    "std::jthread::nat": [{ completion: "native_handle",        detail: "returns the underlying implementation-defined thread handle",                         standard: "C++20" }],

    // Operations
    "std::jthread::det": [{ completion: "detach", detail: "permits the thread to execute independently from the thread handle", standard: "C++20" }],
    "std::jthread::swa": [{ completion: "swap",   detail: "swaps two jthread objects",                                          standard: "C++20" }],

    // Stop token handling
    "std::jthread::get_": [{ completion: "get_stop_source", detail: "returns a stop_source object associated with the shared stop state of the thread", standard: "C++20" },
                           { completion: "get_stop_token",  detail: "returns a stop_token associated with the shared stop state of the thread",         standard: "C++20" }],
    "std::jthread::req":  [{ completion: "request_stop",    detail: "requests execution stop via the shared stop state of the thread",                  standard: "C++20" }],
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