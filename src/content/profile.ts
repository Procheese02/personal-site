export const profile = {
  name: {
    en: 'Jingyao Qi',
    zh: '齐旌尧',
  },
  email: {
    en: 'andyqi315@gmail.com',
    zh: '2214109912@qq.com',
  },
  phone: '548-888-2315',
  location: 'London, Ontario',
  roles: ['Software Engineering MEng Student', 'Cloud & AI Infrastructure Builder', 'Full-Stack Developer'],
  summary: {
    en: 'Computer Science graduate and Software Engineering MEng student at Western University, building practical systems across cloud infrastructure, AI workflows, distributed services, and full-stack applications.',
    zh: 'Western University 计算机科学本科毕业、软件工程方向 ECE 工程硕士在读，专注于云基础设施、AI 工作流、分布式服务和全栈应用的工程实践。',
  },
  education: [
    {
      school: 'Western University',
      degree: 'MEng Electrical and Computer Engineering in Software Engineering',
      period: 'Sept. 2025 — Sept. 2026 (Expected)',
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
    computerScience: ['Data Analysis', 'Discrete Mathematics', 'Data Structures', 'Operating Systems', 'Distributed Systems', 'Computer System Architecture'],
    softwareEngineering: ['Object-Oriented Programming', 'Database Systems', 'Web Development', 'Cybersecurity'],
  },
  skills: {
    languages: ['Java', 'Python', 'C/C++', 'SQLite', 'PostgreSQL', 'JavaScript', 'HTML/CSS', 'R'],
    frameworks: ['React', 'Node.js', 'Flask', 'Spring Boot', 'Socket.IO', 'Qt'],
    cloudDevOps: ['AWS', 'Google Cloud', 'IBM Cloud', 'Docker', 'Kubernetes', 'Azure DevOps', 'Grafana'],
    aiData: ['LangGraph', 'RAG', 'Qdrant', 'LlamaIndex', 'LangChain', 'Pandas'],
  },
} as const;
