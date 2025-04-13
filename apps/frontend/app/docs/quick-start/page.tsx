import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function QuickStartPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Quick Start Guide</h1>
        <p className="text-xl text-muted-foreground">Get up and running with Aku API in minutes.</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight" id="prerequisites">
            Prerequisites
          </h2>
          <p className="leading-7">Before you begin, make sure you have:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              An Aku API account (sign up{" "}
              <Link href="/signup" className="font-medium text-primary underline underline-offset-4">
                here
              </Link>{" "}
              if you don't have one)
            </li>
            <li>
              An API key (available in your{" "}
              <Link href="/dashboard" className="font-medium text-primary underline underline-offset-4">
                dashboard
              </Link>
              )
            </li>
            <li>Node.js 14+ or Python 3.7+ installed (depending on your preferred language)</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight" id="installation">
            1. Installation
          </h2>
          <p className="leading-7">First, install the Aku SDK for your preferred language:</p>

          <Tabs defaultValue="javascript" className="w-full">
            <TabsList>
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
            </TabsList>
            <TabsContent value="javascript" className="mt-4 space-y-4">
              <CodeBlock language="bash" code="npm install @aku/sdk" />
            </TabsContent>
            <TabsContent value="python" className="mt-4 space-y-4">
              <CodeBlock language="bash" code="pip install aku-sdk" />
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight" id="initialization">
            2. Initialize the SDK
          </h2>
          <p className="leading-7">Initialize the SDK with your API key:</p>

          <Tabs defaultValue="javascript" className="w-full">
            <TabsList>
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
            </TabsList>
            <TabsContent value="javascript" className="mt-4 space-y-4">
              <CodeBlock
                language="javascript"
                code={`import { Aku } from '@aku/sdk';

// Initialize the client with your API key
const aku = new Aku({
  apiKey: 'your_api_key',
});`}
              />
              <Alert>
                <AlertTitle>Security Note</AlertTitle>
                <AlertDescription>
                  Never hardcode your API key in your source code. Use environment variables instead.
                </AlertDescription>
              </Alert>
              <CodeBlock
                language="javascript"
                code={`import { Aku } from '@aku/sdk';

// Better approach using environment variables
const aku = new Aku({
  apiKey: process.env.AKU_API_KEY,
});`}
              />
            </TabsContent>
            <TabsContent value="python" className="mt-4 space-y-4">
              <CodeBlock
                language="python"
                code={`from aku import Aku

# Initialize the client with your API key
aku = Aku(api_key='your_api_key')`}
              />
              <Alert>
                <AlertTitle>Security Note</AlertTitle>
                <AlertDescription>
                  Never hardcode your API key in your source code. Use environment variables instead.
                </AlertDescription>
              </Alert>
              <CodeBlock
                language="python"
                code={`import os
from aku import Aku

# Better approach using environment variables
aku = Aku(api_key=os.environ.get('AKU_API_KEY'))`}
              />
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight" id="using-agents">
            3. Using Agents
          </h2>
          <p className="leading-7">
            Agents are specialized AI assistants designed for specific real estate tasks. Here's how to use them:
          </p>

          <Tabs defaultValue="javascript" className="w-full">
            <TabsList>
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
            </TabsList>
            <TabsContent value="javascript" className="mt-4 space-y-4">
              <CodeBlock
                language="javascript"
                code={`// Create a property description agent
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
              <CodeBlock
                language="python"
                code={`# Create a property description agent
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
          </Tabs>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight" id="using-prompts">
            4. Using Prompts
          </h2>
          <p className="leading-7">Prompts are pre-defined templates for generating specific types of content:</p>

          <Tabs defaultValue="javascript" className="w-full">
            <TabsList>
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
            </TabsList>
            <TabsContent value="javascript" className="mt-4 space-y-4">
              <CodeBlock
                language="javascript"
                code={`// Use a prompt template
const result = await aku.prompts.generate('neighborhood-analysis', {
  model: 'gpt-4',
  location: {
    neighborhood: 'Capitol Hill',
    city: 'Seattle',
    state: 'WA',
  }
});

console.log(result);`}
              />
            </TabsContent>
            <TabsContent value="python" className="mt-4 space-y-4">
              <CodeBlock
                language="python"
                code={`# Use a prompt template
result = aku.prompts.generate('neighborhood-analysis',
                             model='gpt-4',
                             location={
                                 'neighborhood': 'Capitol Hill',
                                 'city': 'Seattle',
                                 'state': 'WA',
                             })

print(result)`}
              />
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight" id="creating-workflows">
            5. Creating Workflows
          </h2>
          <p className="leading-7">Workflows allow you to chain multiple agents and prompts together:</p>

          <Tabs defaultValue="javascript" className="w-full">
            <TabsList>
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
            </TabsList>
            <TabsContent value="javascript" className="mt-4 space-y-4">
              <CodeBlock
                language="javascript"
                code={`// Create a workflow
const workflow = aku.workflows.create();

// Add steps to the workflow
workflow.addStep('neighborhood-analysis', {
  location: {
    neighborhood: 'Capitol Hill',
    city: 'Seattle',
    state: 'WA',
  }
});

workflow.addStep('property-description', {
  property: {
    type: 'apartment',
    bedrooms: 2,
    bathrooms: 1,
    sqft: 1200,
    features: ['hardwood floors', 'updated kitchen', 'balcony'],
    neighborhood: 'Capitol Hill',
    city: 'Seattle',
    state: 'WA',
  }
});

// Execute the workflow
const results = await workflow.execute({
  model: 'gpt-4',
});

console.log(results);`}
              />
            </TabsContent>
            <TabsContent value="python" className="mt-4 space-y-4">
              <CodeBlock
                language="python"
                code={`# Create a workflow
workflow = aku.workflows.create()

# Add steps to the workflow
workflow.add_step('neighborhood-analysis', 
                 location={
                     'neighborhood': 'Capitol Hill',
                     'city': 'Seattle',
                     'state': 'WA',
                 })

workflow.add_step('property-description',
                 property={
                     'type': 'apartment',
                     'bedrooms': 2,
                     'bathrooms': 1,
                     'sqft': 1200,
                     'features': ['hardwood floors', 'updated kitchen', 'balcony'],
                     'neighborhood': 'Capitol Hill',
                     'city': 'Seattle',
                     'state': 'WA',
                 })

# Execute the workflow
results = workflow.execute(model='gpt-4')

print(results)`}
              />
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight" id="next-steps">
            Next Steps
          </h2>
          <p className="leading-7">
            Now that you've got the basics down, here are some resources to help you go further:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link href="/docs/api-reference/rest" className="font-medium text-primary underline underline-offset-4">
                API Reference
              </Link>
              <span className="text-muted-foreground"> - Complete documentation of all API endpoints</span>
            </li>
            <li>
              <Link
                href="/docs/guides/best-practices"
                className="font-medium text-primary underline underline-offset-4"
              >
                Best Practices
              </Link>
              <span className="text-muted-foreground"> - Tips for getting the most out of Aku API</span>
            </li>
            <li>
              <Link
                href="/docs/use-cases/property-management"
                className="font-medium text-primary underline underline-offset-4"
              >
                Use Cases
              </Link>
              <span className="text-muted-foreground"> - Real-world examples of Aku API in action</span>
            </li>
            <li>
              <Link
                href="https://github.com/Kato-Official/aku"
                className="font-medium text-primary underline underline-offset-4"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repository
              </Link>
              <span className="text-muted-foreground"> - Contribute to the Aku API open-source project</span>
            </li>
          </ul>
        </div>

        <div className="flex justify-between pt-4">
          <Button variant="outline" asChild>
            <Link href="/docs">Introduction</Link>
          </Button>
          <Button asChild>
            <Link href="/docs/api-reference/rest">
              API Reference
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
