"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <section className="w-full min-h-[100vh] flex flex-col justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto max-w-7xl z-10">
        <div className="flex flex-col items-start space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-1"
          >
            <span className="text-lg md:text-xl font-medium text-primary">
              Hello, I&apos;m
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Kunche Manoj
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground mt-2">
              Computer Science Engineer & Full-Stack Developer
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg max-w-2xl text-foreground/80"
          >
            I transform ideas into reality through code. From data analysis to web development, 
            I build tech solutions that make a difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex space-x-4 mt-8"
          >
            <Link 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="GitHub profile"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link 
              href="mailto:manoj@example.com" 
              className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              aria-label="Email contact"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" className="text-foreground/50 hover:text-primary transition-colors">
          <ArrowDown className="h-8 w-8" />
        </Link>
      </div>
    </section>
  )
}