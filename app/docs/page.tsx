import Link from "next/link"
import { ArrowRight, Building2, Code2, Layers, Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"

export default function DocsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Introduction</h1>
        <p className="text-xl text-muted-foreground">
          Welcome to the Aku API documentation. Learn how to integrate and leverage the power of Aku in your PropTech
          applications.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">What is Aku?</h2>
        <p className="leading-7">
          Aku <span className="text-muted-foreground">(悪)</span> is an open-source, modular AI framework built
          specifically for real estate and PropTech. It provides a plug-and-play system of prompts, agents, assistants,
          tools, context modules, and workflows that make implementing AI in real estate applications simple and
          effective.
        </p>
        <p className="leading-7">
          Whether you're building property management software, market analysis tools, or customer service solutions,
          Aku provides the building blocks you need to create powerful AI-driven features.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <Building2 className="h-5 w-5 mb-1 text-rose-500" />
              <CardTitle className="text-base">Real Estate Focused</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Purpose-built for real estate use cases with specialized agents and workflows.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Layers className="h-5 w-5 mb-1 text-rose-500" />
              <CardTitle className="text-base">Composable Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Mix and match prompts, agents, assistants, and tools to create custom AI solutions.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Code2 className="h-5 w-5 mb-1 text-rose-500" />
              <CardTitle className="text-base">LLM-Agnostic</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Works with OpenAI, Anthropic, local models, and more. Switch providers without changing your
                implementation.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Lock className="h-5 w-5 mb-1 text-rose-500" />
              <CardTitle className="text-base">Safety-First Design</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Built-in safeguards prevent catastrophic actions, ensuring your AI systems operate within defined
                parameters.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Getting Started</h2>
        <p className="leading-7">
          The easiest way to get started with Aku is to install the SDK for your preferred language:
        </p>

        <Tabs defaultValue="javascript" className="w-full">
          <TabsList>
            <TabsTrigger value="javascript">JavaScript</TabsTrigger>
            <TabsTrigger value="python">Python</TabsTrigger>
            <TabsTrigger value="rest">REST API</TabsTrigger>
          </TabsList>
          <TabsContent value="javascript" className="mt-4 space-y-4">
            <CodeBlock language="bash" code="npm install @aku/sdk" />
            <p className="text-sm text-muted-foreground mt-2">Then, import and initialize the SDK:</p>
            <CodeBlock
              language="javascript"
              code={`import { Aku } from '@aku/sdk';

// Initialize the client with your API key
const aku = new Aku({
  apiKey: 'your_api_key',
});

// Create a simple property description agent
const agent = aku.agents.create('property-description', {
  model: 'gpt-4', // or 'anthropic/claude-3' or 'local/llama-3'
});

// Generate a property description
const description = await agent.generate({
  property: {
    type: 'apartment',
    bedrooms: 2,
    bathrooms: 1,
    sqft: 1200,
    features: ['hardwood floors', 'updated kitchen', 'balcony'],
    neighborhood: 'downtown',
    city: 'Seattle',
    state: 'WA',
  }
});

console.log(description);`}
            />
          </TabsContent>
          <TabsContent value="python" className="mt-4 space-y-4">
            <CodeBlock language="bash" code="pip install aku-sdk" />
            <p className="text-sm text-muted-foreground mt-2">Then, import and initialize the SDK:</p>
            <CodeBlock
              language="python"
              code={`from aku import Aku

# Initialize the client with your API key
aku = Aku(api_key='your_api_key')

# Create a simple property description agent
agent = aku.agents.create('property-description', 
                          model='gpt-4')  # or 'anthropic/claude-3' or 'local/llama-3'

# Generate a property description
description = agent.generate(
    property={
        'type': 'apartment',
        'bedrooms': 2,
        'bathrooms': 1,
        'sqft': 1200,
        'features': ['hardwood floors', 'updated kitchen', 'balcony'],
        'neighborhood': 'downtown',
        'city': 'Seattle',
        'state': 'WA',
    }
)

print(description)`}
            />
          </TabsContent>
          <TabsContent value="rest" className="mt-4 space-y-4">
            <p className="text-sm text-muted-foreground">Make a POST request to the Aku API:</p>
            <CodeBlock
              language="bash"
              code={`curl -X POST \\
  https://api.aku-ai.com/v1/agents/property-description/generate \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer your_api_key" \\
  -d '{
    "model": "gpt-4",
    "property": {
      "type": "apartment",
      "bedrooms": 2,
      "bathrooms": 1,
      "sqft": 1200,
      "features": ["hardwood floors", "updated kitchen", "balcony"],
      "neighborhood": "downtown",
      "city": "Seattle",
      "state": "WA"
    }
  }'`}
            />
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Next Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Quick Start Guide</CardTitle>
              <CardDescription>Get up and running with Aku in minutes</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="/docs/quick-start">
                  Read Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>API Reference</CardTitle>
              <CardDescription>Detailed documentation of all API endpoints</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="/docs/api-reference/rest">
                  View Reference
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
