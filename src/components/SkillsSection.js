import React, { useState } from 'react';
import { FaCloud, FaCode, FaShieldAlt, FaTools, FaPlus, FaMinus } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'DevOps & Cloud',
    icon: <FaCloud size={24} className="text-blue-400" />,
    description: 'Continuous integration/deployment, container orchestration, and cloud infrastructure.',
    skills: [
      'AWS','GCP','Azure','OCI','Docker','Kubernetes','Terraform','Ansible',
      'ArgoCD','GitHub Actions','CircleCI','Jenkins','Prometheus','Grafana',
      'FluxCD','GitOps','K3d','Istio','ELK Stack',
    ],
  },
  {
    title: 'Languages & DBs',
    icon: <FaCode size={24} className="text-blue-400" />,
    description: 'Languages, frameworks, and databases for app development.',
    skills: [
      'Java','Python','Bash','Go','Node.js','PostgreSQL','MongoDB','MySQL','FastAPI','GraphQL',
      'REST API','Neon','PHP (Laravel)',
    ],
  },
  {
    title: 'Security & Config',
    icon: <FaShieldAlt size={24} className="text-blue-400" />,
    description: 'Vulnerability scanning, secrets management, and secure config.',
    skills: [
      'SonarQube','Trivy','Vault','AWS Secrets Manager','OWASP','Qodana','Static Code Analysis',
    ],
  },
  {
    title: 'Tools & Practices',
    icon: <FaTools size={24} className="text-blue-400" />,
    description: 'Supporting tools, methodologies, and best practices.',
    skills: [
      'Agile','Scrum','Jira','RabbitMQ','Ingress','Microservices','Database Migrations',
    ],
  },
];

export default function SkillsSection() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="skills" className="relative py-16 bg-transparent overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />
      <div className="relative z-10 px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Skills & Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => {
            const isOpen = expanded === idx;
            const preview = cat.skills.slice(0, 6);
            return (
              <div
                key={idx}
                className="bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg p-6 flex flex-col"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    {cat.icon}
                    <div>
                      <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
                      <p className="text-gray-300 text-sm">{cat.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setExpanded(isOpen ? null : idx)}
                    className="text-gray-300 hover:text-white"
                  >
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </button>
                </div>

                {/* Always visible preview */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {preview.map((s, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-600 bg-opacity-40 text-gray-200 rounded-full text-sm"
                    >
                      {s}
                    </span>
                  ))}
                  {cat.skills.length > preview.length && !isOpen && (
                    <span className="px-3 py-1 bg-gray-600 bg-opacity-40 text-gray-200 rounded-full text-sm">
                      +{cat.skills.length - preview.length} more
                    </span>
                  )}
                </div>

                {/* Expanded list */}
                {isOpen && (
                  <div className="mt-4 border-t border-gray-600 pt-4 flex flex-wrap gap-2">
                    {cat.skills.map((s, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-400 bg-opacity-30 text-blue-200 rounded-full text-sm"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}