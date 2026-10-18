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

export function TechStack() {
  return (
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
  );
}
