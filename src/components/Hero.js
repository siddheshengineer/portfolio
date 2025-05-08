import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-20 pb-16 bg-transparent overflow-hidden">

      {/* soft accent circle
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600 rounded-full opacity-10 mix-blend-multiply" /> */}

      {/* navigation overlay */}
      <div className="absolute inset-x-0 top-4 flex justify-center md:justify-end space-x-8 px-8 text-base md:text-lg">
        {[
          { label: 'Home', to: '/' },
          { label: 'Blog', href: 'https://medium.com/@siddheshnikam8' },
          { label: 'AI Research Agent', href: 'https://ai.siddheshnikam.online/' },
        ].map((item) => {
          const Tag = item.to ? Link : 'a';
          const props = item.to
            ? { to: item.to }
            : { href: item.href, target: '_blank', rel: 'noopener noreferrer' };

          return (
            <Tag
              key={item.label}
              {...props}
              className="
                text-gray-200 
                transition-colors duration-300
                hover:text-white
                hover:[text-shadow:0_0_6px_rgba(255,255,255,0.6),0_0_12px_rgba(255,255,255,0.4)]
              "
            >
              {item.label}
            </Tag>
          );
        })}

         {/* GitHub Icon */}
        <a
          href="https://github.com/siddheshengineer"
          target="_blank"
          rel="noopener noreferrer"
          className="
            filter text-gray-200 transition duration-300
            hover:text-white
            hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]
            hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]
          "
        >
          <FaGithub className="inline-block w-5 h-5" />
        </a>

        {/* LinkedIn Icon */}
        <a
          href="https://linkedin.com/in/siddhesh-sn/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            filter text-gray-200 transition duration-300
            hover:text-white
            hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]
            hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]
          "
        >
          <FaLinkedin className="inline-block w-5 h-5" />
        </a>
      </div>

      {/* hero text */}
      <div className="relative z-10 w-full px-6 text-center md:text-left">
        <p className="text-sm uppercase text-gray-400 tracking-widest">
          Hello, my name is
        </p>
        <h1 className="mt-2 text-5xl font-bold text-white">
          Siddhesh <span className="text-blue-400">Nikam</span>
        </h1>
        <h2 className="mt-4 text-2xl font-script text-blue-400">
          DevOps Engineer &amp; Cloud Automation Expert
        </h2>
      </div>
    </section>
  );
}
