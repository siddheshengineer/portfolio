import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';


const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <span className="text-4xl font-bold text-gray-800 font-Quintessential">Siddhesh Nikam</span>
            <div className="flex space-x-4">
              <button onClick={() => scrollToSection('about')} 
                      className={`px-3 py-2 rounded-md ${activeSection === 'about' ? 'text-blue-600' : 'text-gray-600'}`}>
                About
              </button>
              <button onClick={() => scrollToSection('experience')} 
                      className={`px-3 py-2 rounded-md ${activeSection === 'experience' ? 'text-blue-600' : 'text-gray-600'}`}>
                Experience
              </button>
              <button onClick={() => scrollToSection('skills')} 
                      className={`px-3 py-2 rounded-md ${activeSection === 'skills' ? 'text-blue-600' : 'text-gray-600'}`}>
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} 
                      className={`px-3 py-2 rounded-md ${activeSection === 'projects' ? 'text-blue-600' : 'text-gray-600'}`}>
                Projects!!
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-50 to-indigo-100 shadow-lg rounded-3xl">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              DevOps Engineer | SRE & Cloud Automation Expert
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Building resilient, scalable cloud solutions with expertise in CI/CD, Kubernetes, and SRE best practices
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/siddheshengineer" target="_blank" rel="noopener noreferrer" 
                className="text-gray-600 hover:text-gray-900">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/siddhesh-sn/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-gray-900">
              <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="mailto:siddheshnikam8@gmail.com" 
                className="text-gray-600 hover:text-gray-900">
                <MdEmail className="w-6 h-6" />
              </a>
            </div>
            <button onClick={() => scrollToSection('about')} className="mt-10 animate-bounce">
              <IoIosArrowDown className="w-6 h-6 mx-auto text-gray-500" />
            </button>
          </div>
        </div>
      </section>

      {/* Simplified About Section */}
      <section id="about" className="py-12 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
          
          {/* Main content grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left Column - Bio + Achievements */}
            <div className="space-y-6">
              {/* Bio Card */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Profile</h3>
                <p className="text-gray-700 mb-4">
                  I am a dedicated <span className="font-semibold">DevOps Engineer</span> with expertise in{" "}
                  <span className="font-semibold">Cloud Automation</span>,{" "}
                  <span className="font-semibold">CI/CD</span>,{" "} 
                  <span className="font-semibold">Kubernetes</span>, and{" "}
                  <span className="font-semibold">SRE best practices</span>, 
                  particularly in high-demand environments. Experienced in driving DevOps transformation through{" "}
                  <span className="font-semibold">GitOps</span>,{" "}
                  <span className="font-semibold">Infrastructure as Code</span>,{" "} 
                  <span className="font-semibold">system observability</span> and{" "}
                  <span className="font-semibold">resilience</span>.
                </p>
                <p className="text-gray-700 italic border-l-4 border-blue-200 pl-3 py-1">
                  "My mission is to simplify workflows and build resilient systems that empower teams and drive innovation."
                </p>
              </div>

              {/* Achievements Card */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Key Achievements</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-700 mr-2 mt-0.5">✓</span>
                    <span>Reduced deployment times by 20% and improved system efficiency by 30%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-700 mr-2 mt-0.5">✓</span>
                    <span>Enhanced system resilience ensuring 99.9% uptime for microservices infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-700 mr-2 mt-0.5">✓</span>
                    <span>Reduced incident response time by 35% through SRE initiatives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-700 mr-2 mt-0.5">✓</span>
                    <span>Accelerated infrastructure deployment by 60% through automation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-700 mr-2 mt-0.5">✓</span>
                    <span>Reduced MTTR by 30% with enhanced observability solutions</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Right Column - Education + Certifications */}
            <div className="space-y-6">
              {/* Education Card */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Education</h3>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-700 rounded-lg flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Post Graduate Degree, Information Technology Solutions</h4>
                      <p className="text-gray-600">Humber College, Toronto</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-700 rounded-lg flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Bachelor of Engineering, Electronics & Telecommunication</h4>
                      <p className="text-gray-600">University of Mumbai</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Certifications Card */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Certifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Certificate item - simple, easy to duplicate */}
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-1">AWS Solutions Architect - Associate</h4>
                    <p className="text-gray-600 text-sm">Amazon Web Services</p>
                    <p className="text-gray-500 text-xs">Issued: Jan 2021</p>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-1">GCP Professional Cloud Architect</h4>
                    <p className="text-gray-600 text-sm">Google Cloud</p>
                    <p className="text-gray-500 text-xs">Issued: Jun 2024</p>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-1">PagerDuty DevOps Professional</h4>
                    <p className="text-gray-500 text-xs">Issued: July 2024</p>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-1">Oracle Cloud Infrastructure Associate</h4>
                    <p className="text-gray-600 text-sm">Oracle Cloud Infrastructure</p>
                    <p className="text-gray-500 text-xs">Issued: Mar 2025</p>
                  </div>
                  
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 border-l-4 border-l-blue-400">
                    <h4 className="font-medium text-gray-900 mb-1">Certified Kubernetes Administrator</h4>
                    <p className="text-gray-500 text-xs">Expected: Apr 2025</p>
                    <p className="text-xs text-blue-600 italic mt-1">In progress</p>
                  </div>
                  
                  {/* Add more certificates as needed - simply copy and modify the above div */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gradient-to-r from-gray-50 to-slate-100 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Work Experience</h2>
          <div className="space-y-8">
            {/* Experience 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">DevOps Developer – Graduate Intern</h3>
                  <p className="text-gray-600">FundEvolve</p>
                </div>
                <p className="text-gray-500">Dec 2023 - Apr 2024</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Engineered a streamlined deployment process using GitHub Actions and containers, achieving faster releases.</li>
                  <li>Contributed to building a financial goals application, enhancing user experience and data tracking capabilities.</li>
                  <li>Designed clear documentation and diagrams for CI/CD workflows to facilitate seamless developer onboarding.</li>
                  <li>Collaborated with cross-functional teams to resolve developer roadblocks, accelerating release cadence.</li>
                {/* <li>Built CI/CD with GitHub Actions cutting down deployment time by 20% and improving overall efficiency by 30%.</li>
                <li>Containerized Next.js, Node.js and MongoDB based application using Docker Compose for rapid deployment and scalability.</li>
                <li>Developed a goals application using nodejs, TypeScript, improving user experience and financial goal tracking for 9+ key metrics.</li>
                <li>Collaborated with international teams to enhance the scalability of distributed systems within the platform.</li> */}
              </ul>
            </div>
            {/* Experience 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">DevOps Engineer</h3>
                  <p className="text-gray-600">Tata Consultancy Services</p>
                </div>
                <p className="text-gray-500">May 2020 - Oct 2022</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Led DevOps and SRE initiatives to enhance system resilience and reduce incident response time by 35%, ensuring 99.9% uptime.</li>
                <li>Developed CI/CD pipelines using Jenkins, GitHub Actions, reducing change failure rate by 40% and enhancing release frequency.</li>
                <li>Designed a CD pipeline using ArgoCD & Helm charts, enabling blue/green and canary deployments with automated rollout checks.</li>
                <li>Implemented best practices for incident management, alerts, ensuring adherence to SLAs and SLOs, improving response efficiency.</li>
                <li>Optimized observability using ELK and cloud native tools, enhancing real-time insights and reducing MTTR by 30%.</li>
                <li>Orchestrated Kubernetes and authored Helm charts, to streamline microservices deployment and onboarding.</li>
                <li>Automated cloud resource provisioning using Terraform and Ansible, accelerating infrastructure deployment by 60%.</li>
                <li>Collaborated with cross-functional teams to resolve developer roadblocks, ensuring improved deployment velocity.</li>
                <li>Authored & maintained comprehensive runbooks, knowledge base articles, and technical documentation to streamline operations.</li>
              </ul>
            </div>
            {/* Experience 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">System Engineer (Cloud and DevOps focus)</h3>
                  <p className="text-gray-600">Tata Consultancy Services</p>
                </div>
                <p className="text-gray-500">Aug 2019 - May 2020</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Ensured reliability by participating in on-call rotations, swiftly diagnosing and resolving incidents in mission-critical systems.</li>
                <li>Strengthened cloud security by implementing least privilege access controls and securing multiple cloud applications.</li>
                <li>Refactored legacy systems to align with modern cloud-native standards, reducing error rates significantly.</li>
                <li>Supported seamless migrations and upgrades, ensuring operational continuity across projects.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SkillsSection />

      <ProjectsSection />

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>© 2025 Siddhesh Nikam. All rights reserved.</p>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <a href="mailto:siddheshnikam8@gmail.com" className="hover:text-gray-300">siddheshnikam8@gmail.com</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;