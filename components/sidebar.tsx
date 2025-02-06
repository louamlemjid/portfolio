"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Braces } from "lucide-react";
import { motion } from "framer-motion";

export function AppSidebar() {
  const [collapsed, setCollapsed] = useState(true);
  const [activeSection, setActiveSection] = useState("");

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

  // Framer Motion variants for collapsing/expanding

  return (
    <motion.div
      className="fixed left-0 top-0 min-h-screen bg-secondary w-0"
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
        }`} >
          <Braces className="m-2 h-4 w-4">LL</Braces>
        </div>
      </motion.a>

      {/* Navigation Items */}
      <nav className="flex flex-col mt-8 pb-10 gap-20 md:gap-10 items-center">
        {[
          { name: "About", id: "about" },
          { name: "Projects", id: "projects" },
          { name: "Exp .", id: "experience" },
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