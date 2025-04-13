"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    quote:
      "Aku has transformed how we manage our property portfolio. The AI agents have reduced our customer service response time by 80%.",
    author: "Sarah Johnson",
    title: "CTO, PropertyManage Inc.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "The market analysis capabilities of Aku are unmatched. We've been able to identify investment opportunities we would have otherwise missed.",
    author: "Michael Chen",
    title: "Investment Director, Real Estate Ventures",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "Implementing Aku's API was seamless. Our development team was able to integrate it into our existing systems within days, not weeks.",
    author: "Jessica Williams",
    title: "Lead Developer, HomeFind",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const previous = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(next, 8000)
    return () => clearInterval(interval)
  }, [current])

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="w-full flex-shrink-0 border-none shadow-none bg-transparent">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Quote className="h-12 w-12 text-rose-500 mb-6 opacity-50" />
                <p className="text-xl mb-6 max-w-2xl">{testimonial.quote}</p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                    <AvatarFallback>
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${current === index ? "bg-rose-500" : "bg-gray-300 dark:bg-gray-700"}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur-sm dark:bg-gray-950/80"
        onClick={previous}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur-sm dark:bg-gray-950/80"
        onClick={next}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next</span>
      </Button>
    </div>
  )
}
