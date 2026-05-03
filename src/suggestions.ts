//  suggestions.ts
//  Core C/C++ suggestion dictionary for Flow++
//  Split into: SHARED (both C and C++), CPP_ONLY, C_ONLY
export interface Suggestion {
  completion: string;
  detail?: string;
  suffix?: string;
}

//  Shared suggestions (both .c and .cpp)
const SHARED: Record<string, Suggestion[]> = {
        //  Preprocessor
        "#inc": [{ completion: "#include <", detail: "include system header" }],
        "#inq": [{ completion: '#include "', detail: "include local header" }],
        "#pra": [{ completion: "#pragma once", detail: "include guard" }],
        "#def": [{ completion: "#define ", detail: "preprocessor macro" }],
        "#und": [{ completion: "#undef ", detail: "undefine macro" }],
        "#ifn": [{ completion: "#ifndef ", detail: "if not defined guard" }],
        "#ifd": [{ completion: "#ifdef ", detail: "if defined" }],
        "#ife": [{ completion: "#if defined(", detail: "conditional defined check" }],
        "#eli": [{ completion: "#elif ", detail: "else-if preprocessor" }],
        "#end": [{ completion: "#endif", detail: "end preprocessor block" }],
        "#err": [{ completion: '#error "', detail: "compile-time error message" }],

        //  Common keywords (valid in both C and C++)
        "ret": [{ completion: "return ", detail: "return statement" }],
        "siz": [{ completion: "sizeof(", detail: "size of type or object" },
                { completion: "size_t", detail: "size type (unsigned)" }],
        "tru": [{ completion: "true", detail: "boolean true" }],
        "fal": [{ completion: "false", detail: "boolean false" }],
        "sta": [{ completion: "static ", detail: "static specifier" },
                { completion: "static_assert(", detail: "compile-time assertion" }],
        "vol": [{ completion: "volatile ", detail: "volatile specifier" }],
        "ext": [{ completion: "extern ", detail: "extern linkage" },
                { completion: 'extern "C" {', detail: "C linkage block" }],
        "inl": [{ completion: "inline ", detail: "inline specifier" }],
        "con": [{ completion: "const ", detail: "const qualifier" }],
        "INT": [{ completion: "INT_MAX", detail: "max int value" },
                { completion: "INT_MIN", detail: "min int value" }],
        "UIN": [{ completion: "UINT_MAX", detail: "max unsigned int value" }],
        "NUL": [{ completion: "NULL", detail: "null pointer constant (C-style)" }],

        //  Control Flow
        "swi": [{ completion: "switch (", detail: "switch statement" }],
        "cas": [{ completion: "case ", detail: "switch case label" }],
        "def": [{ completion: "default:", detail: "switch default" }],
        "got": [{ completion: "goto ", detail: "goto label" }],
        "bre": [{ completion: "break;", detail: "break out of loop/switch" }],
        "cont": [{ completion: "continue;", detail: "skip to next iteration" }],

        //  Types & type utilities
        "uin": [{ completion: "unsigned int", detail: "unsigned int" },
                { completion: "uint8_t", detail: "8-bit unsigned" },
                { completion: "uint16_t", detail: "16-bit unsigned" },
                { completion: "uint32_t", detail: "32-bit unsigned" },
                { completion: "uint64_t", detail: "64-bit unsigned" }],
        "int": [{ completion: "int8_t", detail: "8-bit signed" },
                { completion: "int16_t", detail: "16-bit signed" },
                { completion: "int32_t", detail: "32-bit signed" },
                { completion: "int64_t", detail: "64-bit signed" }],
        "ptr": [{ completion: "ptrdiff_t", detail: "pointer difference type" }],
        "typ": [{ completion: "typedef ", detail: "type alias (C-style)" }],
        "enu": [{ completion: "enum ", detail: "enumeration" }],
        "stru": [{ completion: "struct ", detail: "struct definition" }],
        "uni": [{ completion: "union ", detail: "union type" }],
        "voi": [{ completion: "void *", detail: "void pointer" }],

        //  C Standard Library (used in both) - Memory
        "mal": [{ completion: "malloc(", detail: "allocate memory" }],
        "cal": [{ completion: "calloc(", detail: "zero-initialized alloc" }],
        "rea": [{ completion: "realloc(", detail: "resize allocation" }],
        "mem": [{ completion: "memcpy(", detail: "memory copy" },
                { completion: "memset(", detail: "memory set" },
                { completion: "memmove(", detail: "memory move (safe overlap)" },
                { completion: "memcmp(", detail: "memory compare" }],

        //  C Standard Library (used in both) - Strings
        "str": [{ completion: "strlen(", detail: "string length" },
                { completion: "strcpy(", detail: "string copy (unsafe)" },
                { completion: "strncpy(", detail: "string copy (bounded)" },
                { completion: "strcmp(", detail: "string compare" },
                { completion: "strncmp(", detail: "string compare (bounded)" },
                { completion: "strcat(", detail: "string concat (unsafe)" },
                { completion: "strncat(", detail: "string concat (bounded)" },
                { completion: "strchr(", detail: "find char in string" },
                { completion: "strstr(", detail: "find substring" },
                { completion: "strtok(", detail: "tokenise string" }],
        "ato": [{ completion: "atoi(", detail: "string to int (no error check)" },
                { completion: "atol(", detail: "string to long" },
                { completion: "atof(", detail: "string to double" }],
        "sto": [{ completion: "strtol(", detail: "safe string to long" },
                { completion: "strtoul(", detail: "safe string to unsigned long" },
                { completion: "strtod(", detail: "safe string to double" }],

        //  C Standard Libarary (used in both) - Math
        "abs": [{ completion: "abs(", detail: "absolute value (int)" },
                { completion: "fabs(", detail: "absolute value (float)" }],
        "sqr": [{ completion: "sqrt(", detail: "square root" }],
        "pow": [{ completion: "pow(", detail: "power" }],
        "flo": [{ completion: "floor(", detail: "floor" },
                { completion: "ceil(", detail: "ceiling" },
                { completion: "round(", detail: "round to nearest" }],
        "log": [{ completion: "log(", detail: "natural log" },
                { completion: "log2(", detail: "log base 2" },
                { completion: "log10(", detail: "log base 10" }],
        "sin": [{ completion: "sin(", detail: "sine" },
                { completion: "cos(", detail: "cosine" },
                { completion: "tan(", detail: "tangent" }],

        //  C Standard Libarary (used in both) - Math
        "ran": [{ completion: "rand()", detail: "random int [0, RAND_MAX]" },
                { completion: "srand(", detail: "seed random" }],
        "exi": [{ completion: "exit(", detail: "exit with code" },
                { completion: "EXIT_SUCCESS", detail: "exit code: success" },
                { completion: "EXIT_FAILURE", detail: "exit code: failure" }],
        "abo": [{ completion: "abort()", detail: "abnormal termination" }],
        "ass": [{ completion: "assert(", detail: "runtime assertion" }],
        "qso": [{ completion: "qsort(", detail: "quicksort" }],
        "bse": [{ completion: "bsearch(", detail: "binary search" }],
        "tim": [{ completion: "time(", detail: "current time" },
                { completion: "clock()", detail: "processor time used" },
                { completion: "difftime(", detail: "time difference" }],
        "get": [{ completion: "getenv(", detail: "get environment variable" }],
        "sys": [{ completion: "system(", detail: "run shell command" }],
};

