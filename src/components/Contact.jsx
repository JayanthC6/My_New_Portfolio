import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import { profileData } from '../data/profile';

export default function Contact() {
  const { contact } = profileData.personal;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // TODO: Replace with your actual Web3Forms access key
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Portfolio Contact",
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        console.error("Email submission failed", result);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error("Email submission error", error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden tech-grid">
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl glow-accent"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <h2 className="text-3xl font-bold tracking-tight font-sans">
            <span className="font-mono text-emerald-500 text-lg mr-2 font-normal">07.</span>
            Get In Touch
          </h2>
          <div className="mt-2 h-1 w-12 bg-emerald-500 rounded mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Info Column (Left) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">Let's Connect</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                I am currently looking for Backend Developer Intern or Software Engineer Intern roles. If you have any opportunities or questions, feel free to reach out. I will try my best to get back to you!
              </p>
            </div>

            {/* Direct details */}
            <div className="space-y-4 font-mono text-sm">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center space-x-3 text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200"
              >
                <Mail className="h-5 w-5 text-emerald-500" />
                <span>{contact.email}</span>
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center space-x-3 text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200"
              >
                <Phone className="h-5 w-5 text-emerald-500" />
                <span>{contact.phone}</span>
              </a>
              <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-300">
                <MapPin className="h-5 w-5 text-emerald-500" />
                <span>{contact.location}</span>
              </div>
            </div>

            {/* Social profiles */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-850">
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-4">On the Web</h4>
              <div className="flex space-x-4">
                <a
                  href={contact.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/20 hover:bg-emerald-500/5 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={contact.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/20 hover:bg-emerald-500/5 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={contact.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/20 hover:bg-emerald-500/5 transition-all duration-200"
                  aria-label="LeetCode"
                >
                  <SiLeetcode className="h-5 w-5" />
                </a>
                {contact.socials.Hackerank && (
                  <a
                    href={contact.socials.Hackerank}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/20 hover:bg-emerald-500/5 transition-all duration-200"
                    aria-label="HackerRank"
                  >
                    <SiHackerrank className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Form Column (Right) */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/20 backdrop-blur-md">
              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-mono uppercase text-slate-450 dark:text-slate-400 block">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm outline-none transition-all duration-200 ${errors.name
                    ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30'
                    : 'border-slate-205 dark:border-slate-800 focus:border-emerald-500 dark:focus:border-emerald-450'
                    }`}
                  placeholder="Enter your name"
                />
                {errors.name && <p className="text-xs font-mono text-rose-500 mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-mono uppercase text-slate-450 dark:text-slate-400 block">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm outline-none transition-all duration-200 ${errors.email
                    ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30'
                    : 'border-slate-205 dark:border-slate-800 focus:border-emerald-500 dark:focus:border-emerald-450'
                    }`}
                  placeholder="Enter your email address"
                />
                {errors.email && <p className="text-xs font-mono text-rose-500 mt-1">{errors.email}</p>}
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-mono uppercase text-slate-450 dark:text-slate-400 block">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-205 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm outline-none focus:border-emerald-500 dark:focus:border-emerald-450 transition-all duration-200"
                  placeholder="Enter message subject"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono uppercase text-slate-450 dark:text-slate-400 block">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg border bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white text-sm outline-none resize-none transition-all duration-200 ${errors.message
                    ? 'border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/30'
                    : 'border-slate-205 dark:border-slate-800 focus:border-emerald-500 dark:focus:border-emerald-450'
                    }`}
                  placeholder="Type your message here..."
                ></textarea>
                {errors.message && <p className="text-xs font-mono text-rose-500 mt-1">{errors.message}</p>}
              </div>

              {/* Submit Status Notification */}
              {submitStatus === 'success' && (
                <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono">
                  Success! Your message has been sent.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-mono">
                  Oops! Failed to send message. Have you added your Web3Forms access key?
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-lg font-medium text-sm flex items-center justify-center space-x-2 bg-emerald-500 text-white hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500 disabled:opacity-50 transition-all duration-200 shadow-lg shadow-emerald-500/10 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
