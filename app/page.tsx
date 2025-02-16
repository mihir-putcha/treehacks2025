"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Activity, Brain, Users, Heart } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="relative h-[600px] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dorm_landing_page2-Az8rlh7CaY4sDA4euSDgjqZ0uWYCjo.jpeg"
            alt="Modern dorm room"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        <div className="relative z-10 text-center space-y-6 p-8 max-w-3xl">
          <h1 className="text-6xl font-roca font-black text-white drop-shadow-lg">The Wellness Dorm!</h1>
          <p className="text-2xl font-basic-sans font-normal text-white max-w-2xl mx-auto drop-shadow-lg bg-white bg-opacity-50 p-4 rounded-lg">
            Empowering students to achieve optimal health and balance through innovative technology and personalized
            insights.
          </p>
          <Button
            asChild
            size="lg"
            className="animate-pulse-scale text-xl py-6 px-8 bg-[#FF000C] hover:bg-[#FF000C]/90 font-roca font-black"
          >
            <Link href="/dashboard">
              Explore Your Wellness <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </Button>
        </div>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="overflow-hidden">
          <CardHeader className="bg-[#FF6961] text-white">
            <CardTitle className="flex items-center text-2xl font-roca font-black">
              <Activity className="mr-2 h-8 w-8" />
              Track Your Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 h-[300px]">
            <p className="text-lg font-basic-sans font-normal mb-4">
              Monitor your daily steps, workouts, and more to stay on top of your fitness goals.
            </p>
            <div className="relative w-full h-[200px]">
              <Image
                src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Activity Tracking"
                fill
                className="rounded-md object-cover"
              />
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden">
          <CardHeader className="bg-[#FF6961] text-white">
            <CardTitle className="flex items-center text-2xl font-roca font-black">
              <Brain className="mr-2 h-8 w-8" />
              Mental Wellness
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 h-[300px]">
            <p className="text-lg font-basic-sans font-normal mb-4">
              Access resources and tools to support your mental health and reduce stress.
            </p>
            <div className="relative w-full h-[200px]">
              <Image
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
                alt="Mental Wellness"
                fill
                className="rounded-md object-cover"
              />
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden">
          <CardHeader className="bg-[#FF6961] text-white">
            <CardTitle className="flex items-center text-2xl font-roca font-black">
              <Users className="mr-2 h-8 w-8" />
              Connect with Friends
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 h-[300px]">
            <p className="text-lg font-basic-sans font-normal mb-4">
              Share your progress and motivate each other on your wellness journeys.
            </p>
            <div className="relative w-full h-[200px]">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
                alt="Friend Connection"
                fill
                className="rounded-md object-cover"
              />
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden">
          <CardHeader className="bg-[#FF6961] text-white">
            <CardTitle className="flex items-center text-2xl font-roca font-black">
              <Heart className="mr-2 h-8 w-8" />
              Holistic Health
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 h-[300px]">
            <p className="text-lg font-basic-sans font-normal mb-4">
              Get a comprehensive view of your health, including nutrition, sleep, and more.
            </p>
            <div className="relative w-full h-[200px]">
              <Image
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1753&q=80"
                alt="Holistic Health"
                fill
                className="rounded-md object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