//  C++ only suggestions (.cpp files)
const CPP_ONLY: Record<string, Suggestion[]> = {
        //  C++ includes
        "#include <a": [{ completion: "#include <algorithm>", detail: "algorithms" }],
        "#include <b": [{ completion: "#include <bitset>", detail: "bitset container" }],
        "#include <c": [{ completion: "#include <complex>", detail: "complex numbers" }],
        "#include <d": [{ completion: "#include <deque>", detail: "double-ended queue" }],
        "#include <e": [{ completion: "#include <exception>", detail: "exception handling" }],
        "#include <f": [{ completion: "#include <fstream>", detail: "file streams" }],
        "#include <i": [{ completion: "#include <iomanip>", detail: "I/O manipulators" },
                        { completion: "#include <ios>", detail: "I/O base classes" },
                        { completion: "#include <iosfwd>", detail: "forward declarations for I/O" },
                        { completion: "#include <iostream>", detail: "I/O streams" },
                        { completion: "#include <istream>", detail: "input stream" },
                        { completion: "#include <iterator>", detail: "iterator utilities" }],
        "#include <l": [{ completion: "#include <list>", detail: "doubly linked list" },
                        { completion: "#include <locale>", detail: "localization utilities" }],
        "#include <m": [{ completion: "#include <map>", detail: "ordered map" },
                        { completion: "#include <memory>", detail: "memory management" }],
        "#include <n": [{ completion: "#include <new>", detail: "low-level memory management" },
                        { completion: "#include <numeric>", detail: "numeric algorithms" }],
        "#include <o": [{ completion: "#include <ostream>", detail: "output stream" }],
        "#include <q": [{ completion: "#include <queue>", detail: "queue container" }],
        "#include <s": [{ completion: "#include <set>", detail: "ordered set" },
                        { completion: "#include <sstream>", detail: "string streams" },
                        { completion: "#include <stack>", detail: "stack container" },
                        { completion: "#include <stdexcept>", detail: "standard exceptions" },
                        { completion: "#include <streambuf>", detail: "stream buffer" },
                        { completion: "#include <string>", detail: "string type" }],
        "#include <t": [{ completion: "#include <typeinfo>", detail: "runtime type information" }],
        "#include <u": [{ completion: "#include <utility>", detail: "utility components" }],
        "#include <v": [{ completion: "#include <valarray>", detail: "numeric array" },
                        { completion: "#include <vector>", detail: "dynamic array" }],

        //  C headers (C++ wrappers)
        "#include <ca": [{ completion: "#include <cassert>", detail: "assert macro" }],
        "#include <cc": [{ completion: "#include <cctype>", detail: "character classification" }],
        "#include <ce": [{ completion: "#include <cerrno>", detail: "error codes" }],
        "#include <cf": [{ completion: "#include <cfloat>", detail: "floating-point limits" }],
        "#include <ci": [{ completion: "#include <climits>", detail: "integer limits" }],
        "#include <cl": [{ completion: "#include <clocale>", detail: "localization" }],
        "#include <cm": [{ completion: "#include <cmath>", detail: "math functions" }],
        "#include <cs": [{ completion: "#include <csetjmp>", detail: "non-local jumps" },
                         { completion: "#include <csignal>", detail: "signal handling" },
                         { completion: "#include <cstdarg>", detail: "variable arguments" },
                         { completion: "#include <cstddef>", detail: "size types and nullptr_t" },
                         { completion: "#include <cstdio>", detail: "C-style I/O" },
                         { completion: "#include <cstdlib>", detail: "general utilities" },
                         { completion: "#include <cstring>", detail: "string handling" }],
        "#include <ct": [{ completion: "#include <ctime>", detail: "time utilities" }],
        "#include <cw": [{ completion: "#include <cwchar>", detail: "wide character handling" },
                         { completion: "#include <cwctype>", detail: "wide char classification" }],

        //  C++11 headers
        "#include <at": [{ completion: "#include <atomic>", detail: "atomic operations" }],
        "#include <cfe": [{ completion: "#include <cfenv>", detail: "floating-point environment" }],
        "#include <cin": [{ completion: "#include <cinttypes>", detail: "C integer types" }],
        "#include <co": [{ completion: "#include <condition_variable>", detail: "thread synchronization" }],
        "#include <cst": [{ completion: "#include <cstdint>", detail: "fixed-size integer types" }],
        "#include <cu": [{ completion: "#include <cuchar>", detail: "Unicode characters" }],
        "#include <fo": [{ completion: "#include <forward_list>", detail: "singly linked list" }],
        "#include <fu": [{ completion: "#include <future>", detail: "async operations" }],
        "#include <in": [{ completion: "#include <initializer_list>", detail: "initializer lists" }],
        "#include <mu": [{ completion: "#include <mutex>", detail: "mutual exclusion" }],
        "#include <ra": [{ completion: "#include <random>", detail: "random number generation" },
                         { completion: "#include <ratio>", detail: "compile-time ratios" }],
        "#include <re": [{ completion: "#include <regex>", detail: "regular expressions" }],
        "#include <sc": [{ completion: "#include <scoped_allocator>", detail: "allocator-aware containers" }],
        "#include <sy": [{ completion: "#include <system_error>", detail: "system error handling" }],
        "#include <ty": [{ completion: "#include <typeindex>", detail: "type index" },
                         { completion: "#include <type_traits>", detail: "type traits" }],
        "#include <un": [{ completion: "#include <unordered_set>", detail: "hash set" }],

        //  C++17 headers
        "#include <an": [{ completion: "#include <any>", detail: "std::any" }],
        "#include <ch": [{ completion: "#include <charconv>", detail: "fast numeric conversions" }],
        "#include <ex": [{ completion: "#include <execution>", detail: "parallel algorithms" }],
        "#include <fi": [{ completion: "#include <filesystem>", detail: "file system library" }],
        "#include <me": [{ completion: "#include <memory_resource>", detail: "polymorphic allocators" }],
        "#include <op": [{ completion: "#include <optional>", detail: "std::optional" }],
        "#include <st": [{ completion: "#include <string_view>", detail: "non-owning string view" }],
        "#include <va": [{ completion: "#include <variant>", detail: "type-safe union" }],

        //  C++20 headers
        "#include <ba": [{ completion: "#include <barrier>", detail: "thread barrier" }],
        "#include <bi": [{ completion: "#include <bit>", detail: "bit manipulation utilities" }],
        "#include <com": [{ completion: "#include <compare>", detail: "three-way comparison" }],
        "#include <con": [{ completion: "#include <concepts>", detail: "concepts library" }],
        "#include <cor": [{ completion: "#include <coroutine>", detail: "coroutines support" }],
        "#include <for": [{ completion: "#include <format>", detail: "text formatting" }],
        "#include <la": [{ completion: "#include <latch>", detail: "thread latch" }],
        "#include <nu": [{ completion: "#include <numbers>", detail: "math constants" }],
        "#include <ran": [{ completion: "#include <ranges>", detail: "ranges library" }],
        "#include <se": [{ completion: "#include <semaphore>", detail: "counting semaphore" }],
        "#include <so": [{ completion: "#include <source_location>", detail: "source code info" }],
        "#include <sp": [{ completion: "#include <span>", detail: "non-owning array view" }],
        "#include <sto": [{ completion: "#include <stop_token>", detail: "thread stop mechanism" }],
        "#include <syn": [{ completion: "#include <syncstream>", detail: "synchronized output stream" }],
        "#include <ve": [{ completion: "#include <version>", detail: "standard library version info" }],

        //  C++23 headers
        "#include <exp": [{ completion: "#include <expected>", detail: "std::expected" }],
        "#include <fl": [{ completion: "#include <flat_map>", detail: "flat ordered map" },
                         { completion: "#include <flat_set>", detail: "flat ordered set" }],
        "#include <ge": [{ completion: "#include <generator>", detail: "coroutine generator" }],
        "#include <md": [{ completion: "#include <mdspan>", detail: "multi-dimensional span" }],
        "#include <pr": [{ completion: "#include <print>", detail: "formatted output (std::print)" }],
        "#include <spa": [{ completion: "#include <spanstream>", detail: "span-based streams" }],
        "#include <sta": [{ completion: "#include <stacktrace>", detail: "stack trace utilities" },
                          { completion: "#include <stdfloat>", detail: "extended floating-point types" }],

        //  C++26 headers
        "#include <cont": [{ completion: "#include <contracts>", detail: "contract-based programming" }],
        "#include <de": [{ completion: "#include <debugging>", detail: "debugging support" }],
        "#include <ha": [{ completion: "#include <hazard_pointer>", detail: "safe memory reclamation" }],
        "#include <hi": [{ completion: "#include <hive>", detail: "high-performance container" }],
        "#include <inp": [{ completion: "#include <inplace_vector>", detail: "fixed-capacity vector" }],
        "#include <li": [{ completion: "#include <linalg>", detail: "linear algebra library" }],
        "#include <met": [{ completion: "#include <meta>", detail: "compile-time reflection utilities" }],
        "#include <rc": [{ completion: "#include <rcu>", detail: "read-copy-update synchronization" }],
        "#include <si": [{ completion: "#include <simd>", detail: "data-parallel SIMD types" }],
        "#include <te": [{ completion: "#include <text_encoding>", detail: "text encoding utilities" }],

        //  C++ keywords
        "[[d": [{ completion: "[[deprecated(\"", detail: "mark as deprecated" }],
        "[[l": [{ completion: "[[likely]]", detail: "branch hint: likely" }],
        "[[n": [{ completion: "[[nodiscard]]", detail: "warn if return unused" }],
        "[[u": [{ completion: "[[unlikely]]", detail: "branch hint: unlikely" }],
        "auto": [{ completion: "auto& ", detail: "inferred reference type" }],
        "const": [{ completion: "constexpr", detail: "compile-time constant" },
                { completion: "const_cast<", detail: "cast away const" }],
        "conste": [{ completion: "constexpr", detail: "compile-time constant" }],
        "constev": [{ completion: "consteval", detail: "immediate function" }],
        "consti": [{ completion: "constinit", detail: "constant initialization" }],
        "def": [{ completion: "default", detail: "use compiler-generated impl" }],
        "del": [{ completion: "delete", detail: "mark function as deleted" }],
        "dyn": [{ completion: "dynamic_cast<", detail: "runtime polymorphic cast" }],
        "expl": [{ completion: "explicit", detail: "no implicit conversions" }],
        "fin": [{ completion: "final", detail: "prevent further overriding" }],
        "fri": [{ completion: "friend ", detail: "friend declaration" }],
        "inl": [{ completion: "inline ", detail: "inline specifier" }],
        "nam": [{ completion: "namespace ", detail: "namespace declaration" }],
        "nod": [{ completion: "nodiscard", detail: "[[nodiscard]] attribute" }],
        "noe": [{ completion: "noexcept", detail: "no-throw guarantee" }],
        "nul": [{ completion: "nullptr", detail: "null pointer constant" }],
        "ove": [{ completion: "override", detail: "override virtual function" }],
        "rei": [{ completion: "reinterpret_cast<", detail: "low-level reinterpret cast" }],
        "sta": [{ completion: "static_assert(", detail: "compile-time assertion" },
                { completion: "static_cast<", detail: "static cast" }],
        "tem": [{ completion: "template<typename ", detail: "template declaration" }],
        "typ": [{ completion: "typename", detail: "template type parameter" }],
        "usi": [{ completion: "using namespace std;", detail: "use std namespace" },
                { completion: "using ", detail: "type alias" }],
        "vir": [{ completion: "virtual ", detail: "virtual function" }],

        //  std:: types
        "std::arr": [{ completion: "std::array<", detail: "fixed-size array" }],
        "std::ato": [{ completion: "std::atomic<", detail: "lock-free atomic type" }],
        "std::chr": [{ completion: "std::chrono::", detail: "time utilities" }],
        "std::fun": [{ completion: "std::function<", detail: "callable wrapper" }],
        "std::lis": [{ completion: "std::list<", detail: "doubly linked list" }],
        "std::mak": [{ completion: "std::make_shared<", detail: "create shared_ptr" },
                     { completion: "std::make_pair(", detail: "create pair" }],
        "std::map": [{ completion: "std::map<", detail: "ordered key-value map" },
                     { completion: "std::unordered_map<", detail: "hash map" }],
        "std::mut": [{ completion: "std::mutex", detail: "mutual exclusion" }],
        "std::opt": [{ completion: "std::optional<", detail: "nullable value wrapper" }],
        "std::pai": [{ completion: "std::pair<", detail: "pair of two values" }],
        "std::que": [{ completion: "std::queue<", detail: "FIFO queue" }],
        "std::set": [{ completion: "std::set<", detail: "ordered unique elements" },
                     { completion: "std::unordered_set<", detail: "hash set" }],
        "std::shr": [{ completion: "std::shared_ptr<", detail: "shared ownership pointer" }],
        "std::spa": [{ completion: "std::span<", detail: "non-owning view of contiguous data" }],
        "std::sta": [{ completion: "std::stack<", detail: "LIFO stack" }],
        "std::str": [{ completion: "std::string", detail: "string type" },
                     { completion: "std::stringstream", detail: "string stream" }],
        "std::thr": [{ completion: "std::thread", detail: "OS thread" }],
        "std::tup": [{ completion: "std::tuple<", detail: "tuple of values" }],
        "std::uni": [{ completion: "std::unique_ptr<", detail: "unique ownership pointer" }],
        "std::var": [{ completion: "std::variant<", detail: "type-safe union" }],
        "std::vec": [{ completion: "std::vector<", detail: "dynamic array container" }],
        "std::wea": [{ completion: "std::weak_ptr<", detail: "weak reference pointer" }],

        //  C++14 std:: additions
        "std::exc": [{ completion: "std::exchange(", detail: "replace value and return old" }],
        "std::int": [{ completion: "std::integer_sequence<", detail: "compile-time integer sequence" }],
        "std::mku": [{ completion: "std::make_unique<", detail: "create unique_ptr" }],
        "std::quo": [{ completion: "std::quoted(", detail: "quoted I/O manipulator" }],
        "std::sha": [{ completion: "std::shared_timed_mutex", detail: "timed shared mutex" },
                     { completion: "std::shared_lock<", detail: "shared (reader) lock" }],

        //  std:: algorithms & I/O
        //  Non-modifying sequence
        "std::adj": [{ completion: "std::adjacent_find(", detail: "find first adjacent equal elements" }],
        "std::all": [{ completion: "std::all_of(", detail: "true if all elements satisfy predicate" }],
        "std::any": [{ completion: "std::any_of(", detail: "true if any element satisfies predicate" }],
        "std::cou": [{ completion: "std::count(", detail: "count elements equal to value" },
                     { completion: "std::count_if(", detail: "count elements satisfying predicate" },
                     { completion: "std::cout << ", detail: "print to stdout" }],
        "std::fin": [{ completion: "std::find(", detail: "find element in range" },
                     { completion: "std::find_end(", detail: "find last occurrence of subsequence" },
                     { completion: "std::find_first_of(", detail: "find first element from a set" },
                     { completion: "std::find_if(", detail: "find element by predicate" },
                     { completion: "std::find_if_not(", detail: "find element not satisfying predicate" }],
        "std::for": [{ completion: "std::for_each(", detail: "apply function to range" },
                     { completion: "std::for_each_n(", detail: "apply function to first N elements" }],
        "std::mis": [{ completion: "std::mismatch(", detail: "find first mismatching pair" }],
        "std::non": [{ completion: "std::none_of(", detail: "true if no element satisfies predicate" }],
        "std::sea": [{ completion: "std::search(", detail: "find first occurrence of subsequence" },
                     { completion: "std::search_n(", detail: "find N consecutive matching elements" }],

        //  Modifying sequence
        "std::cop": [{ completion: "std::copy(", detail: "copy range" },
                     { completion: "std::copy_backward(", detail: "copy range in reverse order" },
                     { completion: "std::copy_if(", detail: "copy elements satisfying predicate" },
                     { completion: "std::copy_n(", detail: "copy N elements" }],
        "std::fil": [{ completion: "std::fill(", detail: "fill range with value" },
                     { completion: "std::fill_n(", detail: "fill N elements with value" }],
        "std::gen": [{ completion: "std::generate(", detail: "fill range using generator function" },
                     { completion: "std::generate_n(", detail: "fill N elements using generator" }],
        "std::ite": [{ completion: "std::iter_swap(", detail: "swap elements pointed to by iterators" }],
        "std::mov": [{ completion: "std::move(", detail: "move range" },
                     { completion: "std::move_backward(", detail: "move range in reverse order" }],
        "std::rem": [{ completion: "std::remove(", detail: "remove elements equal to value" },
                     { completion: "std::remove_copy(", detail: "copy range omitting matching elements" },
                     { completion: "std::remove_copy_if(", detail: "copy range omitting predicate matches" },
                     { completion: "std::remove_if(", detail: "remove elements satisfying predicate" }],
        "std::rep": [{ completion: "std::replace(", detail: "replace matching elements" },
                     { completion: "std::replace_copy(", detail: "copy range replacing matching elements" },
                     { completion: "std::replace_copy_if(", detail: "copy range replacing predicate matches" },
                     { completion: "std::replace_if(", detail: "replace elements satisfying predicate" }],
        "std::rev": [{ completion: "std::reverse(", detail: "reverse a range in-place" },
                     { completion: "std::reverse_copy(", detail: "copy range in reverse order" }],
        "std::rot": [{ completion: "std::rotate(", detail: "rotate elements in a range" },
                     { completion: "std::rotate_copy(", detail: "copy a rotated range" }],
        "std::sam": [{ completion: "std::sample(", detail: "select N random elements (C++17)" }],
        "std::shi": [{ completion: "std::shift_left(", detail: "shift elements left in range" },
                     { completion: "std::shift_right(", detail: "shift elements right in range" }],
        "std::shu": [{ completion: "std::shuffle(", detail: "randomly re-order elements (C++11)" }],
        "std::swa": [{ completion: "std::swap(", detail: "swap two values" },
                     { completion: "std::swap_ranges(", detail: "swap two ranges element-by-element" }],
        "std::tra": [{ completion: "std::transform(", detail: "transform range" }],
        "std::uniq": [{ completion: "std::unique(", detail: "remove consecutive duplicates in-place" },
                      { completion: "std::unique_copy(", detail: "copy range without consecutive duplicates" }],

        //  Partitioning 
        "std::is_": [{ completion: "std::is_heap(", detail: "check if range is a max heap (C++11)" },
                     { completion: "std::is_heap_until(", detail: "find largest subrange that is a max heap (C++11)" },
                     { completion: "std::is_partitioned(", detail: "check if range is partitioned (C++11)" },
                     { completion: "std::is_sorted(", detail: "check if range is sorted (C++11)" },
                     { completion: "std::is_sorted_until(", detail: "find largest sorted subrange (C++11)" }],
        "std::par": [{ completion: "std::partition(", detail: "divide range into two groups" },
                     { completion: "std::partition_copy(", detail: "copy range split into two groups (C++11)" },
                     { completion: "std::partition_point(", detail: "locate the partition point (C++11)" }],
        "std::stab": [{ completion: "std::stable_partition(", detail: "partition preserving relative order" },
                      { completion: "std::stable_sort(", detail: "sort preserving order of equal elements" }],

        //  Sorting 
        "std::nth": [{ completion: "std::nth_element(", detail: "partially sort; partition by nth element" }],
        "std::part": [{ completion: "std::partial_sort(", detail: "sort first N elements of range" },
                      { completion: "std::partial_sort_copy(", detail: "copy and partially sort range" }],
        "std::sor": [{ completion: "std::sort(", detail: "sort range into ascending order" }],

        //  Binary search (sorted ranges) 
        "std::bin": [{ completion: "std::binary_search(", detail: "check if value exists in sorted range" }],
        "std::equ": [{ completion: "std::equal_range(", detail: "range of elements matching key" }],
        "std::low": [{ completion: "std::lower_bound(", detail: "iterator to first element not less than value" }],
        "std::upp": [{ completion: "std::upper_bound(", detail: "iterator to first element greater than value" }],

        //  Other sorted range ops 
        "std::inp": [{ completion: "std::inplace_merge(", detail: "merge two ordered sub-ranges in-place" }],
        "std::mer": [{ completion: "std::merge(", detail: "merge two sorted ranges" }],

        //  Set operations (sorted ranges)
        "std::inc": [{ completion: "std::includes(", detail: "check if one sorted range is subset of another" }],
        "std::set_": [{ completion: "std::set_difference(", detail: "compute difference of two sorted sets" },
                      { completion: "std::set_intersection(", detail: "compute intersection of two sorted sets" },
                      { completion: "std::set_symmetric_difference(", detail: "compute symmetric difference of two sets" },
                      { completion: "std::set_union(", detail: "compute union of two sorted sets" }],

        //  Heap operations
        "std::make": [{ completion: "std::make_heap(", detail: "build a max heap from a range" }],
        "std::pop": [{ completion: "std::pop_heap(", detail: "remove largest element from max heap" }],
        "std::pus": [{ completion: "std::push_heap(", detail: "add element to a max heap" }],
        "std::sort": [{ completion: "std::sort_heap(", detail: "turn max heap into sorted range" }],

        //  I/O
        "std::acc": [{ completion: "std::accumulate(", detail: "fold/reduce range" }],
        "std::cer": [{ completion: "std::cerr << ", detail: "print to stderr" }],
        "std::cin": [{ completion: "std::cin >> ", detail: "read from stdin" }],
        "std::end": [{ completion: "std::endl", detail: "flush + newline" }],
};

