import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"

export default function RestApiPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">REST API Reference</h1>
        <p className="text-xl text-muted-foreground">Complete reference documentation for the Aku REST API.</p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight" id="authentication">
          Authentication
        </h2>
        <p className="leading-7">
          The Aku API uses API keys for authentication. You can obtain an API key from your
          <a href="/dashboard" className="font-medium text-primary underline underline-offset-4">
            {" "}
            dashboard
          </a>
          .
        </p>
        <p className="leading-7">All API requests must include your API key in the Authorization header:</p>
        <CodeBlock
          language="bash"
          code={`curl -X GET \\
  https://api.aku-ai.com/v1/agents \\
  -H "Authorization: Bearer your_api_key"`}
        />
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight" id="base-url">
          Base URL
        </h2>
        <p className="leading-7">All API requests should be made to:</p>
        <CodeBlock language="text" code="https://api.aku-ai.com/v1" showLineNumbers={false} />
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight" id="agents">
          Agents
        </h2>
        <p className="leading-7">Agents are specialized AI assistants designed for specific real estate tasks.</p>

        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight" id="list-agents">
              List Agents
            </h3>
            <p className="leading-7">Returns a list of all available agents.</p>
            <div className="rounded-md border">
              <div className="flex items-center gap-2 border-b px-4 py-2">
                <div className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 px-2 py-1 rounded text-xs font-bold">
                  GET
                </div>
                <div className="font-mono text-sm">/agents</div>
              </div>
              <div className="p-4 space-y-4">
                <Tabs defaultValue="request">
                  <TabsList>
                    <TabsTrigger value="request">Request</TabsTrigger>
                    <TabsTrigger value="response">Response</TabsTrigger>
                  </TabsList>
                  <TabsContent value="request" className="mt-4 space-y-4">
                    <CodeBlock
                      language="bash"
                      code={`curl -X GET \\
  https://api.aku-ai.com/v1/agents \\
  -H "Authorization: Bearer your_api_key"`}
                    />
                  </TabsContent>
                  <TabsContent value="response" className="mt-4 space-y-4">
                    <CodeBlock
                      language="json"
                      code={`{
  "data": [
    {
      "id": "property-description",
      "name": "Property Description Agent",
      "description": "Generates detailed property descriptions based on property attributes",
      "version": "1.0.0",
      "capabilities": [
        "description generation",
        "feature highlighting",
        "neighborhood analysis"
      ]
    },
    {
      "id": "market-analysis",
      "name": "Market Analysis Agent",
      "description": "Analyzes real estate market trends and provides insights",
      "version": "1.0.0",
      "capabilities": [
        "price trend analysis",
        "market comparison",
        "investment opportunity scoring"
      ]
    }
  ],
  "meta": {
    "total": 2,
    "page": 1,
    "per_page": 10
  }
}`}
                    />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight" id="create-agent-run">
              Generate with Agent
            </h3>
            <p className="leading-7">Generate content using a specific agent.</p>
            <div className="rounded-md border">
              <div className="flex items-center gap-2 border-b px-4 py-2">
                <div className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded text-xs font-bold">
                  POST
                </div>
                <div className="font-mono text-sm">/agents/{"{agent_id}"}/generate</div>
              </div>
              <div className="p-4 space-y-4">
                <Tabs defaultValue="request">
                  <TabsList>
                    <TabsTrigger value="request">Request</TabsTrigger>
                    <TabsTrigger value="response">Response</TabsTrigger>
                  </TabsList>
                  <TabsContent value="request" className="mt-4 space-y-4">
                    <p className="text-sm text-muted-foreground">Path Parameters:</p>
                    <ul className="list-disc pl-6 text-sm space-y-1">
                      <li>
                        <code className="font-mono bg-muted px-1 py-0.5 rounded">agent_id</code> - The ID of the agent
                        to use
                      </li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-4">Request Body:</p>
                    <CodeBlock
                      language="json"
                      code={`{
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
}`}
                    />
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
                  <TabsContent value="response" className="mt-4 space-y-4">
                    <CodeBlock
                      language="json"
                      code={`{
  "id": "gen_abc123",
  "object": "generation",
  "created": 1682456789,
  "agent": "property-description",
  "model": "gpt-4",
  "content": "Discover urban living at its finest in this stylish 2-bedroom, 1-bathroom apartment in the heart of downtown Seattle. Spanning 1,200 square feet, this contemporary residence features beautiful hardwood floors throughout, creating a warm and inviting atmosphere. The recently updated kitchen boasts modern appliances, sleek countertops, and ample storage space, perfect for culinary enthusiasts. Step outside onto your private balcony to enjoy breathtaking city views and the vibrant energy of downtown Seattle. Located in a prime location, you'll be just steps away from world-class dining, shopping, entertainment, and public transportation. Experience the best of Seattle living in this exceptional downtown apartment.",
  "usage": {
    "prompt_tokens": 145,
    "completion_tokens": 128,
    "total_tokens": 273
  }
}`}
                    />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight" id="prompts">
          Prompts
        </h2>
        <p className="leading-7">Prompts are pre-defined templates for generating specific types of content.</p>

        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight" id="list-prompts">
              List Prompts
            </h3>
            <p className="leading-7">Returns a list of all available prompts.</p>
            <div className="rounded-md border">
              <div className="flex items-center gap-2 border-b px-4 py-2">
                <div className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 px-2 py-1 rounded text-xs font-bold">
                  GET
                </div>
                <div className="font-mono text-sm">/prompts</div>
              </div>
              <div className="p-4 space-y-4">
                <Tabs defaultValue="request">
                  <TabsList>
                    <TabsTrigger value="request">Request</TabsTrigger>
                    <TabsTrigger value="response">Response</TabsTrigger>
                  </TabsList>
                  <TabsContent value="request" className="mt-4 space-y-4">
                    <CodeBlock
                      language="bash"
                      code={`curl -X GET \\
  https://api.aku-ai.com/v1/prompts \\
  -H "Authorization: Bearer your_api_key"`}
                    />
                  </TabsContent>
                  <TabsContent value="response" className="mt-4 space-y-4">
                    <CodeBlock
                      language="json"
                      code={`{
  "data": [
    {
      "id": "property-description",
      "name": "Property Description",
      "description": "Generates a property description based on property details",
      "version": "1.0.0",
      "parameters": [
        {
          "name": "property",
          "type": "object",
          "description": "Property details",
          "required": true
        }
      ]
    },
    {
      "id": "neighborhood-analysis",
      "name": "Neighborhood Analysis",
      "description": "Analyzes a neighborhood based on location and amenities",
      "version": "1.0.0",
      "parameters": [
        {
          "name": "location",
          "type": "object",
          "description": "Location details",
          "required": true
        }
      ]
    }
  ],
  "meta": {
    "total": 2,
    "page": 1,
    "per_page": 10
  }
}`}
                    />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight" id="errors">
          Errors
        </h2>
        <p className="leading-7">
          The Aku API uses conventional HTTP response codes to indicate the success or failure of an API request.
        </p>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4 text-left font-medium">Code</th>
              <th className="py-2 px-4 text-left font-medium">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2 px-4 font-mono">200 - OK</td>
              <td className="py-2 px-4">Everything worked as expected.</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-mono">400 - Bad Request</td>
              <td className="py-2 px-4">The request was unacceptable, often due to missing a required parameter.</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-mono">401 - Unauthorized</td>
              <td className="py-2 px-4">No valid API key provided.</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-mono">403 - Forbidden</td>
              <td className="py-2 px-4">The API key doesn't have permissions to perform the request.</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-mono">404 - Not Found</td>
              <td className="py-2 px-4">The requested resource doesn't exist.</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4 font-mono">429 - Too Many Requests</td>
              <td className="py-2 px-4">Too many requests hit the API too quickly.</td>
            </tr>
            <tr>
              <td className="py-2 px-4 font-mono">500 - Server Error</td>
              <td className="py-2 px-4">Something went wrong on Aku's end.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight" id="rate-limits">
          Rate Limits
        </h2>
        <p className="leading-7">
          The Aku API implements rate limiting to ensure the stability and availability of the service for all users.
          Rate limits vary based on your subscription plan.
        </p>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4 text-left font-medium">Plan</th>
              <th className="py-2 px-4 text-left font-medium">Rate Limit</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2 px-4">Starter</td>
              <td className="py-2 px-4">10 requests per minute</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4">Professional</td>
              <td className="py-2 px-4">60 requests per minute</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Enterprise</td>
              <td className="py-2 px-4">Custom limits based on your needs</td>
            </tr>
          </tbody>
        </table>
        <p className="leading-7">Rate limit headers are included in all API responses:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <code className="font-mono bg-muted px-1 py-0.5 rounded">X-RateLimit-Limit</code>: The maximum number of
            requests you're permitted to make per minute.
          </li>
          <li>
            <code className="font-mono bg-muted px-1 py-0.5 rounded">X-RateLimit-Remaining</code>: The number of
            requests remaining in the current rate limit window.
          </li>
          <li>
            <code className="font-mono bg-muted px-1 py-0.5 rounded">X-RateLimit-Reset</code>: The time at which the
            current rate limit window resets in UTC epoch seconds.
          </li>
        </ul>
      </div>
    </div>
  )
}
