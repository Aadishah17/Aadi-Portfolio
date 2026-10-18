import { OrbitingCircles } from "./OrbitingCircles";

const skills = [
  "cplusplus",
  "csharp",
  "dotnetcore",
  "react",
  "azure",
  "git",
  "github",
  "javascript",
];

export function Frameworks() {
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center max-sm:scale-[0.8] md:-translate-y-6 md:scale-[0.5]">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill) => (
          <Icon key={skill} skill={skill} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {[...skills].reverse().map((skill) => (
          <Icon key={skill} skill={skill} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ skill }) => (
  <img
    src={`assets/logos/${skill}.svg`}
    alt=""
    className="size-full rounded-sm object-contain duration-200 hover:scale-110"
  />
);
