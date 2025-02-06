"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Resume() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl font-bold"
            >
              Resume
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-12"
          >
            <section>
              <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
              <p className="text-muted-foreground">
                Full Stack Engineer with expertise in JavaScript ecosystem, specializing in building scalable web applications
                and mobile solutions. Proven track record in delivering complex projects using modern technologies and best practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2">Frontend Development</h3>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>React.js</li>
                    <li>React Native</li>
                    <li>Electron.js</li>
                    <li>HTML5/CSS3</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Backend Development</h3>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                    <li>MySQL</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium">SmartX - IoT Home Automation</h3>
                  <p className="text-muted-foreground">
                    Developed a comprehensive mobile application for home automation using React Native, Node.js, and various IoT technologies.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">L9ITLOUAGE - Transportation Platform</h3>
                  <p className="text-muted-foreground">
                    Created Tunisia's first transport platform for louage services, implementing both web and desktop versions.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">Notification on the Horizon</h3>
                  <p className="text-muted-foreground">
                    Built an enterprise notification system improving employee productivity through desktop integration.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              <div>
                <h3 className="font-medium">Computer Science</h3>
                <p className="text-muted-foreground">University Details</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <ul className="text-muted-foreground">
                <li>Phone: +216 50 144 403</li>
                <li>GitHub: github.com/louamlemjid</li>
                <li>LinkedIn: linkedin.com/in/louam-lemjid-466435206</li>
              </ul>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
}