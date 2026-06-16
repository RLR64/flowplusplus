// type_traits.ts

import { baseSuggestion, cppStandard, isAllowed } from './types';

// Type
export interface typeTraitsSuggestion extends baseSuggestion {}

// Type_traits dictionary
const type_traits: Record<string, typeTraitsSuggestion[]> = {

    // Classes
    // Helper Classes
    "std::boo": [{ completion: "bool_constant",     detail: "compile-time constant of specified type with specified value", standard: "C++17" }],
    "std::int": [{ completion: "integral_constant", detail: "compile-time constant of specified type with specified value", standard: "C++11" }],

    // Unary type traits
    "std::is_": [{ completion: "is_abstract",                            detail: "checks if a type is an abstract class type",                                                                        standard: "C++11" },
                 { completion: "is_aggregate",                           detail: "checks if a type is an aggregate type",                                                                             standard: "C++17" },
                 { completion: "is_arithmetic",                          detail: "checks if a type is an arithmetic type",                                                                            standard: "C++11" },
                 { completion: "is_array",                               detail: "checks if a type is an array type",                                                                                 standard: "C++11" },
                 { completion: "is_assignable",                          detail: "checks if a type has an assignment operator for a specific argument",                                               standard: "C++11" },
                 { completion: "is_base_of",                             detail: "checks if a type is a base of the other type",                                                                      standard: "C++11" },
                 { completion: "is_bounded_array",                       detail: "checks if a type is an array type of known bound",                                                                  standard: "C++20" },
                 { completion: "is_class",                               detail: "checks if a type is a non-union class type",                                                                        standard: "C++11" },
                 { completion: "is_compound",                            detail: "checks if a type is a compound type",                                                                               standard: "C++11" },
                 { completion: "is_const",                               detail: "checks if a type is const-qualified",                                                                               standard: "C++11" },
                 { completion: "is_constructible",                       detail: "checks if a type has a constructor for specific arguments",                                                         standard: "C++11" },
                 { completion: "is_convertible",                         detail: "checks if a type can be converted to the other type",                                                               standard: "C++11" },
                 { completion: "is_copy_assignable",                     detail: "checks if a type has a copy assignment operator",                                                                   standard: "C++11" },
                 { completion: "is_copy_constructible",                  detail: "checks if a type has a copy constructor",                                                                           standard: "C++11" },
                 { completion: "is_corresponding_member",                detail: "checks if two specified members correspond to each other in the common initial subsequence of two specified types", standard: "C++20"},
                 { completion: "is_default_constructible",               detail: "checks if a type has a default constructor",                                                                        standard: "C++11" },
                 { completion: "is_destructible",                        detail: "checks if a type has a non-deleted destructor",                                                                     standard: "C++11" },
                 { completion: "is_empty",                               detail: "checks if a type is a class (but not union) type and has no non-static data members",                               standard: "C++11" },
                 { completion: "is_enum",                                detail: "checks if a type is an enumeration type",                                                                           standard: "C++11" },
                 { completion: "is_final",                               detail: "checks if a type is a final class type",                                                                            standard: "C++14" },
                 { completion: "is_floating_point",                      detail: "checks if a type is a floating-point type",                                                                         standard: "C++11" },
                 { completion: "is_function",                            detail: "checks if a type is a function type",                                                                               standard: "C++11" },
                 { completion: "is_fundamental",                         detail: "checks if a type is a fundamental type",                                                                            standard: "C++11" },
                 { completion: "is_implicit_lifetime",                   detail: "checks if a type is an implicit-lifetime type",                                                                     standard: "C++23" },
                 { completion: "is_integral",                            detail: "checks if a type is an integral type",                                                                              standard: "C++11" },
                 { completion: "is_invocable",                           detail: "checks if a type can be invoked (as if by std::invoke) with the given argument types",                              standard: "C++17" },
                 { completion: "is_invocable_r",                         detail: "checks if a type can be invoked (as if by std::invoke) with the given argument types",                              standard: "C++17" },
                 { completion: "is_layout_compatible",                   detail: "checks if two types are layout-compatible",                                                                         standard: "C++20" },
                 { completion: "is_lvalue_reference",                    detail: "checks if a type is an lvalue reference",                                                                           standard: "C++11" },
                 { completion: "is_member_function_pointer",             detail: "checks if a type is a non-static member function pointer",                                                          standard: "C++11" },
                 { completion: "is_member_object_pointer",               detail: "checks if a type is a non-static member object pointer",                                                            standard: "C++11" },
                 { completion: "is_member_pointer",                      detail: "checks if a type is a pointer to a non-static member function or object",                                           standard: "C++11" },
                 { completion: "is_move_assignable",                     detail: "checks if a type has a move assignment operator",                                                                   standard: "C++11" },
                 { completion: "is_move_constructible",                  detail: "checks if a type can be constructed from an rvalue reference",                                                      standard: "C++11" },
                 { completion: "is_nothrow_assignable",                  detail: "checks if a type has an assignment operator for a specific argument",                                               standard: "C++11" },
                 { completion: "is_nothrow_constructible",               detail: "checks if a type has a constructor for specific arguments",                                                         standard: "C++11" },
                 { completion: "is_nothrow_convertible",                 detail: "checks if a type can be converted to the other type",                                                               standard: "C++20" },
                 { completion: "is_nothrow_copy_assignable",             detail: "checks if a type has a copy assignment operator",                                                                   standard: "C++11" },
                 { completion: "is_nothrow_copy_constructible",          detail: "checks if a type has a copy constructor",                                                                           standard: "C++11" },
                 { completion: "is_nothrow_default_constructible",       detail: "checks if a type has a default constructor",                                                                        standard: "C++11" },
                 { completion: "is_nothrow_destructible",                detail: "checks if a type has a non-deleted destructor",                                                                     standard: "C++11" },
                 { completion: "is_nothrow_invocable",                   detail: "checks if a type can be invoked (as if by std::invoke) with the given argument types",                              standard: "C++17" },
                 { completion: "is_nothrow_invocable_r",                 detail: "checks if a type can be invoked (as if by std::invoke) with the given argument types",                              standard: "C++17" },
                 { completion: "is_nothrow_move_assignable",             detail: "checks if a type has a move assignment operator",                                                                   standard: "C++11" },
                 { completion: "is_nothrow_move_constructible",          detail: "checks if a type can be constructed from an rvalue reference",                                                      standard: "C++11" },
                 { completion: "is_nothrow_swappable",                   detail: "checks if objects of a type can be swapped with objects of same or different type",                                 standard: "C++17" },
                 { completion: "is_nothrow_swappable_with",              detail: "checks if objects of a type can be swapped with objects of same or different type",                                 standard: "C++17" },
                 { completion: "is_null_pointer",                        detail: "checks if a type is std::nullptr_t",                                                                                standard: "C++11" },
                 { completion: "is_object",                              detail: "checks if a type is an object type",                                                                                standard: "C++11" },
                 { completion: "is_pointer",                             detail: "checks if a type is a pointer type",                                                                                standard: "C++11" },
                 { completion: "is_pointer_interconvertible_base_of",    detail: "checks if a type is a pointer-interconvertible (initial) base of another type",                                     standard: "C++20" },
                 { completion: "is_pointer_interconvertible_with_class", detail: "checks if objects of a type are pointer-interconvertible with the specified subobject of that type",                standard: "C++20" },
                 { completion: "is_polymorphic",                         detail: "checks if a type is a polymorphic class type",                                                                      standard: "C++11" },
                 { completion: "is_reference",                           detail: "checks if a type is either an lvalue reference or rvalue reference",                                                standard: "C++11" },
                 { completion: "is_reflection",                          detail: "checks if a type is std::meta::info",                                                                               standard: "C++26" },
                 { completion: "is_rvalue_reference",                    detail: "checks if a type is an rvalue reference",                                                                           standard: "C++11" },
                 { completion: "is_same",                                detail: "checks if two types are the same",                                                                                  standard: "C++11" },
                 { completion: "is_scalar",                              detail: "checks if a type is a scalar type",                                                                                 standard: "C++11" },
                 { completion: "is_scoped_enum",                         detail: "checks if a type is a scoped enumeration type",                                                                     standard: "C++23" },
                 { completion: "is_signed",                              detail: "checks if a type is a signed arithmetic type",                                                                      standard: "C++11" },
                 { completion: "is_standard_layout",                     detail: "checks if a type is a standard-layout type",                                                                        standard: "C++11" },
                 { completion: "is_swappable",                           detail: "checks if objects of a type can be swapped with objects of same or different type",                                 standard: "C++17" },
                 { completion: "is_swappable_with",                      detail: "checks if objects of a type can be swapped with objects of same or different type",                                 standard: "C++17" },
                 { completion: "is_trivial",                             detail: "(deprecated in C++26)",                                                                                             standard: "C++11" },
                 { completion: "is_trivially_assignable",                detail: "checks if a type has an assignment operator for a specific argument",                                               standard: "C++11" },
                 { completion: "is_trivially_constructible",             detail: "checks if a type has a constructor for specific arguments",                                                         standard: "C++11" },
                 { completion: "is_trivially_copy_assignable",           detail: "checks if a type has a copy assignment operator",                                                                   standard: "C++11" },
                 { completion: "is_trivially_copy_constructible",        detail: "checks if a type has a copy constructor",                                                                           standard: "C++11" },
                 { completion: "is_trivially_copyable",                  detail: "checks if a type is trivially copyable",                                                                            standard: "C++11" },
                 { completion: "is_trivially_default_constructible",     detail: "checks if a type has a default constructor",                                                                        standard: "C++11" },
                 { completion: "is_trivially_destructible",              detail: "checks if a type has a non-deleted destructor",                                                                     standard: "C++11" },
                 { completion: "is_trivially_move_assignable",           detail: "checks if a type has a move assignment operator",                                                                   standard: "C++11" },
                 { completion: "is_trivially_move_constructible",        detail: "checks if a type can be constructed from an rvalue reference",                                                      standard: "C++11" },
                 { completion: "is_unbounded_array",                     detail: "checks if a type is an array type of unknown bound",                                                                standard: "C++20" },
                 { completion: "is_union",                               detail: "checks if a type is a union type",                                                                                  standard: "C++11" },
                 { completion: "is_unsigned",                            detail: "checks if a type is an unsigned arithmetic type",                                                                   standard: "C++11" },
                 { completion: "is_virtual_base_of",                     detail: "checks if a type is a virtual base of the other type",                                                              standard: "C++26" },
                 { completion: "is_void",                                detail: "checks if a type is void",                                                                                          standard: "C++11" },
                 { completion: "is_volatile",                            detail: "checks if a type is volatile-qualified",                                                                            standard: "C++11" }],

    // Property queries
    "std::ali": [{ completion: "alignment_of", detail: "obtains the type's alignment requirements",                     standard: "C++11" }],
    "std::ext": [{ completion: "extent",       detail: "obtains the size of an array type along a specified dimension", standard: "C++11" }],
    "std::ran": [{ completion: "rank",         detail: "obtains the number of dimensions of an array type",             standard: "C++11" }],

    // Type transformations
    "std::add": [{ completion: "add_const",              detail: "remove_reference",                                                                              standard: "C++11" },
                 { completion: "add_cv",                 detail: "remove_reference",                                                                              standard: "C++11" },
                 { completion: "add_lvalue_reference",   detail: "adds an lvalue or rvalue reference to the given type",                                          standard: "C++11" },
                 { completion: "add_pointer",            detail: "adds a pointer to the given type",                                                              standard: "C++11" },
                 { completion: "add_rvalue_reference",   detail: "adds an lvalue or rvalue reference to the given type",                                          standard: "C++11" },
                 { completion: "add_volatile",           detail: "remove_reference",                                                                              standard: "C++11" }],
    "std::bas": [{ completion: "basic_common_reference", detail: "determines the common reference type of a group of types",                                      standard: "C++20" }],
    "std::com": [{ completion: "common_reference",       detail: "determines the common reference type of a group of types",                                      standard: "C++20" },
                 { completion: "common_type",            detail: "determines the common type of a group of types",                                                standard: "C++11" }],
    "std::con": [{ completion: "conditional",            detail: "chooses one type or another based on compile-time boolean",                                     standard: "C++11" },
                 { completion: "conjunction",            detail: "variadic logical AND metafunction",                                                             standard: "C++17" }],
    "std::dec": [{ completion: "decay",                  detail: "applies type transformations as when passing a function argument by value",                     standard: "C++11" }],
    "std::dis": [{ completion: "disjunction",            detail: "variadic logical OR metafunction",                                                              standard: "C++17" }],
    "std::ena": [{ completion: "enable_if",              detail: "conditionally removes a function overload or template specialization from overload resolution", standard: "C++11" }],
    "std::inv": [{ completion: "invoke_result",          detail: "deduces the result type of invoking a callable object with a set of arguments",                 standard: "C++17" }],
    "std::mak": [{ completion: "make_signed",            detail: "obtains the corresponding signed type for the given integral type",                             standard: "C++11" },
                 { completion: "make_unsigned",          detail: "obtains the corresponding signed type for the given integral type",                             standard: "C++11" }],
    "std::neg": [{ completion: "negation",               detail: "logical NOT metafunction",                                                                      standard: "C++17" }],
    "std::rem": [{ completion: "remove_all_extents",     detail: "removes all extents from the given array type",                                                 standard: "C++11" },
                 { completion: "remove_const",           detail: "removes const and/or volatile specifiers from the given type",                                  standard: "C++11" },
                 { completion: "remove_cv",              detail: "removes const and/or volatile specifiers from the given type",                                  standard: "C++11" },
                 { completion: "remove_cvref",           detail: "combines std::remove_cv and std::remove_reference",                                             standard: "C++20" },
                 { completion: "remove_extent",          detail: "removes one extent from the given array type",                                                  standard: "C++11" },
                 { completion: "remove_pointer",         detail: "removes a pointer from the given type",                                                         standard: "C++11" },
                 { completion: "remove_volatile",        detail: "removes const and/or volatile specifiers from the given type",                                  standard: "C++11" }],
    "std::res": [{ completion: "result_of",              detail: "deduces the result type of invoking a callable object with a set of arguments",                 standard: "C++11" }],
    "std::typ": [{ completion: "type_identity",          detail: "returns the type argument unchanged",                                                           standard: "C++20" }],
    "std::und": [{ completion: "underlying_type",        detail: "obtains the underlying integer type for a given enumeration type",                              standard: "C++11" }],
    "std::voi": [{ completion: "void_t",                 detail: "void variadic alias template",                                                                  standard: "C++17" }],
};

// Query
export function findTypeTraitsSuggestions(
    wordPrefix: string,
    activeStd: cppStandard
): typeTraitsSuggestion[] {

    let bestMatch: typeTraitsSuggestion[] = [];

    for (let len = 3; len <= wordPrefix.length; len++) {
        const key = wordPrefix.slice(0, len);
        if (type_traits[key]) {
            bestMatch = type_traits[key].filter(s => isAllowed(s, activeStd));
        }
    }

    return bestMatch;
}