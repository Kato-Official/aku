"use client"

import { useState } from "react"
import { Building, BarChartIcon as ChartBar, MessageSquare, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const useCases = [
  {
    title: "Property Management",
    description: "Automate maintenance requests, tenant communications, and property inspections with AI agents.",
    icon: Building,
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    features: [
      "Automated maintenance ticket prioritization",
      "AI-powered tenant communication",
      "Predictive maintenance scheduling",
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Market Analysis",
    description: "Leverage AI to analyze market trends, property valuations, and investment opportunities.",
    icon: ChartBar,
    color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    features: ["Predictive pricing models", "Neighborhood trend analysis", "Investment opportunity scoring"],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Customer Service",
    description: "Deploy AI agents that understand real estate terminology and can handle inquiries 24/7.",
    icon: MessageSquare,
    color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
    features: ["Property-specific knowledge base", "Multi-language support", "Seamless human handoff"],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Investment Analysis",
    description:
      "Make data-driven investment decisions with AI that analyzes property performance and ROI projections.",
    icon: TrendingUp,
    color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    features: ["Cash flow projections", "Risk assessment modeling", "Portfolio optimization"],
    image: "/placeholder.svg?height=300&width=500",
  },
]

export function UseCaseShowcase() {
  const [activeCase, setActiveCase] = useState(0)

  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-1 space-y-4">
        {useCases.map((useCase, index) => (
          <Button
            key={index}
            variant="ghost"
            className={`w-full justify-start px-4 py-6 h-auto ${
              activeCase === index ? "bg-gray-100 dark:bg-gray-800" : "hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
            onClick={() => setActiveCase(index)}
          >
            <div className={`p-2 rounded-full mr-4 ${useCase.color}`}>
              <useCase.icon className="h-5 w-5" />
            </div>
            <div className="text-left">
              <h3 className="font-medium">{useCase.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{useCase.description}</p>
            </div>
          </Button>
        ))}
      </div>
      <div className="md:col-span-2">
        <Card>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <div className={`p-3 rounded-full w-fit mb-4 ${useCases[activeCase]?.color}`}>
                  \{useCases[activeCase]?.icon && <useCases[activeCase].icon className="h-6 w-6" />}
                </div>
                <h3 className="text-xl font-bold mb-2">{useCases[activeCase].title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">{useCases[activeCase].description}</p>
                <ul className="space-y-2">
                  {useCases[activeCase].features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="mr-2 h-4 w-4 rounded-full bg-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-6">Learn More</Button>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 h-64 flex items-center justify-center">
                <img
                  src={useCases[activeCase].image || "/placeholder.svg"}
                  alt={useCases[activeCase].title}
                  className="max-w-full max-h-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
