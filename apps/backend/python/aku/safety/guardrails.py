# Guardrail logic to intercept dangerous actions

def check_for_chatastrophic_risks(text):
    risky_keywords = [
        "delete all", "bypass login", "send confidential",
        "sign contract", "transfer funds", "disable logs",
        "impersonate", "scrape private", "fake listing"
    ]
    flagged = [kw for kw in risky_keywords if kw.lower() in text.lower()]
    return flagged
