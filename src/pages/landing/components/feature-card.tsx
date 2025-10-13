import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { JSX } from "react"

interface FeatureCardProps {
    icon: JSX.Element,
    title: String,
    description: String,
    className?: string
}

const FeatureCard = ({icon,title, description, className}:FeatureCardProps) => {
    return (
            <Card className={cn("h-full border-border bg-card", className)}>
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {icon}
              </div>
              <CardTitle className="text-base md:text-lg text-foreground text-pretty">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{description}</p>
            </CardContent>
          </Card>
    )
}

export default FeatureCard