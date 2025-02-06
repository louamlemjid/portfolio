"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen pt-20 bg-secondary/70">
      <div className="container mx-auto ml-4 px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="xs:max-w-xs md:max-w-6xl mx-auto "
        >
          <div className="flex gap-3 mb-8 ">
            <h1  className="w-3/6 lg:text-4xl font-bold sm:text-3xl">About Me<span className="text-5xl text-background">.</span></h1>
            <hr
              className="w-5/6 h-1 mt-9 bg-background border-background rounded-full"

          />
          </div>
          <div className="prose prose-lg dark:prose-invert">
            <p className="mb-6 sm:text-base lg:text-2xl">
              I am a passionate Full Stack Engineer with expertise in JavaScript and its ecosystem. My journey in software development has been driven by a desire to create innovative solutions that make a real impact.
            </p>
            <p className="mb-6 lg:text-2xl sm:text-sm">
              With extensive experience in modern web technologies including Node.js, React.js, Express.js, and various databases like MongoDB and PostgreSQL, I've developed a strong foundation in both frontend and backend development.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Technical Expertise</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Frontend Development: React.js, React Native, Electron.js</li>
              <li>Backend Development: Node.js, Express.js</li>
              <li>Databases: MongoDB, PostgreSQL, MySQL, Firebase, Supabase</li>
              <li>Cloud Platforms: Heroku, Azure, Render, Cyclic, Vercel</li>
              <li>Other Technologies: C++, C#, ESP32, ESP8266, MQTT</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Professional Journey</h2>
            <p className="mb-6">
              Throughout my career, I've worked on diverse projects ranging from IoT solutions (SmartX) to transportation platforms (L9ITLOUAGE) and enterprise productivity tools. Each project has enhanced my problem-solving abilities and technical skills while teaching me valuable lessons about creating user-centric solutions.
            </p>
            <p>
              I'm always eager to take on new challenges and contribute to projects that push the boundaries of what's possible with modern web technologies. If you're interested in collaboration or would like to discuss a project, feel free to reach out!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}