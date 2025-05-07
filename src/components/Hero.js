import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-20 pb-16 bg-transparent overflow-hidden">

      {/* soft accent circle */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600 rounded-full opacity-10 mix-blend-multiply" />

      {/* navigation overlay */}
      <div className="absolute inset-x-0 top-4 flex justify-center md:justify-end space-x-8 px-8 text-gray-300 text-base md:text-lg">
        <Link to="/" className="hover:text-white">Home</Link>
        <a
          href="https://medium.com/@siddheshnikam8"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          Blog
        </a>
        <a
          href="https://ai.siddheshnikam.online/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          AI Research Agent
        </a>
        {/* <Link to="#ProjectsSection" className="hover:text-white">Projects</Link>
        <Link to="#talks" className="hover:text-white">Talks</Link> */}
        <a
          href="https://github.com/siddheshengineer"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <FaGithub className="inline-block w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/siddhesh-sn/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
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


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaGithub, FaLinkedin } from 'react-icons/fa';

// export default function Hero() {
//   return (
//     <section className="relative pt-20 pb-16 bg-transparent overflow-hidden">
//       {/* subtle dot‐pattern */}
//       <div className="dot-pattern opacity-20" />

//       {/* accent circle */}
//       <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600 rounded-full opacity-10 mix-blend-multiply" />

//       {/* Nav overlay */}
//       <div className="absolute inset-x-0 top-4 flex justify-center md:justify-end space-x-8 px-8 text-gray-300 text-base md:text-lg">
//         <Link to="/" className="hover:text-white">Home</Link>
//         <a
//           href="https://medium.com/@siddheshnikam8"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-white"
//         >
//           Blog
//         </a>
//         <Link to="#case-studies" className="hover:text-white">Case Studies</Link>
//         <Link to="#contact" className="hover:text-white">Contact</Link>
//         <Link to="#talks" className="hover:text-white">Talks</Link>
//         <a
//           href="https://github.com/siddheshnikam8"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-white"
//         >
//           <FaGithub className="inline-block w-5 h-5" />
//         </a>
//         <a
//           href="https://linkedin.com/in/siddheshnikam8"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-white"
//         >
//           <FaLinkedin className="inline-block w-5 h-5" />
//         </a>
//       </div>

//       {/* Hero content */}
//       <div className="relative z-10 w-full px-6 max-w-3xl mx-auto text-center md:text-left">
//         <p className="text-sm uppercase text-gray-400 tracking-widest">
//           Hello, my name is
//         </p>
//         <h1 className="mt-2 text-5xl font-bold text-white">
//           Siddhesh <span className="text-blue-400">Nikam</span>
//         </h1>
//         <h2 className="mt-4 text-2xl font-script text-blue-400">
//           DevOps Engineer &amp; Cloud Automation Expert
//         </h2>
//       </div>
//     </section>
//   );
// }
