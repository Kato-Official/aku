import json
from pathlib import Path

PROMPT_DIR = Path(__file__).parent / "../../prompts/prompts"
REGISTRY_FILE = Path(__file__).parent / "../../prompts/registry.json"

def load_registry():
    with open(REGISTRY_FILE) as f:
        return json.load(f)

def get_prompt_by_id(prompt_id):
    registry = load_registry()
    match = next((p for p in registry if p["id"] == prompt_id), None)
    if not match:
        return None
    with open(PROMPT_DIR / match["file"]) as f:
        return f.read()

def search_prompts(tag=None, role=None):
    registry = load_registry()
    return [
        p for p in registry
        if (tag in p["tags"] if tag else True)
        and (role in p["roles"] if role else True)
    ]
