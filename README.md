# Aadi Shah — Portfolio

An animated 3D portfolio for my work across CUDA, mobile apps, backend systems, and web projects.

**Live site:** [aadishah17.github.io/Aadi-Portfolio](https://aadishah17.github.io/Aadi-Portfolio/)

The visual direction and 3D portfolio structure are adapted from [Ali-Sanati/Portfolio](https://github.com/Ali-Sanati/Portfolio). The profile, project details, resume, links, and metrics here are specific to my work.

## Projects featured

- **CUDADL** — C++17/CUDA deep-learning framework with a stream-ordered memory pool and Tensor Core GEMM.
- **CloudPrint** — .NET 10 print-management platform with PostgreSQL, Azure Service Bus, and worker recovery.
- **CollabLearn** — MERN skill-learning platform with Gemini API recommendations.
- **GoldenHour** — Android emergency-response prototype with location sharing and triage.
- **Kompass** — SwiftUI navigation app with offline routing.

## Stack

React, Vite, Tailwind CSS, React Three Fiber, Drei, Three.js, Motion, and Cobe.

## Run locally

```bash
npm ci
npm run dev
```

Check the production build and lint with:

```bash
npm run build
npm run lint
```

GitHub Actions deploys `main` to GitHub Pages. The Vite base path is `/Aadi-Portfolio/` so project assets resolve under the existing live URL.
