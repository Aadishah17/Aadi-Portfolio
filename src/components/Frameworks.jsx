import { OrbitingCircles } from "./OrbitingCircles";

const outerLogos = [
  "cplusplus.svg",
  "csharp.svg",
  "javascript.svg",
  "react.svg",
  "python.svg",
  "kotlin.svg",
  "swift.svg",
];

const innerLogos = [
  "dotnet.svg",
  "azure.svg",
  "github.svg",
  "git.svg",
  "docker.svg",
  "postgresql.svg",
];

const Logo = ({ name }) => (
  <img
    src={`assets/logos/${name}`}
    alt=""
    className="size-full object-contain"
  />
);

export function Frameworks() {
  return (
    <div className="relative flex size-full items-center justify-center">
      <OrbitingCircles iconSize={30} radius={82}>
        {outerLogos.map((name) => (
          <Logo key={name} name={name} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={20} radius={50} reverse speed={1.5}>
        {innerLogos.map((name) => (
          <Logo key={name} name={name} />
        ))}
      </OrbitingCircles>
    </div>
  );
}
