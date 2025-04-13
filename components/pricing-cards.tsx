"use client"

import { useState } from "react"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

export function PricingCards() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Starter",
      description: "For individuals and small projects",
      price: isAnnual ? 39 : 49,
      features: ["10,000 API calls per month", "Basic prompt templates", "Standard agents", "Email support"],
      popular: false,
    },
    {
      name: "Professional",
      description: "For growing businesses",
      price: isAnnual ? 159 : 199,
      features: [
        "50,000 API calls per month",
        "Advanced prompt templates",
        "Role-specific agents",
        "Priority support",
        "Custom workflows",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: "Custom",
      features: [
        "Unlimited API calls",
        "Custom prompt engineering",
        "Custom agent development",
        "Dedicated support team",
        "SLA guarantees",
        "On-premise deployment options",
      ],
      popular: false,
    },
  ]

  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <div className="flex items-center space-x-2">
          <span className={`text-sm ${!isAnnual ? "font-medium" : ""}`}>Monthly</span>
          <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
          <span className={`text-sm ${isAnnual ? "font-medium" : ""}`}>
            Annual <span className="text-rose-600 font-medium">(Save 20%)</span>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`flex flex-col ${
              plan.popular ? "border-rose-200 bg-rose-50/50 dark:border-rose-800 dark:bg-rose-900/20" : ""
            }`}
          >
            <CardHeader>
              {plan.popular && (
                <div className="px-3 py-1 text-xs bg-rose-100 dark:bg-rose-800 text-rose-600 dark:text-rose-200 rounded-full w-fit mb-2">
                  Most Popular
                </div>
              )}
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-4 flex items-baseline text-gray-900 dark:text-gray-50">
                {typeof plan.price === "number" ? (
                  <>
                    <span className="text-3xl font-bold tracking-tight">${plan.price}</span>
                    <span className="ml-1 text-xl font-semibold">/month</span>
                  </>
                ) : (
                  <span className="text-3xl font-bold tracking-tight">{plan.price}</span>
                )}
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-rose-600 hover:bg-rose-700"
                    : plan.name === "Enterprise"
                      ? "bg-transparent border border-gray-300 hover:bg-gray-100 text-gray-900 dark:text-white dark:hover:bg-gray-800"
                      : ""
                }`}
                variant={plan.name === "Enterprise" ? "outline" : "default"}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
