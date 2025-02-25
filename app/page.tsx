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
      <Head>
        <title>Louam Lemjid - Fullstack Engineer</title>
        <meta name="description" content="Welcome to the official website of Louam Lemjid, a Fullstack engineer specializing in web, mobile, and IoT development." />
        <meta name="keywords" content="Louam Lemjid, Fullstack Engineer, Web Development, IoT, React, Node.js, Next.js, Electron.js" />
        <meta name="author" content="Louam Lemjid" />

        {/* Open Graph for Social Media */}
        <meta property="og:title" content="Louam Lemjid - Fullstack Engineer" />
        <meta property="og:description" content="Explore the work of Louam Lemjid, an expert in web, mobile, and IoT development." />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://yourdomain.com" /> */}
        <meta property="og:image" content="/profile.png" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Louam Lemjid",
            "jobTitle": "Fullstack Engineer",
            // "url": "https://yourdomain.com",
            "sameAs": [
              "https://www.linkedin.com/in/louam-lemjid-466435206/",
              "https://github.com/louamlemjid"
            ]
          })}
        </script>
      </Head>

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
