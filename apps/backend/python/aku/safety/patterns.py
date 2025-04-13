# Regex and keyword patterns for identifying unsafe prompts/actions

patterns = {
    "deletion": r"delete\s+(unit|listing|account|all)",
    "legal": r"(sign|send)\s+(contract|agreement)",
    "privacy": r"(share|send)\s+(location|contact info|confidential)",
    "impersonation": r"(pretend|impersonate|spoof)",
}
