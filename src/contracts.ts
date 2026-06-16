// contracts.ts

import { baseSuggestion, cppStandard, isAllowed } from './types';

// Type
export interface contractSuggestion extends baseSuggestion {
    standard: cppStandard;
}

// Contracts dictionary
const contract: Record<string, contractSuggestion[]> = {

    // C++26 Contracts
    "std::contracts::": [{ completion: "assertion_kind",                            detail: "the kind of the contract assertion violated",                standard: "C++26" },
                         { completion: "contract_violation",                        detail: "the type holding the contract-violation information",        standard: "C++26" },
                         { completion: "detection_mode",                            detail: "the reason that causes the contract violation",              standard: "C++26" },
                         { completion: "evaluation_semantic",                       detail: "the evaluation semantic when the contract violation occurs", standard: "C++26" },
                         { completion: "invoke_default_contract_violation_handler", detail: "invokes the default contract-violation handler",             standard: "C++26" }],
};

// Query
export function findContractSuggestions(
    wordPrefix: string,
    activeStd: cppStandard
): contractSuggestion[] {

    let bestMatch: contractSuggestion[] = [];

    for (let len = 3; len <= wordPrefix.length; len++) {
        const key = wordPrefix.slice(0, len);
        if (contract[key]) {
            bestMatch = contract[key].filter(s => isAllowed(s, activeStd));
        }
    }

    return bestMatch;
}