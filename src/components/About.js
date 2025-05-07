import React from 'react';

const education = [
  {
    title: 'Post Graduate Degree, Information Technology Solutions',
    institution: 'Humber College, Toronto',
    date: '2023',
  },
  {
    title: 'Bachelor of Engineering, Electronics & Telecommunication',
    institution: 'University of Mumbai',
    date: '2019',
  },
];

const certifications = [
  {
    title: 'AWS Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    date: 'Jan 2021',
  },
  {
    title: 'GCP Professional Cloud Architect',
    issuer: 'Google Cloud',
    date: 'Jun 2024',
  },
  {
    title: 'PagerDuty DevOps Professional',
    issuer: 'PagerDuty',
    date: 'Jul 2024',
  },
  {
    title: 'Oracle Cloud Infrastructure Associate',
    issuer: 'Oracle Cloud Infrastructure',
    date: 'Mar 2025',
  },
  {
    title: 'Certified Kubernetes Administrator',
    issuer: '',
    date: 'Expected Apr 2025',
    inProgress: true,
  },
];

export default function EducationCertifications() {
  return (
    <section id="education" className="relative py-16 bg-transparent overflow-hidden">
      {/* dot‐pattern */}
      <div className="dot-pattern opacity-10" />

      <div className="relative z-10 w-full px-6 max-w-4xl mx-auto">
        {/* Education */}
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Education
        </h2>
        <div className="space-y-12 mb-16">
          {education.map((edu, idx) => (
            <div key={idx} className="relative pl-8">
              <div className="absolute -left-1 top-2 w-4 h-4 bg-gray-800 border-2 border-gray-500 rounded-full" />
              <h3 className="text-xl font-semibold text-white">{edu.title}</h3>
              <p className="mt-1 text-lg font-script text-gray-300">{edu.institution}</p>
              <span className="absolute right-0 top-2 text-sm font-medium text-gray-400">
                {edu.date}
              </span>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Certifications
        </h2>
        <div className="space-y-12">
          {certifications.map((cert, idx) => (
            <div key={idx} className="relative pl-8">
              <div className="absolute -left-1 top-2 w-4 h-4 bg-gray-800 border-2 border-gray-500 rounded-full" />
              <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
              {cert.issuer && (
                <p className="mt-1 text-lg font-script text-gray-300">{cert.issuer}</p>
              )}
              <span className="absolute right-0 top-2 text-sm font-medium text-gray-400">
                {cert.date}
              </span>
              {cert.inProgress && (
                <p className="mt-2 text-blue-400 italic">In progress</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
