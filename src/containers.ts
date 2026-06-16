// containers.ts

import { baseSuggestion, cppStandard, isAllowed } from './types';

// Type
export interface containersSuggestion extends baseSuggestion {}

// Containers dictionary
const containers: Record<string, containersSuggestion[]> = {

    // Sequence containers
    "std::ar": [{ completion: "array",        detail: "fixed-size array container",         standard: "C++11" }],
    "std::ve": [{ completion: "vector",       detail: "dynamic contiguous array container", standard: "C++98" }],
    "std::de": [{ completion: "deque",        detail: "double-ended queue container",       standard: "C++98" }],
    "std::li": [{ completion: "list",         detail: "doubly-linked list container",       standard: "C++98" }],
    "std::fo": [{ completion: "forward_list", detail: "singly-linked list container",       standard: "C++11" }],

    // Associative containers
    "std::se": [{ completion: "set",      detail: "ordered unique key container",                    standard: "C++98" }],
    "std::ma": [{ completion: "map",      detail: "ordered key-value container",                     standard: "C++98" }],
    "std::mu": [{ completion: "multimap", detail: "ordered key-value container allowing duplicates", standard: "C++98" },
                { completion: "multiset", detail: "ordered container allowing duplicate keys",       standard: "C++98" }],

    // Unordered associative containers
    "std::un":   [{ completion: "unordered_set",      detail: "hash-based unordered unique key container", standard: "C++11" },
                  { completion: "unordered_map",      detail: "hash-based unordered key-value container",  standard: "C++11" },
                  { completion: "unordered_multimap", detail: "hash-based unordered multimap container",   standard: "C++11" },
                  { completion: "unordered_multiset", detail: "hash-based unordered multiset container",   standard: "C++11" }],

    // Container adaptors
    "std::st": [{ completion: "stack",          detail: "LIFO stack adaptor",     standard: "C++98" }],
    "std::qu": [{ completion: "queue",          detail: "FIFO queue adaptor",     standard: "C++98" }],
    "std::pr": [{ completion: "priority_queue", detail: "priority queue adaptor", standard: "C++98" }],

    // Utility containers
    "std::sp":  [{ completion: "span",        detail: "non-owning view over a contiguous sequence",   standard: "C++20" }],
    "std::str": [{ completion: "string",      detail: "dynamic string container",                     standard: "C++98" },
                 { completion: "string_view", detail: "non-owning string view",                       standard: "C++17" }],
    "std::bi":  [{ completion: "bitset",      detail: "fixed-size sequence of bits",                  standard: "C++98" }],
    "std::va":  [{ completion: "valarray",    detail: "array class optimized for numeric operations", standard: "C++98" }],
};

// Query
export function findContainersSuggestions(
    wordPrefix: string,
    activeStd: cppStandard
): containersSuggestion[] {

    let bestMatch: containersSuggestion[] = [];

    for (let len = 3; len <= wordPrefix.length; len++) {
        const key = wordPrefix.slice(0, len);
        if (containers[key]) {
            bestMatch = containers[key].filter(s => isAllowed(s, activeStd));
        }
    }

    return bestMatch;
}