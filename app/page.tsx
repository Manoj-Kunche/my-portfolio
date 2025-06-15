import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Certifications from '@/components/sections/certifications';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}