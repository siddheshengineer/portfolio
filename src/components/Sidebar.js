import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosClose } from 'react-icons/io';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Sidebar = ({ isOpen, onClose }) => (
  <div
    className={
      `fixed inset-0 bg-white transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 z-50`
    }
  >
    <div className="absolute top-4 right-4">
      <button onClick={onClose}>
        <IoIosClose className="w-6 h-6 text-gray-800" />
      </button>
    </div>
    <nav className="h-full flex flex-col items-center justify-center space-y-6">
      <Link to="/" onClick={onClose} className="text-xl font-semibold">
        Home
      </Link>
      <Link to="/blog" onClick={onClose} className="text-xl font-semibold">
        Blog
      </Link>
      <Link to="#case-studies" onClick={onClose} className="text-xl font-semibold">
        Case Studies
      </Link>
      <Link to="#talks" onClick={onClose} className="text-xl font-semibold">
        Talks
      </Link>
      <Link to="#trainings" onClick={onClose} className="text-xl font-semibold">
        Trainings
      </Link>
      <Link to="#freebies" onClick={onClose} className="text-xl font-semibold">
        Freebies
      </Link>
      <Link to="#contact" onClick={onClose} className="text-xl font-semibold">
        Contact
      </Link>
      <div className="flex space-x-4 mt-8">
        <FaLinkedin className="w-6 h-6 text-gray-600 hover:text-gray-900" />
        <FaGithub className="w-6 h-6 text-gray-600 hover:text-gray-900" />
      </div>
    </nav>
  </div>
);

export default Sidebar;