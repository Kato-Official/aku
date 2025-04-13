"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface CodeBlockProps {
  code: string
  language: string
  showLineNumbers?: boolean
  className?: string
}

export function CodeBlock({ code, language, showLineNumbers = true, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("relative rounded-md overflow-hidden", className)}>
      <div className="absolute right-2 top-2 z-10">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 bg-background/80 backdrop-blur-sm hover:bg-background/50"
          onClick={copyToClipboard}
        >
          {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          <span className="sr-only">Copy code</span>
        </Button>
      </div>
      <div className="flex items-center px-4 py-2 text-xs border-b bg-muted">
        <span className="font-mono">{language}</span>
      </div>
      <pre
        className={cn(
          "p-4 overflow-x-auto font-mono text-sm",
          isDark ? "bg-gray-950 text-gray-100" : "bg-gray-50 text-gray-800",
        )}
      >
        <code>{code}</code>
      </pre>
    </div>
  )
}
