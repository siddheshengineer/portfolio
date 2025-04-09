import React, { useState } from 'react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  // Enhanced skill categories without levels
  const skillCategories = [
    {
      category: "DevOps & Cloud",
      icon: "🚀",
      description: "Continuous integration/deployment, container orchestration, and cloud infrastructure.",
      skills: [
        "AWS", "GCP", "Azure", "OCI", "Docker", "Kubernetes", "Terraform", 
        "Ansible", "ArgoCD", "GitHub Actions", "CircleCI", "Jenkins", 
        "Prometheus", "Grafana", "Helm", "Git", "GitOps", "FluxCD", 
        "K3d", "Istio", "ELK Stack"
      ]
    },
    {
      category: "Programming & Databases",
      icon: "💻",
      description: "Languages, frameworks, and database technologies for application development.",
      skills: [
        "Java", "Python", "Bash", "Go", "Node.js", "Langchain", "AI Agents and workflows", "PostgreSQL", "Oracle", "SQL Server", "MySQL", "MongoDB", 
        "Neo4j", "DSA", "FastAPI", "GraphQL", "REST API", "Neon", "PHP (Laravel)", 
      ]
    },
    {
      category: "Security & Configuration",
      icon: "🔒",
      description: "Security tools, vulnerability scanning, and secure configuration management.",
      skills: [
        "SonarQube", "Qodana", "HashiCorp Vault", "AWS Secrets Manager", 
        "Trivy", "Istio", "OWASP Tools", "Certificate Management", 
        "Static Code Analysis", "Secrets Management"
      ]
    },
    {
      category: "Tools & Practices",
      icon: "🛠️",
      description: "Supporting tools and methodologies for software development.",
      skills: [
        "LLMs & AI", "ML and DL", "Tomcat", "Gradle", "npm", "Linux (RHEL based, Ubuntu based)", "Agile", "Jira", "RabbitMQ", 
        "Kibana", "Scrum", "Ingress Management", "Microservices", 
        "Database Migrations"
      ]
    }
  ];

  // Calculate how many skills to show in compact view
  const getTopSkills = (skills, count = 8) => {
    return skills.slice(0, count);
  };

  return (
    <section id="skills" className="py-16 bg-gradient-to-r from-gray-50 to-slate-100 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg ${
                activeCategory === index ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {/* Category Header with Icon */}
              <div 
                className="flex items-center justify-between p-6 cursor-pointer"
                onClick={() => setActiveCategory(activeCategory === index ? null : index)}
              >
                <div className="flex items-center">
                  <span className="text-3xl mr-4">{category.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{category.category}</h3>
                    <p className="text-gray-600 text-sm mt-1">{category.description}</p>
                  </div>
                </div>
                <span className="text-gray-400 text-xl">
                  {activeCategory === index ? '−' : '+'}
                </span>
              </div>
              
              {/* Skills Preview (Always Visible) */}
              <div className="px-6 pb-6">
                <div className="flex flex-wrap gap-2">
                  {getTopSkills(category.skills).map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                  {category.skills.length > 8 && activeCategory !== index && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                      +{category.skills.length - 8} more
                    </span>
                  )}
                </div>
              </div>
              
              {/* Expanded Skills (Visible when Active) */}
              {activeCategory === index && category.skills.length > 8 && (
                <div className="px-6 pb-6 pt-0 border-t border-gray-100">
                  <h4 className="text-sm font-medium text-gray-500 mb-3">All Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;