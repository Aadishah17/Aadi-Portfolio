import { lazy, Suspense } from "react";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground";
import { useMediaQuery } from "react-responsive";

const HeroScene = lazy(() => import("../components/HeroScene"));

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section id="home" className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Suspense
          fallback={
            <div
              className="flex h-full w-full items-center justify-center text-sm text-neutral-400"
              role="status"
            >
              Loading 3D scene…
            </div>
          }
        >
          <HeroScene isMobile={isMobile} />
        </Suspense>
      </figure>
    </section>
  );
};

export default Hero;
