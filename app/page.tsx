"use client";
import './globals.css';
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";
import { ProjectCarousel } from "@/components/project-carousel";
import { Button } from "@/components/ui/button";
import { Facebook, Github, Linkedin, Mail, Phone, Youtube } from "lucide-react";
import Link from "next/link";
import About from "@/components/about";
import { Contact } from '@/components/contact';

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

export default function Home() {
  return (
    <div className="pl-4 min-h-screen w-full">
      
      <section className="h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary" 
      id='home'>
  <div className="container px-4 mx-auto ml-2 flex flex-col items-center">
    {/* Name and Title with Background */}
    <motion.div
    initial={{ opacity: 0, x: 90 }}
    animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      className="relative w-full max-w-2xl h-70 bg-center bg-no-repeat rounded-lg flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: "url('/cat.png')",
        backgroundSize: "contain", // Ensures the entire image is visible
        height: "23rem",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, x: 90 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold sm:pb-5 md:py-6"
      >
       Hey, I'm Louam<span className="text-secondary text-6xl">.</span>
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, x: 90 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl md:text-3xl text-white/80"
      >
        
      </motion.h2>
    </motion.div>

    {/* Summary */}
    <motion.p
      initial={{ opacity: 0, x: 90 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-6 text-center md:text-center max-w-2xl text-lg text-muted-foreground "
    >
      I'am a <span className="text-4xl md:text-3xl font-bold text-secondary">Full Stack Engineer</span> specializing in JavaScript, Node.js, React, and modern web technologies.
      I've spent the last 5 years building and scaling software. 
      
    </motion.p>
    <motion.div
      initial={{ opacity: 0, x: 90 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.4 }}
      className="mt-6 flex justify-center space-x-6"
    >
      <Button variant="reverse" >
        Get in touch
    </Button>
    </motion.div>
    
  </div>
</section>

<About />


      <section id="projects" className="min-h-screen py-20 bg-secondary">
  <div className="container mx-auto ml-2 xs:max-w-xs md:max-w-3xl lg:max-w-6xl px-6">
  <div className="flex gap-3 mb-8 ">
            <h1  className="w-3/6 lg:text-4xl font-bold sm:text-3xl">My Work<span className="text-5xl text-background">.</span></h1>
            <hr
              className="w-5/6 h-1 mt-9 bg-background border-background rounded-full"

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
<Contact />

    </div>
  );
}