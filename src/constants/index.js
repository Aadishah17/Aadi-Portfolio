export const myProjects = [
  {
    id: 1,
    title: "CUDADL",
    description:
      "High-performance GPU deep learning primitives and memory management engine with custom Tensor Core GEMM kernels and stream-ordered memory pools.",
    subDescription: [
      "Built a stream-ordered GPU memory pool (cudaMallocAsync, RAII-managed buffers) that cut allocation latency up to 253x versus raw cudaMalloc/cudaFree, benchmarked across 1MB-64MB buffer sizes.",
      "Hand-wrote a Tensor Core GEMM kernel (nvcuda::wmma, FP16/BF16 mixed precision) reaching up to 97% of cuBLAS throughput and a 4.9x speedup over a naive CUDA implementation.",
      "Built a mixed-precision tensor framework (FP32/FP16/BF16 with automatic type promotion) and fused bias+activation CUDA kernels (Bias+ReLU, Bias+GELU), cutting global memory passes by 50% for up to a 1.6x speedup.",
      "Engineered multi-stream asynchronous execution with DMA overlap, CUDA Graph-captured workload execution, and an occupancy-driven auto-launch configurator (CUDA Occupancy API) targeting 100% theoretical SM occupancy.",
    ],
    github: "https://github.com/Aadishah17/CUDADL",
    live: "",
    logo: "",
    image: "assets/projects/game-engine.jpg",
    layout: "landscape",
    tags: [
      {
        id: 1,
        name: "Modern C++17",
        path: "assets/logos/cplusplus.svg",
      },
      {
        id: 2,
        name: "CUDA 13.x",
        path: "",
      },
      {
        id: 3,
        name: "cuBLAS",
        path: "",
      },
      {
        id: 4,
        name: "CMake",
        path: "",
      },
      {
        id: 5,
        name: "GPU Systems",
        path: "",
      },
    ],
  },
  {
    id: 2,
    title: "CloudPrint",
    description:
      "Distributed enterprise print-management platform in .NET 10 with Azure Service Bus messaging, exactly-once processing, and a real-time chaos-testing lab.",
    subDescription: [
      "Architected a distributed print-management platform in .NET 10 with a REST API, PostgreSQL persistence, and an Azure Service Bus messaging overlay, using durable database polling as an automatic recovery path for failed or duplicate delivery.",
      "Engineered lease-based job claims, X-Idempotency-Key enforcement, and exponential-backoff retries to guarantee exactly-once printing under duplicate message redelivery or worker failover.",
      "Built a real-time web dashboard with a live pipeline visualizer, fleet KPIs, and a configurable chaos-testing lab (failure-rate injection, concurrent batch dispatch) to validate worker throughput and fault tolerance.",
    ],
    github: "https://github.com/Aadishah17/CloudPrint",
    live: "",
    logo: "",
    image: "assets/projects/blazor-app.jpg",
    layout: "landscape",
    tags: [
      {
        id: 1,
        name: "C# / .NET 10",
        path: "assets/logos/dotnetcore.svg",
      },
      {
        id: 2,
        name: "PostgreSQL",
        path: "",
      },
      {
        id: 3,
        name: "Azure Service Bus",
        path: "assets/logos/azure.svg",
      },
      {
        id: 4,
        name: "Docker",
        path: "",
      },
      {
        id: 5,
        name: "REST API",
        path: "",
      },
    ],
  },
  {
    id: 3,
    title: "CollabLearn",
    description:
      "Full-stack MERN skill-learning platform featuring AI-powered course recommendations via the Gemini API, deployed live on Vercel.",
    subDescription: [
      "Built a full-stack MERN skill-learning platform with AI-powered course recommendations via the Gemini API, deployed live on Vercel.",
      "Cut Gemini API response latency 30% by designing targeted MongoDB indexes, directly improving perceived app performance.",
      "Implemented Google OAuth2 authentication and Redux-based state management to support a production-style full-stack architecture.",
    ],
    github: "https://github.com/Aadishah17/CollabLearn",
    live: "https://collablearn.vercel.app",
    logo: "",
    image: "assets/projects/collablearn_mockup.png",
    layout: "landscape",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "",
      },
      {
        id: 4,
        name: "Gemini API",
        path: "",
      },
      {
        id: 5,
        name: "Redux",
        path: "",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/Aadishah17",
    icon: "assets/logos/github.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aadi-shah-6535672a6",
    icon: "assets/socials/linkedIn.svg",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919819427909",
    icon: "assets/socials/whatsApp.svg",
  },
];

export const experiences = [
  {
    title: "Software Engineering Intern",
    job: "ZM Lifestyle",
    date: "May 2025 – June 2025",
    location: "Hybrid, Mumbai",
    contents: [
      "Designed, implemented, and shipped React.js features for the core product dashboard within a five-engineer Agile team.",
      "Diagnosed and resolved 10+ defects in the legacy codebase, improving application stability by 15% and reducing incoming error reports.",
      "Collaborated cross-functionally through daily standups and peer code review as part of an established production engineering process.",
    ],
  },
  {
    title: "B.Tech in Computer Science & Engineering",
    job: "Parul University",
    date: "2023 – Expected May 2027",
    location: "Vadodara, Gujarat, India",
    contents: [
      "Pursuing Bachelor of Technology in Computer Science & Engineering with comprehensive coursework in Systems Programming, Distributed Computing, Database Management, and Algorithm Optimization.",
      "Max LeetCode contest rating ~1650 with 400+ problems solved across Arrays, Trees, Graphs, Dynamic Programming, and Greedy algorithms.",
      "Earned industry certifications including IBM AI Fundamentals and AWS Academy Cloud Foundations.",
    ],
  },
];
