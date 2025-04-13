"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AuthLayout } from "@/components/auth-layout"

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <AuthLayout
      heading="Forgot your password?"
      subheading="Enter your email address and we'll send you a link to reset your password"
      backLinkText="Back to sign in"
      backLinkHref="/login"
    >
      {!isSubmitted ? (
        <div className="mt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email">Email address</Label>
              <div className="mt-2">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <Button type="submit" className="w-full bg-rose-600 hover:bg-rose-700" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send reset link"}
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <div className="mt-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <CheckCircle2 className="h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Check your email</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              We've sent a password reset link to{" "}
              <span className="font-medium text-gray-900 dark:text-white">{email}</span>
            </p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              If you don't see it in your inbox, please check your spam folder.
            </p>
            <Button className="mt-4 bg-rose-600 hover:bg-rose-700" onClick={() => setIsSubmitted(false)}>
              Try another email
            </Button>
          </div>
        </div>
      )}
    </AuthLayout>
  )
}
