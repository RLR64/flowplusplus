// headers_c.ts

import { baseSuggestion, cStandard, isAllowed } from './types';

// Type
export interface cHeaderSuggestion extends baseSuggestion {
    standard: cStandard;
}

// C Header dictionary
const cHeader: Record<string, cHeaderSuggestion[]> = {

    // C only headers        
    "#include <as":   [{ completion: "assert.h>", detail: "runtime assertions",                            standard: "C89" }],
    "#include <ct":   [{ completion: "ctype.h>",  detail: "character classification",                      standard: "C89" }],
    "#include <er":   [{ completion: "errno.h>",  detail: "error codes",                                   standard: "C89" }],
    "#include <fl":   [{ completion: "float.h>",  detail: "floating-point limits",                         standard: "C89" }],
    "#include <li":   [{ completion: "limits.h>", detail: "integer type limits",                           standard: "C89" }],
    "#include <lo":   [{ completion: "locale.h>", detail: "localisation utilities",                        standard: "C89" }],
    "#include <ma":   [{ completion: "math.h>",   detail: "math functions",                                standard: "C89" }],
    "#include <se":   [{ completion: "setjmp.h>", detail: "non-local jumps",                               standard: "C89" }],
    "#include <si":   [{ completion: "signal.h>", detail: "signal handling",                               standard: "C89" }],
    "#include <stda": [{ completion: "stdarg.h>", detail: "variadic argument handling",                    standard: "C89" }],
    "#include <stdb": [{ completion: "stddef.h>", detail: "size_t, ptrdiff_t, NULL",                       standard: "C89" }],
    "#include <stdi": [{ completion: "stdio.h>",  detail: "C-style input/output",                          standard: "C89" }],
    "#include <stdl": [{ completion: "stdlib.h>", detail: "memory allocation, utilities, process control", standard: "C89" }],
    "#include <str":  [{ completion: "string.h>", detail: "string and memory manipulation",                standard: "C89" }],
    "#include <ti":   [{ completion: "time.h>",   detail: "time and date utilities",                       standard: "C89" }],

    // C95
    "#include <is":  [{ completion: "iso646.h>",  detail: "defines macros for alternative operator spellings", standard: "C95"}],
    "#include <wch": [{ completion: "wchar.h>",   detail: "wide character handling",                           standard: "C95" }],
    "#include <wct": [{ completion: "wctype.h>",  detail: "wide character classification",                     standard: "C95" }],

    // C11
    "#include <st":  [{ completion: "stdatomic.h>", detail: "provides atomic operations, in particular, it's a part of the concurrency support library",         standard: "C11"}],
    "#include <th":  [{ completion: "threads.h>",   detail: "provides support for threads, mutual exclusion, condition variables, and thread-specific storages", standard: "C11"}],
    "#include <uc":  [{ completion: "uchar.h>",     detail: "part of null-terminated multibyte strings library",                                                 standard: "C11"}],

    // C23
    "#include <stdbi": [{completion: "stdbit.h>",    detail: "provides macros and functions to work with the byte ordering and byte and bit representation of C objects", standard: "C23"}],
    "#include <stdc":  [{completion: "stdckdint.h>", detail: "provides type-generic macros for checked integer arithmetic",                                               standard: "C23"}],
};

// Query
export function findCHeaderSuggestions(
    wordPrefix: string,
    activeStd: cStandard
): cHeaderSuggestion[] {

    let bestMatch: cHeaderSuggestion[] = [];

    for (let len = 3; len <= wordPrefix.length; len++) {
        const key = wordPrefix.slice(0, len);
        if (cHeader[key]) {
            bestMatch = cHeader[key].filter(s => isAllowed(s, activeStd));
        }
    }

    return bestMatch;
}