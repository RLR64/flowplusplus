//  keywords_cpp.ts

import { baseSuggestion, cppStandard, isAllowed } from './types';

// Type
export interface cppKeywordSuggestion extends baseSuggestion {
    standard: cppStandard;
}

// C++ Keywords Dictionary
const cppKeywords: Record<string, cppKeywordSuggestion[]> = {

    // Shared with C but tagged C++98
    "asm":  [{ completion: "asm",       detail: "inline assembly block",                          standard: "C++98" }],
    "boo":  [{ completion: "bool",      detail: "boolean type",                                   standard: "C++98" }],
    "bre":  [{ completion: "break",     detail: "terminate the nearest enclosing loop or switch", standard: "C++98" }],
    "cas":  [{ completion: "case",      detail: "label within a switch statement",                standard: "C++98" }],
    "cat":  [{ completion: "catch",     detail: "handle an exception",                            standard: "C++98" }],
    "cha":  [{ completion: "char",      detail: "character type",                                 standard: "C++98" }],
    "con":  [{ completion: "const",     detail: "define an immutable object or member function",  standard: "C++98" }],
    "cont": [{ completion: "continue",  detail: "skip to the next loop iteration",                standard: "C++98" }],
    "def":  [{ completion: "default",   detail: "default label in a switch statement",            standard: "C++98" }],
    "do":   [{ completion: "do",        detail: "begin a do-while loop",                          standard: "C++98" }],
    "dou":  [{ completion: "double",    detail: "double-precision floating point type",           standard: "C++98" }],
    "els":  [{ completion: "else",      detail: "alternative branch of an if statement",          standard: "C++98" }],
    "enu":  [{ completion: "enum",      detail: "define an enumeration type",                     standard: "C++98" }],
    "ext":  [{ completion: "extern",    detail: "declare a symbol with external linkage",         standard: "C++98" }],
    "fal":  [{ completion: "false",     detail: "boolean false literal",                          standard: "C++98" }],
    "flo":  [{ completion: "float",     detail: "single-precision floating point type",           standard: "C++98" }],
    "for":  [{ completion: "for",       detail: "begin a for loop",                               standard: "C++98" }],
    "got":  [{ completion: "goto",      detail: "jump to a labeled statement",                    standard: "C++98" }],
    "if":   [{ completion: "if",        detail: "conditional statement",                          standard: "C++98" }],
    "inl":  [{ completion: "inline",    detail: "suggest inline function expansion",              standard: "C++98" }],
    "int":  [{ completion: "int",       detail: "integer type",                                   standard: "C++98" }],
    "lon":  [{ completion: "long",      detail: "long integer type modifier",                     standard: "C++98" }],
    "reg":  [{ completion: "register",  detail: "suggest storage in a CPU register",              standard: "C++98" }],
    "ret":  [{ completion: "return",    detail: "return from a function",                         standard: "C++98" }],
    "sho":  [{ completion: "short",     detail: "short integer type modifier",                    standard: "C++98" }],
    "sig":  [{ completion: "signed",    detail: "signed integer type modifier",                   standard: "C++98" }],
    "siz":  [{ completion: "sizeof",    detail: "obtain the size of a type or object",            standard: "C++98" }],
    "sta":  [{ completion: "static",    detail: "static storage duration or internal linkage",    standard: "C++98" }],
    "str":  [{ completion: "struct",    detail: "define a structure type",                        standard: "C++98" }],
    "swi":  [{ completion: "switch",    detail: "multi-way branch statement",                     standard: "C++98" }],
    "tru":  [{ completion: "true",      detail: "boolean true literal",                           standard: "C++98" }],
    "typ":  [{ completion: "typedef",   detail: "define a type alias",                            standard: "C++98" }],
    "uni":  [{ completion: "union",     detail: "define a union type",                            standard: "C++98" }],
    "uns":  [{ completion: "unsigned",  detail: "unsigned integer type modifier",                 standard: "C++98" }],
    "voi":  [{ completion: "void",      detail: "absence of type or value",                       standard: "C++98" }],
    "vol":  [{ completion: "volatile",  detail: "prevent certain compiler optimizations",         standard: "C++98" }],
    "whi":  [{ completion: "while",     detail: "begin a while loop",                             standard: "C++98" }],

    // Alternative operator spellings
    "and":  [{ completion: "and",     detail: "alternative spelling for &&", standard: "C++98" }],
    "and_": [{ completion: "and_eq",  detail: "alternative spelling for &=", standard: "C++98" }],
    "bit":  [{ completion: "bitand",  detail: "alternative spelling for &",  standard: "C++98" }],
    "bito": [{ completion: "bitor",   detail: "alternative spelling for |",  standard: "C++98" }],
    "com":  [{ completion: "compl",   detail: "alternative spelling for ~",  standard: "C++98" }],
    "not":  [{ completion: "not",     detail: "alternative spelling for !",  standard: "C++98" }],
    "not_": [{ completion: "not_eq",  detail: "alternative spelling for !=", standard: "C++98" }],
    "or":   [{ completion: "or",      detail: "alternative spelling for ||", standard: "C++98" }],
    "or_":  [{ completion: "or_eq",   detail: "alternative spelling for |=", standard: "C++98" }],
    "xor":  [{ completion: "xor",     detail: "alternative spelling for ^",  standard: "C++98" }],
    "xor_": [{ completion: "xor_eq",  detail: "alternative spelling for ^=", standard: "C++98" }],

    // C++ only
    // C++98
    "cla":      [{ completion: "class",            detail: "define a class type",                           standard: "C++98" }],
    "const_":   [{ completion: "const_cast",       detail: "cast away const or volatile qualifiers",        standard: "C++98" }],
    "del":      [{ completion: "delete",           detail: "destroy dynamically allocated objects",         standard: "C++98" }],
    "dyn":      [{ completion: "dynamic_cast",     detail: "perform checked runtime type conversion",       standard: "C++98" }],
    "exp":      [{ completion: "explicit",         detail: "prevent implicit conversions and constructors", standard: "C++98" }],
    "expo":     [{ completion: "export",           detail: "export template definitions",                   standard: "C++98" }],
    "fri":      [{ completion: "friend",           detail: "grant access to private and protected members", standard: "C++98" }],
    "mut":      [{ completion: "mutable",          detail: "allow modification inside const objects",       standard: "C++98" }],
    "nam":      [{ completion: "namespace",        detail: "declare a named scope",                         standard: "C++98" }],
    "new":      [{ completion: "new",              detail: "allocate dynamic memory",                       standard: "C++98" }],
    "ope":      [{ completion: "operator",         detail: "declare or overload an operator",               standard: "C++98" }],
    "pri":      [{ completion: "private",          detail: "private class access specifier",                standard: "C++98" }],
    "pro":      [{ completion: "protected",        detail: "protected class access specifier",              standard: "C++98" }],
    "pub":      [{ completion: "public",           detail: "public class access specifier",                 standard: "C++98" }],
    "rei":      [{ completion: "reinterpret_cast", detail: "perform low-level reinterpretation cast",       standard: "C++98" }],
    "static_c": [{ completion: "static_cast",      detail: "perform compile-time checked conversion",       standard: "C++98" }],
    "tem":      [{ completion: "template",         detail: "define a template",                             standard: "C++98" }],
    "thi":      [{ completion: "this",             detail: "pointer to the current object instance",        standard: "C++98" }],
    "thr":      [{ completion: "throw",            detail: "throw an exception",                            standard: "C++98" }],
    "try":      [{ completion: "try",              detail: "begin an exception handling block",             standard: "C++98" }],
    "typi":     [{ completion: "typeid",           detail: "query runtime type information",                standard: "C++98" }],
    "type":     [{ completion: "typename",         detail: "specify a dependent type name",                 standard: "C++98" }],
    "usi":      [{ completion: "using",            detail: "introduce type aliases or namespace members",   standard: "C++98" }],
    "vir":      [{ completion: "virtual",          detail: "enable dynamic dispatch for member functions",  standard: "C++98" }],
    "wcha":     [{ completion: "wchar_t",          detail: "wide character type",                           standard: "C++98" }],

    // C++11
    "ali":    [{ completion: "alignas",       detail: "specify the alignment requirement of a type",       standard: "C++11" }],
    "align":  [{ completion: "alignof",       detail: "obtain the alignment requirement of a type",        standard: "C++11" }],
    "aut":    [{ completion: "auto",          detail: "type deduction",                                    standard: "C++11" }],
    "char1":  [{ completion: "char16_t",      detail: "UTF-16 character type",                             standard: "C++11" }],
    "char3":  [{ completion: "char32_t",      detail: "UTF-32 character type",                             standard: "C++11" }],
    "const":  [{ completion: "constexpr",     detail: "declare compile-time evaluatable entities",         standard: "C++11" }],
    "dec":    [{ completion: "decltype",      detail: "query the declared type of an expression",          standard: "C++11" }],
    "fin":    [{ completion: "final",         detail: "prevent further inheritance or overriding",         standard: "C++11" }],
    "noe":    [{ completion: "noexcept",      detail: "specify that a function does not throw exceptions", standard: "C++11" }],
    "nul":    [{ completion: "nullptr",       detail: "null pointer literal",                              standard: "C++11" }],
    "ove":    [{ completion: "override",      detail: "indicate that a virtual function overrides a base", standard: "C++11" }],
    "stat":   [{ completion: "static_assert", detail: "compile-time assertion",                            standard: "C++11" }],
    "thread": [{ completion: "thread_local",  detail: "declare thread storage duration",                   standard: "C++11" }],

    // C++17
    "__h": [{ completion: "__has_include", detail: "check if a header file can be included", standard: "C++17" }],

    // C++20
    "char8":  [{ completion: "char8_t",             detail: "UTF-8 character type",                          standard: "C++20" }],
    "conc":   [{ completion: "concept",             detail: "define template constraints",                   standard: "C++20" }],
    "conste": [{ completion: "consteval",           detail: "require compile-time evaluation",               standard: "C++20" }],
    "consti": [{ completion: "constinit",           detail: "ensure static initialization at compile time",  standard: "C++20" }],
    "co_a":   [{ completion: "co_await",            detail: "suspend execution awaiting a coroutine result", standard: "C++20" }],
    "co_r":   [{ completion: "co_return",           detail: "return from a coroutine",                       standard: "C++20" }],
    "co_y":   [{ completion: "co_yield",            detail: "yield a value from a coroutine",                standard: "C++20" }],
    "imp":    [{ completion: "import",              detail: "import a module or header unit",                standard: "C++20" }],
    "mod":    [{ completion: "module",              detail: "declare a named module",                        standard: "C++20" }],
    "req":    [{ completion: "requires",            detail: "specify template requirements and constraints", standard: "C++20" }],
    "__ha":   [{ completion: "__has_cpp_attribute", detail: "check for support of a C++ attribute",          standard: "C++20" }],

    // C++23
    "elifd": [{ completion: "elifdef",  detail: "conditional directive checking if macro is defined",     standard: "C++23" }],
    "elifn": [{ completion: "elifndef", detail: "conditional directive checking if macro is not defined", standard: "C++23" }],
    "war":   [{ completion: "warning",  detail: "emit a compiler warning message",                        standard: "C++23" }],

    // C++26
    "contr":   [{ completion: "contract_assert", detail: "runtime contract assertion statement",     standard: "C++26" }],
    "emb":     [{ completion: "embed",           detail: "embed binary resources into the program",  standard: "C++26" }],
    "pre":     [{ completion: "pre",             detail: "introduce a precondition contract",        standard: "C++26" }],
    "post":    [{ completion: "post",            detail: "introduce a postcondition contract",       standard: "C++26" }],
    "ref":     [{ completion: "reflexpr",        detail: "static reflection",                        standard: "C++26" }],
    "__has_e": [{ completion: "__has_embed",     detail: "check for support of the embed directive", standard: "C++26" }],
};

// Query
export function findCppKeywordSuggestions(
    wordPrefix: string,
    activeStd: cppStandard
): cppKeywordSuggestion[] {

    let bestMatch: cppKeywordSuggestion[] = [];

    for (let len = 3; len <= wordPrefix.length; len++) {
        const key = wordPrefix.slice(0, len);
        if (cppKeywords[key]) {
            bestMatch = cppKeywords[key].filter(s => isAllowed(s, activeStd));
        }
    }

    return bestMatch;
}