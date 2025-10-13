import { LayoutDashboard, Lightbulb, Users } from "lucide-react";
import FeatureCard from "./components/feature-card";


const Landing = () => {



    const features = [
        {
          icon: <Lightbulb className="w-8 h-8 text-primary" />,
          title: "Future-Proof Learning",
          description:
            "Empower students and educators with a sustainable platform designed to adapt and grow with technological advancements.",
        },
        {
          icon: <LayoutDashboard className="w-8 h-8 text-primary" />,
          title: "Seamless & Engaging Experience",
          description:
            "Deliver a fluid, intuitive interface that makes learning fun, interactive, and stress-free.",
        },
        {
          icon: <Users className="w-8 h-8 text-primary" />,
          title: "Unified Ecosystem",
          description:
            "Connect students, teachers, and administrators in one central learning hub for collaboration and growth.",
        },
      ];
    return (
    <>
        <div className="flex justify-center px-2 w-full">
            <div className="relative w-full h-100 ">
                <div className="absolute left-0 top-0 bg-fixed bg-[url(../assets/landing.jpg)] brightness-10 bg-cover w-full h-full bg-no-repeat">
                </div>
                <h1 className="absolute z-10 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-blue-600">Welcome to LinKasa</h1>
            </div>  
        </div>
        <h2 className="text-4xl font-bold text-center my-12 w-full">
                Why Choose Our Platform?
        </h2>
        <div className="flex justify-center my-12 w-full flex-wrap">
          <div className="w-4/5 flex justify-between flex-wrap gap-y-10">
                  {features.map((feature, idx) => (
                      <FeatureCard key={idx} icon={feature.icon} title={feature.title} description={feature.description}/>
                  ))}
          </div>
        </div>
    </>
    )
}

export default Landing