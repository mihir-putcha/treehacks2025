import { Heart } from "lucide-react"

export function RotatingHeart() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 animate-rotate-heart opacity-10">
      <Heart className="w-full h-full text-accent" />
    </div>
  )
}

