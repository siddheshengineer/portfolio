import React from 'react';

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "DevOps & Cloud",
      skills: [
        "AWS", "GCP", "Azure", "Jenkins", "Docker", "Kubernetes", "Terraform", 
        "Ansible", "ArgoCD", "GitHub Actions", "Prometheus", "Helm", "Git"
      ]
    },
    {
      category: "Programming & Databases",
      skills: [
        "Java", "Python", "Bash", "Go", "PHP (Laravel)", "Oracle", 
        "SQL Server", "MongoDB", "Neo4j", "GraphQL", "REST API"
      ]
    },
    {
      category: "Security & Configuration",
      skills: [
        "SonarQube", "HashiCorp Vault", "AWS Secrets Manager", "Trivy", 
        "Istio", "OWASP tools", "Certificate management"
      ]
    },
    {
      category: "Tools & Practices",
      skills: [
        "Tomcat", "Gradle", "npm", "Linux", "Agile", "Jira", 
        "RabbitMQ", "Kibana", "Scrum", "Ingress management", "ELK Stack"
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-to-r from-gray-50 to-slate-100 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;