export const profile = {
  name: {
    en: 'Jingyao Qi',
    zh: '齐旌尧',
  },
  email: {
    en: 'andyqi315@gmail.com',
    zh: '2214109912@qq.com',
  },
  location: 'London, Ontario',
  roles: {
    en: ['Full-Stack Developer', 'Agentic Workflows Builder', 'Backend Developer'],
    zh: ['全栈开发工程师', 'Agentic Workflows 开发者', '后端开发工程师'],
  },
  summary: {
    en: 'Computer Science graduate and Software Engineering MEng student at Western University, building practical systems across cloud infrastructure, AI workflows, LLMOps & AI Governance, and full-stack applications.',
    zh: 'Western University 计算机科学本科毕业、软件工程方向 ECE 工程硕士在读，专注于云基础设施、AI-agent 工作流、LLMOps & AI Governance 和全栈应用的工程实践。',
  },
  education: [
    {
      school: 'Western University',
      degree: 'MEng Electrical and Computer Engineering in Software Engineering',
      period: 'Sept. 2025 — Dec. 2026 (Expected)',
      location: 'London, ON',
      degreeZh: '电子与计算机工程硕士，软件工程方向',
    },
    {
      school: 'Western University',
      degree: 'Bachelor of Science in Computer Science',
      period: 'Sept. 2021 — May 2025',
      location: 'London, ON',
      degreeZh: '计算机科学理学学士',
    },
  ],
  coursework: {
    computerScience: ['Data Analysis', 'Machine Learning', 'Deep Learning', 'Discrete Mathematics', 'Data Structures', 'Operating Systems', 'Distributed Systems', 'Computer System Architecture'],
    softwareEngineering: ['Object-Oriented Programming', 'Database Systems', 'Web Development', 'Cybersecurity'],
  },
  skills: {
    aiData: ['LangGraph', 'RAG', 'Qdrant', 'LlamaIndex', 'LangChain', 'Pandas'],
    languages: ['Java', 'Python', 'C/C++', 'SQLite', 'PostgreSQL', 'JavaScript', 'HTML/CSS', 'R'],
    frameworks: ['React', 'Node.js', 'Flask', 'Spring Boot', 'Socket.IO', 'Qt'],
    cloudDevOps: ['AWS', 'Google Cloud', 'IBM Cloud', 'Docker', 'Kubernetes', 'Azure DevOps', 'Grafana'],
  },
} as const;
