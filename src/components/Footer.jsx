import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import { profileData } from '../data/profile';

export default function Footer() {
  const { name, contact } = profileData.personal;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-900 bg-slate-50 dark:bg-slate-950/20 text-slate-500 dark:text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Copyright */}
        <div className="text-sm font-mono text-center md:text-left">
          &copy; {currentYear} {name}. All rights reserved.
        </div>

        {/* Built info */}
        <div className="text-xs font-mono text-slate-400 hover:text-emerald-500 transition-colors duration-250">
          Built with React, Tailwind CSS & Framer Motion
        </div>

        {/* Social Links */}
        <div className="flex space-x-5">
          <a
            href={contact.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={contact.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={contact.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200"
            aria-label="LeetCode"
          >
            <SiLeetcode className="h-5 w-5" />
          </a>
          {contact.socials.Hackerank && (
            <a
              href={contact.socials.Hackerank}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200"
              aria-label="HackerRank"
            >
              <SiHackerrank className="h-5 w-5" />
            </a>
          )}
        </div>

      </div>
    </footer>
  );
}
