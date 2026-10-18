const groups = [
  {
    name: "Languages",
    skills: "C++, C#, Kotlin, Java, JavaScript, TypeScript, Python, SQL, Swift",
  },
  {
    name: "GPU & AI",
    skills: "CUDA, cuBLAS, Gemini API",
  },
  {
    name: "Frameworks & Libraries",
    skills: "React.js, Node.js, Express.js, ASP.NET Core, .NET 10, Jetpack Compose, Next.js",
  },
  {
    name: "Databases",
    skills: "MongoDB, MySQL, PostgreSQL, Redis, Firebase",
  },
  {
    name: "Developer Tools",
    skills: "Git, CMake, Android Studio, Docker, GitHub Actions, Postman, Azure",
  },
];

export function TechStack() {
  return (
    <dl aria-label="Technology stack" className="grid min-w-0 grid-cols-2 gap-x-3 gap-y-2">
      {groups.map(({ name, skills }) => (
        <div key={name} className="min-w-0">
          <dt className="mb-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-indigo-200">
            {name}
          </dt>
          <dd className="text-[11px] leading-snug text-neutral-200">{skills}</dd>
        </div>
      ))}
    </dl>
  );
}
