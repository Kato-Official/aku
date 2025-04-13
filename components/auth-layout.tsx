import type React from "react"
import Link from "next/link"
import { Cpu } from "lucide-react"

interface AuthLayoutProps {
  children: React.ReactNode
  heading: string
  subheading: string
  backLinkText?: string
  backLinkHref?: string
}

export function AuthLayout({
  children,
  heading,
  subheading,
  backLinkText = "Back to home",
  backLinkHref = "/",
}: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="flex flex-col items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Cpu className="h-8 w-8 text-rose-600" />
              <span className="text-xl font-bold">Aku API</span>
            </Link>
            <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{heading}</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{subheading}</p>
          </div>

          <div className="mt-8">
            {children}

            {backLinkHref && (
              <div className="mt-6 text-center">
                <Link
                  href={backLinkHref}
                  className="text-sm font-medium text-rose-600 hover:text-rose-500 dark:text-rose-400 dark:hover:text-rose-300"
                >
                  {backLinkText}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative flex-1 bg-gradient-to-br from-rose-500/20 to-purple-600/20">
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="max-w-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Aku <span className="text-gray-500">(悪)</span> — Modular PropTech AI Toolkit
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              The open-source, modular AI framework built specifically for real estate and PropTech. Plug-and-play
              system of prompts, agents, and tools.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 shadow-sm">
                <h4 className="font-medium text-gray-900 dark:text-white">Real Estate Focused</h4>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Purpose-built for real estate use cases with specialized agents and workflows.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 shadow-sm">
                <h4 className="font-medium text-gray-900 dark:text-white">Composable Architecture</h4>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Mix and match prompts, agents, assistants, and tools to create custom AI solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
