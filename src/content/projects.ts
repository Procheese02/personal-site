export type Project = {
  name: string;
  period: string;
  category: string;
  categoryZh: string;
  summary: string;
  summaryZh: string;
  highlights: string[];
  highlightsZh: string[];
  tech: string[];
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    name: 'CloudOptix',
    period: '2026',
    category: 'AI FinOps / Cloud Automation',
    categoryZh: 'AI FinOps / 云自动化',
    summary: 'AI-powered FinOps agent that analyzes AWS EC2 billing and utilization data, retrieves pricing policies through RAG, and generates human-approved cost optimization plans.',
    summaryZh: 'AI 驱动的 FinOps Agent，用于分析 AWS EC2 账单和利用率数据，通过 RAG 检索定价策略，并生成需要人工确认的成本优化方案。',
    highlights: [
      'Built a LangGraph multi-agent workflow for inspection, pricing research, and optimization recommendations.',
      'Integrated Qdrant-backed RAG over structured AWS pricing and downgrade policy data.',
      'Added safe AWS paths for Cost Explorer import, CloudWatch enrichment, dry-run planning, and human-approved execution. (In progress)',
    ],
    highlightsZh: [
      '使用 LangGraph 构建多 Agent 工作流，覆盖资源检查、定价研究和优化建议生成。',
      '基于 Qdrant 构建 RAG 检索，管理结构化 AWS 定价和降配策略数据。',
      '实现 Cost Explorer 导入、CloudWatch 增强、dry-run 计划和人工审批执行等安全 AWS 流程。（阶段进行中）',
    ],
    tech: ['Python', 'LangGraph', 'RAG', 'Qdrant', 'boto3', 'AWS Cost Explorer', 'CloudWatch'],
    githubUrl: 'https://github.com/Procheese02/CloudOptix.git',
    featured: true,
  },
  {
    name: 'Stock Microservices',
    period: 'Sept. 2024 — Dec. 2024',
    category: 'Distributed Systems / Cloud',
    categoryZh: '分布式系统 / 云服务',
    summary: 'Microservice system for retrieving and processing stock market data from external APIs with independent deployment and cloud observability.',
    summaryZh: '用于从外部 API 获取并处理股票市场数据的微服务系统，支持独立部署和云端可观测性。',
    highlights: [
      'Deployed six independent services to reduce coupling and support independent release cycles.',
      'Used Docker, Kubernetes, and IBM Container Registry with vulnerability scanning for safer deployments.',
      'Configured IBM Cloud Load Balancer and Grafana monitoring to improve reliability and issue resolution.',
    ],
    highlightsZh: [
      '部署 6 个独立服务，降低系统耦合并支持独立发布周期。',
      '使用 Docker、Kubernetes 和 IBM Container Registry，并结合漏洞扫描提升部署安全性。',
      '配置 IBM Cloud Load Balancer 和 Grafana 监控，提高服务可靠性和故障定位效率。',
    ],
    tech: ['Docker', 'Kubernetes', 'IBM Cloud', 'APIs', 'Grafana'],
  },
  {
    name: 'Hangman Game',
    period: 'Jan. 2025 — May 2025',
    category: 'Real-Time Web Application',
    categoryZh: '实时 Web 应用',
    summary: 'Multiplayer Hangman game with Socket.IO WebSocket updates for low-latency shared game state.',
    summaryZh: '基于 Socket.IO WebSocket 的多人 Hangman 游戏，实现低延迟共享游戏状态更新。',
    highlights: [
      'Implemented WebSocket game-state updates with sub-100ms latency.',
      'Built robust connection handling for concurrent multiplayer sessions.',
      'Reduced network overhead compared with traditional REST polling patterns.',
    ],
    highlightsZh: [
      '实现亚 100ms 延迟的 WebSocket 游戏状态更新。',
      '构建支持并发多人会话的连接管理机制。',
      '相比传统 REST 轮询降低网络开销。',
    ],
    tech: ['Socket.IO', 'WebSocket', 'JavaScript', 'Node.js'],
  },
  {
    name: 'Cash Canvas',
    period: 'Sept. 2023 — Dec. 2023',
    category: 'Financial Desktop Application',
    categoryZh: '金融桌面应用',
    summary: 'Qt/C++ financial application focused on efficient local data handling, SQLite query optimization, and live market data integration.',
    summaryZh: '基于 Qt/C++ 的金融应用，重点优化本地数据处理、SQLite 查询性能和实时市场数据接入。',
    highlights: [
      'Optimized SQLite queries and indexing for faster retrieval on larger financial datasets.',
      'Reduced memory footprint with optimized data structures and smart pointer usage.',
      'Integrated REST API data streams for live market data.',
    ],
    highlightsZh: [
      '优化 SQLite 查询和索引，提高大规模金融数据检索速度。',
      '通过优化数据结构和智能指针降低内存占用。',
      '集成 REST API 数据流获取实时市场数据。',
    ],
    tech: ['C++', 'Qt', 'SQLite', 'REST API'],
  },
];
