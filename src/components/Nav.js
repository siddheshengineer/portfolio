import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoIosMenu } from 'react-icons/io';

const Nav = ({ onMenuClick }) => (
  <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
    <div className="max-w-6xl mx-auto px-4 h-16 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-gray-800 font-Quintessential">
        Siddhesh Nikam
      </Link>
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
        <Link to="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
        <Link to="#case-studies" className="text-gray-600 hover:text-gray-900">Case Studies</Link>
        <Link to="#talks" className="text-gray-600 hover:text-gray-900">Talks</Link>
        <Link to="#trainings" className="text-gray-600 hover:text-gray-900">Trainings</Link>
        <Link to="#freebies" className="text-gray-600 hover:text-gray-900">Freebies</Link>
        <Link to="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
        <FaGithub className="w-6 h-6 text-gray-600 hover:text-gray-900" />
        <FaLinkedin className="w-6 h-6 text-gray-600 hover:text-gray-900" />
      </div>
      <button onClick={onMenuClick} className="md:hidden">
        <IoIosMenu className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  </nav>
);

export default Nav;