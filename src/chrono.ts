// chrono.ts

import { baseSuggestion, cppStandard, isAllowed } from './types';

// Type
export interface chronoSuggestion extends baseSuggestion {}

// Chrono dictionary
const chrono: Record<string, chronoSuggestion[]> = {

    // Duration
    "std::chrono::dur":  [{ completion: "duration<",                detail: "a time interval",                                                    standard: "C++11" }],
    "std::chrono::dura": [{ completion: "duration_values<",         detail: "constructs zero, min, and max values of a tick count of given type", standard: "C++11" }],
    "std::chrono::tre":  [{ completion: "treat_as_floating_point<", detail: "a time interval",                                                    standard: "C++11" }],

    // Time point
    "std::chrono::tim": [{ completion: "time_point<", detail: "a point in time", standard: "C++11" }],
    "std::chrono::clo": [{ completion: "clock_time_conversion<", detail: "traits class defining how to convert time points of one clock to another", standard: "C++20" }],

    // Clocks
    "std::chrono::s":   [{ completion: "system_clock",          detail: "wall clock time from the system-wide realtime clock", standard: "C++11" },
                         { completion: "steady_clock",          detail: "monotonic clock that will never be adjusted",         standard: "C++11" }],
    "std::chrono::hig": [{ completion: "high_resolution_clock", detail: "the clock with the shortest tick period available",   standard: "C++11" }],
    "std::chrono::utc": [{ completion: "utc_clock",             detail: "clock for Coordinated Universal Time (UTC)",          standard: "C++20" }],
    "std::chrono::tai": [{ completion: "tai_clock",             detail: "clock for International Atomic Time (TAI)",           standard: "C++20" }],
    "std::chrono::gps": [{ completion: "gps_clock",             detail: "clock for GPS time",                                  standard: "C++20" }],
    "std::chrono::fil": [{ completion: "file_clock",            detail: "clock used for file time",                            standard: "C++20" }],
    "std::chrono::is_": [{ completion: "is_clock<",             detail: "determines if a type is a Clock",                     standard: "C++20" },
                         { completion: "is_clock_v<",           detail: "determines if a type is a Clock",                     standard: "C++20" }],
    "std::chrono::loc": [{ completion: "local_t",               detail: "pseudo-clock representing local time",                standard: "C++20" }],

    // Calendar
    "std::chrono::day": [{ completion: "day",                     detail: "represents a day of a month",                              standard: "C++20" }],
    "std::chrono::las": [{ completion: "last",                    detail: "tag class indicating the last day or weekday in a month",  standard: "C++20" }],
    "std::chrono::mon": [{ completion: "month",                   detail: "represents a month of a year",                             standard: "C++20" },
                         { completion: "month_day",               detail: "represents a specific day of a specific month",            standard: "C++20" },
                         { completion: "month_day_last",          detail: "represents the last day of a specific month",              standard: "C++20" },
                         { completion: "month_weekday",           detail: "represents the nth weekday of a specific month",           standard: "C++20" },
                         { completion: "month_weekday_last",      detail: "represents the last weekday of a specific month",          standard: "C++20" }],
    "std::chrono::wee": [{ completion: "weekday",                 detail: "represents a day of the week in the Gregorian calendar",   standard: "C++20" },
                         { completion: "weekday_indexed",         detail: "represents the nth weekday of a month",                    standard: "C++20" },
                         { completion: "weekday_last",            detail: "represents the last weekday of a month",                   standard: "C++20" }],
    "std::chrono::yea": [{ completion: "year",                    detail: "represents a year in the Gregorian calendar",              standard: "C++20" },
                         { completion: "year_month",              detail: "represents a specific month of a specific year",           standard: "C++20" },
                         { completion: "year_month_day",          detail: "represents a specific year, month, and day",               standard: "C++20" },
                         { completion: "year_month_day_last",     detail: "represents the last day of a specific year and month",     standard: "C++20" },
                         { completion: "year_month_weekday",      detail: "represents the nth weekday of a specific year and month",  standard: "C++20" },
                         { completion: "year_month_weekday_last", detail: "represents the last weekday of a specific year and month", standard: "C++20" }],

    // Time of day
    "std::chrono::hh_": [{ completion: "hh_mm_ss", detail: "represents a time of day", standard: "C++20" }],

    // Time zone
    "std::chrono::amb":  [{ completion: "ambiguous_local_time",   detail: "exception thrown to report that a local time is ambiguous",           standard: "C++20" }],
    "std::chrono::cho":  [{ completion: "choose",                 detail: "selects how an ambiguous local time should be resolved",              standard: "C++20" }],
    "std::chrono::loca": [{ completion: "local_info",             detail: "represents information about a local time to UNIX time conversion",   standard: "C++20" }],
    "std::chrono::non":  [{ completion: "nonexistent_local_time", detail: "exception thrown to report that a local time is nonexistent",         standard: "C++20" }],
    "std::chrono::sys":  [{ completion: "sys_info",               detail: "represents information about a time zone at a particular time point", standard: "C++20" }],
    "std::chrono::time": [{ completion: "time_zone",              detail: "represents a time zone",                                              standard: "C++20" },
                          { completion: "time_zone_link",         detail: "represents an alternative name for a time zone",                      standard: "C++20" }],
    "std::chrono::tzd":  [{ completion: "tzdb",                   detail: "describes a copy of the IANA time zone database",                     standard: "C++20" },
                          { completion: "tzdb_list",              detail: "represents a linked list of tzdb",                                    standard: "C++20" }],
    "std::chrono::zon":  [{ completion: "zoned_traits",           detail: "traits class for time zone pointers used by zoned_time",              standard: "C++20" },
                          { completion: "zoned_time",             detail: "represents a time zone and a time point",                             standard: "C++20" }],

    // Leap second
    "std::chrono::lea": [{ completion: "leap_second",      detail: "contains information about a leap second insertion", standard: "C++20" },
                         { completion: "leap_second_info", detail: "leap second insertion information",                  standard: "C++20" }],

    // Specializations
    // Common Type
    "std::com": [{ completion: "common_type<std::chrono::duration>",   detail: "specializes the std::common_type trait", standard: "C++11" },
                 { completion: "common_type<std::chrono::time_point>", detail: "specializes the std::common_type trait", standard: "C++11" }],
};

// Query
export function findChronoSuggestions(
    wordPrefix: string,
    activeStd: cppStandard
): chronoSuggestion[] {

    let bestMatch: chronoSuggestion[] = [];

    for (let len = 3; len <= wordPrefix.length; len++) {
        const key = wordPrefix.slice(0, len);
        if (chrono[key]) {
            bestMatch = chrono[key].filter(s => isAllowed(s, activeStd));
        }
    }

    return bestMatch;
}