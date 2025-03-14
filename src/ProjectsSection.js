import React from 'react';

// Project data array - all projects in one place for easy management
const projectsData = [
  {
    id: "llm-containerization",
    title: "LLM-Based Containerization",
    isCurrent: false,
    overview: "An AI-powered tool that dynamically generates optimized Dockerfiles using LLMs, ensuring best practices for containerization and automation.",
    bulletPoints: [
      { label: "Multi-LLM Support", description: "Uses Ollama (Llama3) and Google Gemini 2.0 via Google AI Studio" },
      { label: "Best Practices", description: "Generates Dockerfiles with multi-stage builds, dependency installation, and workspace setup" },
      { label: "Automation", description: "Removes manual effort in writing Dockerfiles by leveraging AI" },
      { label: "Customizable", description: "Adapts to different programming languages and project structures" },
      { label: "Remote & Local Models", description: "Supports both local LLM execution and remote API calls via Google AI Studio" }
    ],
    structure: `📦 llm-containerization
  ├── 📄 localScript.py     # Uses Llama3 local inference
  ├── 📄 hostedLLMScript.py # Uses gemini-2.0 remote inference
  ├── 📄 README.md          # Project documentation
  └── 📄 .env               # .env file for API keys`,
    goals: [
      "Leverage AI to automate Dockerfile generation",
      "Ensure best practices in containerization",
      "Provide support for multiple programming languages",
      "Enable both local and cloud-based LLM processing",
      "Improve DevOps workflows by reducing manual effort"
    ],
    technologies: ["Python", "Ollama", "Llama3", "Google Gemini 2.0", "Google AI Studio", "Docker"],
    link: "https://github.com/siddheshengineer/LLM-based-projects/tree/main/containerizationScript"
  },
  {
    id: "gitops-k3d",
    title: "GitOps Project with K3d, Azure Arc & FluxCD",
    isCurrent: false,
    overview: "This repository follows a GitOps workflow to deploy a Flask-based web application using:",
    bulletPoints: [
      { label: "Local Kubernetes Cluster", description: "K3d for lightweight cluster management" },
      { label: "Cluster Management", description: "Azure Arc to integrate with Azure" },
      { label: "GitOps CD Operator", description: "FluxCD for automated deployments" },
      { label: "CI/CD", description: "GitHub Actions / CircleCI for Continuous Integration" },
      { label: "Containerization", description: "Docker" }
    ],
    structure: `📦 gitOps-project
├── 📂 manifests        # Kubernetes manifests for FluxCD
├── 📂 .github/workflows # GitHub Actions CI/CD pipeline
├── 📂 k3d-setup         # Scripts for k3d cluster setup
├── 📂 app              # Flask web application source code
│   ├── app.py
│   ├── templates/
│   ├── requirements.txt
│   ├── Dockerfile
│   └── README.md
└── README.md`,
    goals: [
      "Automate infrastructure deployment using GitOps principles",
      "Ensure reproducibility and consistency using FluxCD",
      "Manage a local K3d cluster integrated with Azure Arc",
      "CI/CD integration with GitHub Actions or CircleCI",
      "Containerize the Flask app and deploy it to Kubernetes"
    ],
    technologies: ["Kubernetes", "K3d", "Azure Arc", "FluxCD", "GitOps", "GitHub Actions", "CircleCI", "Docker", "Flask"],
    link: "https://github.com/siddheshengineer/GitOps"
  },
  {
    id: "astronomy-shop",
    title: "Astronomy Shop Microservices",
    isCurrent: false,
    overview: "Developing a demo DevOps project implementing OpenTelemetry in a near real-world, microservice-based distributed system using multiple languages:",
    bulletPoints: [
      { label: "Backend Services", description: "Java, Golang, and Python" },
      { label: "Infrastructure", description: "GKE with Istio service mesh" },
      { label: "CI/CD Pipeline", description: "GitHub Actions/Jenkins" },
      { label: "Security", description: "SonarQube for static code analysis" },
      { label: "Deployment", description: "Helm charts for Kubernetes resources" }
    ],
    achievements: [
      "Built scalable, high-performance microservices architecture",
      "Implemented complete DevSecOps CI/CD pipeline",
      "Enhanced observability with distributed tracing",
      "Utilized multi-language approach for optimal performance",
      "Deployed on GKE with service mesh capabilities"
    ],
    technologies: ["Java", "Golang", "Python", "OpenTelemetry", "Microservices", "GKE", "Istio"],
    link: "https://github.com/siddheshengineer/Astronomy-Shop---Fullstack-DevOps"
  },
  {
    id: "owasp-qodana",
    title: "OWASP WrongSecrets with Qodana CI Pipeline",
    isCurrent: false,
    overview: "This project integrates OWASP WrongSecrets with a CI pipeline using Qodana to automate code quality checks and security scanning.",
    bulletPoints: [
      { label: "Security Training", description: "Uses OWASP WrongSecrets for hands-on secrets management training" },
      { label: "Code Quality Analysis", description: "Qodana scans for security vulnerabilities and coding issues" },
      { label: "Automated Fixes", description: "Qodana applies suggested fixes and creates pull requests" },
      { label: "CI/CD Integration", description: "GitHub Actions runs Qodana on every pull request and push" },
      { label: "Cloud Integration", description: "Qodana Cloud provides detailed visualization of scan results" }
    ],
    structure: `📦 owasp-qodana
├── 📂 src                 # OWASP WrongSecrets source code
├── 📂 .github/workflows   # GitHub Actions CI/CD pipeline
├── 📄 README.md           # Project documentation
└── 📄 qodana.yaml         # Qodana configuration file`,
    goals: [
      "Automate security testing for OWASP WrongSecrets",
      "Ensure continuous code quality enforcement",
      "Provide automated security insights with Qodana",
      "Integrate static analysis in the CI/CD pipeline",
      "Enhance developer awareness of security vulnerabilities"
    ],
    technologies: ["OWASP WrongSecrets", "Qodana", "GitHub Actions", "CI/CD", "Static Code Analysis", "Secrets Management"],
    link: "https://github.com/siddheshengineer/wrongsecrets-CI-Pipeline"
  },
  {
    id: "helm-vulnerability-scanner",
    title: "Helm Charts Vulnerability Scanner",
    isCurrent: false,
    overview: "Developed a Bash-based automation tool to enhance container security in Kubernetes deployments:",
    bulletPoints: [
      { label: "Extraction", description: "Parses Helm charts to identify Docker images" },
      { label: "Scanning", description: "Trivy integration for vulnerability detection" },
      { label: "Reporting", description: "Structured CSV output for further analysis" },
      { label: "Integration", description: "Hooks into CI/CD pipelines for pre-deployment checks" }
    ],
    codeSnippet: `#!/bin/bash
# Core scanning logic:
for chart in $(find . -name "Chart.yaml"); do
  # Extract image references
  # Scan with Trivy
  # Generate CSV report
  # Enforce security policies
done`,
    achievements: [
      "Enhanced pre-deployment security checks",
      "Provided systematic vulnerability identification",
      "Automated reporting for security compliance",
      "Integrated with existing CI/CD workflows"
    ],
    technologies: ["Bash", "Helm", "Trivy", "Kubernetes", "Security"],
    link: "https://github.com/siddheshengineer/Helm-Chart-Vulnerability-Scanner"
  },
  {
    id: "argocd-pipeline",
    title: "CI/CD Pipeline with ArgoCD & Helm",
    isCurrent: false,
    overview: "Designed a continuous deployment pipeline using GitOps principles for modern application delivery:",
    bulletPoints: [
      { label: "Deployment Strategy", description: "Blue/green and canary deployments" },
      { label: "Automation", description: "ArgoCD for Kubernetes resource synchronization" },
      { label: "Packaging", description: "Helm charts for application templating" },
      { label: "Safety", description: "Automated rollout checks and rollback capabilities" }
    ],
    codeSnippet: `📦 CI/CD Pipeline
├── 📂 app-of-apps         # ArgoCD application hierarchy
├── 📂 helm-charts         # Application Helm charts
├── 📂 pipeline            # CI configuration
└── 📂 environments        # Environment configs
    ├── dev
    ├── staging
    └── production`,
    achievements: [
      "Reduced change failure rate by 40%",
      "Enhanced release frequency while maintaining stability",
      "Implemented GitOps workflow with declarative configurations",
      "Enabled progressive delivery with automated verification"
    ],
    technologies: ["ArgoCD", "Helm", "Kubernetes", "GitOps", "CI/CD"],
    link: "#"
  },
  {
    id: "ephemeral-db-branching",
    title: "Automated Ephemeral Database Branching using Node.js & PostgreSQL",
    isCurrent: false,
    overview: "A Node.js Todo application with PostgreSQL that utilizes automated ephemeral database branching via <a href=https://neon.tech/>Neon</a> and GitHub Actions. This setup allows for isolated database testing in pull requests before merging schema changes into production.",
    bulletPoints: [
      { label: "PostgreSQL Integration", description: "Uses PostgreSQL as the database backend" },
      { label: "Automated Migrations", description: "Manages schema changes with node-pg-migrate" },
      { label: "Ephemeral Database Branching", description: "Creates temporary database branches for pull request testing using Neon" },
      { label: "CI/CD Integration", description: "GitHub Actions automates migrations and schema updates" },
      { label: "Safe Schema Deployment", description: "Main database schema updates require manual approval before deployment" }
    ],
    structure: `📦 ephemeral-db-branching
├── 📂 migrations        # Database migration scripts
├── 📂 .github/workflows # CI/CD for ephemeral branching
├── 📄 index.js          # Node.js application entry point
├── 📄 package.json      # Project dependencies and scripts
├── 📄 .env.example      # Example environment variables
└── 📄 README.md         # Project documentation`,
    goals: [
      "Enable safe and automated database schema testing in CI/CD pipelines",
      "Use Neon for ephemeral PostgreSQL branches triggered by pull requests",
      "Ensure database migrations run in an isolated environment before merging",
      "Prevent schema conflicts in production by requiring manual approval for updates",
      "Automate database cleanup by deleting ephemeral branches when PRs close"
    ],
    technologies: ["Node.js", "PostgreSQL", "Neon", "GitHub Actions", "CI/CD", "Database Migrations"],
    link: "https://github.com/siddheshengineer/Ephemeral-Database-CICD-project"
  },
  
//   {
//     id: "observability-platform",
//     title: "Enhanced Observability Platform",
//     isCurrent: false,
//     overview: "Implemented a comprehensive observability solution using cloud-native monitoring tools for distributed systems:",
//     bulletPoints: [
//       { label: "Logging", description: "ELK Stack for centralized log management" },
//       { label: "Metrics", description: "Prometheus for time-series data collection" },
//       { label: "Visualization", description: "Grafana dashboards for real-time monitoring" },
//       { label: "Alerting", description: "Configured intelligent alerts based on SLOs" }
//     ],
//     codeSnippet: `# Example SLO definition
// - name: api_availability
//   target: 99.9%
//   window: 30d
//   indicators:
//     - metric: http_success_rate
//       threshold: >= 99.9%
//     - metric: latency_p95
//       threshold: < 200ms`,
//     achievements: [
//       "Reduced Mean Time To Resolution (MTTR) by 30%",
//       "Enhanced real-time insights across distributed systems",
//       "Implemented best practices for incident management",
//       "Ensured adherence to SLAs and SLOs",
//       "Improved overall response efficiency"
//     ],
//     technologies: ["ELK Stack", "Prometheus", "Grafana", "SRE", "Observability"],
//     link: "#"
//   }
];

