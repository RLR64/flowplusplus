// atomic.ts

import { baseSuggestion, cppStandard, isAllowed } from './types';

// Type
export interface atomicSuggestion extends baseSuggestion {}

// Atomic dictionary
const atomic: Record<string, atomicSuggestion[]> = {

    // Classes
    // C++11
    "std::ato":      [{ completion: "atomic",      detail: "atomic class template and specializations for bool, integral, floating-point(since C++20), and pointer types", standard: "C++11" }],
    "std::atomic_":  [{ completion: "atomic_flag", detail: "the lock-free boolean atomic type",                                                                            standard: "C++11" }],
    "std::atomic_b": [{ completion: "atomic_bool", detail: "std::atomic<bool>",                                                                                            standard: "C++11" }],

    "std::atomic_c": [{ completion: "atomic_char",     detail: "std::atomic<char>",     standard: "C++11" },
                      { completion: "atomic_char16_t", detail: "std::atomic<char16_t>", standard: "C++11" },
                      { completion: "atomic_char32_t", detail: "std::atomic<char32_t>", standard: "C++11" }],
 
    "std::atomic_i": [ { completion: "atomic_int",           detail: "std::atomic<int>",                standard: "C++11" },
                       { completion: "atomic_int8_t",        detail: "std::atomic<std::int8_t>",        standard: "C++11" },
                       { completion: "atomic_int32_t",       detail: "std::atomic<std::int32_t>",       standard: "C++11" },
                       { completion: "atomic_int16_t",       detail: "std::atomic<std::int16_t>",       standard: "C++11" },
                       { completion: "atomic_int_fast8_t",   detail: "std::atomic<std::int_fast8_t>",   standard: "C++11" },
                       { completion: "atomic_int64_t",       detail: "std::atomic<std::int64_t>",       standard: "C++11" },
                       { completion: "atomic_int_fast32_t",  detail: "std::atomic<std::int_fast32_t>",  standard: "C++11" },
                       { completion: "atomic_int_fast16_t",  detail: "std::atomic<std::int_fast16_t>",  standard: "C++11" },
                       { completion: "atomic_int_least8_t",  detail: "std::atomic<std::int_least8_t>",  standard: "C++11" },
                       { completion: "atomic_int_fast64_t",  detail: "std::atomic<std::int_fast64_t>",  standard: "C++11" },
                       { completion: "atomic_int_least16_t", detail: "std::atomic<std::int_least16_t>", standard: "C++11" },
                       { completion: "atomic_int_least32_t", detail: "std::atomic<std::int_least32_t>", standard: "C++11" },
                       { completion: "atomic_int_least64_t", detail: "std::atomic<std::int_least64_t>", standard: "C++11" },
                       { completion: "atomic_intmax_t",      detail: "std::atomic<std::intmax_t>",      standard: "C++11" },
                       { completion: "atomic_intptr_t",      detail: "std::atomic<std::intptr_t>",      standard: "C++11" }],

    "std::atomic_l": [ { completion: "atomic_llong", detail: "std::atomic<long long>", standard: "C++11" },
                       { completion: "atomic_long",  detail: "std::atomic<long>",      standard: "C++11" }],

    "std::memory_": [{ completion: "memory_order", detail: "defines memory ordering constraints for the given atomic operation", standard: "C++11" }],

    "std::atomic_p": [{ completion: "atomic_ptrdiff_t", detail: "std::atomic<std::ptrdiff_t>", standard: "C++11" }],

    "std::atomic_s": [{ completion: "atomic_schar",  detail: "std::atomic<signed char>", standard: "C++11" },
                      { completion: "atomic_short",  detail: "std::atomic<short>",       standard: "C++11" },
                      { completion: "atomic_size_t", detail: "std::atomic<std::size_t>", standard: "C++11" }],

    "std::atomic_u": [{ completion: "atomic_uchar",          detail: "std::atomic<unsigned char>",       standard: "C++11" },
                      { completion: "atomic_uint",           detail: "std::atomic<unsigned int>",        standard: "C++11" },
                      { completion: "atomic_uint8_t",        detail: "std::atomic<std::uint8_t>",        standard: "C++11" },
                      { completion: "atomic_uint16_t",       detail: "std::atomic<std::uint16_t>",       standard: "C++11" },
                      { completion: "atomic_uint32_t",       detail: "std::atomic<std::uint32_t>",       standard: "C++11" },
                      { completion: "atomic_uint64_t",       detail: "std::atomic<std::uint64_t>",       standard: "C++11" },
                      { completion: "atomic_uint_fast8_t",   detail: "std::atomic<std::uint_fast8_t>",   standard: "C++11" },
                      { completion: "atomic_uint_fast16_t",  detail: "std::atomic<std::uint_fast16_t>",  standard: "C++11" },
                      { completion: "atomic_uint_fast32_t",  detail: "std::atomic<std::uint_fast32_t>",  standard: "C++11" },
                      { completion: "atomic_uint_fast64_t",  detail: "std::atomic<std::uint_fast64_t>",  standard: "C++11" },
                      { completion: "atomic_uint_least8_t",  detail: "std::atomic<std::uint_least8_t>",  standard: "C++11" },
                      { completion: "atomic_uint_least16_t", detail: "std::atomic<std::uint_least16_t>", standard: "C++11" },
                      { completion: "atomic_uint_least32_t", detail: "std::atomic<std::uint_least32_t>", standard: "C++11" },
                      { completion: "atomic_uint_least64_t", detail: "std::atomic<std::uint_least64_t>", standard: "C++11" },
                      { completion: "atomic_uintmax_t",      detail: "std::atomic<std::uintmax_t>",      standard: "C++11" },
                      { completion: "atomic_uintptr_t",      detail: "std::atomic<std::uintptr_t>",      standard: "C++11" },
                      { completion: "atomic_ullong",         detail: "std::atomic<unsigned long long>",  standard: "C++11" },
                      { completion: "atomic_ulong",          detail: "std::atomic<unsigned long>",       standard: "C++11" },
                      { completion: "atomic_ushort",         detail: "std::atomic<unsigned short>",      standard: "C++11" }],

    "std::atomic_w": [{ completion: "atomic_wchar_t", detail: "std::atomic<wchar_t>", standard: "C++11" }],

    // C++20
    "std::atomic_char8":         [{ completion: "atomic_char8_t",            detail: "std::atomic<char8_t>",                                                                                 standard: "C++20" }],
    "std::atomic_r":             [{ completion: "atomic_ref",                detail: "provides atomic operations on non-atomic objects",                                                     standard: "C++20" }],
    "std::atomic_signed_lock":   [{ completion: "atomic_signed_lock_free",   detail: "a signed integral atomic type that is lock-free and for which waiting/notifying is most efficient",    standard: "C++20" }],
    "std::atomic_unsigned_lock": [{ completion: "atomic_unsigned_lock_free", detail: "an unsigned integral atomic type that is lock-free and for which waiting/notifying is most efficient", standard: "C++20" }],

    // Functions
    // C++11
    "std::atomic_compare_exchange_": [{ completion: "atomic_compare_exchange_strong",          detail: "atomically compares the value of an atomic object with a non-atomic argument and performs atomic exchange if equal or atomic load if not (strong)",                        standard: "C++11" },
                                      { completion: "atomic_compare_exchange_strong_explicit", detail: "atomically compares the value of an atomic object with a non-atomic argument and performs atomic exchange if equal or atomic load if not (strong, explicit memory order)", standard: "C++11" },
                                      { completion: "atomic_compare_exchange_weak",            detail: "atomically compares the value of an atomic object with a non-atomic argument and performs atomic exchange if equal or atomic load if not (weak)",                          standard: "C++11" },
                                      { completion: "atomic_compare_exchange_weak_explicit",   detail: "atomically compares the value of an atomic object with a non-atomic argument and performs atomic exchange if equal or atomic load if not (weak, explicit memory order)",   standard: "C++11" }],

    "std::atomic_exchange": [{ completion: "atomic_exchange",          detail: "atomically replaces the value of an atomic object with a non-atomic argument and returns the old value",                         standard: "C++11" },
                             { completion: "atomic_exchange_explicit", detail: "atomically replaces the value of an atomic object with a non-atomic argument and returns the old value (explicit memory order)", standard: "C++11" }],

    "std::atomic_fetch_a": [{ completion: "atomic_fetch_add",          detail: "adds a non-atomic value to an atomic object and obtains the previous value of the atomic",                         standard: "C++11" },
                            { completion: "atomic_fetch_add_explicit", detail: "adds a non-atomic value to an atomic object and obtains the previous value of the atomic (explicit memory order)", standard: "C++11" }],

    "std::atomic_fetch_an": [{ completion: "atomic_fetch_and",          detail: "replaces the atomic object with the result of bitwise AND with a non-atomic argument and obtains the previous value of the atomic",                         standard: "C++11" },
                             { completion: "atomic_fetch_and_explicit", detail: "replaces the atomic object with the result of bitwise AND with a non-atomic argument and obtains the previous value of the atomic (explicit memory order)", standard: "C++11" }],

    "std::atomic_fetch_o": [{ completion: "atomic_fetch_or",          detail: "replaces the atomic object with the result of bitwise OR with a non-atomic argument and obtains the previous value of the atomic",                         standard: "C++11" },
                            { completion: "atomic_fetch_or_explicit", detail: "replaces the atomic object with the result of bitwise OR with a non-atomic argument and obtains the previous value of the atomic (explicit memory order)", standard: "C++11" }],

    "std::atomic_fetch_s": [{ completion: "atomic_fetch_sub",          detail: "subtracts a non-atomic value from an atomic object and obtains the previous value of the atomic",                         standard: "C++11" },
                            { completion: "atomic_fetch_sub_explicit", detail: "subtracts a non-atomic value from an atomic object and obtains the previous value of the atomic (explicit memory order)", standard: "C++11" }],

    "std::atomic_fetch_x": [{ completion: "atomic_fetch_xor",          detail: "replaces the atomic object with the result of bitwise XOR with a non-atomic argument and obtains the previous value of the atomic",                         standard: "C++11" },
                            { completion: "atomic_fetch_xor_explicit", detail: "replaces the atomic object with the result of bitwise XOR with a non-atomic argument and obtains the previous value of the atomic (explicit memory order)", standard: "C++11" }],

    "std::atomic_is_lock_free": [{ completion: "atomic_is_lock_free", detail: "checks if the atomic type's operations are lock-free", standard: "C++11" }],

    "std::atomic_load": [{ completion: "atomic_load",          detail: "atomically obtains the value stored in an atomic object",                         standard: "C++11" },
                         { completion: "atomic_load_explicit", detail: "atomically obtains the value stored in an atomic object (explicit memory order)", standard: "C++11" }],

    "std::atomic_signal_fence": [{ completion: "atomic_signal_fence", detail: "fence between a thread and a signal handler executed in the same thread", standard: "C++11" }],

    "std::atomic_store": [{ completion: "atomic_store",          detail: "atomically replaces the value of an atomic object with a non-atomic argument",                         standard: "C++11" },
                          { completion: "atomic_store_explicit", detail: "atomically replaces the value of an atomic object with a non-atomic argument (explicit memory order)", standard: "C++11" }],

    "std::atomic_thread_fence": [{ completion: "atomic_thread_fence", detail: "generic memory order-dependent fence synchronization primitive", standard: "C++11" }],

    "std::atomic_flag_c": [{ completion: "atomic_flag_clear",          detail: "atomically sets the value of the flag to false",                         standard: "C++11" },
                           { completion: "atomic_flag_clear_explicit", detail: "atomically sets the value of the flag to false (explicit memory order)", standard: "C++11" }],

    "std::atomic_flag_t": [{ completion: "atomic_flag_test",                  detail: "atomically returns the value of the flag",                                                standard: "C++20" },
                           { completion: "atomic_flag_test_explicit",         detail: "atomically returns the value of the flag (explicit memory order)",                        standard: "C++20" },
                           { completion: "atomic_flag_test_and_set",          detail: "atomically sets the flag to true and returns its previous value",                         standard: "C++11" },
                           { completion: "atomic_flag_test_and_set_explicit", detail: "atomically sets the flag to true and returns its previous value (explicit memory order)", standard: "C++11" }],

    // C++20
    "std::atomic_notify_a": [{ completion: "atomic_notify_all", detail: "notifies all threads blocked in atomic_wait", standard: "C++20" }],

    "std::atomic_notify_o": [{ completion: "atomic_notify_one", detail: "notifies a thread blocked in atomic_wait", standard: "C++20" }],

    "std::atomic_wait": [{ completion: "atomic_wait",          detail: "blocks the thread until notified and the atomic value changes",                         standard: "C++20" },
                         { completion: "atomic_wait_explicit", detail: "blocks the thread until notified and the atomic value changes (explicit memory order)", standard: "C++20" }],

    "std::atomic_flag_n": [{ completion: "atomic_flag_notify_all", detail: "notifies all threads blocked in atomic_flag_wait", standard: "C++20" },
                           { completion: "atomic_flag_notify_one", detail: "notifies a thread blocked in atomic_flag_wait",    standard: "C++20" }],

    "std::atomic_flag_w": [{ completion: "atomic_flag_wait",          detail: "blocks the thread until notified and the flag changes",                         standard: "C++20" },
                           { completion: "atomic_flag_wait_explicit", detail: "blocks the thread until notified and the flag changes (explicit memory order)", standard: "C++20" }],

    // C++26
    "std::atomic_fetch_ma": [{ completion: "atomic_fetch_max",          detail: "replaces the atomic object with the result of std::max with a non-atomic argument and obtains the previous value of the atomic",                         standard: "C++26" },
                             { completion: "atomic_fetch_max_explicit", detail: "replaces the atomic object with the result of std::max with a non-atomic argument and obtains the previous value of the atomic (explicit memory order)", standard: "C++26" }],

    "std::atomic_fetch_mi": [{ completion: "atomic_fetch_min",          detail: "replaces the atomic object with the result of std::min with a non-atomic argument and obtains the previous value of the atomic",                         standard: "C++26" },
                             { completion: "atomic_fetch_min_explicit", detail: "replaces the atomic object with the result of std::min with a non-atomic argument and obtains the previous value of the atomic (explicit memory order)", standard: "C++26" }],
};

// Query
export function findAtomicSuggestions(
    wordPrefix: string,
    activeStd: cppStandard
): atomicSuggestion[] {

    let bestMatch: atomicSuggestion[] = [];

    for (let len = 3; len <= wordPrefix.length; len++) {
        const key = wordPrefix.slice(0, len);
        if (atomic[key]) {
            bestMatch = atomic[key].filter(s => isAllowed(s, activeStd));
        }
    }

    return bestMatch;
}