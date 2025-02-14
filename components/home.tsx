import React from 'react'
import { motion,useAnimation } from 'framer-motion'
import { Button } from "@/components/ui/button";
import Link from 'next/link'
import { Reveal } from './reveal';

export function Welcome() {
    return (
        <section className="h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary" 
      id='home'>
  <div className="container mx-auto flex flex-col items-center">
    {/* Name and Title with Background */}
    <Reveal>
      <div
      className=" h-70 bg-center bg-no-repeat rounded-lg flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: "url('/cat.png')",
        backgroundSize: "contain", // Ensures the entire image is visible
        height: "23rem",
      }}
    >
      <h1
        className="text-3xl md:text-5xl font-bold sm:pb-5 md:py-6"
      >
       Hey, I'm Louam<span className="text-background text-6xl">.</span>
      </h1>
      </div>
    </Reveal>
    
    

    {/* Summary */}
    <Reveal>
      <p className="mt-6 text-center md:text-center max-w-2xl text-lg text-muted-foreground ">
    <span className="pl-2 text-4xl md:text-3xl font-bold text-secondary">Full Stack Engineer
    </span> with JS eco-system.
    </p>
    </Reveal>
    {/* <motion.p
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: -60 }}
          transition={{ duration: 0.6, delay: 0.5 }}
      className="mt-6 text-center md:text-center max-w-2xl text-lg text-muted-foreground "
    >
      <span className="pl-2 text-4xl md:text-3xl font-bold text-secondary">Full Stack Engineer
        </span> with JS eco-system.
      
    </motion.p> */}
    <motion.p
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: -60 }}
          transition={{ duration: 0.6, delay: 0.5 }}
      className="mt-6 text-center md:text-center max-w-2xl text-lg text-muted-foreground "
    >
      I've spent the last 2 years building and scaling software aiming for real-world application in Tunisia to solve major problems including :
      Transport, Home-Autmation and Agriculture. 
      
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: -60 }}
          transition={{ duration: 0.6, delay: 0.5 }}
      className="mt-6 flex justify-center space-x-6"
    >
      <Link href='#contact'>
        <Button variant="reverse" >
          Get in touch
        </Button>
      </Link>
    </motion.div>
    
  </div>
</section>
    )
}