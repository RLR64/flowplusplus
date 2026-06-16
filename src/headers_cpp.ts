// headers_cpp.ts

import { baseSuggestion, cppStandard, isAllowed } from './types';

// Type
export interface cppHeaderSuggestion extends baseSuggestion {
    standard: cppStandard;
}

// C++ Header dictionary
const cppHeaders: Record<string, cppHeaderSuggestion[]> = {

    // C++ only headers
    // C++98
    "#include <al":   [{ completion: "algorithm>",  detail: "sorting, searching, ranges",          standard: "C++98" }],
    "#include <bit":  [{ completion: "bitset>",     detail: "fixed-size bit array",                standard: "C++98" }],
    "#include <co":   [{ completion: "complex>",    detail: "complex number arithmetic",           standard: "C++98" }],
    "#include <de":   [{ completion: "deque>",      detail: "double-ended queue",                  standard: "C++98" }],
    "#include <ex":   [{ completion: "exception>",  detail: "exception base classes",              standard: "C++98" }],
    "#include <fs":   [{ completion: "fstream>",    detail: "file I/O streams",                    standard: "C++98" }],
    "#include <fu":   [{ completion: "functional>", detail: "function objects and std::function",  standard: "C++98" }],
    "#include <io":   [{ completion: "iostream>",   detail: "standard I/O streams",                standard: "C++98" },
                       { completion: "iomanip>",    detail: "I/O formatting manipulators",         standard: "C++98" },
                       { completion: "istream>",    detail: "input stream",                        standard: "C++98" },
                       { completion: "ios>",        detail: "I/O base classes",                    standard: "C++98" }],
    "#include <iom":  [{ completion: "iomanip>",    detail: "I/O formatting manipulators",         standard: "C++98" }],
    "#include <ios":  [{ completion: "istream>",    detail: "input stream",                        standard: "C++98" },
                       { completion: "ios>",        detail: "I/O base classes",                    standard: "C++98" }],
    "#include <it":   [{ completion: "iterator>",   detail: "iterator utilities and adaptors",     standard: "C++98" }],
    "#include <li":   [{ completion: "limits>",     detail: "numeric type limits",                 standard: "C++98" },
                       { completion: "list>",       detail: "doubly linked list",                  standard: "C++98" }],
    "#include <lo":   [{ completion: "locale>",     detail: "localisation utilities",              standard: "C++98" }],
    "#include <ma":   [{ completion: "map>",        detail: "ordered associative map",             standard: "C++98" }],
    "#include <me":   [{ completion: "memory>",     detail: "smart pointers and allocators",       standard: "C++98" }],
    "#include <ne":   [{ completion: "new>",        detail: "low-level memory management",         standard: "C++98" }],
    "#include <nu":   [{ completion: "numeric>",    detail: "numeric algorithms",                  standard: "C++98" }],
    "#include <os":   [{ completion: "ostream>",    detail: "output stream",                       standard: "C++98" }],
    "#include <qu":   [{ completion: "queue>",      detail: "queue and priority_queue",            standard: "C++98" }],
    "#include <se":   [{ completion: "set>",        detail: "ordered unique element set",          standard: "C++98" }],
    "#include <ss":   [{ completion: "sstream>",    detail: "string streams",                      standard: "C++98" }],
    "#include <st":   [{ completion: "stack>",      detail: "LIFO stack adaptor",                  standard: "C++98" }],
    "#include <std":  [{ completion: "stdexcept>",  detail: "standard exception types",            standard: "C++98" }],
    "#include <str":  [{ completion: "streambuf>",  detail: "stream buffer base class",            standard: "C++98" }],
    "#include <stri": [{ completion: "string>",     detail: "std::string type",                    standard: "C++98" }],
    "#include <ty":   [{ completion: "typeinfo>",   detail: "runtime type information (RTTI)",     standard: "C++98" }],
    "#include <ut":   [{ completion: "utility>",    detail: "std::pair, std::move, std::swap",     standard: "C++98" }],
    "#include <va":   [{ completion: "valarray>",   detail: "numeric value array",                 standard: "C++98" }],
    "#include <ve":   [{ completion: "vector>",     detail: "dynamic array container",             standard: "C++98" }],

    // C++ wrappers for C headers (C++98)
    "#include <ca":    [{ completion: "cassert>", detail: "runtime assertions",            standard: "C++98" }],
    "#include <cc":    [{ completion: "cctype>",  detail: "character classification",      standard: "C++98" }],
    "#include <ce":    [{ completion: "cerrno>",  detail: "error codes",                   standard: "C++98" }],
    "#include <cf":    [{ completion: "cfloat>",  detail: "floating-point limits",         standard: "C++98" }],
    "#include <cl":    [{ completion: "climits>", detail: "integer type limits",           standard: "C++98" }],
    "#include <clo":   [{ completion: "clocale>", detail: "localisation (C wrapper)",      standard: "C++98" }],
    "#include <cm":    [{ completion: "cmath>",   detail: "math functions",                standard: "C++98" }],
    "#include <cs":    [{ completion: "csetjmp>", detail: "non-local jumps",               standard: "C++98" }],
    "#include <csi":   [{ completion: "csignal>", detail: "signal handling",               standard: "C++98" }],
    "#include <cst":   [{ completion: "cstdarg>", detail: "variadic arguments",            standard: "C++98" }],
    "#include <cstd":  [{ completion: "cstddef>", detail: "size_t, nullptr_t, ptrdiff_t",  standard: "C++98" }],
    "#include <cstdi": [{ completion: "cstdio>",  detail: "C-style I/O (printf, scanf)",   standard: "C++98" }],
    "#include <cstdl": [{ completion: "cstdlib>", detail: "malloc, rand, exit, qsort",     standard: "C++98" }],
    "#include <cstr":  [{ completion: "cstring>", detail: "memcpy, strlen, strcmp",        standard: "C++98" }],
    "#include <ct":    [{ completion: "ctime>",   detail: "time utilities",                standard: "C++98" }],
    "#include <cw":    [{ completion: "cwchar>",  detail: "wide character handling",       standard: "C++98" },
                        { completion: "cwctype>", detail: "wide character classification", standard: "C++98" }],

    // C++11
    "#include <ar":     [{ completion: "array>",              detail: "fixed-size array container",      standard: "C++11" }],
    "#include <at":     [{ completion: "atomic>",             detail: "lock-free atomic operations",     standard: "C++11" }],
    "#include <ch":     [{ completion: "chrono>",             detail: "time durations and clocks",       standard: "C++11" }],
    "#include <cfe":    [{ completion: "cfenv>",              detail: "floating-point environment",      standard: "C++11" }],
    "#include <cin":    [{ completion: "cinttypes>",          detail: "C integer format macros",         standard: "C++11" }],
    "#include <con":    [{ completion: "condition_variable>", detail: "thread condition variables",      standard: "C++11" }],
    "#include <cstdin": [{ completion: "cstdint>",            detail: "fixed-width integer types",       standard: "C++11" }],
    "#include <cu":     [{ completion: "cuchar>",             detail: "Unicode character types",         standard: "C++11" }],
    "#include <fo":     [{ completion: "forward_list>",       detail: "singly linked list",              standard: "C++11" }],
    "#include <fut":    [{ completion: "future>",             detail: "async / future / promise",        standard: "C++11" }],
    "#include <in":     [{ completion: "initializer_list>",   detail: "initializer list support",        standard: "C++11" }],
    "#include <mu":     [{ completion: "mutex>",              detail: "mutual exclusion primitives",     standard: "C++11" }],
    "#include <ra":     [{ completion: "random>",             detail: "random number engines",           standard: "C++11" },
                         { completion: "ratio>",              detail: "compile-time rational numbers",   standard: "C++11" }],
    "#include <re":     [{ completion: "regex>",              detail: "regular expressions",             standard: "C++11" }],
    "#include <sc":     [{ completion: "scoped_allocator>",   detail: "allocator-aware containers",      standard: "C++11" }],
    "#include <sy":     [{ completion: "system_error>",       detail: "system error codes",              standard: "C++11" }],
    "#include <th":     [{ completion: "thread>",             detail: "std::thread",                     standard: "C++11" }],
    "#include <tu":     [{ completion: "tuple>",              detail: "heterogeneous tuple",             standard: "C++11" }],
    "#include <typ":    [{ completion: "type_traits>",        detail: "compile-time type introspection", standard: "C++11" }],
    "#include <type":   [{ completion: "typeindex>",          detail: "std::type_index wrapper",         standard: "C++11" }],
    "#include <un":     [{ completion: "unordered_map>",      detail: "hash map",                        standard: "C++11" }],
    "#include <uno":    [{ completion: "unordered_set>",      detail: "hash set",                        standard: "C++11" }],

    // C++17
    "#include <an":    [{ completion: "any>",             detail: "type-safe container for any value",     standard: "C++17" }],
    "#include <cha":   [{ completion: "charconv>",        detail: "fast locale-free numeric conversion",   standard: "C++17" }],
    "#include <exe":   [{ completion: "execution>",       detail: "parallel algorithm execution policies", standard: "C++17" }],
    "#include <fi":    [{ completion: "filesystem>",      detail: "file system paths and operations",      standard: "C++17" }],
    "#include <mem":   [{ completion: "memory_resource>", detail: "polymorphic memory allocators",         standard: "C++17" }],
    "#include <op":    [{ completion: "optional>",        detail: "nullable value wrapper",                standard: "C++17" }],
    "#include <strin": [{ completion: "string_view>",     detail: "non-owning string reference",           standard: "C++17" }],
    "#include <var":   [{ completion: "variant>",         detail: "type-safe tagged union",                standard: "C++17" }],

    // C++20
    "#include <ba":   [{ completion: "barrier>",         detail: "reusable thread barrier",              standard: "C++20" }],
    "#include <bi":   [{ completion: "bit>",             detail: "bit manipulation utilities",           standard: "C++20" }],
    "#include <com":  [{ completion: "compare>",         detail: "three-way comparison operator",        standard: "C++20" }],
    "#include <conc": [{ completion: "concepts>",        detail: "named type requirement constraints",   standard: "C++20" }],
    "#include <cor":  [{ completion: "coroutine>",       detail: "coroutine support primitives",         standard: "C++20" }],
    "#include <for":  [{ completion: "format>",          detail: "std::format text formatting",          standard: "C++20" }],
    "#include <la":   [{ completion: "latch>",           detail: "single-use thread countdown latch",    standard: "C++20" }],
    "#include <num":  [{ completion: "numbers>",         detail: "math constants (pi, e, phi...)",       standard: "C++20" }],
    "#include <ran":  [{ completion: "ranges>",          detail: "ranges and views library",             standard: "C++20" }],
    "#include <sem":  [{ completion: "semaphore>",       detail: "counting and binary semaphores",       standard: "C++20" }],
    "#include <so":   [{ completion: "source_location>", detail: "compile-time source file info",        standard: "C++20" }],
    "#include <sp":   [{ completion: "span>",            detail: "non-owning view over contiguous data", standard: "C++20" }],
    "#include <sto":  [{ completion: "stop_token>",      detail: "cooperative thread cancellation",      standard: "C++20" }],
    "#include <syn":  [{ completion: "syncstream>",      detail: "synchronised output stream",           standard: "C++20" }],
    "#include <ver":  [{ completion: "version>",         detail: "feature-test macros",                  standard: "C++20" }],

    // C++23
    "#include <exp":  [{ completion: "expected>",   detail: "std::expected result/error type", standard: "C++23" }],
    "#include <fl":   [{ completion: "flat_map>",   detail: "flat sorted associative map",     standard: "C++23" }],
    "#include <fla":  [{ completion: "flat_set>",   detail: "flat sorted unique set",          standard: "C++23" }],
    "#include <ge":   [{ completion: "generator>",  detail: "coroutine generator range",       standard: "C++23" }],
    "#include <md":   [{ completion: "mdspan>",     detail: "multi-dimensional array view",    standard: "C++23" }],
    "#include <pr":   [{ completion: "print>",      detail: "std::print formatted output",     standard: "C++23" }],
    "#include <spa":  [{ completion: "spanstream>", detail: "span-backed I/O stream",          standard: "C++23" }],
    "#include <sta":  [{ completion: "stacktrace>", detail: "runtime stack trace capture",     standard: "C++23" }],
    "#include <stdf": [{ completion: "stdfloat>",   detail: "extended floating-point types",   standard: "C++23" }],

    // C++26
    "#include <cont": [{ completion: "contracts>",      detail: "contract-based pre/post conditions", standard: "C++26" }],
    "#include <deb":  [{ completion: "debugging>",      detail: "debugger breakpoint support",        standard: "C++26" }],
    "#include <ha":   [{ completion: "hazard_pointer>", detail: "safe memory reclamation",            standard: "C++26" }],
    "#include <hi":   [{ completion: "hive>",           detail: "high-performance stable container",  standard: "C++26" }],
    "#include <inp":  [{ completion: "inplace_vector>", detail: "fixed-capacity inline vector",       standard: "C++26" }],
    "#include <lin":  [{ completion: "linalg>",         detail: "linear algebra (BLAS-style)",        standard: "C++26" }],
    "#include <met":  [{ completion: "meta>",           detail: "compile-time reflection",            standard: "C++26" }],
    "#include <rc":   [{ completion: "rcu>",            detail: "read-copy-update synchronisation",   standard: "C++26" }],
    "#include <si":   [{ completion: "simd>",           detail: "data-parallel SIMD types",           standard: "C++26" }],
    "#include <te":   [{ completion: "text_encoding>",  detail: "text encoding detection",            standard: "C++26" }],
};

// Query
export function findCppHeaderSuggestions(
    wordPrefix: string,
    activeStd: cppStandard
): cppHeaderSuggestion[] {

    let bestMatch: cppHeaderSuggestion[] = [];

    for (let len = 3; len <= wordPrefix.length; len++) {
        const key = wordPrefix.slice(0, len);
        if (cppHeaders[key]) {
            bestMatch = cppHeaders[key].filter(s => isAllowed(s, activeStd));
        }
    }

    return bestMatch;
}