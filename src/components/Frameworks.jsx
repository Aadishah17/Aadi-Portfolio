import { OrbitingCircles } from "./OrbitingCircles";

const outerLogos = [
  "cplusplus.svg",
  "csharp.svg",
  "javascript.svg",
  "react.svg",
  "python.svg",
  "kotlin.svg",
  "swift.svg",
  "java.svg",
];

const innerLogos = [
  "dotnet.svg",
  "azure.svg",
  "github.svg",
  "git.svg",
  "docker.svg",
  "postgresql.svg",
  "xcode.svg",
  "tailwindcss.svg",
  "visualstudiocode.svg",
  "amazonwebservices.svg",
  "cloudflare.svg",
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
      <OrbitingCircles iconSize={56} radius={160}>
        {outerLogos.map((name) => (
          <Logo key={name} name={name} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={44} radius={100} reverse speed={1.5}>
        {innerLogos.map((name) => (
          <Logo key={name} name={name} />
        ))}
      </OrbitingCircles>
    </div>
  );
}
