"use client"

import { useState, useEffect } from "react"
import { CheckCircle2, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { AuthLayout } from "@/components/auth-layout"

export default function VerifyEmailPage() {
  const [isVerifying, setIsVerifying] = useState(true)
  const [isVerified, setIsVerified] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Simulate verification process
    const timer = setTimeout(() => {
      setIsVerifying(false)
      setIsVerified(true)
      // For demonstration, you could also set an error:
      // setError("Invalid or expired verification link. Please request a new one.");
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AuthLayout
      heading="Email verification"
      subheading="Verifying your email address"
      backLinkText="Back to sign in"
      backLinkHref="/login"
    >
      <div className="mt-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
        <div className="flex flex-col items-center text-center">
          {isVerifying ? (
            <>
              <Loader2 className="h-12 w-12 text-rose-500 mb-4 animate-spin" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Verifying your email</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Please wait while we verify your email address...
              </p>
            </>
          ) : isVerified ? (
            <>
              <CheckCircle2 className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email verified</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Your email has been successfully verified. You can now sign in to your account.
              </p>
              <Button className="mt-4 bg-rose-600 hover:bg-rose-700" onClick={() => (window.location.href = "/login")}>
                Sign in
              </Button>
            </>
          ) : (
            <>
              <svg className="h-12 w-12 text-red-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Verification failed</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {error || "Invalid or expired verification link. Please request a new one."}
              </p>
              <Button className="mt-4 bg-rose-600 hover:bg-rose-700" onClick={() => (window.location.href = "/login")}>
                Back to sign in
              </Button>
            </>
          )}
        </div>
      </div>
    </AuthLayout>
  )
}
