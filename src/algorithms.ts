// algorithms.ts

import { baseSuggestion, cppStandard, isAllowed } from './types';

// Type
export interface algorithmSuggestion extends baseSuggestion {}

// Algorithms dictionary
const algorithm: Record<string, algorithmSuggestion[]> = {

    // Batch operations
    "std::for": [{ completion: "for_each",   detail: "applies a unary function object to elements from a range",        standard: "C++17" },
                 { completion: "for_each_n", detail: "applies a function object to the first N elements of a sequence", standard: "C++17" }],

    // Search operations
    "std::all": [{ completion: "all_of",      detail: "checks if a predicate is true for all, any or none of the elements in a range", standard: "C++11" }],
    "std::any": [{ completion: "any_of",      detail: "checks if a predicate is true for all, any or none of the elements in a range", standard: "C++11" }],
    "std::non": [{ completion: "none_of",     detail: "checks if a predicate is true for all, any or none of the elements in a range", standard: "C++11" }],
    "std::cou": [{ completion: "count_if",    detail: "returns the number of elements satisfying specific criteria",                   standard: "C++17" }],
    "std::fin": [{ completion: "find",        detail: "finds the first element satisfying specific criteria",                          standard: "C++11" },
                 { completion: "find_end",    detail: "finds the last sequence of elements in a certain range",                        standard: "C++17" },
                 { completion: "find_if",     detail: "finds the first element satisfying specific criteria",                          standard: "C++11" },
                 { completion: "find_if_not", detail: "finds the first element satisfying specific criteria",                          standard: "C++11" }],

    // Modifying sequence operations
    // Copy operations
    "std::cop": [{ completion: "copy",          detail: "copies a range of elements to a new location",                   standard: "C++11" },
                 { completion: "copy_backward", detail: "copies a range of elements in backwards order",                  standard: "C++11" },
                 { completion: "copy_if",       detail: "copies a range of elements to a new location",                   standard: "C++11" },
                 { completion: "copy_n",        detail: "copies a number of elements to a new location",                  standard: "C++11" }],
    "std::mov": [{ completion: "move",          detail: "moves a range of elements to a new location",                    standard: "C++11" },
                 { completion: "move_backward", detail: "moves a range of elements to a new location in backwards order", standard: "C++11" }],

    // Swap operations
    "std::swa": [{ completion: "swap",        detail: "swaps the values of two objects",                standard: "C++11" },
                 { completion: "swap_ranges", detail: "swaps two ranges of elements",                   standard: "C++11" }],
    "std::ite": [{ completion: "iter_swap",   detail: "swaps the elements pointed to by two iterators", standard: "C++11" }],

    // Transformation operations
    "std::rep": [{ completion: "replace_copy_if", detail: "copies a range, replacing elements satisfying specific criteria with another value", standard: "C++17" },
                 { completion: "replace_if",      detail: "replaces all values satisfying specific criteria with another value",                standard: "C++17" }],
    "std::tra": [{ completion: "transform",       detail: "applies a function to a range of elements, storing results in a destination range",  standard: "C++17" }],

    // Generation operations
    "std::fil": [{ completion: "fill",       detail: "copy-assigns the given value to every element in a range",                     standard: "C++17" },
                 { completion: "fill_n",     detail: "copy-assigns the given value to N elements in a range",                        standard: "C++17" }],
    "std::gen": [{ completion: "generate",   detail: "assigns the results of successive function calls to every element in a range", standard: "C++17" },
                 { completion: "generate_n", detail: "assigns the results of successive function calls to N elements in a range",    standard: "C++17" }],

    // Removing operations
    "std::rem": [{ completion: "remove",         detail: "removes elements satisfying specific criteria",                                    standard: "C++17" },
                 { completion: "remove_copy_if", detail: "copies a range of elements omitting those that satisfy specific criteria",         standard: "C++17" },
                 { completion: "remove_if",      detail: "removes elements satisfying specific criteria",                                    standard: "C++17" }],
    "std::uni": [{ completion: "unique",         detail: "removes consecutive duplicate elements in a range",                                standard: "C++17" },
                 { completion: "unique_copy",    detail: "creates a copy of some range of elements that contains no consecutive duplicates", standard: "C++17" }],

    // Order-changing operations
    "std::ran": [{ completion: "random_shuffle", detail: "randomly re-orders elements in a range",    standard: "C++17" }],
    "std::rev": [{ completion: "reverse",        detail: "reverses the order of elements in a range", standard: "C++17" }],
    "std::rot": [{ completion: "rotate",         detail: "reverses the order of elements in a range", standard: "C++17" },
                 { completion: "rotate_copy",    detail: "copies and rotate a range of elements",     standard: "C++17" }],
    "std::shi": [{ completion: "shift_left",     detail: "shifts elements in a range",                standard: "C++20" },
                 { completion: "shift_right",    detail: "shifts elements in a range",                standard: "C++20" }],
    "std::shu": [{ completion: "shuffle",        detail: "randomly re-orders elements in a range",    standard: "C++17" }],

    // Sampling operations
    "std::sam": [{ completion: "sample", detail: "selects N random elements from a sequence", standard: "C++17" }],

    // Partitioning operations
    "std::par": [{ completion: "partitioned",      detail: "divides a range of elements into two groups",                   standard: "C++11" },
                 { completion: "partitioned_copy", detail: "copies a range dividing the elements into two groups",          standard: "C++11" },
                 { completion: "partition_point",  detail: "locates the partition point of a partitioned range",            standard: "C++11" }],
    "std::is_": [{ completion: "is_partitioned",   detail: "determines if the range is partitioned by the given predicate", standard: "C++11" }],

    // Sorting operations
    "std::sor":  [{ completion: "sort",              detail: "sorts a range of elements",                                                             standard: "C++11" }],
    "std::stab": [{ completion: "stable_sort",       detail: "sorts a range of elements while preserving relative order between equivalent elements", standard: "C++11" }],
    "std::part": [{ completion: "partial_sort",      detail: "sorts the first N elements of a range",                                                 standard: "C++11" },
                  { completion: "partial_sort_copy", detail: "copies and partially sorts a range of elements",                                        standard: "C++11" }],
    "std::is_s": [{ completion: "is_sorted",         detail: "checks whether a range is sorted",                                                      standard: "C++11" },
                  { completion: "is_sorted_until",   detail: "finds the largest sorted subrange",                                                     standard: "C++11" }],
    "std::nth":  [{ completion: "nth_element",       detail: "finds the Nth element if the range were sorted",                                        standard: "C++11" }],
};

// Query
export function findAlgorithmSuggestions(
    wordPrefix: string,
    activeStd: cppStandard
): algorithmSuggestion[] {

    let bestMatch: algorithmSuggestion[] = [];

    for (let len = 3; len <= wordPrefix.length; len++) {
        const key = wordPrefix.slice(0, len);
        if (algorithm[key]) {
            bestMatch = algorithm[key].filter(s => isAllowed(s, activeStd));
        }
    }

    return bestMatch;
}