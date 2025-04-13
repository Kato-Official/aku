import Link from "next/link"
import { ArrowRight, Building2, Code2, Cpu, Layers, Lock, Rocket, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                PropTech AI Toolkit
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Aku <span className="text-gray-500">(悪)</span> — Modular PropTech AI Toolkit
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                The open-source, modular AI framework built specifically for real estate and PropTech. Plug-and-play
                system of prompts, agents, and tools.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="px-8">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/docs">View Documentation</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden border shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-purple-600/20">
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="w-full h-full bg-transparent rounded-lg p-4 text-left font-mono text-xs sm:text-sm flex flex-col justify-center overflow-visible">
                      <div className="flex gap-1.5 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
                        $ curl -X POST https://api.aku.tools/agents/landlord \
                        <br />
                        {"  "}-d {"{"}
                        <br />
                        {"    "}"issue": "AC stopped working",
                        <br />
                        {"    "}"location": "Unit 402, Marina Heights"
                        <br />
                        {"  "}
                        {"}"}
                        <br />
                        <br />
                        {"> AI Agent:"}
                        <br />
                        {"  * Maintenance ticket created."}
                        <br />
                        {"  * Technician scheduled for today at 3PM."}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Key Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Aku?</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Aku is designed from the ground up for real estate and PropTech applications, with features that make AI
                implementation seamless.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card>
              <CardHeader className="pb-2">
                <Building2 className="h-6 w-6 mb-2 text-rose-500" />
                <CardTitle>Real Estate Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Purpose-built for real estate use cases with specialized agents and workflows for property management,
                  valuation, and market analysis.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Layers className="h-6 w-6 mb-2 text-rose-500" />
                <CardTitle>Composable Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Mix and match prompts, agents, assistants, and tools to create custom AI solutions tailored to your
                  specific needs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Code2 className="h-6 w-6 mb-2 text-rose-500" />
                <CardTitle>LLM-Agnostic</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Works seamlessly with OpenAI, Anthropic, local models, and more. Switch providers without changing
                  your implementation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Lock className="h-6 w-6 mb-2 text-rose-500" />
                <CardTitle>Safety-First Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Built-in safeguards prevent catastrophic actions, ensuring your AI systems operate within defined
                  parameters.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Rocket className="h-6 w-6 mb-2 text-rose-500" />
                <CardTitle>Rapid Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Get up and running quickly with FastAPI, Streamlit, CLI, or JavaScript integrations. Deploy in
                  minutes, not weeks.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Users className="h-6 w-6 mb-2 text-rose-500" />
                <CardTitle>Role-Aware Agents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Specialized agents for landlords, brokers, tenants, investors, and companies, each with
                  domain-specific knowledge.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">Applications</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Real-World Use Cases</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                See how Aku is transforming the real estate industry with AI-powered solutions.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12">
            <Tabs defaultValue="property-management" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="property-management">Property Management</TabsTrigger>
                <TabsTrigger value="market-analysis">Market Analysis</TabsTrigger>
                <TabsTrigger value="customer-service">Customer Service</TabsTrigger>
                <TabsTrigger value="investment">Investment</TabsTrigger>
              </TabsList>
              <TabsContent value="property-management" className="p-4 border rounded-lg mt-4">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Intelligent Property Management</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      Automate maintenance requests, tenant communications, and property inspections with AI agents that
                      understand the context of property management.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
                        <span>Automated maintenance ticket prioritization</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
                        <span>AI-powered tenant communication</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
                        <span>Predictive maintenance scheduling</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 h-64 flex items-center justify-center">
                    <p className="text-center text-gray-500 dark:text-gray-400">
                      Property Management Dashboard Visualization
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="market-analysis" className="p-4 border rounded-lg mt-4">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Real-Time Market Analysis</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      Leverage AI to analyze market trends, property valuations, and investment opportunities with
                      unprecedented accuracy.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
                        <span>Predictive pricing models</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
                        <span>Neighborhood trend analysis</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
                        <span>Investment opportunity scoring</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 h-64 flex items-center justify-center">
                    <p className="text-center text-gray-500 dark:text-gray-400">
                      Market Analysis Dashboard Visualization
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="customer-service" className="p-4 border rounded-lg mt-4">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <h3 className="text-xl font-bold mb-2">24/7 Customer Service</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      Deploy AI agents that understand real estate terminology and can handle inquiries from tenants,
                      buyers, and sellers around the clock.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
                        <span>Property-specific knowledge base</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
                        <span>Multi-language support</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
                        <span>Seamless human handoff</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 h-64 flex items-center justify-center">
                    <p className="text-center text-gray-500 dark:text-gray-400">
                      Customer Service Interface Visualization
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="investment" className="p-4 border rounded-lg mt-4">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Investment Analysis</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      Make data-driven investment decisions with AI that analyzes property performance, market
                      conditions, and ROI projections.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
                        <span>Cash flow projections</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
                        <span>Risk assessment modeling</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
                        <span>Portfolio optimization</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 h-64 flex items-center justify-center">
                    <p className="text-center text-gray-500 dark:text-gray-400">
                      Investment Analysis Dashboard Visualization
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Pricing</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Choose the plan that fits your needs. All plans include access to the core Aku API.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-12">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <CardDescription>For individuals and small projects</CardDescription>
                <div className="mt-4 flex items-baseline text-gray-900 dark:text-gray-50">
                  <span className="text-3xl font-bold tracking-tight">$49</span>
                  <span className="ml-1 text-xl font-semibold">/month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
                    <span>10,000 API calls per month</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
                    <span>Basic prompt templates</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
                    <span>Standard agents</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
                    <span>Email support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col border-rose-200 bg-rose-50/50 dark:border-rose-800 dark:bg-rose-900/20">
              <CardHeader>
                <div className="px-3 py-1 text-xs bg-rose-100 dark:bg-rose-800 text-rose-600 dark:text-rose-200 rounded-full w-fit mb-2">
                  Most Popular
                </div>
                <CardTitle>Professional</CardTitle>
                <CardDescription>For growing businesses</CardDescription>
                <div className="mt-4 flex items-baseline text-gray-900 dark:text-gray-50">
                  <span className="text-3xl font-bold tracking-tight">$199</span>
                  <span className="ml-1 text-xl font-semibold">/month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
                    <span>50,000 API calls per month</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
                    <span>Advanced prompt templates</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
                    <span>Role-specific agents</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
                    <span>Custom workflows</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-rose-600 hover:bg-rose-700">Get Started</Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For large organizations</CardDescription>
                <div className="mt-4 flex items-baseline text-gray-900 dark:text-gray-50">
                  <span className="text-3xl font-bold tracking-tight">Custom</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
                    <span>Unlimited API calls</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
                    <span>Custom prompt engineering</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
                    <span>Custom agent development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
                    <span>Dedicated support team</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
                    <span>SLA guarantees</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
                    <span>On-premise deployment options</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Contact Sales
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your PropTech Business?
              </h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join the growing community of real estate professionals leveraging Aku to build the future of PropTech.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="px-8 bg-rose-600 hover:bg-rose-700">
                Get Started Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 text-gray-900 dark:text-gray-200 hover:bg-gray-800 hover:text-white"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center space-x-2">
                <Cpu className="h-6 w-6 text-rose-600" />
                <span className="text-lg font-bold">Aku API</span>
              </div>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                The open-source, modular AI framework for real estate and PropTech.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium">Product</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    API Reference
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Resources</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    Guides
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-gray-200 dark:border-gray-700 pt-6 flex flex-col-reverse md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Aku API. All rights reserved.
            </p>
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Link href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                <span className="sr-only">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
