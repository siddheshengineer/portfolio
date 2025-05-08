import React, { useState, useRef, useEffect } from 'react';
import { FaCloud, FaCode, FaShieldAlt, FaTools, FaPlus, FaMinus } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'DevOps & Cloud',
    icon: <FaCloud size={24} className="text-blue-400" />,
    description: 'CI/CD, container orchestration & cloud infra.',
    skills: [
      'AWS','GCP','Azure','OCI','Docker','Kubernetes','Terraform','Ansible',
      'ArgoCD','GitHub Actions','Jenkins','Prometheus','Grafana',
      'FluxCD','GitOps','Istio','ELK Stack',
    ],
  },
  {
    title: 'Languages & DBs',
    icon: <FaCode size={24} className="text-blue-400" />,
    description: 'Langs, frameworks & databases for app dev.',
    skills: [
      'Java','Python','Bash','Go','Node.js','PostgreSQL','MongoDB','MySQL',
      'FastAPI','GraphQL','REST API','Neon','PHP (Laravel)',
    ],
  },
  {
    title: 'Security & Config',
    icon: <FaShieldAlt size={24} className="text-blue-400" />,
    description: 'Vuln scanning, secrets mgmt & secure config.',
    skills: [
      'SonarQube','Trivy','Sync','Vault','Secrets Manager',
      'OWASP tools','Qodana','Static Code Analysis', 'Bandit'
    ],
  },
  {
    title: 'Tools & Practices',
    icon: <FaTools size={24} className="text-blue-400" />,
    description: 'Supporting tools, methodologies & best practices.',
    skills: [
      'Agile','Scrum','Jira','RabbitMQ','Microservices','Database Migrations', 'DNS Management',
      'Ingress', 'Change Management'
    ],
  },
];

export default function SkillsSection() {
  const containerRefs = useRef([]);
  const [needsToggle, setNeedsToggle] = useState({});
  const [expanded, setExpanded] = useState({});

  // After mount, detect which cards overflow 4 lines (max-h-32)
  useEffect(() => {
    skillCategories.forEach((_, idx) => {
      const el = containerRefs.current[idx];
      if (el) {
        const overflow = el.scrollHeight > el.clientHeight + 1; // +1 fudge
        if (overflow) setNeedsToggle(nt => ({ ...nt, [idx]: true }));
      }
    });
  }, []);

  return (
    <section id="skills" className="relative py-16 bg-transparent overflow-hidden">
      <div className="relative z-10 px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Skills & Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {skillCategories.map((cat, idx) => {
            const isOpen = expanded[idx];
            return (
              <div
                key={idx}
                className="bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg p-6 flex flex-col"
              >
                {/* Header */}
                <div className="flex items-start  space-x-3 mb-4">
                  {cat.icon}
                  <div>
                    <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
                    <p className="text-gray-300 text-sm">{cat.description}</p>
                  </div>
                </div>

                {/* Skills grid, collapsed or expanded */}
                <div
                  ref={el => (containerRefs.current[idx] = el)}
                  className={`
                    flex flex-wrap gap-2 overflow-hidden
                    transition-all duration-300
                    ${isOpen ? 'max-h-full' : 'max-h-36'}
                  `}
                >
                  {cat.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-400 bg-opacity-30 text-blue-200 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Toggle button */}
                {needsToggle[idx] && (
                  <button
                    onClick={() =>
                      setExpanded(e => ({ ...e, [idx]: !e[idx] }))
                    }
                    className="mt-4 self-center inline-flex items-center text-gray-300 hover:text-white focus:outline-none"
                  >
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}