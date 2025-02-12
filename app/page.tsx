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
import  {Welcome}  from '@/components/home';
import { Projects } from '@/components/projects';
import { Providers } from '@/components/providers';
import { AppSidebar } from '@/components/sidebar';
import { Experience } from '@/components/experience';
export default function Home() {
  return (
    <div className="font-serif min-h-screen">
      
      <Providers>
      <div className="grid grid-cols-[5rem_auto] gap-1">
        <div>
          <AppSidebar /> 
          </div>
        <div>
        <Welcome />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
      </div>
      
      

      </Providers>

    </div>
  );
}