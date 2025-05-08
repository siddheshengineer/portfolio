import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import Aurora from './components/Aurora';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white font-sans overflow-hidden">
      <Sidebar />
      {/* Aurora in the very back (fixed full-screen) */}
      <div className="fixed inset-x-0 top-0 h-2/3 z-0 pointer-events-non">
        <Aurora
          colorStops={['#0A2463', '#38AECC', '#5e60ce']}
          blend={0.4}
          amplitude={0.8}
          speed={0.5}
        />
      </div>

      {/* Global dot‐pattern overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none dot-pattern opacity-20" />


      {/* All your content sits above Aurora */}
      <div className="relative z-10 ml-0 md:ml-12 m4-0 md:mr-4">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Experience />
                <SkillsSection />
                <ProjectsSection />
              </>
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

//          colorStops={['#692669', '#9C0D38', '#87142e']} ehhh
//colorStops={['#1e6fd7', '#173054', '#1e6fd7']} blueish
//           colorStops={['#0A2463', '#38AECC', '#0090C1']} working blue