const CPP_RANGES_ONLY: Record<string, Suggestion[]> = {
        //  std::ranges:: C++20 algorithms
        //  Non-modifying sequence
        "std::ranges::adj": [{ completion: "std::ranges::adjacent_find(", detail: "find first adjacent equal elements" }],
        "std::ranges::all": [{ completion: "std::ranges::all_of(", detail: "true if all elements satisfy predicate" }],
        "std::ranges::any": [{ completion: "std::ranges::any_of(", detail: "true if any element satisfies predicate" }],
        "std::ranges::cou": [{ completion: "std::ranges::count(", detail: "count elements equal to value" },
                             { completion: "std::ranges::count_if(", detail: "count elements satisfying predicate" }],
        "std::ranges::fin": [{ completion: "std::ranges::find(", detail: "find element in range" },
                             { completion: "std::ranges::find_if(", detail: "find element by predicate" },
                             { completion: "std::ranges::find_if_not(", detail: "find element not satisfying predicate" },
                             { completion: "std::ranges::find_end(", detail: "find last occurrence of subsequence" },
                             { completion: "std::ranges::find_first_of(", detail: "find first element from a set" },
                             { completion: "std::ranges::find_last(", detail: "find last element equal to value (C++23)" },
                             { completion: "std::ranges::find_last_if(", detail: "find last element by predicate (C++23)" },
                             { completion: "std::ranges::find_last_if_not(", detail: "find last element not satisfying predicate (C++23)" }],
        "std::ranges::for": [{ completion: "std::ranges::for_each(", detail: "apply function to range" },
                             { completion: "std::ranges::for_each_n(", detail: "apply function to first N elements" }],
        "std::ranges::mis": [{ completion: "std::ranges::mismatch(", detail: "find first mismatching pair" }],
        "std::ranges::non": [{ completion: "std::ranges::none_of(", detail: "true if no element satisfies predicate" }],
        "std::ranges::sea": [{ completion: "std::ranges::search(", detail: "find first occurrence of subsequence" },
                             { completion: "std::ranges::search_n(", detail: "find N consecutive matching elements" }],

        //  Modifying sequence
        "std::ranges::cop": [{ completion: "std::ranges::copy(", detail: "copy range" },
                             { completion: "std::ranges::copy_if(", detail: "copy elements satisfying predicate" },
                             { completion: "std::ranges::copy_n(", detail: "copy N elements" },
                             { completion: "std::ranges::copy_backward(", detail: "copy range in reverse order" }],
        "std::ranges::fil": [{ completion: "std::ranges::fill(", detail: "fill range with value" },
                             { completion: "std::ranges::fill_n(", detail: "fill N elements with value" }],
        "std::ranges::gen": [{ completion: "std::ranges::generate(", detail: "fill range using generator function" },
                             { completion: "std::ranges::generate_n(", detail: "fill N elements using generator" }],
        "std::ranges::ite": [{ completion: "std::ranges::iter_swap(", detail: "swap elements pointed to by iterators" }],
        "std::ranges::mov": [{ completion: "std::ranges::move(", detail: "move range" },
                             { completion: "std::ranges::move_backward(", detail: "move range in reverse order" }],
        "std::ranges::rem": [{ completion: "std::ranges::remove(", detail: "remove elements equal to value" },
                             { completion: "std::ranges::remove_if(", detail: "remove elements satisfying predicate" },
                             { completion: "std::ranges::remove_copy(", detail: "copy range omitting matching elements" },
                             { completion: "std::ranges::remove_copy_if(", detail: "copy range omitting predicate matches" }],
        "std::ranges::rep": [{ completion: "std::ranges::replace(", detail: "replace matching elements" },
                             { completion: "std::ranges::replace_if(", detail: "replace elements satisfying predicate" },
                             { completion: "std::ranges::replace_copy(", detail: "copy range replacing matching elements" },
                             { completion: "std::ranges::replace_copy_if(", detail: "copy range replacing predicate matches" }],
        "std::ranges::rev": [{ completion: "std::ranges::reverse(", detail: "reverse a range in-place" },
                             { completion: "std::ranges::reverse_copy(", detail: "copy range in reverse order" }],
        "std::ranges::rot": [{ completion: "std::ranges::rotate(", detail: "rotate elements in a range" },
                             { completion: "std::ranges::rotate_copy(", detail: "copy a rotated range" }],
        "std::ranges::sam": [{ completion: "std::ranges::sample(", detail: "select N random elements" }],
        "std::ranges::shi": [{ completion: "std::ranges::shift_left(", detail: "shift elements left in range" },
                             { completion: "std::ranges::shift_right(", detail: "shift elements right in range" },
                             { completion: "std::ranges::shuffle(", detail: "randomly re-order elements" }],
        "std::ranges::swa": [{ completion: "std::ranges::swap_ranges(", detail: "swap two ranges element-by-element" }],
        "std::ranges::tra": [{ completion: "std::ranges::transform(", detail: "transform range" }],
        "std::ranges::uni": [{ completion: "std::ranges::unique(", detail: "remove consecutive duplicates in-place" },
                             { completion: "std::ranges::unique_copy(", detail: "copy range without consecutive duplicates" }],

        //  Partitioning
        "std::ranges::is_": [{ completion: "std::ranges::is_partitioned(", detail: "check if range is partitioned" },
                             { completion: "std::ranges::is_sorted(", detail: "check if range is sorted" },
                             { completion: "std::ranges::is_sorted_until(", detail: "find largest sorted subrange" },
                             { completion: "std::ranges::is_heap(", detail: "check if range is a max heap" },
                             { completion: "std::ranges::is_heap_until(", detail: "find largest subrange that is a max heap" }],
        "std::ranges::par": [{ completion: "std::ranges::partition(", detail: "divide range into two groups" },
                             { completion: "std::ranges::partition_copy(", detail: "copy range split into two groups" },
                             { completion: "std::ranges::partition_point(", detail: "locate the partition point" }],
        "std::ranges::sta": [{ completion: "std::ranges::stable_partition(", detail: "partition preserving relative order" },
                             { completion: "std::ranges::stable_sort(", detail: "sort preserving order of equal elements" },
                             { completion: "std::ranges::starts_with(", detail: "check if range starts with a prefix (C++23)" }],

        //  Sorting
        "std::ranges::nth": [{ completion: "std::ranges::nth_element(", detail: "partially sort; partition by nth element" }],
        "std::ranges::part": [{ completion: "std::ranges::partial_sort(", detail: "sort first N elements of range" },
                              { completion: "std::ranges::partial_sort_copy(", detail: "copy and partially sort range" }],
        "std::ranges::sor": [{ completion: "std::ranges::sort(", detail: "sort range into ascending order" },
                             { completion: "std::ranges::sort_heap(", detail: "turn max heap into sorted range" }],

        //  Binary search (sorted ranges)
        "std::ranges::bin": [{ completion: "std::ranges::binary_search(", detail: "check if value exists in sorted range" }],
        "std::ranges::equ": [{ completion: "std::ranges::equal(", detail: "check if two ranges are equal" },
                             { completion: "std::ranges::equal_range(", detail: "range of elements matching key" }],
        "std::ranges::low": [{ completion: "std::ranges::lower_bound(", detail: "iterator to first element not less than value" }],
        "std::ranges::upp": [{ completion: "std::ranges::upper_bound(", detail: "iterator to first element greater than value" }],

        //  Other sorted range ops
        "std::ranges::inp": [{ completion: "std::ranges::inplace_merge(", detail: "merge two ordered sub-ranges in-place" }],
        "std::ranges::mer": [{ completion: "std::ranges::merge(", detail: "merge two sorted ranges" }],

        //  Set operations (sorted ranges)
        "std::ranges::inc": [{ completion: "std::ranges::includes(", detail: "check if one sorted range is subset of another" }],
        "std::ranges::set": [{ completion: "std::ranges::set_difference(", detail: "compute difference of two sorted sets" },
                             { completion: "std::ranges::set_intersection(", detail: "compute intersection of two sorted sets" },
                             { completion: "std::ranges::set_symmetric_difference(", detail: "compute symmetric difference of two sets" },
                             { completion: "std::ranges::set_union(", detail: "compute union of two sorted sets" }],

        //  Heap operations
        "std::ranges::mak": [{ completion: "std::ranges::make_heap(", detail: "build a max heap from a range" }],
        "std::ranges::pop": [{ completion: "std::ranges::pop_heap(", detail: "remove largest element from max heap" }],
        "std::ranges::pus": [{ completion: "std::ranges::push_heap(", detail: "add element to a max heap" }],

        //  Misc
        "std::ranges::con": [{ completion: "std::ranges::contains(", detail: "check if value exists in range" },
                             { completion: "std::ranges::contains_subrange(", detail: "check if range contains a subrange (C++23)" }],

        //  std::ranges:: C++23 algorithms
        //  Fold
        "std::ranges::fol": [{ completion: "std::ranges::fold_left(", detail: "left fold over a range (C++23)" },
                             { completion: "std::ranges::fold_left_first(", detail: "left fold using first element as init (C++23)" },
                             { completion: "std::ranges::fold_right(", detail: "right fold over a range (C++23)" },
                             { completion: "std::ranges::fold_right_last(", detail: "right fold using last element as init (C++23)" },
                             { completion: "std::ranges::fold_left_with_iter(", detail: "left fold returning iterator and value (C++23)" },
                             { completion: "std::ranges::fold_left_first_with_iter(", detail: "left fold from first element returning iterator (C++23)" }],

        //  String-like range checks
        "std::ranges::end": [{ completion: "std::ranges::ends_with(", detail: "check if range ends with a suffix (C++23)" }],

        //  Numeric
        "std::ranges::iot": [{ completion: "std::ranges::iota(", detail: "fill range with successive increments (C++23)" }],

        //  Utility
        "std::ranges::to": [{ completion: "std::ranges::to<", detail: "convert a view into a container (C++23)" }],

        //  std::ranges:: C++26 algorithms
        "std::ranges::app": [{ completion: "std::ranges::approximately_sized_range<", detail: "concept: range with constant-time size estimate (C++26)" }],
        "std::ranges::as_": [{ completion: "std::ranges::as_input_view(", detail: "convert view to input-only non-common range (C++26)" }],
        "std::ranges::cac": [{ completion: "std::ranges::cache_latest_view(", detail: "cache last-accessed element of underlying range (C++26)" }],
        "std::ranges::cat": [{ completion: "std::ranges::concat_view(", detail: "view of concatenated adapted views (C++26)" }],
        "std::ranges::res": [{ completion: "std::ranges::reserve_hint(", detail: "returns reserve hint integer for a range (C++26)" }],
};

