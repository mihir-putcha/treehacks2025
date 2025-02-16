"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Send, X } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function Chatbot() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([])
  const [input, setInput] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [thinking, setThinking] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    setError(null)
    setThinking(true)

    try {
      // Simulate a delay for the "thinking..." step
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to get response")
      }

      if (data.error) {
        throw new Error(data.error)
      }

      if (typeof data.response === "string") {
        setMessages((prev) => [...prev, { role: "assistant", content: data.response }])
      } else {
        console.error("Unexpected response format:", data)
        throw new Error("Invalid response format")
      }
    } catch (error) {
      console.error("Error fetching chat response:", error)
      setError(error instanceof Error ? error.message : "An unexpected error occurred. Please try again.")
    } finally {
      setIsLoading(false)
      setThinking(false)
    }
  }

  useEffect(() => {
    const chatContent = document.getElementById("chat-content")
    if (chatContent) {
      chatContent.scrollTop = chatContent.scrollHeight
    }
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button onClick={() => setIsOpen(true)} className="rounded-full w-16 h-16 bg-primary hover:bg-primary/90">
          <Bot size={24} />
        </Button>
      ) : (
        <Card className="w-80 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
            <CardTitle className="flex justify-between items-center">
              <span className="flex items-center">
                <Bot className="mr-2" size={20} />
                Wellness AI Chat
              </span>
              <Button size="icon" variant="ghost" onClick={() => setIsOpen(false)}>
                <X size={20} />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent id="chat-content" className="h-64 overflow-y-auto p-4">
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {messages.length === 0 && (
              <Alert className="mb-4">
                <AlertDescription>
                  Welcome to the Wellness AI Chat! Ask me anything about health, wellness, or fitness.
                </AlertDescription>
              </Alert>
            )}
            {messages.map((m, index) => (
              <div key={index} className={`mb-4 ${m.role === "user" ? "text-right" : "text-left"}`}>
                <span
                  className={`inline-block p-2 rounded-lg ${
                    m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  {m.content}
                </span>
              </div>
            ))}
            {thinking && (
              <div className="flex items-center space-x-2 mb-4">
                <span className="inline-block p-2 rounded-lg bg-muted">
                  <span className="animate-pulse">Thinking</span>
                  <span className="animate-pulse delay-100">.</span>
                  <span className="animate-pulse delay-200">.</span>
                  <span className="animate-pulse delay-300">.</span>
                </span>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <form onSubmit={handleSubmit} className="flex w-full space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about your health..."
                className="flex-grow"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90" disabled={isLoading}>
                <Send size={18} />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}

