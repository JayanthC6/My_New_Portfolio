import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import { profileData } from '../data/profile';

export default function Hero() {
  const { name, tagline, about, contact } = profileData.personal;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const handleScrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 70,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden tech-grid">
      {/* Decorative blurred background shapes */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl dark:bg-emerald-500/5 glow-accent"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl dark:bg-cyan-500/5 glow-accent"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Label */}
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 font-mono text-xs uppercase tracking-wider">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Internships & Full - Time Jobs</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight"
          >
            Hi, I'm <span className="text-gradient font-sans">{name}</span>
          </motion.h1>

          {/* Subheading / Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl font-mono text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
          >
            {tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed"
          >
            {about}
          </motion.p>

          {/* Action buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <button
              onClick={() => handleScrollTo('#projects')}
              className="px-6 py-3 rounded-lg font-medium text-sm flex items-center space-x-2 bg-emerald-500 text-white hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500 transition-all duration-200 shadow-lg shadow-emerald-500/20"
            >
              <span>View Projects</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              onClick={() => handleScrollTo('#contact')}
              className="px-6 py-3 rounded-lg font-medium text-sm border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-300 transition-all duration-200"
            >
              Contact Me
            </button>

            <a
              href="/Jayanth__CV__.pdf"
              download="Jayanth_C_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg font-medium text-sm flex items-center space-x-2 border border-emerald-500/30 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-200"
            >
              <Download className="h-4 w-4" />
              <span>Get Resume</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-6 pt-8 border-t border-slate-200 dark:border-slate-900/50 max-w-xs mx-auto"
          >
            <a
              href={contact.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={contact.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={contact.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200"
              aria-label="LeetCode"
            >
              <SiLeetcode className="h-6 w-6" />
            </a>
            {contact.socials.Hackerank && (
              <a
                href={contact.socials.Hackerank}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200"
                aria-label="HackerRank"
              >
                <SiHackerrank className="h-6 w-6" />
              </a>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
