"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Award, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

const certifications = [
  {
    title: "Cyber Security Certificate",
    issuer: "Ethnus",
    date: "2024", // update if needed
    description: "Completed a certification on cybersecurity fundamentals, threat detection, and secure practices.",
    link: "https://example.com/ethnus-cybersecurity"
  },
  {
    title: "Artificial Intelligence and Machine Learning",
    issuer: "Google Developers",
    date: "2024", // update if needed
    description: "Gained insights into AI/ML concepts and tools through a Google Developers certification program.",
    link: "https://example.com/google-aiml"
  }
];

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="certifications" 
      className="w-full py-20 md:py-28 bg-secondary/20"
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
            Certifications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/80 text-center max-w-2xl">
            I believe in continuous learning and have earned various certifications to expand my knowledge and skills.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {certifications.map((cert, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-start">
                    <Award className="h-5 w-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-lg">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.date}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-8 pt-2">
                    <p className="text-foreground/80 mb-4">
                      {cert.description}
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Certificate
                      </a>
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}