import React, { useState, useCallback } from "react";
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
  RiNodeTree,
  RiGithubFill,
  RiJavaFill  
} from "react-icons/ri";
import { GrDocker } from "react-icons/gr";
import { AiOutlineKubernetes } from "react-icons/ai";
import { SiGithubactions,
    SiApachekafka,
    SiTerraform,
    SiJenkins,
    SiVault,
    SiArgo,
    SiSonarcloud,
    SiRabbitmq,
    SiMongodb,
    SiNodedotjs,
    SiGnubash, 
    SiTrivy,
    SiElastic,
    SiHelm,  
    SiApachemaven,
    SiApachetomcat,   
 } from "react-icons/si";

const initialSkillsData = {
  "DevOps Tools": {
    icon: <SiGithubactions className="w-6 h-6" />,
    skills: [
      { name: "AWS, GCP, Azure", icon: <RiCloudLine /> },
      { name: "Docker", icon: <GrDocker /> },
      { name: "Kubernetes", icon: <AiOutlineKubernetes /> },
      { name: "Jenkins", icon: <SiJenkins /> },
      { name: "Terraform", icon: <SiTerraform /> },
      { name: "Github Actions", icon: <RiGithubFill /> },
      { name: "Argo tools", icon: <SiArgo /> },
      { name: "Helm", icon: <SiHelm /> },
    ]
  },
  "Programming & Database": {
    icon: <RiCodeSLine className="w-6 h-6" />,
    skills: [
      { name: "Python", icon: <RiCodeBoxLine /> },
      { name: "Java", icon: <RiJavaFill /> },
      { name: "Bash", icon: <SiGnubash /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "PostgreSQL", icon: <RiDatabase2Line /> },
      { name: "MongoDB", icon: <SiMongodb /> },
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
      { name: "HashiCorp Vault", icon: <SiVault /> },
      { name: "SonarQube cloud", icon: <SiSonarcloud /> },
      { name: "Trivy", icon: <SiTrivy /> },
      { name: "Elastic Stack", icon: <SiElastic /> },
    ]
  },
  "Other Tools": {
    icon: <RiCpuLine className="w-6 h-6" />,
    skills: [
      { name: "Linux/Unix", icon: <RiComputerLine /> },
      { name: "RabbitMQ", icon: <SiRabbitmq /> },
      { name: "Maven", icon: <SiApachemaven /> },
      { name: "Tomcat", icon: <SiApachetomcat /> },
    ]
  }
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('DevOps Tools');
  const [randomizedSkills, setRandomizedSkills] = useState(initialSkillsData);

  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const randomizeSkills = useCallback((category) => {
    setRandomizedSkills(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        skills: shuffleArray(prev[category].skills)
      }
    }));
  }, []);

  const handleCategoryClick = (category) => {
    if (activeCategory !== category) {
      setActiveCategory(category);
      randomizeSkills(category);
    } else {
      randomizeSkills(category);
    }
  };

  return (
    <section id="skills" className="py-16  bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Skills</h2>
        
        {/* Category Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          {Object.entries(randomizedSkills).map(([category, { icon }]) => (
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
              {randomizedSkills[activeCategory].skills.map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
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











// import React, { useState, useCallback } from "react";
// import { 
//   RiCodeSLine,
//   RiDatabase2Line,
//   RiCloudLine,
//   RiGitBranchLine,
//   RiToolsLine,
//   RiCodeBoxLine,
//   RiServerLine,
//   RiShieldLine,
//   RiTerminalBoxLine,
//   RiComputerLine,
//   RiSettings3Line,
//   RiArchiveLine,
//   RiLineChartLine,
//   RiLockLine,
//   RiCpuLine,
//   RiNodeTree,
//   RiGithubFill,
//   RiJavaFill  
// } from "react-icons/ri";
// import { GrDocker } from "react-icons/gr";
// import { AiOutlineKubernetes } from "react-icons/ai";
// import { SiGithubactions,
//     SiApachekafka,
//     SiTerraform,
//     SiJenkins,
//     SiVault,
//     SiArgo,
//     SiSonarcloud,
//     SiRabbitmq,
//     SiMongodb,
//     SiNodedotjs,
//     SiGnubash, 
//     SiTrivy,
//     SiElastic,
//     SiHelm,     
//  } from "react-icons/si";

// const initialSkillsData = {
//   "DevOps Tools": {
//     icon: <SiGithubactions className="w-6 h-6" />,
//     skills: [
//       { name: "AWS, GCP, Azure", icon: <RiCloudLine /> },
//       { name: "Docker", icon: <GrDocker /> },
//       { name: "Kubernetes", icon: <AiOutlineKubernetes /> },
//       { name: "Jenkins", icon: <SiJenkins /> },
//       { name: "Terraform", icon: <SiTerraform /> },
//       { name: "Github Actions", icon: <RiGithubFill /> },
//       { name: "Argo tools", icon: <SiArgo /> },
//       { name: "Helm", icon: <SiHelm /> },
//     ]
//   },
//   "Programming & Database": {
//     icon: <RiCodeSLine className="w-6 h-6" />,
//     skills: [
//       { name: "Python", icon: <RiCodeBoxLine /> },
//       { name: "Java", icon: <RiJavaFill /> },
//       { name: "Bash", icon: <SiGnubash /> },
//       { name: "Node.js", icon: <SiNodedotjs /> },
//       { name: "PostgreSQL", icon: <RiDatabase2Line /> },
//       { name: "MongoDB", icon: <SiMongodb /> },
//       { name: "Neo4j", icon: <RiDatabase2Line /> },
//       { name: "DynamoDB", icon: <RiDatabase2Line /> },
//     ]
//   },
//   "Configuration & Security": {
//     icon: <RiToolsLine className="w-6 h-6" />,
//     skills: [
//       { name: "Ansible", icon: <RiSettings3Line /> },
//       { name: "Git", icon: <RiGitBranchLine /> },
//       { name: "Grafana", icon: <RiLineChartLine /> },
//       { name: "HashiCorp Vault", icon: <SiVault /> },
//       { name: "SonarQube cloud", icon: <SiSonarcloud /> },
//       { name: "Trivy", icon: <SiTrivy /> },
//       { name: "Elastic Stack", icon: <SiElastic /> },

//     ]
//   },
//   "Other Tools": {
//     icon: <RiCpuLine className="w-6 h-6" />,
//     skills: [
//       { name: "Linux/Unix", icon: <RiComputerLine /> },
//       { name: "RabbitMQ", icon: <SiRabbitmq /> },
//     ]
//   }
// };

// // const SkillsSection = () => {
// //   const [activeCategory, setActiveCategory] = useState('DevOps Tools');

// //   const handleCategoryClick = (category) => {
// //     setActiveCategory(activeCategory === category ? null : category);
// //   };

// const SkillsSection = () => {
//   const [activeCategory, setActiveCategory] = useState('DevOps Tools');
//   const [randomizedSkills, setRandomizedSkills] = useState(initialSkillsData);
  
//     // Fisher-Yates shuffle algorithm
//   const shuffleArray = (array) => {
//     const newArray = [...array];
//     for (let i = newArray.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
//     }
//     return newArray;
//   };
  
//   const randomizeSkills = useCallback((category) => {
//     setRandomizedSkills(prev => ({
//       ...prev,
//       [category]: {
//         ...prev[category],
//         skills: shuffleArray(prev[category].skills)
//       }
//     }));
//   }, []);
  
//   const handleCategoryClick = (category) => {
//     if (activeCategory !== category) {
//       setActiveCategory(category);
//       randomizeSkills(category);
//     } else {
//       randomizeSkills(category);
//     }
//   };

//   return (
//     <section id="skills" className="py-16 bg-gradient-to-b from-white to-gray-50">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Skills</h2>
        
//         {/* Category Buttons */}
//         <div className="flex flex-wrap gap-4 mb-8">
//           {Object.entries(initialSkillsData).map(([category, { icon }]) => (
//             <button
//               key={category}
//               onClick={() => handleCategoryClick(category)}
//               className={`
//                 flex items-center gap-2 px-6 py-3 rounded-lg font-semibold
//                 transition-all duration-300 transform hover:scale-105
//                 ${activeCategory === category 
//                   ? "bg-blue-600 text-white shadow-lg" 
//                   : "bg-white text-gray-700 shadow-md hover:bg-blue-50"}
//               `}
//             >
//               {icon}
//               <span>{category}</span>
//             </button>
//           ))}
//         </div>

//         {/* Skills Grid */}
//         <div className="mt-8">
//           {activeCategory && (
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
//               {initialSkillsData[activeCategory].skills.map((skill, index) => (
//                 <div
//                   key={index}
//                   className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg
//                     transition-all duration-300 transform hover:-translate-y-1
//                     border border-gray-100"
//                 >
//                   <div className="flex items-center gap-3">
//                     <div className="text-blue-500 text-2xl">
//                       {skill.icon}
//                     </div>
//                     <span className="text-gray-700 font-medium">{skill.name}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;