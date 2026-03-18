// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import FadeIn from '@/components/FadeIn';
import AnimatedCounter from '@/components/AnimatedCounter';

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
        <Link href="mailto:raihan.rosidi354n@gmail.com" className="text-sm font-medium border-b border-neutral-900 dark:border-neutral-50 pb-0.5 hover:text-neutral-500 transition-colors">
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
          <FadeIn delay={0.2}>
            <div className="flex gap-12 mb-16 lg:mb-24">
              <div>
                <p className="text-3xl lg:text-4xl font-light">
                  <AnimatedCounter from={0} to={5} duration={2} prefix="+" />
                </p>
                <p className="text-xs text-neutral-500 mt-2">Projects completed</p>
              </div>
              <div>
                <p className="text-3xl lg:text-4xl font-light">
                  <AnimatedCounter from={0} to={100} duration={2.5} suffix="%" />
                </p>
                <p className="text-xs text-neutral-500 mt-2">Always learning</p>
              </div>
            </div>
          </FadeIn>

          {/* Main Greeting */}
          <FadeIn delay={0.4}>
            <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-light tracking-tighter leading-none mb-6">
              Hello
            </h1>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-neutral-400"></span> 
              It's Rayhan a CS student & dev
            </p>
          </FadeIn>

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
        <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-screen bg-neutral-100 dark:bg-neutral-950 overflow-hidden">
          <FadeIn delay={0.1}>
            <Image
              src="/profile.png"
              alt="Rayhan Portrait"
              fill
              className="object-cover object-center grayscale"
              priority
            />
          </FadeIn>
        </div>

      </section>

      {/* About Me Section */}
      <section id="about" className="bg-neutral-50 dark:bg-neutral-900/20 py-24 px-8 lg:px-12 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start">
          
          {/* Column 1: Title & Intro */}
          <FadeIn delay={0.1}>
          <div className="space-y-6 relative">
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-neutral-900 dark:text-white">
              About Me
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-sm">
              I specialize in turning complex logic into efficient, functional code. 
              My approach blends a strong theoretical foundation with practical application, 
              delivering software that not only runs well but solves real problems. 
              Ready to collaborate?
            </p>
            
            {/* Decorative Curved Arrow SVG */}
            <div className="hidden lg:block absolute -right-8 bottom-0 text-neutral-200 dark:text-neutral-800">
              <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 20 80 Q 50 20 90 30" />
                <path d="M 75 20 L 90 30 L 80 45" />
              </svg>
            </div>
          </div>
          </FadeIn>

          {/* Column 2: Highlight Card */}
          <FadeIn delay={0.3}>
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 lg:p-8 shadow-sm border border-neutral-100 dark:border-neutral-800 flex flex-col gap-6">
            <div className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white">
              {/* Globe Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                <path d="M2 12h20"/>
              </svg>
            </div>
            
            <div>
              <h3 className="text-6xl font-light tracking-tighter text-neutral-900 dark:text-white">
                <AnimatedCounter from={0} to={100} duration={3} suffix="%" />
              </h3>
              <p className="text-sm text-neutral-500 mt-4 leading-relaxed">
                Dedication to continuous learning. While mastering computer science concepts 
                requires persistence, my relentless curiosity drives me to constantly adapt and improve.
              </p>
            </div>

            <div className="relative w-full h-64 mt-4 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
              <Image
                src="/about-card.jpg" 
                alt="Portrait detail"
                fill
                className="object-cover grayscale"
              />
            </div>
          </div>
          </FadeIn>

          {/* Column 3: Details & Points */}
          <FadeIn delay={0.5}>
          <div className="flex flex-col gap-12 lg:pl-8">
            {/* Small Top Image with Link/Arrow */}
            <div className="relative w-32 h-42 rounded-xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 group cursor-pointer">
              <Image
                src="/about-small.jpg"
                alt="Secondary portrait"
                fill
                className="object-cover grayscale transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 bg-white/90 dark:bg-neutral-900/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                  {/* Arrow Up Right Icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-900 dark:text-white">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
            </div>

            {/* Bullet Points */}
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="mt-1 flex-shrink-0 text-neutral-900 dark:text-white">
                  {/* Star Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.4 7.6H22l-6.2 4.5 2.4 7.6-6.2-4.5-6.2 4.5 2.4-7.6L2 9.6h7.6L12 2z"/>
                  </svg>
                </div>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Thriving in an international academic environment, I collaborate effectively 
                  and communicate technical ideas clearly. I specialize in building logical, 
                  user-focused applications.
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="mt-1 flex-shrink-0 text-neutral-900 dark:text-white">
                  {/* Star Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.4 7.6H22l-6.2 4.5 2.4 7.6-6.2-4.5-6.2 4.5 2.4-7.6L2 9.6h7.6L12 2z"/>
                  </svg>
                </div>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  I enjoy working closely with peers and mentors, blending algorithmic 
                  strategy with creative problem-solving to bring impactful software to life.
                </p>
              </div>
            </div>
          </div>
          </FadeIn>

        </div>
      </section>

      {/* Projects Section */}
      <section id="portfolio" className="max-w-7xl mx-auto w-full px-8 py-24 space-y-12">
        <FadeIn delay={0.1}>
        <h2 className="text-3xl font-light tracking-tight">Selected Work</h2>
        </FadeIn>
        
        <FadeIn delay={0.3}>
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
        </FadeIn>
      </section>

      {/* Call to Action (CTA) Section */}
      <section className="bg-neutral-50 dark:bg-neutral-900/40 py-24 px-8 text-center border-t border-neutral-200 dark:border-neutral-800">
        <FadeIn delay={0.3}>
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-neutral-900 dark:text-white">
              Got a Vision? Let's Bring It to Life!
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto">
              I'm always excited to collaborate on new and innovative projects. Whether you're 
              starting from scratch or refining an existing idea.
            </p>
            <div className="pt-6">
              <Link 
                href="mailto:raihan.rosidi354n@gmail.com" 
                className="text-sm font-medium border-b border-neutral-900 dark:border-white pb-1 hover:text-neutral-500 dark:hover:text-neutral-300 transition-colors inline-flex items-center gap-1"
              >
                Book A Call
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Main Footer Section */}
      <footer className="bg-neutral-900 dark:bg-black text-white py-16 px-8 lg:px-12 border-t border-neutral-800 relative overflow-hidden">
        
        {/* Decorative subtle grid lines (to match the reference image) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[20%] top-0 bottom-0 border-l border-white/5"></div>
          <div className="absolute right-[20%] top-0 bottom-0 border-r border-white/5"></div>
          <div className="absolute top-1/2 left-0 right-0 border-t border-white/5"></div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 relative z-10">
          
          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 lg:gap-8 text-sm font-medium text-neutral-400">
            <Link 
              href="/" 
              className="bg-neutral-800 text-white px-6 py-2.5 rounded-full hover:bg-neutral-700 transition-colors"
            >
              Home
            </Link>
            <Link href="#about" className="hover:text-white transition-colors">About Me</Link>
            <Link href="#portfolio" className="hover:text-white transition-colors">Portfolio</Link>
            <Link href="#services" className="hover:text-white transition-colors">Services</Link>
            <Link href="#blog" className="hover:text-white transition-colors">Blog</Link>
          </div>

          {/* Large Email Address */}
          <div>
            <Link 
              href="mailto:raihan.rosidi354n@gmail.com" 
              className="text-4xl lg:text-5xl font-light tracking-tight hover:opacity-80 transition-opacity"
            >
              EMAIL
            </Link>
          </div>
          
        </div>
      </footer>

    </div>
  );
}