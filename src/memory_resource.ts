// memory_resource.ts

import { baseSuggestion, cppStandard, isAllowed } from './types';

// Type
export interface memoryResourceSuggestion extends baseSuggestion {}

// Memory Resource Dictionary
const memory_resource: Record<string, memoryResourceSuggestion[]> = {

    // Classes
    "std::pmr::mem": [{ completion: "memory_resource",              detail: "an abstract interface for classes that encapsulate memory resources",                                                standard: "C++17" }],
    "std::pmr::mon": [{ completion: "monotonic_buffer_resource",    detail: "a special-purpose std::pmr::memory_resource that releases the allocated memory only when the resource is destroyed", standard: "C++17" }],
    "std::pmr::pol": [{ completion: "polymorphic_allocator",        detail: "an allocator that supports run-time polymorphism based on the std::pmr::memory_resource it is constructed with",     standard: "C++17" }],
    "std::pmr::poo": [{ completion: "pool_options",                 detail: "a set of constructor options for pool resources",                                                                    standard: "C++17" }],
    "std::pmr::syn": [{ completion: "synchronized_pool_resource",   detail: "a thread-safe std::pmr::memory_resource for managing allocations in pools of different block sizes",                 standard: "C++17" }],
    "std::pmr::uns": [{ completion: "unsynchronized_pool_resource", detail: "a thread-unsafe std::pmr::memory_resource for managing allocations in pools of different block sizes",               standard: "C++17" }],

    // Functions
    "std::pmr::get": [{ completion: "get_default_resource", detail: "gets the default std::pmr::memory_resource",                                                                                                      standard: "C++17" }],
    "std::pmr::new": [{ completion: "new_delete_resource",  detail: "returns a static program-wide std::pmr::memory_resource that uses the global operator new and operator delete to allocate and deallocate memory", standard: "C++17" }],
    "std::pmr::nul": [{ completion: "null_memory_resource", detail: "returns a static std::pmr::memory_resource that performs no allocation",                                                                          standard: "C++17" }],
    "std::pmr::set": [{ completion: "set_default_resource", detail: "sets the default std::pmr::memory_resource",                                                                                                      standard: "C++17" }],
};

// Query
export function findCppMemorySuggestions(
    wordPrefix: string,
    activeStd: cppStandard
): memoryResourceSuggestion[] {

    let bestMatch: memoryResourceSuggestion[] = [];

    for (let len = 3; len <= wordPrefix.length; len++) {
        const key = wordPrefix.slice(0, len);
        if (memory_resource[key]) {
            bestMatch = memory_resource[key].filter(s => isAllowed(s, activeStd));
        }
    }

    return bestMatch;
}