import { ExperienceCard } from "./experience-card";
import { Reveal } from "./reveal";

const experiences = [
    {
        company:"HorizonLux",
        position:"Full Stack Developer",
        projectTitle:"Notification On The Horizon",
        bulletPoints: [
            "Developed a notification system for HorizonLux",
            "Designed and implemented a notification system for HorizonLux",
            "Developed a notification system for HorizonLux",
            "Designed and implemented a notification system for HorizonLux",
        ],
        techStack: ["React", "Node.js", "Express", "MongoDB"],
        github: "https://github.com",
        youtube: "https://youtube.com",
        preview: "https://preview.com",
    },
    {
        company:"RobotX",
        position:"Co-Founder & Full Stack Developer",
        projectTitle:"SmartX",
        bulletPoints: [
            "Developed a notification system for HorizonLux",
            "Designed and implemented a notification system for HorizonLux",
            "Developed a notification system for HorizonLux",
            "Designed and implemented a notification system for HorizonLux",
        ],
        techStack: ["React", "Node.js", "Express", "MongoDB"],
        github: "https://github.com",
        youtube: "https://youtube.com",
        preview: "https://preview.com",
    }
]
export function Experience() {
return (
        <section id="experiences" className="min-h-screen py-20 bg-gradient-to-b from-secondary to-background">
  <div className="container mx-auto ml-1 xs:max-w-xs md:max-w-3xl lg:max-w-6xl px-2">
  <Reveal><div className="flex gap-3 mb-8 ">
            <h1  className="w-3/6 lg:text-4xl font-bold text-2xl mb-4 text-background">Experience<span className="text-5xl text-background/30">.</span></h1>
            <hr
              className="w-5/6 h-1 mt-9 bg-background border-background/30 rounded-full"

          />
          </div></Reveal>
    <Reveal><h6 className="text-lg text-muted-foreground mb-12">
    A collection of projects I've worked on.
    </h6></Reveal>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
      {experiences.map((experience, index) => (
        <ExperienceCard key={index} {...experience} />
      ))}
    </div>
  </div>
</section>
    );
}