//  keywords_c.ts

import { baseSuggestion, cStandard, isAllowed } from './types';

// Type
export interface cKeywordSuggestion extends baseSuggestion {
    standard: cStandard;
}

// C Keywords Dictionary
const cKeywords: Record<string, cKeywordSuggestion[]> = {

    // C89
    "bre":  [{ completion: "break",     detail: "terminate the nearest enclosing loop or switch", standard: "C89" }],
    "cas":  [{ completion: "case",      detail: "label within a switch statement",                standard: "C89" }],
    "cha":  [{ completion: "char",      detail: "character type",                                 standard: "C89" }],
    "con":  [{ completion: "const",     detail: "define an immutable object",                     standard: "C89" }],
    "cont": [{ completion: "continue",  detail: "skip to the next loop iteration",                standard: "C89" }],
    "def":  [{ completion: "default",   detail: "default label in a switch statement",            standard: "C89" }],
    "do":   [{ completion: "do",        detail: "begin a do-while loop",                          standard: "C89" }],
    "dou":  [{ completion: "double",    detail: "double-precision floating point type",           standard: "C89" }],
    "els":  [{ completion: "else",      detail: "alternative branch of an if statement",          standard: "C89" }],
    "enu":  [{ completion: "enum",      detail: "define an enumeration type",                     standard: "C89" }],
    "ext":  [{ completion: "extern",    detail: "declare a symbol with external linkage",         standard: "C89" }],
    "flo":  [{ completion: "float",     detail: "single-precision floating point type",           standard: "C89" }],
    "for":  [{ completion: "for",       detail: "begin a for loop",                               standard: "C89" }],
    "got":  [{ completion: "goto",      detail: "jump to a labeled statement",                    standard: "C89" }],
    "if":   [{ completion: "if",        detail: "conditional statement",                          standard: "C89" }],
    "int":  [{ completion: "int",       detail: "integer type",                                   standard: "C89" }],
    "lon":  [{ completion: "long",      detail: "long integer type modifier",                     standard: "C89" }],
    "reg":  [{ completion: "register",  detail: "suggest storage in a CPU register",              standard: "C89" }],
    "ret":  [{ completion: "return",    detail: "return from a function",                         standard: "C89" }],
    "sho":  [{ completion: "short",     detail: "short integer type modifier",                    standard: "C89" }],
    "sig":  [{ completion: "signed",    detail: "signed integer type modifier",                   standard: "C89" }],
    "siz":  [{ completion: "sizeof",    detail: "obtain the size of a type or object",            standard: "C89" }],
    "sta":  [{ completion: "static",    detail: "static storage duration or internal linkage",    standard: "C89" }],
    "str":  [{ completion: "struct",    detail: "define a structure type",                        standard: "C89" }],
    "swi":  [{ completion: "switch",    detail: "multi-way branch statement",                     standard: "C89" }],
    "typ":  [{ completion: "typedef",   detail: "define a type alias",                            standard: "C89" }],
    "uni":  [{ completion: "union",     detail: "define a union type",                            standard: "C89" }],
    "uns":  [{ completion: "unsigned",  detail: "unsigned integer type modifier",                 standard: "C89" }],
    "voi":  [{ completion: "void",      detail: "absence of type or value",                       standard: "C89" }],
    "vol":  [{ completion: "volatile",  detail: "prevent certain compiler optimizations",         standard: "C89" }],
    "whi":  [{ completion: "while",     detail: "begin a while loop",                             standard: "C89" }],

    // C99
    "_Bo":  [{ completion: "_Bool",      detail: "boolean type (use <stdbool.h> for bool)", standard: "C99" }],
    "_Co":  [{ completion: "_Complex",   detail: "complex number type",                     standard: "C99" }],
    "_Im":  [{ completion: "_Imaginary", detail: "imaginary number type",                   standard: "C99" }],
    "inli": [{ completion: "inline",     detail: "suggest inline function expansion",       standard: "C99" }],
    "res":  [{ completion: "restrict",   detail: "pointer aliasing hint for optimisation",  standard: "C99" }],

    // C11
    "_Al":  [{ completion: "_Alignas",       detail: "specify alignment requirement",     standard: "C11" }],
    "_Alo": [{ completion: "_Alignof",       detail: "obtain alignment requirement",      standard: "C11" }],
    "_At":  [{ completion: "_Atomic",        detail: "atomic type specifier",             standard: "C11" }],
    "_Ge":  [{ completion: "_Generic",       detail: "type-generic expression",           standard: "C11" }],
    "_No":  [{ completion: "_Noreturn",      detail: "indicate function does not return", standard: "C11" }],
    "_St":  [{ completion: "_Static_assert", detail: "compile-time assertion",            standard: "C11" }],
    "_Th":  [{ completion: "_Thread_local",  detail: "thread storage duration",           standard: "C11" }],

    // C23
    "ali":   [{ completion: "alignas",       detail: "specify alignment requirement (C23)",        standard: "C23" }],
    "alig":  [{ completion: "alignof",       detail: "obtain alignment requirement (C23)",         standard: "C23" }],
    "aut":   [{ completion: "auto",          detail: "automatic storage duration",                 standard: "C23" }],
    "bit":   [{ completion: "bit_cast",      detail: "reinterpret object representation",          standard: "C23" }],
    "const": [{ completion: "constexpr",     detail: "declare compile-time evaluatable objects",   standard: "C23" }],
    "eli":   [{ completion: "elifdef",       detail: "conditional directive if macro defined",     standard: "C23" }],
    "elif":  [{ completion: "elifndef",      detail: "conditional directive if macro not defined", standard: "C23" }],
    "fal":   [{ completion: "false",         detail: "boolean false literal",                      standard: "C23" }],
    "nul":   [{ completion: "nullptr",       detail: "null pointer constant",                      standard: "C23" }],
    "stat":  [{ completion: "static_assert", detail: "compile-time assertion",                     standard: "C23" }],
    "thr":   [{ completion: "thread_local",  detail: "thread storage duration",                    standard: "C23" }],
    "tru":   [{ completion: "true",          detail: "boolean true literal",                       standard: "C23" }],
    "type":  [{ completion: "typeof",        detail: "query type of an expression",                standard: "C23" }],
    "typeo": [{ completion: "typeof_unqual", detail: "query unqualified type of an expression",    standard: "C23" }],
};

// Query
export function findCKeywordSuggestions(
    wordPrefix: string,
    activeStd: cStandard
): cKeywordSuggestion[] {

    let bestMatch: cKeywordSuggestion[] = [];

    for (let len = 3; len <= wordPrefix.length; len++) {
        const key = wordPrefix.slice(0, len);
        if (cKeywords[key]) {
            bestMatch = cKeywords[key].filter(s => isAllowed(s, activeStd));
        }
    }

    return bestMatch;
}