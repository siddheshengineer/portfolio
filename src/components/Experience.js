import React from 'react';

const experience = [
  {
    title: 'DevOps Developer – Graduate Intern',
    company: 'FundEvolve',
    date: 'Dec 2023 – Apr 2024',
    responsibilities: [
      'Engineered a streamlined deployment process using GitOps and containers, achieving faster releases.',
      'Built a financial-goals application, enhancing UX and data tracking.',
      'Authored CI/CD workflow docs to accelerate onboarding.',
      'Collaborated cross-functionally to unblock developers and speed releases.',
    ],
  },
  {
    title: 'DevOps Engineer',
    company: 'Tata Consultancy Services',
    date: 'May 2020 – Oct 2022',
    responsibilities: [
      'Led SRE initiatives, reducing incident response time by 35% and ensuring 99.9% uptime.',
      'Built Jenkins & GitHub Actions pipelines, cutting change-failure rate by 40%.',
      'Designed ArgoCD/Helm blue-green & canary deployments with auto-rollout checks.',
      'Automated Terraform & Ansible provisioning, accelerating infra deployment by 60%.',
    ],
  },
  {
    title: 'System Engineer (Cloud & DevOps focus)',
    company: 'Tata Consultancy Services',
    date: 'Aug 2019 – May 2020',
    responsibilities: [
      'Participated in on-call rotations for mission-critical systems.',
      'Implemented least-privilege access controls to strengthen cloud security.',
      'Refactored legacy services into cloud-native microservices.',
      'Supported seamless migrations and upgrades with zero downtime.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 bg-transparent overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />
      <div className="relative z-10 px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Work Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg p-6 space-y-4"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <p className="mt-1 text-gray-300 italic">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-400">{exp.date}</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
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
