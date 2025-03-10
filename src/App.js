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

      {/* About Section */}
      <section id="about" className="py-16 scroll-mt-16 ">
        <div className="max-w-6xl mx-auto px-4 ">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="max-w-3xl mx-auto p-6 bg-gradient-to-r from-gray-50 to-slate-100 rounded-lg shadow-md">
                <p className="text-gray-700 mb-4 text-justify">
                  I am a dedicated <span className="font-semibold">DevOps Engineer</span> with expertise in
                  <span className="font-semibold"> Cloud Automation</span>, <span className="font-semibold">CI/CD</span>, 
                  <span className="font-semibold"> Kubernetes</span>, and <span className="font-semibold">SRE best practices</span>, 
                  particularly in high-demand environments. Experienced in driving DevOps transformation through 
                  <span className="font-semibold"> GitOps</span>, <span className="font-semibold">Infrastructure as Code</span>, 
                  <span className="font-semibold"> system observability</span> and <span className="font-semibold">resilience</span>.
                </p>
                <h2 className="font-semibold text-gray-800 mb-2">Key Achievements</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Reduced deployment times by 20% and improved system efficiency by 30%</li>
                  <li>Enhanced system resilience ensuring 99.9% uptime for microservices infrastructure</li>
                  <li>Reduced incident response time by 35% through SRE initiatives</li>
                  <li>Accelerated infrastructure deployment by 60% through automation</li>
                  <li>Reduced MTTR by 30% with enhanced observability solutions</li>
                </ul>
                <p className="text-gray-700 mt-4 text-justify">
                  My mission is to simplify workflows and build resilient systems that empower teams and drive innovation.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-medium">Post Graduate Degree, Information Technology Solutions</p>
                  <p className="text-gray-600">Humber College, Toronto</p>
                  <p className="text-gray-500">Sep 2022 - Apr 2024</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-medium">Bachelor of Engineering, Electronics and Telecommunication</p>
                  <p className="text-gray-600">University of Mumbai</p>
                  <p className="text-gray-500">Sep 2015 - Apr 2019</p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mt-6 mb-4">Certifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-medium">AWS Solutions Architect - Associate</p>
                  <p className="text-gray-600">Amazon Web Services</p>
                  <p className="text-gray-500">Issued: Jan 2024</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-medium">GCP Professional Cloud Architect</p>
                  <p className="text-gray-600">Google Cloud</p>
                  <p className="text-gray-500">Issued: Jun 2023</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-medium">PagerDuty DevOps Professional</p>
                  <p className="text-gray-500">Issued: 2023</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-medium">Oracle Cloud Infrastructure Associate</p>
                  <p className="text-gray-600">Oracle Cloud Infrastructure</p>
                  <p className="text-gray-500">Issued: Mar 2025</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-medium">Certified Kubernetes Administrator</p>
                  <p className="text-gray-500">Expected: Apr 2025</p>
                  <p className="text-xs text-blue-600 italic">In progress</p>
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
              <a href="tel:+14375599818" className="hover:text-gray-300">(437) 559-9818</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;