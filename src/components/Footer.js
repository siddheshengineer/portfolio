import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const EMAIL = 'siddheshnikam.online.headscarf283@passinbox.com';

export default function Footer() {
    const [toastVisible, setToastVisible] = useState(false);

    const handleEmailClick = async (e) => {
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
      
    };

    return (
<>
      <footer className="relative z-10 bg-gray-900 text-gray-200 rounded-t-xl">
        <div className="px-6 py-4 flex flex-col md:flex-row justify-between items-center ml-0 md:ml-14 m4-0 md:mr-6">
          <p className="text-sm">&copy; {new Date().getFullYear()} Siddhesh Nikam. All rights reserved.</p>
          <div className="mt-2 md:mt-0 flex items-center space-x-6">
            <a
              href={`mailto:${EMAIL}`}
              onClick={handleEmailClick}
              className="inline-flex items-center text-gray-200 hover:text-white transition focus:outline-none"
            >
              <FaEnvelope className="mr-2" />
            </a>
            <a
              href="https://github.com/siddheshengineer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white transition"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/siddhesh-sn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white transition"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </footer>

      {toastVisible && (
        <div className="fixed bottom-6 right-6 z-50 bg-gray-800 text-white px-4 py-2 rounded shadow-lg">
          Copied to clipboard!
        </div>
      )}
    </>
    );
}