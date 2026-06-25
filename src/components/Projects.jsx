import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Cpu, Database, AlertCircle } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Projects() {
  const { projects } = profileData;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Decorative blurred backgrounds */}
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl glow-accent"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <h2 className="text-3xl font-bold tracking-tight font-sans">
            <span className="font-mono text-emerald-500 text-lg mr-2 font-normal">04.</span>
            Featured Projects
          </h2>
          <div className="mt-2 h-1 w-12 bg-emerald-500 rounded mx-auto md:mx-0"></div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/40 hover:border-emerald-500/25 dark:hover:border-emerald-400/25 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                
                {/* Project Details Left */}
                <div className="lg:w-3/5 space-y-6">
                  {/* Title and Links */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-mono text-xs text-emerald-500 font-semibold tracking-widest uppercase">Project {index + 1}</span>
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-white mt-1 group-hover:text-emerald-500 transition-colors duration-200">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex items-center space-x-3 pt-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200"
                          aria-label="GitHub Repository"
                        >
                          <Github className="h-5.5 w-5.5" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="h-5.5 w-5.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">Key Details</h4>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-350 list-none pl-0">
                      {project.bullets.map((bullet, bIndex) => (
                        <li key={bIndex} className="relative pl-5">
                          <span className="absolute left-0 top-[8px] h-1 w-1 rounded-full bg-emerald-500/80"></span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-2xs font-mono bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Problem -> Approach -> Result Right */}
                <div className="lg:w-2/5 flex flex-col justify-center space-y-4 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-850 pt-6 lg:pt-0 lg:pl-8">
                  {/* Problem */}
                  <div className="space-y-1">
                    <span className="text-2xs font-mono text-rose-500 dark:text-rose-400 uppercase tracking-widest block">The Problem</span>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  
                  {/* Approach */}
                  <div className="space-y-1">
                    <span className="text-2xs font-mono text-cyan-500 dark:text-cyan-400 uppercase tracking-widest block">The Approach</span>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {project.approach}
                    </p>
                  </div>

                  {/* Result */}
                  <div className="space-y-1">
                    <span className="text-2xs font-mono text-emerald-500 dark:text-emerald-400 uppercase tracking-widest block">The Result</span>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {project.result}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
