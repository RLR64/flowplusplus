// execution.ts

import { baseSuggestion, cppStandard, isAllowed } from './types';

export interface executionSuggestion extends baseSuggestion {
    standard: cppStandard;
}

// Execution dictionary
export const execution: Record<string, executionSuggestion[]> = {

    // Execution policies
    "std::execution::seq":  [{ completion: "seq",       detail: "sequenced execution policy",            standard: "C++17", /*priority: 100*/ }],
    "std::execution::par":  [{ completion: "par",       detail: "parallel execution policy",             standard: "C++17", /*priority: 100*/ }],
    "std::execution::par_": [{ completion: "par_unseq", detail: "parallel unsequenced execution policy", standard: "C++17", /*priority: 100*/ }],
    "std::execution::uns":  [{ completion: "unseq",     detail: "unsequenced execution policy",          standard: "C++20", /*priority: 100*/}]
};

// Query
export function findExecutionSuggestions(
    wordPrefix: string,
    activeStd: cppStandard
): executionSuggestion[] {

    let bestMatch: executionSuggestion[] = [];

    for (let len = 3; len <= wordPrefix.length; len++) {
        const key = wordPrefix.slice(0, len);
        if (execution[key]) {
            bestMatch = execution[key].filter(s => isAllowed(s, activeStd));
        }
    }

    return bestMatch;
}