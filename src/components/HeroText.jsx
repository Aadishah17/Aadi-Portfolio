import { motion } from "motion/react";
import { FlipWords } from "./FlipWords";

const words = ["CUDA", "Android", "SwiftUI", ".NET"];
const variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0 },
};

const HeroText = () => (
  <div className="z-10 mt-24 rounded-3xl bg-clip-text text-center md:mt-40 md:text-left">
    <motion.h1
      className="text-4xl font-medium md:text-5xl"
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.6 }}
    >
      Hi, I'm Aadi Shah
    </motion.h1>
    <motion.p
      className="mt-5 text-2xl font-medium text-neutral-300 md:text-4xl"
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.8 }}
    >
      A CSE student building with
    </motion.p>
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 1 }}
    >
      <FlipWords
        words={words}
        className="font-black text-6xl text-white md:text-8xl"
      />
    </motion.div>
    <motion.p
      className="mt-2 text-2xl font-medium text-neutral-300 md:text-4xl"
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 1.2 }}
    >
      from GPU kernels to offline navigation.
    </motion.p>
    <motion.div
      className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start"
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 1.5 }}
    >
      <a
        href="#projects"
        className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-midnight hover-animation"
      >
        Explore projects
      </a>
      <a
        href={`${import.meta.env.BASE_URL}Aadi_Shah_Resume.pdf`}
        download="Aadi_Shah_Resume.pdf"
        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 hover-animation"
      >
        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Download resume
      </a>
    </motion.div>
  </div>
);

export default HeroText;
