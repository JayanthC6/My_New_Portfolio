import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Award } from 'lucide-react';
import { profileData } from '../data/profile';

export default function About() {
  const { about } = profileData.personal;

  const corePillars = [
    {
      icon: <Code2 className="h-6 w-6 text-emerald-500" />,
      title: "Full-Stack Development",
      description: "Building robust REST APIs and end-to-end applications using Spring Boot, NestJS, and React."
    },
    {
      icon: <Cpu className="h-6 w-6 text-emerald-500" />,
      title: "AI & Machine Learning",
      description: "Developing models using TensorFlow/CNNs and integrating LLMs via Google Gemini & Groq APIs."
    },
    {
      icon: <Database className="h-6 w-6 text-emerald-500" />,
      title: "Database Engineering",
      description: "Designing efficient schemas and managing queries across PostgreSQL, MySQL, and MongoDB."
    },
    {
      icon: <Award className="h-6 w-6 text-emerald-500" />,
      title: "Academic Excellence",
      description: "MCA Candidate at Bangalore Institute of Technology with a strong CGPA of 8.84."
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/30 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <h2 className="text-3xl font-bold tracking-tight font-sans">
            <span className="font-mono text-emerald-500 text-lg mr-2 font-normal">01.</span>
            About Me
          </h2>
          <div className="mt-2 h-1 w-12 bg-emerald-500 rounded mx-auto md:mx-0"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Bio Text */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 font-light">
              Hello! I'm Jayanth, an aspiring software engineer based in Bengaluru. I specialize in designing and engineering high-performance, intelligent applications that bridge the gap between traditional backend architectures and cutting-edge machine learning.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {about}
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Throughout my academic journey and internship experiences, I have developed a passion for solving complex architectural challenges. Whether it's sole-developing compliance audit trails, building real-time interview prep suites, or implementing Text-to-SQL parsing engines, I thrive in environments that challenge me to learn quickly and adapt across different technology ecosystems.
            </p>
          </div>

          {/* Avatar / Brand Card */}
          <div className="flex justify-center">
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative group w-64 h-64 sm:w-72 sm:h-72"
            >
              {/* Outer frame */}
              <div className="absolute inset-0 border-2 border-emerald-500/20 rounded-2xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
              
              {/* Inner card */}
              <div className="absolute inset-0 bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                <div className="h-24 w-24 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center text-white font-sans text-3xl font-extrabold shadow-lg shadow-emerald-500/20 mb-4">
                  JC
                </div>
                <h3 className="text-xl font-bold text-white">Jayanth C</h3>
                <p className="text-slate-400 font-mono text-xs mt-1">MCA Graduate & Intern</p>
                <div className="mt-4 flex space-x-2">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/10 text-2xs font-mono">Full-Stack</span>
                  <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/10 text-2xs font-mono">AI/ML</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Pillars Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {corePillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/20 hover:border-emerald-500/30 hover:shadow-lg dark:hover:bg-slate-900/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-3 bg-emerald-500/5 rounded-lg inline-block mb-4">
                {pillar.icon}
              </div>
              <h3 className="font-sans font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
