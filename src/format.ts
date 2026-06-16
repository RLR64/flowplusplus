// format.ts

import { baseSuggestion, cppStandard, isAllowed } from './types';

// Type
export interface formatSuggestion extends baseSuggestion {}

// Format dictionary
const format: Record<string, formatSuggestion[]> = {

    // Formatting functions
    "std::for": [{ completion: "format",         detail: "stores formatted representation of the arguments in a new string",                                              standard: "C++20" },
                 { completion: "format_to",      detail: "writes out formatted representation of its arguments through an output iterator",                               standard: "C++20" },
                 { completion: "format_to_n",    detail: "writes out formatted representation of its arguments through an output iterator, not exceeding specified size", standard: "C++20" },
                 { completion: "formatted_size", detail: "determines the number of characters necessary to store the formatted representation of its arguments",          standard: "C++20" }],
    
    // Format strings
    "std::bas":  [{ completion: "basic_format_string", detail: "class template that performs compile-time format string checks at construction time",  standard: "C++20" }],
    "std::dyn":  [{ completion: "dynamic_format",      detail: "creates dynamic format strings directly usable in user-oriented formatting functions", standard: "C++26" }],
    "std::form": [{ completion: "format_string",       detail: "class template that performs compile-time format string checks at construction time",  standard: "C++20" }],
    "std::wfo":  [{ completion: "wformat_string",      detail: "class template that performs compile-time format string checks at construction time",  standard: "C++20" }],

    // Formatting concepts
    "std::forma": [{ completion: "formattable", detail: "specifies that a type is formattable, that is, it specializes std::formatter and provides member functions parse and format", standard: "C++23" }],

    // Extensibility support and implementation detail
    "std::basi":   [{ completion: "basic_format_arg",                         detail: "class template that provides access to a formatting argument for user-defined formatters",      standard: "C++20" },
                    { completion: "basic_format_args",                        detail: "class that provides access to all formatting arguments",                                        standard: "C++20" },
                    { completion: "basic_format_context",                     detail: "formatting state, including all formatting arguments and the output iterator",                  standard: "C++20" },
                    { completion: "basic_format_parse_context",               detail: "formatting string parser state",                                                                standard: "C++20" }],
    "std::ena":    [{ completion: "enable_nonlocking_formatter_optimization", detail: "indicates the argument type can be efficiently printed",                                        standard: "C++23" }],
    "std::format": [{ completion: "format_args",                              detail: "class that provides access to all formatting arguments",                                        standard: "C++20" },
                    { completion: "format_context",                           detail: "formatting state, including all formatting arguments and the output iterator",                  standard: "C++20" },
                    { completion: "format_error",                             detail: "exception type thrown on formatting errors",                                                    standard: "C++20" },
                    { completion: "format_kind",                              detail: "selects a suited std::range_format for a range",                                                standard: "C++23" },
                    { completion: "format_parse_context",                     detail: "formatting string parser state",                                                                standard: "C++20" },
                    { completion: "formatter",                                detail: "defines formatting rules for a given type",                                                     standard: "C++20" }],
    "std::mak":    [{ completion: "make_format_args",                         detail: "creates a type-erased object referencing all formatting arguments, convertible to format_args", standard: "C++20" },
                    { completion: "make_wformat_args",                        detail: "creates a type-erased object referencing all formatting arguments, convertible to format_args", standard: "C++20" }],
    "std::ran":    [{ completion: "range_format",                             detail: "specifies how a range should be formatted",                                                     standard: "C++23" },
                    { completion: "range_formatter",                          detail: "class template that helps implementing std::formatter specializations for range types",         standard: "C++23" }],
    "std::vfo":    [{ completion: "vformat",                                  detail: "non-template variant of std::format using type-erased argument representation",                 standard: "C++20" },
                    { completion: "vformat_to",                               detail: "non-template variant of std::format_to using type-erased argument representation",              standard: "C++20" }],
    "std::vis":    [{ completion: "visit_format_arg",                         detail: "argument visitation interface for user-defined formatters",                                     standard: "C++20" }],
    "std::wfor":   [{ completion: "wformat_args",                             detail: "class that provides access to all formatting arguments",                                        standard: "C++20" },
                    { completion: "wformat_context",                          detail: "formatting state, including all formatting arguments and the output iterator",                  standard: "C++20" },
                    { completion: "wformat_parse_context",                    detail: "formatting string parser state",                                                                standard: "C++20" }],
};

// Query
export function findFormatSuggestions(
    wordPrefix: string,
    activeStd: cppStandard
): formatSuggestion[] {

    let bestMatch: formatSuggestion[] = [];

    for (let len = 3; len <= wordPrefix.length; len++) {
        const key = wordPrefix.slice(0, len);
        if (format[key]) {
            bestMatch = format[key].filter(s => isAllowed(s, activeStd));
        }
    }

    return bestMatch;
}