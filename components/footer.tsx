import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <p className="text-lg font-semibold">Kunche Manoj</p>
            <p className="text-sm text-muted-foreground mt-1">
              © {new Date().getFullYear()} • All Rights Reserved
            </p>
          </div>
          
          <div className="flex space-x-4">
            <Link 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="GitHub profile"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link 
              href="mailto:manoj@example.com" 
              className="hover:text-primary transition-colors"
              aria-label="Email contact"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}