const ProjectsPage = () => {
  // Sort the projects so that the current project appears first
  const sortedProjects = [...projectsData].sort((a, b) => {
    if (a.isCurrent && !b.isCurrent) return -1;
    if (!a.isCurrent && b.isCurrent) return 1;
    return 0;
  });

  return (
    <section id="projects" className="py-16 bg-gradient-to-r from-gray-50 to-slate-100 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortedProjects.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow-md relative">
              {/* Current Project Badge - properly positioned in top right corner */}
              {project.isCurrent && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    Active Project
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-semibold mb-4 pr-32">{project.title}</h3>
              
              <div className="mb-6">
                <h4 className="text-xl font-medium mb-2">Overview</h4>
                <p className="text-gray-700">
                  {/* Fix the overview text rendering to avoid duplication */}
                  {project.id === "gitops-k3d" ? (
                    <>
                      This repository follows a <span className="font-semibold">GitOps</span> workflow to deploy a <span className="font-semibold">Flask-based</span> web application using:
                    </>
                  ) : project.id === "astronomy-shop" ? (
                    <>
                      Developing a demo DevOps fullstack project implementing <span className="font-semibold">OpenTelemetry</span> in a near real-world, <span className="font-semibold">microservice-based</span> distributed system using multiple languages:
                    </>
                  ) : project.id === "helm-vulnerability-scanner" ? (
                    <>
                      Developed a <span className="font-semibold">Bash-based</span> automation tool to enhance <span className="font-semibold">container security</span> in Kubernetes deployments:
                    </>
                  ) : project.id === "argocd-pipeline" ? (
                    <>
                      Designed a <span className="font-semibold">continuous deployment</span> pipeline using <span className="font-semibold">GitOps principles</span> for modern application delivery:
                    </>
                  ) : project.id === "ephemeral-db-branching" ? (
                    <>
                      A Node.js Todo application with PostgreSQL that utilizes automated ephemeral database branching via <a href='https://neon.tech/'>Neon</a> and GitHub Actions. This setup allows for isolated database testing in pull requests before merging schema changes into production.
                      Implemented a comprehensive <span className="font-semibold">observability solution</span> using <span className="font-semibold">cloud-native monitoring</span> tools for distributed systems:
                    </>
                  ) : (
                    project.overview
                  )}
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                  {project.bulletPoints.map((point, index) => (
                    <li key={index}>
                      <span className="font-semibold">{point.label}</span>: {point.description}
                    </li>
                  ))}
                </ul>
              </div>
              
              {project.structure && (
                <div className="mb-6">
                  <h4 className="text-xl font-medium mb-2">Repository Structure</h4>
                  <div className="bg-gray-100 p-3 rounded-md">
                    <pre className="text-sm text-gray-800 font-mono">
                      {project.structure}
                    </pre>
                  </div>
                </div>
              )}
              
              {project.codeSnippet && (
                <div className="mb-6">
                  <h4 className="text-xl font-medium mb-2">
                    {project.id === "helm-vulnerability-scanner" ? "Implementation Details" : 
                     project.id === "argocd-pipeline" ? "Pipeline Architecture" : 
                     project.id === "observability-platform" ? "SLO Implementation" : 
                     "Code Details"}
                  </h4>
                  <div className="bg-gray-100 p-3 rounded-md">
                    <pre className="text-sm text-gray-800 font-mono">
                      {project.codeSnippet}
                    </pre>
                  </div>
                </div>
              )}
              
              <div className="mb-6">
                <h4 className="text-xl font-medium mb-2">
                  {project.goals ? "Project Goals" : "Key Achievements"}
                </h4>
                <ul className="space-y-1 text-gray-700">
                  {project.goals && project.goals.map((goal, index) => (
                    <li key={index}>✅ {goal}</li>
                  ))}
                  {project.achievements && project.achievements.map((achievement, index) => (
                    <li key={index}>✅ {achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="text-xl font-medium mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <a href={project.link} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">
                {project.link.includes("github") ? "View Project on GitHub" : "View Project Details"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;