import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const sleepData = [
  { day: "Mon", hours: 7 },
  { day: "Tue", hours: 6.5 },
  { day: "Wed", hours: 8 },
  { day: "Thu", hours: 7.5 },
  { day: "Fri", hours: 6 },
  { day: "Sat", hours: 9 },
  { day: "Sun", hours: 8.5 },
]

export default function Health() {
  return (
    <div className="grid gap-6 md:grid-cols-2 pt-16">
      <Card>
        <CardHeader>
          <CardTitle>Health Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Heart Rate: 72 bpm</li>
            <li>Blood Pressure: 120/80 mmHg</li>
            <li>Body Temperature: 98.6°F</li>
            <li>Respiratory Rate: 14 breaths/min</li>
            <li>Oxygen Saturation: 98%</li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Wellness Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Stay hydrated by drinking at least 8 glasses of water daily</li>
            <li>Aim for 7-9 hours of sleep each night</li>
            <li>Take regular breaks during study sessions to reduce eye strain</li>
            <li>Practice deep breathing exercises to manage stress</li>
            <li>Incorporate fruits and vegetables into every meal</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Sleep Pattern (Last 7 Days)</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={sleepData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="hours" fill="#FF6961" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

