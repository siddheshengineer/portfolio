// src/components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 bg-white overflow-hidden">
      {/* dot‐pattern + accent circle… */}
      <div className="dot-pattern" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-green-600 rounded-full opacity-10 mix-blend-multiply" />

      {/* TEXT NAV OVERLAY */}
      <div className={
            `absolute inset-x-0 top-4 flex 
            justify-center md:justify-end    /* center on mobile, right-align on md+ */
            space-x-8                       /* a bit more gap between links */
            px-8                            /* extra breathing room */
            text-gray-600 
            text-base md:text-lg            /* base size → larger on md+ */
            `
          }
        >
        <Link to="/" className="hover:text-gray-900">Home</Link>
        <Link to="/blog" className="hover:text-gray-900">Blog</Link>
        <Link to="/blog" className="hover:text-gray-900">Case Studies</Link>
        <Link to="/blog" className="hover:text-gray-900">Contact</Link>
        <Link to="/talks" className="hover:text-gray-900">Talks</Link>
        <a href="https://github.com/your-user" target="_blank" rel="noopener" className="hover:text-gray-900">
          <FaGithub className="inline-block w-5 h-5" />
        </a>
        <a href="https://linkedin.com/in/your-user" target="_blank" rel="noopener" className="hover:text-gray-900">
          <FaLinkedin className="inline-block w-5 h-5" />
        </a>
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 w-full px-6">
        <p className="text-sm uppercase text-gray-500 tracking-widest">Hello, my name is</p>
        <h1 className="mt-2 text-5xl font-bold text-gray-900">
          Siddhesh <span className="text-green-600">Nikam</span>
        </h1>
        <h2 className="mt-4 text-2xl font-script text-green-600">
          DevOps &amp; Cloud Automation Expert
        </h2>
        <div className="mt-6 space-x-4">
          <Link
            to="#contact"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition"
          >
            Book Discovery Call
          </Link>
          <a href="/resume.pdf" className="inline-block text-green-600 hover:underline">
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
