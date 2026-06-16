// memory.ts

import { baseSuggestion, cppStandard, isAllowed } from './types';

// Type
export interface memorySuggestion extends baseSuggestion {}

// Memory Dictionary
const memory: Record<string, memorySuggestion[]> = {

    // Pointer categories
    "std::sha": [{ completion: "shared_ptr", detail: "smart pointer with shared object ownership semantics",   standard: "C++11" }],
    "std::uni": [{ completion: "unique_ptr", detail: "smart pointer with unique object ownership semantics",   standard: "C++11" }],
    "std::wea": [{ completion: "weak_ptr",   detail: "weak reference to an object managed by std::shared_ptr", standard: "C++11" }],

    // Helper classes
    "std::bad": [{ completion: "bad_weak_ptr",            detail: "exception thrown when accessing a weak_ptr which refers to already destroyed object", standard: "C++11" }],
    "std::def": [{ completion: "default_delete",          detail: "default deleter for std::unique_ptr",                                                 standard: "C++11" }],
    "std::ena": [{ completion: "enable_shared_from_this", detail: "allows an object to create a shared_ptr referring to itself",                         standard: "C++11" }],
    "std::own": [{ completion: "owner_equal",             detail: "provides mixed-type owner-based equal comparisons of shared and weak pointers",       standard: "C++26" },
                 { completion: "owner_hash",              detail: "provides owner-based hashing for shared and weak pointers",                           standard: "C++26" },
                 { completion: "owner_less",              detail: "provides mixed-type owner-based ordering of shared and weak pointers",                standard: "C++11" }],

    // Smart pointer adaptors (since C++23)
    "std::ino": [{ completion: "inout_ptr",   detail: "creates an inout_ptr_t with an associated smart pointer and resetting arguments",                                                  standard: "C++23" },
                 { completion: "inout_ptr_t", detail: "interoperates with foreign pointer setters, obtains the initial pointer value from a smart pointer, and resets it on destruction", standard: "C++23" }],
    "std::out": [{ completion: "out_ptr",     detail: "creates an out_ptr_t with an associated smart pointer and resetting arguments",                                                    standard: "C++23" },
                 { completion: "out_ptr_t",   detail: "interoperates with foreign pointer setters and resets a smart pointer on destruction",                                             standard: "C++23" }],

    // Allocators
    "std::all":  [{ completion: "allocation_result",                       detail: "records the address and the actual size of storage allocated by allocate_at_least",                        standard: "C++23" },
                  { completion: "allocator",                               detail: "the default allocator",                                                                                    standard: "C++11" },
                  { completion: "allocator_arg",                           detail: "a tag used to select allocator-aware constructors",                                                        standard: "C++11" },
                  { completion: "allocator_arg_t",                         detail: "a tag used to select allocator-aware constructors",                                                        standard: "C++11" },
                  { completion: "allocator_traits",                        detail: "provides information about allocator types",                                                               standard: "C++11" }],
    "std::mak":  [{ completion: "make_obj_using_allocator",                detail: "creates an object of the given type by means of uses-allocator construction",                              standard: "C++20" }],
    "std::sco":  [{ completion: "scoped_allocator_adaptor",                detail: "implements multi-level allocator for multi-level containers",                                              standard: "C++11" }],
    "std::unin": [{ completion: "uninitialized_construct_using_allocator", detail: "creates an object of the given type at specified memory location by means of uses-allocator construction", standard: "C++20" }],
    "std::use":  [{ completion: "uses_allocator",                          detail: "checks if the specified type supports uses-allocator construction",                                        standard: "C++11" },
                  { completion: "uses_allocator_construction_args",        detail: "prepares the argument list matching the flavor of uses-allocator construction required by the given type", standard: "C++20" }],

    // Specialized <memory> algorithms
    // Explicit lifetime management (since C++23)
    "std::sta": [{ completion: "start_lifetime_as",       detail: "implicitly creates objects in given storage with the object representation reused", standard: "C++23" },
                 { completion: "start_lifetime_as_array", detail: "implicitly creates objects in given storage with the object representation reused", standard: "C++23" }],

    // Types for composite class design (since C++26)
    "std::ind": [{ completion: "indirect",    detail: "a wrapper containing dynamically-allocated object with value-like semantics",             standard: "C++26" }],
    "std::pol": [{ completion: "polymorphic", detail: "a polymorphic wrapper containing dynamically-allocated object with value-like semantics", standard: "C++26" }],

    // Miscellaneous
    "std::add": [{ completion: "addressof",               detail: "obtains actual address of an object, even if the & operator is overloaded",                   standard: "C++11" }],
    "std::ali": [{ completion: "align",                   detail: "aligns a pointer in a buffer",                                                                standard: "C++11" }],
    "std::ass": [{ completion: "assume_aligned",          detail: "informs the compiler that a pointer is aligned",                                              standard: "C++20" }],
    "std::is_": [{ completion: "is_sufficiently_aligned", detail: "checks whether the pointer points to an object whose alignment has at least the given value", standard: "C++26" }],
    "std::poi": [{ completion: "pointer_traits",          detail: "provides information about pointer-like types",                                               standard: "C++11" }],
    "std::to_": [{ completion: "to_address",              detail: "obtains a raw pointer from a pointer-like type",                                              standard: "C++20" }],
};

// Query
export function findMemorySuggestions(
    wordPrefix: string,
    activeStd: cppStandard
): memorySuggestion[] {

    let bestMatch: memorySuggestion[] = [];

    for (let len = 3; len <= wordPrefix.length; len++) {
        const key = wordPrefix.slice(0, len);
        if (memory[key]) {
            bestMatch = memory[key].filter(s => isAllowed(s, activeStd));
        }
    }

    return bestMatch;
}