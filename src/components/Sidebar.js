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
    { icon: <FaEnvelope />, label: 'Contact', to: 'null' },
];

export default function Sidebar() {

    const [toastVisible, setToastVisible] = useState(false);

    const handleContactClick = async (e) => {
      // Copy to clipboard if available
      if (navigator.clipboard && navigator.clipboard.writeText) {
        try {
          await navigator.clipboard.writeText(EMAIL);
          setToastVisible(true);
          setTimeout(() => setToastVisible(false), 2000);
        } catch {
          console.log("Email copy failed!")
        }
      }
            // Then open mail client
      else {
        window.location.href = `mailto:${EMAIL}`;
      }
    };    

    const handleClick = (to) => {
      const el = document.getElementById(to);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
  
    return (
        <>
          <nav className="fixed top-1/2 left-0 transform -translate-y-1/2 z-20">
            <ul className="flex flex-col space-y-4 bg-gray-800 bg-opacity-50 p-2 rounded-tr-lg rounded-br-lg">
              {links.map(({ icon, label, to }) => (
                <li key={label} className="relative">
                  <button
                    onClick={() =>
                      label === 'Contact'
                        ? handleContactClick()
                        : handleClick(to)
                    }
                    className="w-12 h-12 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 rounded transition relative group"
                    aria-label={label}
                  >
                    {icon}
                    <span className="absolute left-full ml-2 px-2 py-1 rounded bg-gray-900 text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      {label}
                    </span>
                  </button>
                  {label === 'Contact' && toastVisible && (
                        <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded shadow-lg whitespace-nowrap">
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
