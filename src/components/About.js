import React from 'react';
import { FaCheckCircle, FaGraduationCap } from 'react-icons/fa';

const profileText = `I am a dedicated DevOps Engineer with expertise in Cloud Automation, CI/CD, Kubernetes, and SRE best practices, particularly in high-demand environments. Experienced in driving DevOps transformation through GitOps, Infrastructure as Code, system observability and resilience.`;

const achievements = [
  'Reduced deployment times by 20% and improved system efficiency by 30%',
  'Enhanced system resilience ensuring 99.9% uptime for microservices infrastructure',
  'Reduced incident response time by 35% through SRE initiatives',
  'Accelerated infrastructure deployment by 60% through automation',
  'Reduced MTTR by 30% with enhanced observability solutions',
];

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
    date: 'Expected May 2025',
    inProgress: true,
  },
];

export default function AboutMe() {
  return (
    <section id="about" className="relative py-8 bg-transparent overflow-hidden">
      {/* subtle dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />

      <div className="relative z-10 px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* —— LEFT COLUMN —— */}
          <div className="space-y-6">
            {/* Profile */}
            <div className="bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Profile</h3>
              <p className="text-gray-300 leading-relaxed">{profileText}</p>
              <blockquote className="mt-4 border-l-4 border-blue-400 pl-4 italic text-gray-300">
                “My mission is to simplify workflows and build resilient systems that empower teams and drive innovation.”
              </blockquote>
            </div>

            {/* Key Achievements */}
            <div className="bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Key Achievements</h3>
              <ul className="space-y-3">
                {achievements.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <FaCheckCircle className="mt-1 text-green-400" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* —— RIGHT COLUMN —— */}
          <div className="space-y-6">
            {/* Education */}
            <div className="bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
              <ul className="space-y-4">
                {education.map((edu, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <FaGraduationCap className="mt-1 text-blue-400" />
                    <div>
                      <p className="text-white font-semibold">{edu.title}</p>
                      <p className="text-gray-300 italic">{edu.institution}</p>
                    </div>
                    <span className="ml-auto text-sm text-gray-400">{edu.date}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div className="bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Certifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="bg-gray-800 bg-opacity-50 border border-gray-600 rounded-lg p-4"
                  >
                    <p className="text-white font-semibold">{cert.title}</p>
                    {cert.issuer && (
                      <p className="text-gray-300 mt-1">{cert.issuer}</p>
                    )}
                    <p className="text-gray-400 text-sm mt-1">{cert.date}</p>
                    {cert.inProgress && (
                      <p className="text-blue-400 italic mt-2">In progress</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



// import React from 'react';

// const education = [
//   { title: 'Post Graduate Degree, Information Technology Solutions', institution: 'Humber College, Toronto', date: '2023' },
//   { title: 'Bachelor of Engineering, Electronics & Telecommunication', institution: 'University of Mumbai', date: '2019' },
// ];

// const certifications = [
//   { title: 'AWS Solutions Architect – Associate', issuer: 'Amazon Web Services', date: 'Jan 2021' },
//   { title: 'GCP Professional Cloud Architect', issuer: 'Google Cloud', date: 'Jun 2024' },
//   { title: 'PagerDuty DevOps Professional', issuer: 'PagerDuty', date: 'Jul 2024' },
//   { title: 'Oracle Cloud Infrastructure Associate', issuer: 'Oracle Cloud Infrastructure', date: 'Mar 2025' },
//   { title: 'Certified Kubernetes Administrator', issuer: '', date: 'Expected Apr 2025', inProgress: true },
// ];

// export default function EducationCertifications() {
//   return (
//     <section id="education" className="relative py-16 bg-transparent overflow-hidden">
//       <div className="dot-pattern opacity-10" />

//       <div className="relative z-10 w-full px-6">
//         <h2 className="text-3xl font-bold text-white mb-8 text-center">Education</h2>
//         <div className="space-y-12 mb-16">
//           {education.map((edu, i) => (
//             <div key={i} className="relative pl-8">
//               <div className="absolute -left-1 top-2 w-4 h-4 bg-gray-800 border-2 border-gray-500 rounded-full" />
//               <h3 className="text-xl font-semibold text-white">{edu.title}</h3>
//               <p className="mt-1 text-lg font-script text-gray-300">{edu.institution}</p>
//               <span className="absolute right-0 top-2 text-sm font-medium text-gray-400">{edu.date}</span>
//             </div>
//           ))}
//         </div>

//         <h2 className="text-3xl font-bold text-white mb-8 text-center">Certifications</h2>
//         <div className="space-y-12">
//           {certifications.map((cert, i) => (
//             <div key={i} className="relative pl-8">
//               <div className="absolute -left-1 top-2 w-4 h-4 bg-gray-800 border-2 border-gray-500 rounded-full" />
//               <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
//               {cert.issuer && <p className="mt-1 text-lg font-script text-gray-300">{cert.issuer}</p>}
//               <span className="absolute right-0 top-2 text-sm font-medium text-gray-400">{cert.date}</span>
//               {cert.inProgress && <p className="mt-2 text-blue-400 italic">In progress</p>}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
