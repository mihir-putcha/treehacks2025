import { HealthMetric } from "@/components/health-metric"
import { Activity, Heart, Moon, Utensils, Brain } from "lucide-react"
import { HeartAnimation } from "@/components/heart-animation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

async function getTerraData() {
  // Simulating API call
  return {
    steps: 8234,
    sleepHours: 7.5,
    heartRate: 72,
    caloriesBurned: 2150,
    stressLevel: 3,
  }
}

export default async function Dashboard() {
  const terraData = await getTerraData()

  return (
    <div className="space-y-6 pt-16">
      <div className="relative min-h-[30vh]">
        <HeartAnimation />
      </div>
      <h1 className="text-4xl font-roca font-black text-primary">Your Wellness Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <HealthMetric
          title="Daily Steps"
          value={terraData.steps}
          unit="steps"
          icon={<Activity className="w-8 h-8" />}
          gradient="from-[#FF6961] to-[#FF6961]"
        />
        <HealthMetric
          title="Sleep Duration"
          value={terraData.sleepHours}
          unit="hours"
          icon={<Moon className="w-8 h-8" />}
          gradient="from-[#FF6961] to-[#FF6961]"
        />
        <HealthMetric
          title="Heart Rate"
          value={terraData.heartRate}
          unit="bpm"
          icon={<Heart className="w-8 h-8" />}
          gradient="from-[#FF6961] to-[#FF6961]"
        />
        <HealthMetric
          title="Calories Burned"
          value={terraData.caloriesBurned}
          unit="kcal"
          icon={<Utensils className="w-8 h-8" />}
          gradient="from-[#FF6961] to-[#FF6961]"
        />
        <HealthMetric
          title="Stress Level"
          value={terraData.stressLevel}
          unit="/ 10"
          icon={<Brain className="w-8 h-8" />}
          gradient="from-[#FF6961] to-[#FF6961]"
        />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Weekly Goals Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Exercise (3 times/week)</span>
                <span className="text-sm font-medium">2/3</span>
              </div>
              <Progress value={66} />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Meditation (10 minutes/day)</span>
                <span className="text-sm font-medium">5/7 days</span>
              </div>
              <Progress value={71} />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Water Intake (8 glasses/day)</span>
                <span className="text-sm font-medium">6/8 glasses</span>
              </div>
              <Progress value={75} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

