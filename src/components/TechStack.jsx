const groups = [
  {
    name: "Languages",
    skills: "C++, C#, Kotlin, Java, JavaScript, TypeScript, Python, SQL, Swift",
  },
  {
    name: "Frameworks",
    skills: "React, Next.js, Node.js, Express.js, ASP.NET Core, Jetpack Compose, SwiftUI",
  },
  {
    name: "Databases",
    skills: "MongoDB, MySQL, PostgreSQL, Redis, Firebase",
  },
  {
    name: "GPU & AI",
    skills: "CUDA, cuBLAS, Gemini API",
  },
  {
    name: "Tools",
    skills: "Git, CMake, Android Studio, Docker, GitHub Actions, Postman, Azure",
  },
];

export function TechStack() {
  return (
    <dl aria-label="Technology stack" className="grid min-w-0 gap-y-2">
      {groups.map(({ name, skills }) => (
        <div key={name} className="min-w-0 text-xs leading-relaxed text-neutral-300">
          <dt className="inline font-semibold text-white">{name}: </dt>
          <dd className="inline">{skills}</dd>
        </div>
      ))}
    </dl>
  );
}
