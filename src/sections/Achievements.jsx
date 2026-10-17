import { motion } from "motion/react";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Achievements = () => {
  const certifications = [
    {
      title: "IBM AI Fundamentals",
      issuer: "IBM SkillsBuild",
      date: "Sep 2025",
    },
    {
      title: "AWS Academy – Cloud Foundations",
      issuer: "AWS Academy",
      date: "Sep 2025",
    },
  ];

  return (
    <section className="items-start mt-25 md:mt-35 c-space section-spacing" id="achievements">
      <h2 className="text-heading">Achievements & Certifications</h2>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mt-12">
        {/* LeetCode Achievement Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-between p-6 border rounded-2xl border-white/10 bg-gradient-to-br from-midnight to-navy hover:border-orange-500/30 hover-animation"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center rounded-xl size-12 bg-orange-500/10 text-orange-500">
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.77 9.77a.62.62 0 0 0-.001.881l8.13 8.131a.618.618 0 0 0 .88-.001l9.769-9.77a1.37 1.37 0 0 0 .413-.958V1.374A1.373 1.373 0 0 0 20.573 0zm5.717 6.174a1.374 1.374 0 1 1 0-2.748 1.374 1.374 0 0 1 0 2.748zM5.33 14.281l-1.903 1.902a2.66 2.66 0 1 0 3.762 3.761l1.902-1.903a.62.62 0 0 0-.001-.88l-2.88-2.88a.618.618 0 0 0-.88 0z" />
                </svg>
              </span>
              <div>
                <h3 className="text-xl font-bold text-white">LeetCode Profile</h3>
                <span className="text-xs text-orange-400 font-semibold">Max Contest Rating ~1650</span>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Solved <strong>400+ algorithmic problems</strong> across core computer science domains:
            </p>
            <ul className="mt-3 space-y-1.5 text-xs text-neutral-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                Arrays, Trees & Graphs
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                Dynamic Programming & Greedy
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <a
              href="https://leetcode.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-400 hover:text-white transition-colors"
            >
              View LeetCode Profile
              <img src="assets/arrow-up.svg" className="size-3.5" alt="arrow" />
            </a>
          </div>
        </motion.div>

        {/* Education & Academic Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-between p-6 border rounded-2xl border-white/10 bg-gradient-to-br from-midnight to-navy hover:border-royal/40 hover-animation"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center rounded-xl size-12 bg-lavender/10 text-lavender">
                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </span>
              <div>
                <h3 className="text-xl font-bold text-white">Education</h3>
                <span className="text-xs text-lavender font-semibold">Expected Graduation: May 2027</span>
              </div>
            </div>
            <p className="text-white font-medium text-sm">
              Parul University
            </p>
            <p className="text-neutral-400 text-xs mt-0.5">
              Vadodara, Gujarat, India
            </p>
            <p className="text-neutral-400 text-xs mt-3 leading-relaxed">
              Bachelor of Technology in Computer Science & Engineering with coursework in Data Structures, CUDA GPU Systems, Distributed Computing, and Database Systems.
            </p>
          </div>
          <div className="mt-6 text-xs text-neutral-500 font-medium">
            B.Tech CSE • 2023 - 2027
          </div>
        </motion.div>

        {/* Certifications Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-between p-6 border rounded-2xl border-white/10 bg-gradient-to-br from-midnight to-navy hover:border-royal hover-animation md:col-span-1"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center rounded-xl size-12 bg-royal/10 text-royal">
                <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </span>
              <h3 className="text-xl font-bold text-white">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="border-l-2 border-royal/30 pl-3">
                  <h4 className="text-sm font-bold text-neutral-300">{cert.title}</h4>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <a
              href="https://www.linkedin.com/in/aadi-shah-6535672a6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal hover:text-white transition-colors"
            >
              View on LinkedIn
              <img src="assets/arrow-up.svg" className="size-3.5" alt="arrow" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
