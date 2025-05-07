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
    <div className="relative min-h-screen bg-gray-800 text-white font-sans overflow-hidden">
      <Sidebar />
      {/* Aurora in the very back (fixed full-screen) */}
      <div className="fixed inset-0 w-screen h-screen z-0 pointer-events-none">
        <Aurora
          colorStops={['#3A29FF', '#FF94B4', '#FF3232']}
          blend={0.5}
          amplitude={1.0}
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





// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Hero from './components/Hero';
// import EducationCertifications from './components/About';
// import Experience from './components/Experience';
// import SkillsSection from './components/SkillsSection';
// import ProjectsSection from './components/ProjectsSection';
// // import BlogList from './components/BlogList';
// // import BlogPost from './components/BlogPost';
// import Aurora from './components/Aurora';
  

// function App() {
//   return (
//     <div className="relative min-h-screen bg-gray-50 font-sans">
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Hero />
//               <EducationCertifications />
//               <Experience />
//               <SkillsSection />
//               <ProjectsSection />
//             </>
//           }
//         />
//       </Routes>
//     </div>
//   );
// }

// export default App;