//  C only suggestions (.c files)
const C_ONLY: Record<string, Suggestion[]> = {
        //  C90 headers
        "#include <a": [{ completion: "#include <assert.h>", detail: "runtime assertions" }],
        "#include <c": [{ completion: "#include <ctype.h>", detail: "character classification" }],
        "#include <e": [{ completion: "#include <errno.h>", detail: "error codes" }],
        "#include <f": [{ completion: "#include <float.h>", detail: "floating-point limits" }],
        "#include <i": [{ completion: "#include <iso646.h>", detail: "alternative operator spellings" }],
        "#include <l": [{ completion: "#include <limits.h>", detail: "integer limits" },
                        { completion: "#include <locale.h>", detail: "localization" }],
        "#include <m": [{ completion: "#include <math.h>", detail: "math functions" }],
        "#include <s": [{ completion: "#include <setjmp.h>", detail: "non-local jumps" },
                        { completion: "#include <signal.h>", detail: "signal handling" },
                        { completion: "#include <stdarg.h>", detail: "variable arguments" },
                        { completion: "#include <stddef.h>", detail: "size types and NULL" },
                        { completion: "#include <stdio.h>",  detail: "standard I/O" },
                        { completion: "#include <stdlib.h>", detail: "general utilities" },
                        { completion: "#include <string.h>", detail: "string handling" }],
        "#include <t": [{ completion: "#include <time.h>", detail: "time utilities" }],
        "#include <w": [{ completion: "#include <wchar.h>", detail: "wide characters" },
                        { completion: "#include <wctype.h>", detail: "wide char classification" }],

        //  C99 headers
        "#include <co": [{ completion: "#include <complex.h>", detail: "complex numbers (C99)" }],
        "#include <fe": [{ completion: "#include <fenv.h>", detail: "floating-point environment (C99)" }],
        "#include <in": [{ completion: "#include <inttypes.h>", detail: "integer format macros (C99)" }],
        "#include <st": [{ completion: "#include <stdbool.h>", detail: "boolean type (C99)" },
                        { completion: "#include <stdint.h>", detail: "fixed-width integers (C99)" }],
        "#include <tg": [{ completion: "#include <tgmath.h>", detail: "type-generic math (C99)" }],

        //  C11 headers
        "#include <sta": [{ completion: "#include <stdalign.h>", detail: "alignment support (C11)" },
                          { completion: "#include <stdatomic.h>", detail: "atomic operations (C11)" },
                          { completion: "#include <stdnoreturn.h>", detail: "_Noreturn convenience (C11)" }],
        "#include <thr": [{ completion: "#include <threads.h>", detail: "thread support (C11)" }],
        "#include <u":   [{ completion: "#include <uchar.h>", detail: "Unicode char types (C11)" }],

        //  C23 headers
        "#include <stdb": [{ completion: "#include <stdbit.h>", detail: "bit utilities (C23)" },
                           { completion: "#include <stdckdint.h>", detail: "checked integer arithmetic (C23)" }],
        "#include <haz": [{ completion: "#include <hazptr.h>", detail: "hazard pointers (C23)" }],

        //  C-only keywords & specifiers
        "res": [{ completion: "restrict ", detail: "pointer restrict qualifier (C99)" }],
        "nul": [{ completion: "nullptr", detail: "null pointer (C23)" }],
        "NUL": [{ completion: "NULL", detail: "null pointer (C style)" }],
        "con": [{ completion: "const ", detail: "constant qualifier" }],
        "str": [{ completion: "struct ", detail: "struct declaration" }],
        "enu": [{ completion: "enum ", detail: "enum declaration" }],
        "unio":[{ completion: "union ", detail: "union declaration" }],
        "typ": [{ completion: "typedef ", detail: "type alias" }],
        "uns": [{ completion: "unsigned ", detail: "unsigned type" }],
        "lon": [{ completion: "long ", detail: "long type" }],
        "sig": [{ completion: "signed ", detail: "signed type" }],

        //  C11 keywords
        "_Al": [{ completion: "_Alignas(", detail: "alignment specifier (C11)" },
                { completion: "_Alignof(", detail: "alignment query (C11)" }],
        "_At": [{ completion: "_Atomic ", detail: "atomic type specifier (C11)" }],
        "_Bo": [{ completion: "_Bool", detail: "boolean type (C99)" }],
        "_Co": [{ completion: "_Complex", detail: "complex type (C99)" }],
        "_Ge": [{ completion: "_Generic(", detail: "type-generic expression (C11)" }],
        "_Im": [{ completion: "_Imaginary", detail: "imaginary type (C99)" }],
        "_No": [{ completion: "_Noreturn", detail: "no-return attribute (C11)" }],
        "_St": [{ completion: "_Static_assert(", detail: "compile-time assertion (C11)" }],
        "_Th": [{ completion: "_Thread_local", detail: "thread-local storage (C11)" }],

        //  C idioms
        "arr": [{ completion: "sizeof(arr) / sizeof(arr[0])", detail: "array length idiom" }],
        "err": [{ completion: "errno", detail: "last error code" }],
        "va_": [{ completion: "va_list", detail: "variadic arg list type" },
                { completion: "va_start(", detail: "init variadic args" },
                { completion: "va_arg(", detail: "get next variadic arg" },
                { completion: "va_end(", detail: "clean up variadic args" },
                { completion: "va_copy(", detail: "copy variadic arg list (C99)" }],
};

// Find the best suggestion for the current word prefix and language.
// Checks language-specific dictionary first, then shared.
export function findSuggestion(wordPrefix: string, language: string): Suggestion | null {
        const langDict = language === 'cpp' ? CPP_ONLY : C_ONLY;
      
        for (let len = wordPrefix.length; len >= 3; len--) {
          const key = wordPrefix.slice(0, len);
      
          //  Ranges-specific first (cpp only)
          if (language === 'cpp' && CPP_RANGES_ONLY[key]?.length > 0) {
            return CPP_RANGES_ONLY[key][0];
          }
          //  Language-specific second
          if (langDict[key]?.length > 0) {
            return langDict[key][0];
          }
          //  Then shared
          if (SHARED[key]?.length > 0) {
            return SHARED[key][0];
          }
        }
        return null;
}