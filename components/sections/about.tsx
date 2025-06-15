"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section 
      id="about" 
      className="w-full py-20 md:py-28"
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2"
          >
            <div className="relative h-72 md:h-96 w-full rounded-2xl overflow-hidden border border-border">
              <Image 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt="Kunche Manoj"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-3"
          >
            <div className="space-y-6">
              <div className="text-xl md:text-2xl font-semibold text-primary">
                Hey, I&apos;m Manoj! I love turning coffee into code and data into decisions.
              </div>
              
              <p className="text-foreground/80 leading-relaxed">
                I&apos;m a Computer Science and Engineering student at Raghu Institute of Technology, 
                passionate about solving complex problems with elegant solutions. From crunching numbers to crafting frontends, 
                I build tech with heart and hustle.
              </p>
              
              <p className="text-foreground/80 leading-relaxed">
                My journey in tech has equipped me with a versatile skill set spanning machine learning, 
                data analysis, and full-stack web development. I thrive in collaborative environments 
                where I can contribute my technical expertise while continuously learning and growing.
              </p>

              <div className="pt-4">
                <h3 className="text-lg font-semibold mb-2">Education</h3>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <p className="font-medium">B.Tech in Computer Science and Engineering</p>
                  <p className="text-muted-foreground">Raghu Institute of Technology</p>
                  <p className="text-sm text-muted-foreground">2022 - 2026</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}