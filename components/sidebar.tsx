"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Braces } from "lucide-react";
import { motion } from "framer-motion";
// import { setTimeout } from "timers/promises";

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const [profileSwtich, setProfileSwitch] = useState(true);
  // Function to update the active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop ; // Adjust for offset
        const sectionBottom = sectionTop + section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          currentSection = section.getAttribute("id") || "";
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => { 
     setTimeout(() => {
      setProfileSwitch(!profileSwtich);
    }, 4000)
  }, []);

  // Framer Motion variants for collapsing/expanding

  return (
    <motion.div
      className="fixed left-0 top-0 h-full bg-primary/70 w-0"
      variants={{
        expanded: { width: "10rem" },
        collapsed: { width: "5rem" },
      }}
      animate={collapsed ? "collapsed" : "expanded"}
      transition={{ duration: 0.6 }}
    >
      {/* Toggle Button */}
      <motion.a key="home" href="#home" className="">
        <div className={`hover:bg-third p-4 flex items-center  ${
          activeSection==="home" ? "bg-third" : ""
        }`} ><motion.div
          
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
        }}
    ><img src={profileSwtich?"/profile.png":"/profile.gif"} alt="Logo" className="w-10 h-10 rounded-full" /></motion.div>
          
        </div>
      </motion.a>

      {/* Navigation Items */}
      <nav className="flex flex-col mt-8 pb-10 gap-20 md:gap-10 items-center">
        {[
          { name: "About", id: "about" },
          { name: "Projects", id: "projects" },
          { name: "Exp .", id: "experiences" },
          { name: "Contact", id: "contact" },
        ].map((item, index) => (
          <motion.a
            key={item.id}
            href={`#${item.id}`}
            className={`group flex items-center px-4 py-2 rounded-md cursor-pointer `}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 }}
          >
            <span
              className={`text-xs md:text-sm font-bold transform rotate-90 
                whitespace-nowrap hover:bg-third hover:border-t-2 border-t px-6 py-8 ${
                  activeSection === item.id ? "bg-third border-t-2 border-t" : ""
                }`}
            >
              {item.name}
            </span>
          </motion.a>
        ))}
      </nav>
    </motion.div>
  );
}