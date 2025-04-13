import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CodeBlock } from "@/components/code-block"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AuthenticationPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Authentication</h1>
        <p className="text-xl text-muted-foreground">Learn how to authenticate with the Aku API.</p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight" id="api-keys">
          API Keys
        </h2>
        <p className="leading-7">
          The Aku API uses API keys for authentication. API keys provide full access to your account, so be sure to keep
          them secure.
        </p>
        <Alert>
          <AlertTitle>Security Warning</AlertTitle>
          <AlertDescription>
            Your API keys carry many privileges, so be sure to keep them secure. Don't share your API keys in publicly
            accessible areas such as GitHub, client-side code, or in your frontend application.
          </AlertDescription>
        </Alert>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight" id="obtaining-api-keys">
          Obtaining API Keys
        </h2>
        <p className="leading-7">
          You can obtain an API key from your{" "}
          <Link href="/dashboard" className="font-medium text-primary underline underline-offset-4">
            dashboard
          </Link>
          . If you don't have an account yet,{" "}
          <Link href="/signup" className="font-medium text-primary underline underline-offset-4">
            sign up
          </Link>{" "}
          to get started.
        </p>
        <p className="leading-7">To create a new API key:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Log in to your Aku API account</li>
          <li>Navigate to the API Keys section in your dashboard</li>
          <li>Click "Create New API Key"</li>
          <li>Give your key a descriptive name (e.g., "Development", "Production")</li>
          <li>Copy your API key and store it securely</li>
        </ol>
        <Alert>
          <AlertTitle>Important</AlertTitle>
          <AlertDescription>
            Your API key will only be displayed once. If you lose it, you'll need to create a new one.
          </AlertDescription>
        </Alert>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight" id="using-api-keys">
          Using API Keys
        </h2>
        <p className="leading-7">
          You can authenticate with the Aku API by including your API key in the request headers.
        </p>

        <Tabs defaultValue="sdk" className="w-full">
          <TabsList>
            <TabsTrigger value="sdk">SDK</TabsTrigger>
            <TabsTrigger value="rest">REST API</TabsTrigger>
          </TabsList>
          <TabsContent value="sdk" className="mt-4 space-y-4">
            <p className="leading-7">When using the SDK, you can provide your API key during initialization:</p>
            <Tabs defaultValue="javascript" className="w-full">
              <TabsList>
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
              </TabsList>
              <TabsContent value="javascript" className="mt-4 space-y-4">
                <CodeBlock
                  language="javascript"
                  code={`import { Aku } from '@aku/sdk';

// Initialize with API key
const aku = new Aku({
  apiKey: process.env.AKU_API_KEY,
});`}
                />
              </TabsContent>
              <TabsContent value="python" className="mt-4 space-y-4">
                <CodeBlock
                  language="python"
                  code={`import os
from aku import Aku

# Initialize with API key
aku = Aku(api_key=os.environ.get('AKU_API_KEY'))`}
                />
              </TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="rest" className="mt-4 space-y-4">
            <p className="leading-7">
              When making direct API requests, include your API key in the Authorization header:
            </p>
            <CodeBlock
              language="bash"
              code={`curl -X GET \\
  https://api.aku-ai.com/v1/agents \\
  -H "Authorization: Bearer your_api_key"`}
            />
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight" id="api-key-security">
          API Key Security
        </h2>
        <p className="leading-7">Here are some best practices for keeping your API keys secure:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Use environment variables</strong> - Never hardcode API keys in your source code. Instead, use
            environment variables or a secure secrets management system.
          </li>
          <li>
            <strong>Restrict API key access</strong> - Only share API keys with those who need them, and use different
            keys for different environments (development, staging, production).
          </li>
          <li>
            <strong>Rotate keys regularly</strong> - Periodically generate new API keys and deprecate old ones,
            especially if you suspect a key has been compromised.
          </li>
          <li>
            <strong>Monitor API key usage</strong> - Regularly review your API usage to detect any unusual patterns that
            might indicate a compromised key.
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight" id="revoking-api-keys">
          Revoking API Keys
        </h2>
        <p className="leading-7">If you believe an API key has been compromised, you should revoke it immediately:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Log in to your Aku API account</li>
          <li>Navigate to the API Keys section in your dashboard</li>
          <li>Find the compromised key and click "Revoke"</li>
          <li>Create a new API key to replace the revoked one</li>
          <li>Update your applications to use the new key</li>
        </ol>
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="outline" asChild>
          <Link href="/docs">Introduction</Link>
        </Button>
        <Button asChild>
          <Link href="/docs/quick-start">
            Quick Start
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
