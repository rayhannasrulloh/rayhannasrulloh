// src/app/page.tsx
import Link from 'next/link';
import { projects } from '@/data/projects'; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 sm:p-24">
      {/* Hero Container */}
      <section className="max-w-2xl w-full space-y-6">
        
        {/* Main Headline */}
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hi, I'm Rayhan Roshidi Nasrulloh.
        </h1>
        
        {/* Short Bio */}
        <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
          A Computer Science undergraduate at President University. I build minimal, 
          performant web applications and explore the intersection of Software Engineering 
          and Machine Learning. 
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex gap-4 pt-4">
          <Link 
            href="#projects" 
            className="px-5 py-2.5 bg-neutral-900 text-white rounded-md hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition-colors text-sm font-medium"
          >
            View Projects
          </Link>
          <Link 
            href="https://github.com/rayhannasrulloh" 
            target="_blank" 
            className="px-5 py-2.5 border border-neutral-300 rounded-md hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-900 transition-colors text-sm font-medium"
          >
            GitHub
          </Link>
        </div>

      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-2xl w-full space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">Selected Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group p-5 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs font-mono px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Project Links */}
              <div className="flex gap-3 pt-6 mt-auto">
                <Link 
                  href={project.githubUrl} 
                  target="_blank"
                  className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  Source Code
                </Link>
                {project.liveUrl !== "#" && (
                  <Link 
                    href={project.liveUrl} 
                    target="_blank"
                    className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                  >
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}