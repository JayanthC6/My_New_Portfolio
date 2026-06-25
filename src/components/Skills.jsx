import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Server, Database, BrainCircuit, Lock, Monitor, ShieldAlert, Cpu
} from 'lucide-react';
import { profileData } from '../data/profile';

export default function Skills() {
  const { skills } = profileData;

  // Map category names to appropriate icons
  const getIcon = (category) => {
    switch (category) {
      case 'Languages':
        return <Code className="h-5 w-5 text-emerald-500" />;
      case 'Backend Development':
        return <Server className="h-5 w-5 text-emerald-500" />;
      case 'Databases & ORM':
        return <Database className="h-5 w-5 text-emerald-500" />;
      case 'AI & Machine Learning':
        return <BrainCircuit className="h-5 w-5 text-emerald-500" />;
      case 'Authentication & Security':
        return <Lock className="h-5 w-5 text-emerald-500" />;
      case 'Frontend Development':
        return <Monitor className="h-5 w-5 text-emerald-500" />;
      case 'Tools & DevOps':
        return <Cpu className="h-5 w-5 text-emerald-500" />;
      default:
        return <Code className="h-5 w-5 text-emerald-500" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900/30 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <h2 className="text-3xl font-bold tracking-tight font-sans">
            <span className="font-mono text-emerald-500 text-lg mr-2 font-normal">03.</span>
            Skills & Core Competencies
          </h2>
          <div className="mt-2 h-1 w-12 bg-emerald-500 rounded mx-auto md:mx-0"></div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((group, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col justify-between hover:border-emerald-500/20 dark:hover:border-emerald-400/20 hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* Header */}
                <div className="flex items-center space-x-3 mb-5 border-b border-slate-100 dark:border-slate-900 pb-3">
                  <div className="p-2 bg-emerald-500/5 rounded-lg border border-emerald-500/10">
                    {getIcon(group.category)}
                  </div>
                  <h3 className="font-sans font-bold text-base text-slate-800 dark:text-slate-250">
                    {group.category}
                  </h3>
                </div>

                {/* Badges list */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-slate-100 dark:bg-slate-900 hover:bg-emerald-500/10 dark:hover:bg-emerald-500/10 hover:text-emerald-500 dark:hover:text-emerald-400 border border-slate-200/50 dark:border-slate-800 text-slate-700 dark:text-slate-300 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
