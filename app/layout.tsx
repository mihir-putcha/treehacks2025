import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Chatbot } from "@/components/chatbot"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"

export const metadata: Metadata = {
  title: "The Wellness Dorm",
  description: "A comprehensive wellness platform for students",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/rxs4ryd.css" />
      </head>
      <body className="font-basic-sans font-normal">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative">
            <nav className="fixed top-0 left-0 right-0 z-50 mb-8 flex justify-between items-center bg-transparent p-2">
              <Tabs defaultValue="home" className="w-full">
                <TabsList className="grid w-full grid-cols-5 rounded-lg bg-white/20 backdrop-blur-sm">
                  <TabsTrigger value="home" asChild>
                    <Link href="/">Home</Link>
                  </TabsTrigger>
                  <TabsTrigger value="dashboard" asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </TabsTrigger>
                  <TabsTrigger value="health" asChild>
                    <Link href="/health">Health</Link>
                  </TabsTrigger>
                  <TabsTrigger value="diagnosis" asChild>
                    <Link href="/diagnosis">Diagnosis</Link>
                  </TabsTrigger>
                  <TabsTrigger value="friend-data" asChild>
                    <Link href="/friend-data">Friend Data</Link>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
              <ModeToggle />
            </nav>
            <main className="animate-fade-in pt-16">{children}</main>
            <Chatbot />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'