import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';

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
            <span className="text-4xl font-bold text-gray-800">Siddhesh Nikam</span>
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
                Projects
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              DevOps Engineer & Cloud Developer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Building and automating resilient, scalable cloud solutions
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-600 hover:text-gray-900">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-600 hover:text-gray-900">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="mailto:siddheshnikam8@gmail.com" 
                 className="text-gray-600 hover:text-gray-900">
                <MdEmail className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-12 animate-bounce">
              <IoIosArrowDown className="w-6 h-6 mx-auto text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 leading-relaxed">
                DevOps Engineer with expertise in building and automating resilient, scalable cloud solutions, 
                particularly in high-demand environments. Experienced in Python, AWS, and CI/CD to enhance 
                system observability and efficiency.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Post Graduate Degree, Information Technology Solutions</p>
                    <p className="text-gray-600">Humber College, Toronto</p>
                    <p className="text-gray-500">Graduation: 2024</p>
                  </div>
                  <div>
                    <p className="font-medium">Bachelor of Engineering, Electronics Engineering</p>
                    <p className="text-gray-600">University of Mumbai</p>
                    <p className="text-gray-500">Graduation: 2019</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-medium">AWS Solutions Architect</p>
                  <p className="text-gray-600">Amazon Web Services | Jan 2024</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-medium">PagerDuty DevOps Professional</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-medium">Google Cloud Professional Cloud Architect</p>
                  <p className="text-gray-600">Google Cloud | Jun 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Work Experience</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">DevOps Engineer – Graduate Intern</h3>
                  <p className="text-gray-600">FundEvolve</p>
                </div>
                <p className="text-gray-500">Dec 2023 - Apr 2024</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Built CI/CD with GitHub Actions, Docker, Node.js cutting deployment execution time by 20%</li>
                <li>Strengthened platform security by 30% through AWS IAM role design</li>
                <li>Authored clear documentation and architectural diagrams for CI/CD workflows</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">DevOps Developer</h3>
                  <p className="text-gray-600">Tata Consultancy Services</p>
                </div>
                <p className="text-gray-500">Aug 2020 - Aug 2022</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Developed CI/CD pipelines using GitLab and ArgoCD, reducing deployment time by 70%</li>
                <li>Maintained high availability (>90%) of microservices on AWS ECS and EKS</li>
                <li>Implemented Datadog and Prometheus monitoring, achieving 98% SLA compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Programming & Database</h3>
              <div className="space-y-2 text-gray-600">
                <p>Python, Java, Bash, Golang</p>
                <p>PostgreSQL, SQL Server, RDS</p>
                <p>MongoDB, Neo4j, DynamoDB</p>
              </div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Cloud & Tools</h3>
              <div className="space-y-2 text-gray-600">
                <p>AWS (ECS, EC2), Azure, GCP</p>
                <p>Jenkins, Docker, Kubernetes</p>
                <p>Terraform, CloudFormation</p>
              </div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Configuration & Security</h3>
              <div className="space-y-2 text-gray-600">
                <p>Ansible, Git, Grafana</p>
                <p>HashiCorp Vault</p>
                <p>AWS Secrets Manager, Trivy</p>
              </div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Other Tools</h3>
              <div className="space-y-2 text-gray-600">
                <p>Node.js, Express.js</p>
                <p>Linux/Unix (Ubuntu, CentOS)</p>
                <p>RabbitMQ, Kafka, Maven</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Helm Charts Vulnerability Scanner</h3>
              <p className="text-gray-600 mb-4">
                Developed a Bash script to extract Docker images from Helm charts and scan them for
                vulnerabilities using Trivy, outputting results in a structured CSV format.
              </p>
              <p className="text-gray-600">
                Enhanced skills in container security automation & scripting.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">OMCS to AWS Migration</h3>
              <p className="text-gray-600 mb-4">
                Migrated a critical Oracle EBS suite application to AWS, reducing operational costs by 20%
                and improving system performance by 15%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>© 2025 Siddhesh Nikam. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="mailto:siddheshnikam8@gmail.com" className="hover:text-gray-300">siddheshnikam8@gmail.com</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;