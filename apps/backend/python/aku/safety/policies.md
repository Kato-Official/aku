# 🔐 Chatastrophic Action Policy (Safety Guidelines)

This module defines guardrails to prevent the AI from performing or suggesting potentially catastrophic actions, such as:

- Modifying or deleting live data
- Signing contracts without consent
- Sharing private or confidential information
- Executing high-risk workflows without validation

**Developer Guidelines:**
- Run `check_for_chatastrophic_risks(text)` before executing any agent action
- Use fallback responses in `fallback_responses.py` to handle blocked paths
- Extend `patterns.py` to define new risky behavior signatures
- Log flagged behavior (future enhancement)

Protect the user. Protect the system. Protect the brand. 🛡️
