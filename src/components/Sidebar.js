// src/components/Sidebar.jsx
import React, { useState } from 'react';
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
} from 'react-icons/fa';

const EMAIL = 'siddheshnikam.online.headscarf283@passinbox.com';

const links = [
  { icon: <FaHome />, label: 'Home', to: 'hero' },
  { icon: <FaUser />, label: 'About', to: 'about' },
  { icon: <FaBriefcase />, label: 'Experience', to: 'experience' },
  { icon: <FaTools />, label: 'Skills', to: 'skills' },
  { icon: <FaProjectDiagram />, label: 'Projects', to: 'projects' },
  { icon: <FaEnvelope />, label: 'Contact', to: null },
];

export default function Sidebar() {
  const [toastVisible, setToastVisible] = useState(false);
  const [active, setActive] = useState('Home');

  const handleNavClick = (link) => {
    if (link.to) {
      document.getElementById(link.to)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(EMAIL).catch(() => {});
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 2000);
      }
    }
    setActive(link.label);
  };

  return (
    <>
      <nav className="fixed top-1/2 left-2 transform -translate-y-1/2 z-30">
        <ul className="flex flex-col space-y-3 bg-black bg-opacity-30 backdrop-blur-md p-2 rounded-2xl shadow-lg">
          {links.map((link) => (
            <li key={link.label} className="relative group">
              <button
                onClick={() => handleNavClick(link)}
                aria-label={link.label}
                className={`
                  flex items-center justify-center
                  w-12 h-12
                  text-gray-200
                  transition duration-200
                  rounded-lg
                  border border-transparent
                  hover:border-blue-400
                  hover:bg-blue-500/20
                  focus:outline-none focus:ring-2 focus:ring-blue-400
                  ${active === link.label ? 'bg-blue-500/20 border-blue-400' : ''}
                `}
              >
                {link.icon}
                <span
                  className="
                    absolute left-full ml-2 px-2 py-1
                    bg-gray-900 bg-opacity-80
                    text-xs text-white
                    rounded
                    opacity-0 group-hover:opacity-100
                    pointer-events-none
                    transition-opacity
                  "
                >
                  {link.label}
                </span>
              </button>

              {link.label === 'Contact' && toastVisible && active === 'Contact' && (
                <div
                  className="
                    absolute left-full ml-3 top-1/2 -translate-y-1/2
                    bg-blue-500 text-white
                    px-3 py-1
                    rounded-lg
                    shadow-md
                    text-xs
                  "
                >
                  Email copied!
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}