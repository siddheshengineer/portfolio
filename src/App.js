import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import EducationCertifications from './components/About';
import Experience from './components/Experience';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <div className="relative min-h-screen bg-gray-50 font-sans">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <EducationCertifications />
              <Experience />
              <SkillsSection />
              <ProjectsSection />
            </>
          }
        />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </div>
  );
}

export default App;