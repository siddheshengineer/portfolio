import React from 'react';

const experience = [
  {
    title: 'DevOps Developer (Graduate Intern)',
    company: 'FundEvolve',
    date: 'Dec 2023 – Apr 2024',
    responsibilities: [
      'Built CI/CD pipelines for a managed container platform, cutting deploy time by 20%.',
      'Containerized microservices, speeding development & testing by 50%.',
      'Built a 9+ goals-tracking application, enhancing user experience.',
      'Collaborated with teams to resolve deployment issues, accelerating releases by 20%.',
    ],
  },
  {
    title: 'DevOps Engineer',
    company: 'Tata Consultancy Services',
    date: 'May 2020 – Oct 2022',
    responsibilities: [
      'Deployed microservices on Kubernetes clusters, ensuring HA & operational readiness.',
      'Integrated automated security scanning into CI/CD pipelines, reducing vulnerabilities.',
      'Built automated CI/CD pipelines, reducing change-failure rate by 40%.',
      'Automated infrastructure provisioning with IaC, accelerating deployment by 60%.',
    ],
  },
  {
    title: 'System Engineer (Cloud & DevOps)',
    company: 'Tata Consultancy Services',
    date: 'Aug 2019 – May 2020',
    responsibilities: [
      'Provided on-call support, resolving critical incidents and maintaining 99.9% reliability.',
      'Enforced least-privilege access, strengthening security posture.',
      'Automated 20+ tasks with scripting, saving manual work hours.',
      'Created docs & architecture diagrams, streamlining knowledge sharing.',
    ],
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-8 bg-transparent overflow-hidden">
      {/* <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" /> */}
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
