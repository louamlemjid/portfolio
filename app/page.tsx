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


export default function Home() {
  return (
    <div className="font-serif min-h-screen">
      
      <Welcome />
      <About />
      <Projects/>

      
<Contact />

    </div>
  );
}