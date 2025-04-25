// src/components/Experience.jsx
import React from 'react';

// Experience data (move into a separate data file if you prefer)
const experience = [
  {
    title: 'DevOps Developer – Graduate Intern',
    company: 'FundEvolve',
    date: 'Dec 2023 – Apr 2024',
    responsibilities: [
      'Engineered a streamlined deployment process using GitHub Actions and containers, achieving faster releases.',
      'Contributed to building a financial goals application, enhancing user experience and data tracking capabilities.',
      'Designed clear documentation and diagrams for CI/CD workflows to facilitate seamless developer onboarding.',
      'Collaborated with cross-functional teams to resolve developer roadblocks, accelerating release cadence.',
    ],
  },
  {
    title: 'DevOps Engineer',
    company: 'Tata Consultancy Services',
    date: 'May 2020 – Oct 2022',
    responsibilities: [
      'Led DevOps and SRE initiatives to enhance system resilience and reduce incident response time by 35%, ensuring 99.9% uptime.',
      'Developed CI/CD pipelines using Jenkins and GitHub Actions, reducing change failure rate by 40% and enhancing release frequency.',
      'Designed CD pipelines with ArgoCD & Helm charts for blue/green and canary deployments with automated rollout checks.',
      'Implemented best practices for incident management and alerts, ensuring adherence to SLAs and improving response efficiency.',
      'Optimized observability using ELK and cloud-native tools, enhancing real-time insights and reducing MTTR by 30%.',
      'Orchestrated Kubernetes and authored Helm charts to streamline microservices deployment and onboarding.',
      'Automated cloud resource provisioning using Terraform and Ansible, accelerating infrastructure deployment by 60%.',
      'Authored and maintained comprehensive runbooks, knowledge base articles, and technical documentation to streamline operations.',
    ],
  },
  {
    title: 'System Engineer (Cloud & DevOps focus)',
    company: 'Tata Consultancy Services',
    date: 'Aug 2019 – May 2020',
    responsibilities: [
      'Participated in on-call rotations for mission-critical systems, swiftly diagnosing and resolving incidents.',
      'Strengthened cloud security by implementing least-privilege access controls and securing cloud applications.',
      'Refactored legacy systems to modern cloud-native standards, reducing error rates significantly.',
      'Supported seamless migrations and upgrades, ensuring operational continuity across projects.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 bg-white overflow-hidden">
      {/* subtle dotted background */}
      <div className="dot-pattern" />
      {/* decorative accent circle */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-green-600 rounded-full opacity-10 mix-blend-multiply" />

      <div className="relative z-10 w-full px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Work Experience
        </h2>
        <div className="space-y-12">
          {experience.map((exp, idx) => (
            <div key={idx} className="relative pl-8">
              {/* timeline dot */}
              <div className="absolute -left-1 top-2 w-4 h-4 bg-white border-2 border-gray-300 rounded-full" />

              <h3 className="text-xl font-semibold text-gray-900">
                {exp.title}
              </h3>
              <p className="mt-1 text-lg font-script text-gray-600">
                {exp.company}
              </p>
              <span className="absolute right-0 top-2 text-sm font-medium text-gray-500">
                {exp.date}
              </span>

              <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
                {exp.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
