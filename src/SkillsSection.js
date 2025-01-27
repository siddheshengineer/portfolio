import React, { useState } from "react";
import { 
  RiCodeSLine,
  RiDatabase2Line,
  RiCloudLine,
  RiGitBranchLine,
  RiToolsLine,
  RiCodeBoxLine,
  RiServerLine,
  RiShieldLine,
  RiTerminalBoxLine,
  RiComputerLine,
  RiSettings3Line,
  RiArchiveLine,
  RiLineChartLine,
  RiLockLine,
  RiCpuLine,
  RiNodeTree
} from "react-icons/ri";
import { GrDocker } from "react-icons/gr";
import { AiOutlineKubernetes } from "react-icons/ai";

const skillsData = {
  "DevOps & Cloud Tools": {
    icon: <RiCloudLine className="w-6 h-6" />,
    skills: [
      { name: "AWS (ECS, EC2)", icon: <RiCloudLine /> },
      { name: "Docker", icon: <GrDocker /> },
      { name: "Kubernetes", icon: <AiOutlineKubernetes /> },
      { name: "Jenkins", icon: <RiSettings3Line /> },
      { name: "Terraform", icon: <RiServerLine /> },
    ]
  },
  "Programming & Database": {
    icon: <RiCodeSLine className="w-6 h-6" />,
    skills: [
      { name: "Python", icon: <RiCodeBoxLine /> },
      { name: "Java", icon: <RiCodeSLine /> },
      { name: "PostgreSQL", icon: <RiDatabase2Line /> },
      { name: "MongoDB", icon: <RiDatabase2Line /> },
      { name: "Neo4j", icon: <RiDatabase2Line /> },
      { name: "DynamoDB", icon: <RiDatabase2Line /> },
    ]
  },
  "Configuration & Security": {
    icon: <RiToolsLine className="w-6 h-6" />,
    skills: [
      { name: "Ansible", icon: <RiSettings3Line /> },
      { name: "Git", icon: <RiGitBranchLine /> },
      { name: "Grafana", icon: <RiLineChartLine /> },
      { name: "HashiCorp Vault", icon: <RiLockLine /> },
    ]
  },
  "Other Tools": {
    icon: <RiCpuLine className="w-6 h-6" />,
    skills: [
      { name: "Node.js", icon: <RiTerminalBoxLine /> },
      { name: "Linux/Unix", icon: <RiComputerLine /> },
      { name: "Kafka", icon: <RiNodeTree /> },
    ]
  }
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('DevOps & Cloud Tools');

  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Skills</h2>
        
        {/* Category Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          {Object.entries(skillsData).map(([category, { icon }]) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-lg font-semibold
                transition-all duration-300 transform hover:scale-105
                ${activeCategory === category 
                  ? "bg-blue-600 text-white shadow-lg" 
                  : "bg-white text-gray-700 shadow-md hover:bg-blue-50"}
              `}
            >
              {icon}
              <span>{category}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="mt-8">
          {activeCategory && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {skillsData[activeCategory].skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg
                    transition-all duration-300 transform hover:-translate-y-1
                    border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-blue-500 text-2xl">
                      {skill.icon}
                    </div>
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;









/////////////////////////
// import React, { useState } from "react";

// const skillsData = {
//   "Programming & Database": [
//     "Python",
//     "Java",
//     "Bash",
//     "Golang",
//     "PostgreSQL",
//     "SQL Server",
//     "RDS",
//     "MongoDB",
//     "Neo4j",
//     "DynamoDB",
//   ],
//   "Cloud & Tools": [
//     "AWS (ECS, EC2)",
//     "Azure",
//     "GCP",
//     "Jenkins",
//     "Docker",
//     "Kubernetes",
//     "Terraform",
//     "CloudFormation",
//   ],
//   "Configuration & Security": [
//     "Ansible",
//     "Git",
//     "Grafana",
//     "HashiCorp Vault",
//     "AWS Secrets Manager",
//     "Trivy",
//   ],
//   "Other Tools": [
//     "Node.js",
//     "Express.js",
//     "Linux/Unix (Ubuntu, CentOS)",
//     "RabbitMQ",
//     "Kafka",
//     "Maven",
//   ],
// };

// const SkillsSection = () => {
//   const [activeCategory, setActiveCategory] = useState('Programming & Database');

//   const handleCategoryClick = (category) => {
//     setActiveCategory(activeCategory === category ? null : category);
//   };

//   return (
//     <section id="skills" className="py-10">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Skills</h2>
//         <div className="flex flex-wrap gap-4">
//           {Object.keys(skillsData).map((category) => (
//             <button
//               key={category}
//               onClick={() => handleCategoryClick(category)}
//               className={`px-4 py-2 rounded-lg font-semibold text-white ${
//                 activeCategory === category ? "bg-blue-700" : "bg-blue-500"
//               } hover:bg-blue-600 transition`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//         <div className="mt-8">
//           {activeCategory && (
//             <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//               {skillsData[activeCategory]
//                 .sort(() => Math.random() - 0.5) // Randomize skill order
//                 .map((skill, index) => (
//                   <div
//                     key={index}
//                     className="p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md text-center"
//                   >
//                     {skill}
//                   </div>
//                 ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };


// export default SkillsSection;