"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ChevronDown,
  ChevronRight,
  Code2,
  FileText,
  Home,
  Menu,
  Search,
  Cpu,
  Building2,
  ExternalLink,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"

interface NavItem {
  title: string
  href?: string
  icon?: React.ComponentType<{ className?: string }>
  disabled?: boolean
  external?: boolean
  label?: string
  description?: string
  children?: NavItem[]
}

const docsNav: NavItem[] = [
  {
    title: "Getting Started",
    icon: Home,
    children: [
      {
        title: "Introduction",
        href: "/docs",
        description: "What is Aku API and how it works",
      },
      {
        title: "Installation",
        href: "/docs/installation",
        description: "How to install and set up Aku API",
      },
      {
        title: "Authentication",
        href: "/docs/authentication",
        description: "How to authenticate with the Aku API",
      },
      {
        title: "Quick Start",
        href: "/docs/quick-start",
        description: "Get up and running in minutes",
      },
    ],
  },
  {
    title: "Core Concepts",
    icon: Cpu,
    children: [
      {
        title: "Prompts",
        href: "/docs/prompts",
        description: "Understanding and using prompts",
      },
      {
        title: "Agents",
        href: "/docs/agents",
        description: "Working with specialized AI agents",
      },
      {
        title: "Tools",
        href: "/docs/tools",
        description: "Extending functionality with tools",
      },
      {
        title: "Workflows",
        href: "/docs/workflows",
        description: "Creating complex AI workflows",
      },
    ],
  },
  {
    title: "API Reference",
    icon: Code2,
    children: [
      {
        title: "REST API",
        href: "/docs/api-reference/rest",
        description: "Complete REST API reference",
      },
      {
        title: "JavaScript SDK",
        href: "/docs/api-reference/javascript",
        description: "JavaScript SDK documentation",
      },
      {
        title: "Python SDK",
        href: "/docs/api-reference/python",
        description: "Python SDK documentation",
      },
      {
        title: "Rate Limits",
        href: "/docs/api-reference/rate-limits",
        description: "Understanding API rate limits",
      },
    ],
  },
  {
    title: "Use Cases",
    icon: Building2,
    children: [
      {
        title: "Property Management",
        href: "/docs/use-cases/property-management",
        description: "AI for property management",
      },
      {
        title: "Market Analysis",
        href: "/docs/use-cases/market-analysis",
        description: "Real estate market analysis",
      },
      {
        title: "Customer Service",
        href: "/docs/use-cases/customer-service",
        description: "AI-powered customer service",
      },
      {
        title: "Investment Analysis",
        href: "/docs/use-cases/investment-analysis",
        description: "Investment opportunity analysis",
      },
    ],
  },
  {
    title: "Guides",
    icon: FileText,
    children: [
      {
        title: "Best Practices",
        href: "/docs/guides/best-practices",
        description: "Best practices for using Aku API",
      },
      {
        title: "Security",
        href: "/docs/guides/security",
        description: "Securing your Aku API implementation",
      },
      {
        title: "Performance",
        href: "/docs/guides/performance",
        description: "Optimizing API performance",
      },
      {
        title: "Troubleshooting",
        href: "/docs/guides/troubleshooting",
        description: "Common issues and solutions",
      },
    ],
  },
  {
    title: "Resources",
    icon: ExternalLink,
    children: [
      {
        title: "GitHub Repository",
        href: "https://github.com/Kato-Official/aku",
        external: true,
        description: "View the source code on GitHub",
      },
      {
        title: "Community Forum",
        href: "https://community.aku-api.com",
        external: true,
        description: "Join the Aku API community",
      },
      {
        title: "Changelog",
        href: "/docs/changelog",
        description: "Latest updates and changes",
      },
      {
        title: "FAQ",
        href: "/docs/faq",
        description: "Frequently asked questions",
      },
    ],
  },
]

interface DocsSidebarNavProps {
  items: NavItem[]
}

function DocsSidebarNav({ items }: DocsSidebarNavProps) {
  const pathname = usePathname()
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})

  useEffect(() => {
    // Initialize open sections based on current path
    const initialOpenSections: Record<string, boolean> = {}

    items.forEach((item) => {
      if (item.children) {
        const isActiveSection = item.children.some((child) => child.href && pathname === child.href)
        initialOpenSections[item.title] = isActiveSection
      }
    })

    setOpenSections(initialOpenSections)
  }, [pathname, items])

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  return (
    <div className="w-full">
      {items.map((item, index) => {
        const isOpen = openSections[item.title]

        return (
          <div key={index} className="pb-4">
            {item.href ? (
              <Link
                href={item.href}
                className={cn(
                  "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
                  pathname === item.href ? "font-medium text-foreground" : "text-muted-foreground",
                )}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
              >
                {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                <span>{item.title}</span>
                {item.external && <ExternalLink className="ml-1 h-3 w-3" />}
              </Link>
            ) : (
              <button
                onClick={() => toggleSection(item.title)}
                className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 text-muted-foreground hover:text-foreground"
              >
                {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                <span className="font-medium">{item.title}</span>
                <div className="ml-auto">
                  {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </div>
              </button>
            )}
            {item.children && isOpen && (
              <div className="mt-1 pl-4">
                {item.children.map((child, childIndex) => (
                  <Link
                    key={childIndex}
                    href={child.href || "#"}
                    className={cn(
                      "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
                      child.href && pathname === child.href ? "font-medium text-foreground" : "text-muted-foreground",
                    )}
                    target={child.external ? "_blank" : undefined}
                    rel={child.external ? "noreferrer" : undefined}
                  >
                    <span>{child.title}</span>
                    {child.external && <ExternalLink className="ml-1 h-3 w-3" />}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

interface DocsLayoutProps {
  children: React.ReactNode
}

export function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <Link href="/" className="flex items-center space-x-2">
                <Cpu className="h-6 w-6 text-rose-600" />
                <span className="font-bold">Aku API</span>
              </Link>
              <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
                <DocsSidebarNav items={docsNav} />
              </ScrollArea>
            </SheetContent>
          </Sheet>
          <Link href="/" className="mr-6 flex items-center space-x-2 md:hidden">
            <Cpu className="h-6 w-6 text-rose-600" />
            <span className="font-bold inline-block">Aku API</span>
          </Link>
          <Link href="/" className="mr-6 hidden items-center space-x-2 md:flex">
            <Cpu className="h-6 w-6 text-rose-600" />
            <span className="hidden font-bold sm:inline-block">Aku API Documentation</span>
          </Link>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full md:w-80 lg:w-96">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search documentation..." className="pl-8" />
              </div>
            </div>
            <nav className="flex items-center space-x-2">
              <ThemeToggle />
              <Button variant="outline" asChild>
                <Link href="/login">Log In</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <div className="container flex-1">
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr] gap-6 py-8">
          <aside className="hidden md:block">
            <ScrollArea className="h-[calc(100vh-10rem)] pb-10">
              <DocsSidebarNav items={docsNav} />
            </ScrollArea>
          </aside>
          <main className="relative py-6 lg:gap-10 lg:py-8">
            <div className="mx-auto max-w-4xl">{children}</div>
          </main>
        </div>
      </div>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-14 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Aku API. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/Kato-Official/aku"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            <Link href="/docs" className="text-sm font-medium underline underline-offset-4">
              Documentation
            </Link>
            <Link href="/privacy" className="text-sm font-medium underline underline-offset-4">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
