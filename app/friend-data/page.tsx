import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const friends = [
  {
    name: "Alex Johnson",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    initials: "AJ",
    streak: 5,
    lastActivity: "30 min run",
    goal: "Run 3 times a week",
  },
  {
    name: "Sam Lee",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    initials: "SL",
    streak: 3,
    lastActivity: "Yoga session",
    goal: "Meditate daily",
  },
  {
    name: "Taylor Swift",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    initials: "TS",
    streak: 7,
    lastActivity: "8 hours sleep",
    goal: "Improve sleep schedule",
  },
  {
    name: "Jordan Patel",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    initials: "JP",
    streak: 2,
    lastActivity: "Healthy meal prep",
    goal: "Eat more vegetables",
  },
]

export default function FriendData() {
  return (
    <div className="space-y-6 pt-16">
      <Card>
        <CardHeader>
          <CardTitle>Friend Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {friends.map((friend) => (
              <div key={friend.name} className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={friend.avatar} alt={friend.name} />
                  <AvatarFallback>{friend.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">{friend.name}</p>
                  <p className="text-sm text-muted-foreground">{friend.lastActivity}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">{friend.streak} day streak</Badge>
                  <Badge variant="outline">{friend.goal}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Wellness Challenges</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>30-Day Meditation Challenge: 12 friends participating</li>
            <li>10,000 Steps Daily: 8 friends participating</li>
            <li>Healthy Eating Week: 15 friends participating</li>
            <li>Sleep Improvement Month: 10 friends participating</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

