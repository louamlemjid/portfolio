import { ProjectCard } from "@/components/project-card";
import { ProjectCarousel } from "@/components/project-carousel";
const projects = [
    {
      title: "SmartX",
      description: "Turn your smartphone into a powerful remote for your home with the SmartX Mobile App. Manage your ACs, TVs, lights, cameras, and more – all from one app, no matter where you are.",
      image: "l9itlouage.jpg",
      techStack: ["React Native", "MongoDB", "Firebase", "Node.js", "Express.js", "C++", "ESP32", "ESP8266", "MQTT"],
      github: "https://github.com/louamlemjid",
      youtube: "https://youtube.com",
      preview: "https://smartx-demo.vercel.app"
    },
    {
      title: "L9ITLOUAGE",
      description: "First transport platform for louage in Tunisia. Your simplified solution for finding louage transportation in Tunisia.",
      image: "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&q=80",
      techStack: ["Express.js", "EJS", "Node.js", "Electron", "React"],
      github: "https://github.com/louamlemjid",
      youtube: "https://youtube.com",
      preview: "https://l9itlouage.me"
    },
    {
      title: "Notification on the Horizon",
      description: "A notification system to improve employee productivity inside the company using Windows notification, screensaver as the dashboard of the web app, and auto-launch of Chrome.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80",
      techStack: ["Electron", "React", "Node.js", "Express.js", "C#", "Bootstrap"],
      github: "https://github.com/louamlemjid",
      youtube: "https://youtube.com",
      preview: "https://notification-horizon.vercel.app"
    },
    {
      title: "Health Assistant Chatbot",
      description: "A mental health assistant chatbot powered by GPT-3 to help students with mental health concerns.",
      image: "https://images.unsplash.com/photo-1583864697784-a0efc8379f70?auto=format&fit=crop&q=80",
      techStack: ["EJS", "GPT-3", "Node.js", "Express.js", "Bootstrap"],
      github: "https://github.com/louamlemjid/health-chatbot",
      youtube: "https://youtube.com",
      preview: "https://health-chatbot-ahmj.onrender.com/"
    }
  ];
export function Projects (){
    return (
        <section id="projects" className="min-h-screen py-20 bg-secondary">
  <div className="container mx-auto ml-1 xs:max-w-xs md:max-w-3xl lg:max-w-6xl px-2">
  <div className="flex gap-3 mb-8 ">
            <h1  className="w-3/6 lg:text-4xl font-bold text-2xl mb-4 text-background">My Work<span className="text-5xl text-background/30">.</span></h1>
            <hr
              className="w-5/6 h-1 mt-9 bg-background/30 border-background/30 rounded-full"

          />
          </div>
    <h6 className="text-lg text-muted-foreground mb-12">
    A collection of projects I've worked on.
    </h6>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </div>
</section>
    );
}