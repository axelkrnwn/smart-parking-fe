import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { JSX } from "react"

interface FeatureCardProps {
    icon: JSX.Element,
    title: String,
    description: String,
}

const FeatureCard = ({icon,title, description}:FeatureCardProps) => {
    return (
        <Card className="transition-all hover:shadow-lg hover:scale-102 min-h-50 max-w-[30%]">
              <CardHeader className="flex items-center gap-4">
                {icon}
                <CardTitle className="w-full text-md">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{description}</p>
              </CardContent>
        </Card>
    )
}

export default FeatureCard