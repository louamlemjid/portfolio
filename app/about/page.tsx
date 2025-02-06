"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12 bg-secondary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <div className="prose prose-lg dark:prose-invert">
            <p className="mb-6">
              I am a passionate Full Stack Engineer with expertise in JavaScript and its ecosystem. My journey in software development has been driven by a desire to create innovative solutions that make a real impact.
            </p>
            <p className="mb-6">
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
    </div>
  );
}