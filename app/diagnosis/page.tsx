import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"

export default function Diagnosis() {
  return (
    <div className="space-y-6 pt-16">
      <Card>
        <CardHeader>
          <CardTitle>Symptom Checker</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Use our AI-powered symptom checker to get preliminary health insights. Remember, this is not a substitute for
            professional medical advice.
          </p>
          {/* Add symptom checker component here */}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Diagnosis</CardTitle>
        </CardHeader>
        <CardContent>
          <Alert>
            <AlertDescription>
              <h4 className="font-semibold mb-2">Stress-Induced Insomnia</h4>
              Based on your reported symptoms of difficulty falling asleep, racing thoughts at night, and daytime fatigue,
              you may be experiencing stress-induced insomnia. This is common among college students, especially during
              exam periods.
            </AlertDescription>
          </Alert>
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Recommended Actions:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Establish a consistent sleep schedule</li>
              <li>Practice relaxation techniques before bedtime (e.g., deep breathing, meditation)</li>
              <li>Limit caffeine intake, especially in the afternoon and evening</li>
              <li>Create a calm sleep environment (dark, quiet, cool)</li>
              <li>Consider talking to a counselor about stress management techniques</li>
            </ul>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Severity:</h4>
            <Badge variant="outline">Mild to Moderate</Badge>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            If symptoms persist or worsen, please consult with a healthcare professional or your campus health center.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

