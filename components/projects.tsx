import { ProjectCard } from "@/components/project-card";
import { ProjectCarousel } from "@/components/project-carousel";
const projects = [
    {
      title: "SmartX",
      description: "Turn your smartphone into a powerful remote for your home with the SmartX Mobile App. Manage your ACs, TVs, lights, cameras, and more – all from one app, no matter where you are.",
      image: "Smart-X.png",
      techStack: ["React Native", "MongoDB", "Firebase", "Node.js", "Express.js", "C++", "ESP32", "ESP8266"],
      github: "https://github.com/louamlemjid",
      youtube: "https://youtube.com",
      preview: "https://smartx-demo.vercel.app"
    },
    {
      title: "Notification on the Horizon",
      description: "A notification system to improve employee productivity inside the company using Windows notification, screensaver as the dashboard of the web app, and auto-launch of Chrome.",
      image: "notification.png",
      techStack: ["Electron", "React", "Node.js", "Express.js", "C#", "Bootstrap"],
      github: "https://github.com/louamlemjid",
      youtube: "https://youtube.com",
      preview: "https://notification-horizon.vercel.app"
    },{
      title: "L9ITLOUAGE-DESKTOP",
      description: "The desktop solution for L9ITLOUAGE, built for stations to manage their intern louage transportation services.",
      image: "l9itlouageDesktop.jpg",
      techStack: ["Electron", "React", "MongoDB", "Bootstrap"],
      github: "https://github.com/louamlemjid",
      youtube: "https://youtube.com",
      preview: "https://l9itlouage.me"
    },
    {
      title: "Health Assistant Chatbot",
      description: "A mental health assistant chatbot powered by GPT-3 to help students with mental health concerns.",
      image: "healthAssistant.png",
      techStack: ["EJS", "GPT-3", "Node.js", "Express.js", "Bootstrap"],
      github: "https://github.com/louamlemjid/health-chatbot",
      youtube: "https://youtube.com",
      preview: "https://health-chatbot-ahmj.onrender.com/"
    },
    {
      title: "Enib Constructors Quiz",
      description: "A quiz app for Civil Engineering students to test their knowledge of construction materials and methods.",
      image: "enib.png",
      techStack: ["EJS",  "Node.js", "Express.js", "Bootstrap","MongoDB"],
      github: "https://github.com/louamlemjid/health-chatbot",
      youtube: "https://youtube.com",
      preview: "https://health-chatbot-ahmj.onrender.com/"
    },
    {
      title: "L9ITLOUAGE-WEB",
      description: "First transport platform for louage in Tunisia. Your simplified solution for finding louage transportation in Tunisia.",
      image: "l9itlouage.png",
      techStack: ["Express.js", "EJS", "Node.js", "Electron", "React"],
      github: "https://github.com/louamlemjid",
      youtube: "https://youtube.com",
      preview: "https://l9itlouage.me"
    }
  ];
export function Projects (){
    return (
        <section id="projects" className="min-h-screen py-20 bg-secondary/80">
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