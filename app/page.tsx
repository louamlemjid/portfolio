"use client";
import "./globals.css";
import Head from "next/head"; // ✅ Import Next.js Head component
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/navbar";
import { AppSidebar } from "@/components/sidebar";
import { Welcome } from "@/components/home";
import About  from "@/components/about";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ✅ SEO Meta Tags */}
     

      {/* ✅ Page Content */}
      <Providers>
        <Navbar />
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
