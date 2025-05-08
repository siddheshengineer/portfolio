import React from 'react';

const projects = [
  {
    title: 'GenAI Agent',
    overview: 'This AI-powered Research Assistant helps students, professionals, and researchers generate structured insights on any topic using advanced language models. Built with FastAPI, LangChain, Docker, and deployed via Azure Container Apps, it delivers fast and intelligent results in a user-friendly web interface.',
    tech: ['FastAPI', 'LangChain', 'Docker', 'Azure Container Apps', 'Gemini', 'CI/CD'],
    link: 'https://github.com/siddheshengineer/LLM-based-projects/tree/main/agents/research_agent',
  },  
  {
    title: 'LLM-Based Containerization',
    overview: 'This tool leverages large language models to automatically generate optimized Dockerfiles that follow containerization best practices, including security hardening and efficient multi-stage builds. Built with Python and (Ollama - Llama3  and Google Gemini), this significantly accelerate DevOps/Platform engineering workflows.',
    tech: ['Platform Engineering','Python', 'Llama3', 'Docker', 'Google AI Studio'],
    link: 'https://github.com/siddheshengineer/LLM-based-projects',
  },
  {
    title: 'GitOps w/ K3d & FluxCD',
    overview: 'A GitOps-driven solution for deploying containerized Flask applications on local K3d Kubernetes clusters managed via Azure Arc, synchronized with FluxCD for declarative infrastructure updates. Utilizing Docker for image builds and Azure Arc for hybrid cluster connectivity, it ensures version-controlled rollouts, automated drift detection, and zero-downtime deployments across environments.',
    tech: ['GitOps', 'FluxCD', 'Azure Arc', 'Docker'],
    link: 'https://github.com/siddheshengineer/GitOps',
  },
  {
    title: 'Astronomy Shop Microservices',
    overview: 'An e-microservices platform built in multiple-languages, orchestrated on Kubernetes with a service mesh for traffic management and observability. Featuring a full DevSecOps pipeline with Helm templating, and secure CI/CD processes to deliver a resilient services with end-to-end security and monitoring.',
    tech: ['Java', 'Golang', 'OpenTelemetry', 'Helm', 'AKE/GKE', 'Istio', 'HashiCorp Consul'],
    link: 'https://github.com/siddheshengineer/Astronomy-Shop---Fullstack-DevOps',
  },
  {
    title: 'OWASP WrongSecrets with Qodana CI Pipeline',
    overview: 'This project integrates OWASP WrongSecrets with Qodana-powered CI pipeline on GitHub Actions to automate code quality and security scanning across repositories. By enforcing coding standards, and generating actionable reports, it ensures early vulnerability identification and compliance with best practices before merging changes.',
    tech: ['OWASP WrongSecrets', 'Qodana', 'GitHub Actions', 'CI/CD', 'Static Code Analysis', 'Secrets Management'],
    link: 'https://github.com/siddheshengineer/wrongsecrets-CI-Pipeline',
  },
  {
    title: 'Automated Ephemeral Database Branching using Neon.tech & PostgreSQL',
    overview: 'A Node.js, PostgreSQL application uses Neon.tech to provision ephemeral database branches, creating isolated environments mirroring production schemas. This orchestrated database migrations automates branch lifecycle management, enabling safe schema development.',
    tech: ['Database Branching', 'Neon', 'Node.js', 'PostgreSQL', 'CI driven DB testing', ],
    link: 'https://github.com/siddheshengineer/Ephemeral-Database-CICD-project',
  },
  {
    title: 'Helm Vulnerability Scanner',
    overview: 'A command-line Bash utility that parses Helm chart manifests to extract container images and scans them with Trivy to detect known vulnerabilities before deployment. It produces structured reports, enforces security policy thresholds, and integrates seamlessly into Kubernetes CI/CD pipelines to prevent insecure images from reaching production clusters.',
    tech: ['Bash', 'Helm', 'Trivy', 'DevSecOps','Kubernetes'],
    link: 'https://github.com/siddheshengineer/Helm-Chart-Vulnerability-Scanner',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-8 bg-transparent overflow-hidden">
      {/* <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" /> */}
      <div className="relative z-10 px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg p-6 hover:bg-opacity-60 transition"
            >
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400">
                {p.title}
              </h3>
              <p className="text-gray-300 text-justify mb-4 text-sm">{p.overview}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t, j) => (
                  <span
                    key={j}
                    className="px-2 py-1 bg-blue-400 bg-opacity-30 text-blue-200 rounded-full text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}