import React from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button";

export function Welcome() {
    return (
        <section className="h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary" 
      id='home'>
  <div className="container mx-auto flex flex-col items-center">
    {/* Name and Title with Background */}
    <motion.div
    initial={{ opacity: 0, x: 90 }}
    animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      className=" h-70 bg-center bg-no-repeat rounded-lg flex flex-col items-center justify-center text-white"
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
       Hey, I'm Louam<span className="text-background text-6xl">.</span>
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
      <span className="pl-3 text-4xl md:text-3xl font-bold text-secondary">Full Stack Engineer
        </span> specializing in JavaScript, Node.js, React, and modern web technologies.
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
    )
}