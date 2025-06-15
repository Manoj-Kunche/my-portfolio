"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
 {
    title: "Online Code Compiler",
    description: "A web application that allows users to compile and execute code snippets in multiple programming languages. Features include syntax highlighting, theme options, and saving code snippets.",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    tags: ["React", "Node.js", "Express", "Docker"],
    liveLink: "https://example.com/code-compiler",
    githubLink: "https://github.com/example/code-compiler"
  },
  {
    title: "Predictive Analysis of Diabetes",
    description: "A machine learning project for predicting diabetes using medical data. Implemented various classification algorithms and achieved 85% accuracy in prediction.",
    image: "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg",
    tags: ["Python", "Scikit-learn", "Pandas", "Data Visualization"],
    liveLink: "https://example.com/diabetes-prediction",
    githubLink: "https://github.com/example/diabetes-prediction"
  },
  {
    title: "Online Portfolio Website",
    description: "A previous version of my personal portfolio site built using React and Firebase. Featured responsive design, dark mode, and animation effects.",
    image: "https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg",
    tags: ["React", "Firebase", "CSS", "JavaScript"],
    liveLink: "https://example.com/portfolio-v1",
    githubLink: "https://github.com/example/portfolio-v1"
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section 
      id="projects" 
      className="w-full py-20 md:py-28"
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/80 text-center max-w-2xl">
            Here are some of the projects I&apos:ve worked on that showcase my skills and interests.
            Each project demonstrates different aspects of my technical abilities.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full flex flex-col overflow-hidden group hover:shadow-lg transition-all duration-300 border-border">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base text-foreground/80 mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}