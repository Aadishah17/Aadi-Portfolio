export const myProjects = [
  {
    id: "cudadl",
    title: "CUDADL",
    description:
      "A deep-learning framework in modern C++17 and CUDA, built around custom GPU memory management and kernels.",
    subDescription: [
      "Built a stream-ordered memory pool with cudaMallocAsync and RAII-managed buffers, cutting allocation latency by up to 253× versus raw cudaMalloc/cudaFree.",
      "Wrote a mixed-precision Tensor Core GEMM kernel that reached up to 97% of cuBLAS throughput and a 4.9× speedup over a naive CUDA implementation.",
      "Added FP32, FP16, and BF16 tensor support with fused Bias+ReLU/GELU kernels, reaching up to 1.6× speedup.",
    ],
    github: "https://github.com/Aadishah17/cuda",
    live: "",
    image: "assets/projects/cudadl.svg",
    layout: "landscape",
    tags: [
      { id: 1, name: "Modern C++17", path: "assets/logos/cplusplus.svg" },
      { id: 2, name: "CUDA 13.x", path: "" },
      { id: 3, name: "cuBLAS", path: "" },
      { id: 4, name: "CMake", path: "" },
    ],
  },
  {
    id: "cloudprint",
    title: "CloudPrint",
    description:
      "A distributed print-management platform with a .NET 10 REST API, PostgreSQL persistence, and an Azure Service Bus overlay.",
    subDescription: [
      "Kept durable database polling as a recovery path when messages fail to publish or arrive more than once.",
      "Implemented lease-based job claims, X-Idempotency-Key handling, and exponential-backoff retries for redelivery and worker failover.",
      "Built a live dashboard for the print pipeline, fleet KPIs, and configurable failure-injection runs.",
    ],
    github: "https://github.com/Aadishah17/CloudPrint",
    live: "",
    image: "assets/projects/cloudprint.svg",
    layout: "landscape",
    tags: [
      { id: 1, name: "C# / .NET 10", path: "assets/logos/dotnetcore.svg" },
      { id: 2, name: "PostgreSQL", path: "" },
      { id: 3, name: "Azure Service Bus", path: "assets/logos/azure.svg" },
      { id: 4, name: "Docker", path: "" },
    ],
  },
  {
    id: "collablearn",
    title: "CollabLearn",
    description:
      "A full-stack skill-learning platform with AI-powered course recommendations through the Gemini API.",
    subDescription: [
      "Built a MERN application with Google OAuth 2.0 sign-in and Redux-based state management.",
      "Reduced API response latency by 30% with targeted MongoDB indexes.",
      "The production site is deployed on Vercel.",
    ],
    github: "https://github.com/Aadishah17/CollabLearn",
    live: "https://collab-learn-xi.vercel.app",
    image: "assets/projects/collablearn-landing.png",
    layout: "landscape",
    tags: [
      { id: 1, name: "React", path: "assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "" },
      { id: 3, name: "MongoDB", path: "" },
      { id: 4, name: "Gemini API", path: "" },
      { id: 5, name: "Redux", path: "" },
    ],
  },
  {
    id: "goldenhour",
    title: "GoldenHour",
    description:
      "An Android prototype for helping bystanders share an accident location, perform quick triage, and contact emergency services.",
    subDescription: [
      "Added location sharing, victim triage, and one-tap 108/112 calls to the response flow.",
      "Used MVVM, Hilt, and Coroutines/Flow across the Android app.",
      "Built a simulated hospital dashboard that displays ambulance telemetry.",
    ],
    github: "https://github.com/Aadishah17/golden-hour",
    live: "",
    image: "assets/projects/goldenhour_mockup.png",
    layout: "portrait",
    tags: [
      { id: 1, name: "Kotlin", path: "" },
      { id: 2, name: "Jetpack Compose", path: "" },
      { id: 3, name: "Hilt", path: "" },
      { id: 4, name: "MVVM", path: "" },
    ],
  },
  {
    id: "kompass",
    title: "Kompass",
    description:
      "A SwiftUI navigation app designed to keep working without a network connection.",
    subDescription: [
      "Tracks location with on-device GPS and makes no network calls for its core navigation flow.",
      "Replaced MapKit's server-based directions with a local Haversine routing engine.",
      "Calculates routes, estimated arrival times, and turn-by-turn steps on device.",
    ],
    github: "https://github.com/Aadishah17/kompass",
    live: "",
    image: "assets/projects/kompass.svg",
    layout: "portrait",
    tags: [
      { id: 1, name: "Swift", path: "" },
      { id: 2, name: "SwiftUI", path: "" },
      { id: 3, name: "MapKit", path: "" },
      { id: 4, name: "CoreLocation", path: "" },
    ],
  },
];

export const mySocials = [
  { name: "GitHub", href: "https://github.com/Aadishah17" },
  { name: "LinkedIn", href: "https://linkedin.com/in/aadi-shah-6535672a6" },
  { name: "LeetCode", href: "https://leetcode.com/u/Aadi__17" },
  { name: "Email", href: "mailto:shahaadi285@gmail.com" },
];

export const experiences = [
  {
    title: "Software Engineering Intern",
    job: "ZM Lifestyle · Hybrid, Mumbai",
    date: "May–June 2025",
    contents: [
      "Shipped React.js features for the core product dashboard as part of a five-engineer Agile team.",
      "Resolved more than 10 defects in the legacy codebase, improving application stability by 15% and reducing incoming error reports.",
      "Worked with the team through daily stand-ups and peer code reviews.",
    ],
  },
  {
    title: "B.Tech, Computer Science & Engineering",
    job: "Parul University · Vadodara, Gujarat",
    date: "2023–May 2027",
    contents: [
      "Bachelor of Technology in Computer Science & Engineering; expected graduation May 2027.",
    ],
  },
];
