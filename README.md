# 🧠 Aku (悪) — Modular PropTech AI Toolkit

**Aku** is an open-source, modular AI framework for the real estate and PropTech world. It gives developers, startups, and enterprises a plug-and-play system of prompts, agents, assistants, tools, context modules, and workflows — all with safety and scalability built-in.

---

## 🚀 Why Aku?

- ✅ Built for Real Estate use cases
- 🧩 Composable: mix prompts, agents, assistants, and tools
- 🧠 LLM-agnostic: works with OpenAI, Anthropic, local models, etc.
- 🔐 Safety-first: prevents chatastrophic actions
- ⚡ Rapidly deployable: FastAPI, Streamlit, CLI, or JS-ready
- 🌍 Role-aware: agents for landlords, brokers, tenants, investors, companies

---

## 🧱 Repo Structure Overview

```
aku/
├── apps/
│   ├── frontend/                # Next.js frontend (Vercel-deployed)
│   └── backend/
│       └── python/              # Python backend
│           ├── aku/            # Main backend modules: agents, tools, etc.
│           ├── scripts/        # Scripts for automation/dev
│           ├── tests/          # Unit and integration tests
│           └── pyproject.toml  # Poetry setup
├── packages/
│   └── prompts/
│       ├── prompts/            # Prompt templates
│       └── registry.json       # Prompt metadata
├── docs/
│   └── roadmap.md              # Development roadmap & persona plans
├── README.md
└── .gitignore
```

---

## 🛠 Installation

```bash
pip install aku-ai
```

or clone and run locally:

```bash
git clone https://github.com/Kato-Official/aku.git
cd aku
poetry install
```

---

## 🧠 Use Aku in 3 Ways

### 1. Load Prompts
```python
from aku.prompts.utils import get_prompt_by_id
print(get_prompt_by_id("summarize_listing"))
```

### 2. Run an Assistant
```python
from aku.assistants.agents.real_estate_helper import RealEstateHelper
response = RealEstateHelper().run("Describe this villa in Dubai...")
```

### 3. Trigger a Use Case Flow
```python
from aku.use_cases.close_deal import DealCloser
DealCloser().run(context="Luxury apartment, Marina")
```

---

## 🔐 Guarding Against Chatastrophic™ Actions

Aku includes a full safety module (`safety/`) with:
- Keyword & pattern checks
- Fallback safe responses
- Policy enforcement for legal, privacy, and ethical guardrails

Use `check_for_chatastrophic_risks(text)` before any critical output or agent step.

---

## 📚 Explore All Prompt Categories

See [`proptech_prompt_categories.md`](./python/aku/prompts/categories/proptech_prompt_categories.md) for a deep dive into:
- Property Search
- Marketing & Lead Gen
- Customer Service
- Transactions
- Property Management
- Emerging Trends
- Market Intelligence
- Accessibility
- Legal & Compliance

---

## 📦 Coming Soon

- JavaScript SDK (`js/`)
- `aku` CLI tool (`aku init`, `aku run use_case`)
- Admin dashboard for managing prompts + workflows
- Deployment templates (Docker, Render, Vercel, etc.)

---

## 🧑‍💻 Contribute to Aku

This is just the beginning. Add your own:
- Prompts with metadata
- Agents or Assistants by role
- Context packs or Use Case flows
- Safety patterns and model integrations

Submit a PR or open an issue — all quality contributions are curated.

---

## 🤝 Built by Real Estate Nerds, For Real Estate Killers

Aku (悪) is your AI muscle for building autonomous, intelligent, scalable real estate workflows with zero fluff.

Join the movement. Dominate the market. Let the AI do the heavy lifting.
