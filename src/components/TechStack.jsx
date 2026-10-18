import { OrbitingCircles } from "./OrbitingCircles";

const groups = [
  {
    name: "Languages",
    skills: [
      "C++", "C#", "Kotlin", "Java", "JavaScript", "TypeScript", "Python", "SQL", "Swift",
    ],
  },
  {
    name: "GPU & Systems",
    skills: ["CUDA", "cuBLAS", "Tensor Core GEMM"],
  },
  {
    name: "Web & Backend",
    skills: ["React", "Next.js", "Node.js", "Express.js", "ASP.NET Core", ".NET 10"],
  },
  {
    name: "Mobile",
    skills: ["Jetpack Compose", "Hilt", "SwiftUI"],
  },
  {
    name: "Data",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Firebase"],
  },
  {
    name: "Tools & Integrations",
    skills: [
      "CMake", "Azure", "Docker", "GitHub Actions", "Postman", "Gemini API", "REST APIs",
    ],
  },
];

const orbitLogos = [
  "cplusplus.svg",
  "csharp.svg",
  "javascript.svg",
  "react.svg",
  "dotnetcore.svg",
  "azure.svg",
  "github.svg",
];

export function TechStack() {
  return (
    <div className="grid min-w-0 flex-1 grid-cols-1 items-center gap-2 md:grid-cols-[minmax(0,1fr)_8rem]">
      <dl aria-label="Technology stack" className="grid min-w-0 grid-cols-2 gap-x-3 gap-y-1 md:grid-cols-3 md:gap-x-4">
        {groups.map(({ name, skills }) => (
          <div key={name} className="min-w-0">
            <dt className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-indigo-200">
              {name}
            </dt>
            <dd className="flex flex-wrap gap-x-1.5 gap-y-0.5 text-[11px] leading-tight text-neutral-200">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
      <div aria-hidden="true" className="relative mx-auto flex h-24 w-full items-center justify-center md:h-32 md:w-32">
        <OrbitingCircles iconSize={20} radius={34}>
          {orbitLogos.slice(0, 4).map((logo) => (
            <img key={logo} src={`assets/logos/${logo}`} alt="" className="size-full object-contain" />
          ))}
        </OrbitingCircles>
        <OrbitingCircles iconSize={14} radius={22} reverse speed={1.5}>
          {orbitLogos.slice(4).map((logo) => (
            <img key={logo} src={`assets/logos/${logo}`} alt="" className="size-full object-contain" />
          ))}
        </OrbitingCircles>
      </div>
    </div>
  );
}
