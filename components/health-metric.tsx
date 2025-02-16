import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface HealthMetricProps {
  title: string
  value: string | number
  unit: string
  icon: React.ReactNode
  gradient: string
}

export function HealthMetric({ title, value, unit, icon, gradient }: HealthMetricProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className={`bg-gradient-to-r ${gradient} text-primary-foreground`}>
        <CardTitle className="flex items-center space-x-2">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="text-3xl font-bold">{value}</div>
        <div className="text-sm text-muted-foreground">{unit}</div>
      </CardContent>
    </Card>
  )
}

