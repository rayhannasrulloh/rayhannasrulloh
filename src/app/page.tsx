// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 font-sans">
      
      {/* Navigation Bar */}
      <nav className="absolute top-0 w-full flex items-center justify-between px-8 lg:px-12 py-8 z-10">
        <div className="text-2xl font-bold tracking-tighter">
          {/* Simple Logo / Icon Placeholder */}
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="#about" className="hover:text-neutral-500 transition-colors">About Me</Link>
          <Link href="#portfolio" className="hover:text-neutral-500 transition-colors">Portfolio</Link>
          <Link href="#services" className="hover:text-neutral-500 transition-colors">Services</Link>
          <Link href="#blog" className="hover:text-neutral-500 transition-colors">Blog</Link>
        </div>
        <Link href="mailto:your-email@example.com" className="text-sm font-medium border-b border-neutral-900 dark:border-neutral-50 pb-0.5 hover:text-neutral-500 transition-colors">
          Book A Call ↗
        </Link>
      </nav>

      {/* Hero Section (Split Layout) */}
      <section className="relative flex flex-col lg:flex-row min-h-screen pt-24 lg:pt-0 border-b border-neutral-200 dark:border-neutral-800">
        
        {/* Left Side: Content */}
        <div className="relative w-full lg:w-1/2 flex flex-col justify-center px-12 lg:px-24 xl:px-32 py-12">
          
          {/* Vertical Text (Visible on large screens) */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[10px] uppercase tracking-[0.3em] text-neutral-400 hidden xl:block whitespace-nowrap flex items-center gap-4">
            <span className="w-12 h-[1px] bg-neutral-300 dark:bg-neutral-700"></span>
            Computer Science
          </div>

          {/* Stats Section */}
          <div className="flex gap-12 mb-16 lg:mb-24">
            <div>
              <p className="text-3xl lg:text-4xl font-light">+5</p>
              <p className="text-xs text-neutral-500 mt-2">Projects completed</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-light">100%</p>
              <p className="text-xs text-neutral-500 mt-2">Always learning</p>
            </div>
          </div>

          {/* Main Greeting */}
          <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-light tracking-tighter leading-none mb-6">
            Hello
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-neutral-400"></span> 
            — It's Rayhan a CS student & dev
          </p>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-8 lg:bottom-12 left-12 lg:left-24 xl:left-32">
            <Link href="#portfolio" className="text-xs font-medium hover:text-neutral-500 transition-colors">
              Scroll down ↓
            </Link>
          </div>
          
          {/* Year Indicator */}
          <div className="absolute bottom-16 lg:bottom-24 left-6 -rotate-90 origin-center text-[10px] text-neutral-400 hidden xl:block">
            2026
          </div>
        </div>

        {/* Right Side: Image Placeholder */}
        <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-screen bg-neutral-100 dark:bg-neutral-900">
          <Image
            src="/profile.png"
            alt="Rayhan Roshidi Nasrulloh Portrait"
            fill
            className="object-cover object-center grayscale"
            priority
          />
        </div>

      </section>

      {/* Projects Section */}
      <section id="portfolio" className="max-w-7xl mx-auto w-full px-8 py-24 space-y-12">
        <h2 className="text-3xl font-light tracking-tight">Selected Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group p-8 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-300 flex flex-col justify-between min-h-[250px]"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-[10px] uppercase tracking-wider font-mono px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4 pt-8 mt-auto">
                <Link 
                  href={project.githubUrl} 
                  target="_blank"
                  className="text-xs uppercase tracking-widest font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors border-b border-transparent hover:border-neutral-900 dark:hover:border-neutral-100 pb-1"
                >
                  Source Code
                </Link>
                {project.liveUrl !== "#" && (
                  <Link 
                    href={project.liveUrl} 
                    target="_blank"
                    className="text-xs uppercase tracking-widest font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors border-b border-transparent hover:border-neutral-900 dark:hover:border-neutral-100 pb-1"
                  >
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}