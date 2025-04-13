"use client"

import { Check, X } from "lucide-react"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function FeatureComparison() {
  const features = {
    core: [
      { name: "API Access", starter: true, professional: true, enterprise: true },
      { name: "Basic Prompts", starter: true, professional: true, enterprise: true },
      { name: "Standard Agents", starter: true, professional: true, enterprise: true },
      { name: "Role-Specific Agents", starter: false, professional: true, enterprise: true },
      { name: "Custom Agents", starter: false, professional: false, enterprise: true },
      { name: "Multi-LLM Support", starter: false, professional: true, enterprise: true },
    ],
    advanced: [
      { name: "Workflow Builder", starter: false, professional: true, enterprise: true },
      { name: "Custom Workflows", starter: false, professional: true, enterprise: true },
      { name: "Data Integration", starter: false, professional: true, enterprise: true },
      { name: "Advanced Analytics", starter: false, professional: false, enterprise: true },
      { name: "White-labeling", starter: false, professional: false, enterprise: true },
      { name: "On-premise Deployment", starter: false, professional: false, enterprise: true },
    ],
    support: [
      { name: "Email Support", starter: true, professional: true, enterprise: true },
      { name: "Priority Support", starter: false, professional: true, enterprise: true },
      { name: "Phone Support", starter: false, professional: false, enterprise: true },
      { name: "Dedicated Account Manager", starter: false, professional: false, enterprise: true },
      { name: "SLA Guarantees", starter: false, professional: false, enterprise: true },
      { name: "Custom Training", starter: false, professional: false, enterprise: true },
    ],
  }

  return (
    <Tabs defaultValue="core" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="core">Core Features</TabsTrigger>
        <TabsTrigger value="advanced">Advanced Features</TabsTrigger>
        <TabsTrigger value="support">Support</TabsTrigger>
      </TabsList>
      {Object.entries(features).map(([category, featureList]) => (
        <TabsContent key={category} value={category}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Feature</TableHead>
                <TableHead className="text-center">Starter</TableHead>
                <TableHead className="text-center">Professional</TableHead>
                <TableHead className="text-center">Enterprise</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {featureList.map((feature) => (
                <TableRow key={feature.name}>
                  <TableCell className="font-medium">{feature.name}</TableCell>
                  <TableCell className="text-center">
                    {feature.starter ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-gray-300 dark:text-gray-600 mx-auto" />
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {feature.professional ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-gray-300 dark:text-gray-600 mx-auto" />
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {feature.enterprise ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-gray-300 dark:text-gray-600 mx-auto" />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      ))}
    </Tabs>
  )
}
