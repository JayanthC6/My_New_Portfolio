import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Education() {
  const { education, certifications } = profileData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-900/30 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education Column */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight font-sans">
                <span className="font-mono text-emerald-500 text-lg mr-2 font-normal">05.</span>
                Education
              </h2>
              <div className="mt-2 h-1 w-12 bg-emerald-500 rounded"></div>
            </div>

            {/* Timeline */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-emerald-500/20 hover:shadow-md transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute right-0 top-0 h-16 w-16 bg-emerald-500/5 rounded-bl-full flex items-center justify-center translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300">
                    <GraduationCap className="h-5 w-5 text-emerald-500" />
                  </div>
                  
                  <span className="font-mono text-xs text-emerald-500 font-semibold">{edu.period}</span>
                  <h3 className="text-lg font-bold text-slate-855 dark:text-white mt-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-mono text-slate-500 dark:text-slate-405">{edu.field}</p>
                  
                  <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-slate-100 dark:border-slate-900 pt-4">
                    <span className="text-slate-700 dark:text-slate-300 font-semibold text-sm">
                      {edu.institution}
                    </span>
                    <span className="inline-flex items-center text-xs font-mono px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/10 w-fit">
                      {edu.details}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Certifications Column */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight font-sans">
                <span className="font-mono text-emerald-500 text-lg mr-2 font-normal">06.</span>
                Certifications
              </h2>
              <div className="mt-2 h-1 w-12 bg-emerald-500 rounded"></div>
            </div>

            {/* List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex items-center space-x-4 hover:border-emerald-500/20 hover:shadow-sm transition-all duration-300"
                >
                  <div className="p-3 bg-emerald-500/5 rounded-lg border border-emerald-500/10 flex-shrink-0">
                    <Award className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-slate-800 dark:text-slate-200">
                      {cert.name}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                      Issued by {cert.issuer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
