import { ChartBar, LayoutDashboard, Lightbulb, Users } from "lucide-react";
import FeatureCard from "./components/feature-card";
import { Button } from "@/components/ui/button";
import LandingImage from "@/assets/landing.jpg"

const Landing = () => {



    const features = [
        {
          icon: <Lightbulb className="w-8 h-8 text-primary" />,
          title: "Reduce Parking Congestion",
          description:
            "The smart system helps manage vehicle flow more smoothly.",
        },
        {
          icon: <LayoutDashboard className="w-8 h-8 text-primary" />,
          title: "Efficient Parking Process",
          description:
            "Quickly find and manage parking slots with ease.",
        },
        {
          icon: <ChartBar className="w-8 h-8 text-primary" />,
          title: "Parking Data Analytics",
          description:
            "Gain real-time insights to optimize operations.",
        },
        {
          icon: <Users className="w-8 h-8 text-primary" />,
          title: "Minimal Manual Labor",
          description:
            "Automation reduces reliance on on-site staff.",
        },
      ];
    
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-[calc(var(--radius)*2)] border border-border bg-card">
        <img
          src={LandingImage}
          alt="Cars in a modern parking facility from an aerial perspective"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 md:px-8 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Welcome to <span className="text-primary">Smart Parking</span>
            </h1>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Streamline entry, find spaces faster, and unlock operational insights — all powered by a modern, secure
              platform.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:flex-row">
            <Button aria-label="Get started with Smart Parking">Get started</Button>
            <a href="#learn-more">
              <Button variant="outline" aria-label="Learn how Smart Parking works">
                Learn more
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 w-full max-w-6xl px-4 md:mt-16 md:px-8">
        <header className="mb-6 md:mb-8">
          <h2 className="text-center text-2xl font-semibold text-foreground md:text-3xl text-balance">
            Why choose our platform?
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground md:text-base">
            Purpose-built tools that reduce friction for drivers and teams.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} icon={f.icon} title={f.title} description={f.description} />
          ))}
        </div>
      </section>

      <section className="mx-auto my-12 w-full max-w-6xl px-4 md:my-16 md:px-8" id="learn-more">
        <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-border bg-muted/50 p-4 md:flex-row md:p-6">
          <p className="text-center text-sm text-muted-foreground md:text-left md:text-base">
            Ready to improve throughput and visibility across your facilities?
          </p>
          <div className="flex items-center gap-3">
            <Button size="sm">Book a demo</Button>
            <Button size="sm" variant="outline">
              See pricing
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Landing