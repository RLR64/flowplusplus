// ranges.ts

import { baseSuggestion, cppStandard, isAllowed } from './types';

// Type
export interface rangesSuggestion extends baseSuggestion {
    standard: cppStandard;
}

// Ranges Dictionary
const range: Record<string, rangesSuggestion[]> = {

    // Range access
    "std::ranges::beg": [{ completion: "begin",        detail: "returns an iterator to the beginning of a range",                    standard: "C++20" }],
    "std::ranges::cbe": [{ completion: "cbegin",       detail: "returns an iterator to the beginning of a read-only range",          standard: "C++20" }],
    "std::ranges::cda": [{ completion: "cdata",        detail: "obtains a pointer to the beginning of a read-only contiguous range", standard: "C++20" }],
    "std::ranges::cen": [{ completion: "cend",         detail: "returns a sentinel indicating the end of a read-only range",         standard: "C++20" }],
    "std::ranges::crb": [{ completion: "crbegin",      detail: "returns a reverse iterator to a read-only range",                    standard: "C++20" }],
    "std::ranges::cre": [{ completion: "crend",        detail: "returns a reverse end iterator to a read-only range",                standard: "C++20" }],
    "std::ranges::dat": [{ completion: "data",         detail: "obtains a pointer to the beginning of a contiguous range",           standard: "C++20" }],
    "std::ranges::emp": [{ completion: "empty",        detail: "checks whether a range is empty",                                    standard: "C++20" },
                         { completion: "empty_view",   detail: "an empty view with no elements",                                     standard: "C++20" }],
    "std::ranges::end": [{ completion: "end",          detail: "returns a sentinel indicating the end of a range",                   standard: "C++20" }],
    "std::ranges::rbe": [{ completion: "rbegin",       detail: "returns a reverse iterator to a range",                              standard: "C++20" }],
    "std::ranges::ren": [{ completion: "rend",         detail: "returns a reverse end iterator to a range",                          standard: "C++20" }],
    "std::ranges::res": [{ completion: "reserve_hint", detail: "returns an integer equal to the reserve hint given by a range",      standard: "C++26" }],
    "std::ranges::siz": [{ completion: "size",         detail: "returns an integer equal to the size of a range",                    standard: "C++20" }],
    "std::ranges::ssi": [{ completion: "ssize",        detail: "returns a signed integer equal to the size of a range",              standard: "C++20" }],

    // Range primitives
    "std::ranges::con": [{ completion: "const_iterator_t",         detail: "obtains iterator and sentinel types of a range",       standard: "C++23" },
                         { completion: "const_sentinel_t",         detail: "obtains iterator and sentinel types of a range",       standard: "C++23" }],
    "std::ranges::ite": [{ completion: "iterator_t",               detail: "obtains iterator and sentinel types of a range",       standard: "C++20" }],
    "std::ranges::ra":  [{ completion: "range_difference_t",       detail: "obtains size, difference, and value types of a range", standard: "C++20" },
                         { completion: "range_size_t",             detail: "obtains size, difference, and value types of a range", standard: "C++20" },
                         { completion: "range_value_t",            detail: "obtains size, difference, and value types of a range", standard: "C++20" },
                         { completion: "range_reference_t",        detail: "obtains reference types of a range",                   standard: "C++20" },
                         { completion: "range_const_reference_t",  detail: "obtains reference types of a range",                   standard: "C++23" },
                         { completion: "range_rvalue_reference_t", detail: "obtains reference types of a range",                   standard: "C++20" },
                         { completion: "range_common_reference_t", detail: "obtains reference types of a range",                   standard: "C++20" }],
    "std::ranges::sen": [{ completion: "sentinel_t",               detail: "obtains iterator and sentinel types of a range",       standard: "C++20" }],

    // Dangling iterator handling
    "std::ranges::bor": [{ completion: "borrowed_iterator_t", detail: "obtains iterator type or subrange type of a borrowed_range",                                                     standard: "C++20" },
                         { completion: "borrowed_subrange_t", detail: "obtains iterator type or subrange type of a borrowed_range",                                                     standard: "C++20" }],
    "std::ranges::dan": [{ completion: "dangling",            detail: "a placeholder type indicating that an iterator or a subrange should not be returned since it would be dangling", standard: "C++20" }],

    // Other utilities
    "std::ranges::ele": [{ completion: "elements_of", detail: "tags a range to be treated as a sequence rather than a single value", standard: "C++23" }],

    // Range concepts
    "std::ranges::app":  [{ completion: "approximately_sized_range", detail: "specifies that a range can estimate its size in constant time",                                                                      standard: "C++26" }],
    "std::ranges::bid":  [{ completion: "bidirectional_range",       detail: "specifies a range whose iterator type satisfies bidirectional_iterator",                                                             standard: "C++20" }],
    "std::ranges::borr": [{ completion: "borrowed_range",            detail: "specifies that a type is a range and iterators obtained from an expression of it can be safely returned without danger of dangling", standard: "C++20" }],
    "std::ranges::com":  [{ completion: "common_range",              detail: "specifies that a range has identical iterator and sentinel types",                                                                   standard: "C++20" }],
    "std::ranges::cont": [{ completion: "contiguous_range",          detail: "specifies a range whose iterator type satisfies contiguous_iterator",                                                                standard: "C++20" },
                          { completion: "constant_range",            detail: "specifies that a range has read-only elements",                                                                                      standard: "C++23" }],
    "std::ranges::for":  [{ completion: "forward_range",             detail: "specifies a range whose iterator type satisfies forward_iterator",                                                                   standard: "C++20" }],
    "std::ranges::inp":  [{ completion: "input_range",               detail: "specifies a range whose iterator type satisfies input_iterator",                                                                     standard: "C++20" }],
    "std::ranges::out":  [{ completion: "output_range",              detail: "specifies a range whose iterator type satisfies output_iterator",                                                                    standard: "C++20" }],
    "std::ranges::ran":  [{ completion: "range",                     detail: "specifies that a type is a range, that is, it provides a begin iterator and an end sentinel",                                        standard: "C++20" },
                          { completion: "random_access_range",       detail: "specifies a range whose iterator type satisfies random_access_iterator",                                                             standard: "C++20" }],
    "std::ranges::size": [{ completion: "sized_range",               detail: "specifies that a range knows its size in constant time",                                                                             standard: "C++20" }],
    "std::ranges::vie":  [{ completion: "view",                      detail: "specifies that a range is a view, that is, it has constant time copy/move/assignment",                                               standard: "C++20" },
                          { completion: "view_interface",            detail: "helper class template for defining a view, using the curiously recurring template pattern",                                          standard: "C++20" },
                          { completion: "viewable_range",            detail: "specifies the requirements for a range to be safely convertible to a view",                                                          standard: "C++20" }],

    // Range conversions
    "std::ranges::to": [{ completion: "to", detail: "constructs a new non-view object from an input range", standard: "C++23" }],

    // Views
    "std::ranges::sub": [{ completion: "subrange", detail: "combines an iterator-sentinel pair into a view", standard: "C++20" }],

    // Range factories
    "std::ranges::bas": [{ completion: "basic_istream_view", detail: "a view consisting of the elements obtained by successive application of operator>> on the associated input stream", standard: "C++20" }],
    "std::ranges::iot": [{ completion: "iota_view",          detail: "a view consisting of a sequence generated by repeatedly incrementing an initial value",                             standard: "C++20" }],
    "std::ranges::rep": [{ completion: "repeat_view",        detail: "a view consisting of a generated sequence by repeatedly producing the same value",                                  standard: "C++23" }],
    "std::ranges::sin": [{ completion: "single_view",        detail: "a view that contains a single element of a specified value",                                                        standard: "C++20" }],

    // Range adaptors
    "std::ranges::adj":  [{ completion: "adjacent_view",           detail: "a view consisting of tuples of references to adjacent elements of the adapted view",                                                                        standard: "C++23" },
                          { completion: "adjacent_transform_view", detail: "a view consisting of results of application of a transformation function to adjacent elements of the adapted view",                                         standard: "C++23" }],
    "std::ranges::as_":  [{ completion: "as_rvalue_view",          detail: "a view of a sequence that casts each element to an rvalue",                                                                                                 standard: "C++23" },
                          { completion: "as_const_view",           detail: "converts a view into a constant_range",                                                                                                                     standard: "C++23" },
                          { completion: "as_input_view",           detail: "converts a view into a range that is input_range-only and non-common_range",                                                                                standard: "C++26" }],
    "std::ranges::cac":  [{ completion: "cache_latest_view",       detail: "a view that caches the last-accessed element of its underlying sequence",                                                                                   standard: "C++26" }],
    "std::ranges::car":  [{ completion: "cartesian_product_view",  detail: "a view consisting of tuples of results calculated by the n-ary cartesian product of the adapted views",                                                     standard: "C++23" }],
    "std::ranges::chu":  [{ completion: "chunk_view",              detail: "a range of views that are N-sized non-overlapping successive chunks of the elements of another view",                                                       standard: "C++23" },
                          { completion: "chunk_by_view",           detail: "splits the view into subranges between each pair of adjacent elements for which the given predicate returns false",                                         standard: "C++23" }],
    "std::ranges::comm": [{ completion: "common_view",             detail: "converts a view into a common_range",                                                                                                                       standard: "C++20" }],
    "std::ranges::conn": [{ completion: "concat_view",             detail: "a view consisting of concatenation of the adapted views",                                                                                                   standard: "C++26" }],
    "std::ranges::dro":  [{ completion: "drop_view",               detail: "a view consisting of elements of another view, skipping the first N elements",                                                                              standard: "C++20" },
                          { completion: "drop_while_view",         detail: "a view consisting of the elements of another view, skipping the initial subsequence of elements until the first element where the predicate returns false", standard: "C++20" }],
    "std::ranges::elem": [{ completion: "elements_view",           detail: "takes a view consisting of tuple-like values and a number N and produces a view of Nth element of each tuple",                                              standard: "C++20" }],
    "std::ranges::enu":  [{ completion: "enumerate_view",          detail: "a view that maps each element of adapted sequence to a tuple of both the element's position and its value",                                                 standard: "C++23" }],
    "std::ranges::fil":  [{ completion: "filter_view",             detail: "a view that consists of the elements of a range that satisfy a predicate",                                                                                  standard: "C++20" }],
    "std::ranges::joi":  [{ completion: "join_view",               detail: "a view consisting of the sequence obtained from flattening a view of ranges",                                                                               standard: "C++20" },
                          { completion: "join_with_view",          detail: "a view consisting of the sequence obtained from flattening a view of ranges, with the delimiter in between elements",                                       standard: "C++23" }],
    "std::ranges::key":  [{ completion: "keys_view",               detail: "takes a view consisting of pair-like values and produces a view of the first elements of each pair",                                                        standard: "C++20" }],
    "std::ranges::laz":  [{ completion: "lazy_split_view",         detail: "a view over the subranges obtained from splitting another view using a delimiter",                                                                          standard: "C++20" }],
    "std::ranges::own":  [{ completion: "owning_view",             detail: "a view with unique ownership of some range",                                                                                                                standard: "C++20" }],
    "std::ranges::rang": [{ completion: "range_adaptor_closure",   detail: "helper base class template for defining a range adaptor closure object",                                                                                    standard: "C++23" }],
    "std::ranges::ref":  [{ completion: "ref_view",                detail: "a view of the elements of some other range",                                                                                                                standard: "C++20" }],
    "std::ranges::rev":  [{ completion: "reverse_view",            detail: "a view that iterates over the elements of another bidirectional view in reverse order",                                                                     standard: "C++20" }],
    "std::ranges::sli":  [{ completion: "slide_view",              detail: "a view whose Mth element is a view over the Mth through (M + N - 1)th elements of another view",                                                            standard: "C++23" }],
    "std::ranges::spl":  [{ completion: "split_view",              detail: "a view over the subranges obtained from splitting another view using a delimiter",                                                                          standard: "C++20" }],
    "std::ranges::str":  [{ completion: "stride_view",             detail: "a view consisting of elements of another view, advancing over N elements at a time",                                                                        standard: "C++23" }],
    "std::ranges::tak":  [{ completion: "take_view",               detail: "a view consisting of the first N elements of another view",                                                                                                 standard: "C++20" },
                          { completion: "take_while_view",         detail: "a view consisting of the initial elements of another view, until the first element on which a predicate returns false",                                     standard: "C++20" }],
    "std::ranges::tra":  [{ completion: "transform_view",          detail: "a view of a sequence that applies a transformation function to each element",                                                                               standard: "C++20" }],
    "std::ranges::val":  [{ completion: "values_view",             detail: "takes a view consisting of pair-like values and produces a view of the second elements of each pair",                                                       standard: "C++20" }],
    "std::ranges::zip":  [{ completion: "zip_view",                detail: "a view consisting of tuples of references to corresponding elements of the adapted views",                                                                  standard: "C++23" },
                          { completion: "zip_transform_view",      detail: "a view consisting of results of application of a transformation function to corresponding elements of the adapted views",                                   standard: "C++23" }],
};

// Query
export function findRangesSuggestions(
    wordPrefix: string,
    activeStd: cppStandard
): rangesSuggestion[] {

    let bestMatch: rangesSuggestion[] = [];

    for (let len = 3; len <= wordPrefix.length; len++) {
        const key = wordPrefix.slice(0, len);
        if (range[key]) {
            bestMatch = range[key].filter(s => isAllowed(s, activeStd));
        }
    }

    return bestMatch;
}