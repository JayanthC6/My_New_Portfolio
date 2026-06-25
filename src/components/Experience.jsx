import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Experience() {
  const { experience } = profileData;

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl glow-accent"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-3xl font-bold tracking-tight font-sans">
            <span className="font-mono text-emerald-500 text-lg mr-2 font-normal">02.</span>
            Work Experience
          </h2>
          <div className="mt-2 h-1 w-12 bg-emerald-500 rounded mx-auto md:mx-0"></div>
        </div>

        {/* Timeline Container */}
        <motion.div
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative pl-6 md:pl-8 border-l border-slate-200 dark:border-slate-800 space-y-16"
        >
          {experience.map((job, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[35px] md:-left-[43px] top-1.5 bg-slate-950 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-1.5 rounded-full group-hover:border-emerald-500 transition-colors duration-300">
                <div className="h-2 w-2 md:h-3 md:w-3 bg-emerald-500 rounded-full animate-pulse"></div>
              </div>

              {/* Job Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-emerald-500 transition-colors duration-200">
                    {job.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1 text-sm text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-700 dark:text-slate-200">{job.company}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-400"></span>
                    <span className="inline-flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {job.location}
                    </span>
                  </div>
                </div>
                
                {/* Date Badge */}
                <div className="inline-flex items-center text-xs md:text-sm font-mono px-3 py-1 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 w-fit">
                  <Calendar className="h-3.5 w-3.5 mr-1.5 text-emerald-500" />
                  {job.period}
                </div>
              </div>

              {/* Job Accomplishments */}
              <ul className="space-y-3.5 text-sm md:text-base text-slate-600 dark:text-slate-350 leading-relaxed list-none pl-0">
                {job.highlights.map((bullet, bIndex) => (
                  <li key={bIndex} className="relative pl-5">
                    <span className="absolute left-0 top-[9px] h-1.5 w-1.5 rounded-full bg-emerald-500/80"></span>
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Technologies Used Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {job.company.includes("CampusPe") ? (
                  ["React.js", "Java", "Spring Boot", "Flask", "MySQL", "JWT", "MERN Stack"].map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded text-2xs font-mono bg-emerald-500/5 border border-emerald-500/10 text-emerald-500 dark:text-emerald-400">
                      {tech}
                    </span>
                  ))
                ) : (
                  ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Preprocessing", "ML Metrics"].map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded text-2xs font-mono bg-cyan-500/5 border border-cyan-500/10 text-cyan-500 dark:text-cyan-400">
                      {tech}
                    </span>
                  ))
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
