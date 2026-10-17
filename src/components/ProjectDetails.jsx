import { useEffect } from "react";
import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  layout,
  tags,
  github,
  live,
  closeModal,
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-y-auto bg-black/70 backdrop-blur-md p-4"
      onClick={closeModal}
    >
      <motion.div
        className="relative max-w-3xl w-full border shadow-2xl rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 overflow-hidden my-auto"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          aria-label="Close modal"
          className="absolute p-2 rounded-lg top-4 right-4 bg-midnight/90 hover:bg-neutral-700/80 transition-colors z-10 cursor-pointer border border-white/10"
        >
          <img src="assets/close.svg" className="w-5 h-5" alt="close" />
        </button>

        {layout === "portrait" ? (
          <div className="grid grid-cols-1 md:grid-cols-12 p-6 gap-6 items-center">
            {/* Left side: Phone screenshot frame */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative rounded-3xl border border-white/10 bg-midnight/80 p-2 shadow-2xl w-44 sm:w-52 md:w-56">
                <img
                  src={image}
                  alt={title}
                  className="rounded-2xl w-full h-auto object-contain border border-white/5"
                />
              </div>
            </div>
            {/* Right side: details */}
            <div className="md:col-span-7 flex flex-col justify-between h-full">
              <div>
                <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
                <p className="mb-4 font-normal text-neutral-400 text-sm leading-relaxed">{description}</p>
                <div className="max-h-60 overflow-y-auto mb-4 pr-2">
                  {subDescription.map((subDesc, index) => (
                    <p className="mb-2 text-sm font-normal text-neutral-400 leading-relaxed" key={index}>
                      • {subDesc}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 mt-4 pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-2 items-center">
                  {tags.map((tag) => (
                    tag.path ? (
                      <img
                        key={tag.id}
                        src={tag.path}
                        alt={tag.name}
                        title={tag.name}
                        className="rounded-lg size-9 hover-animation"
                      />
                    ) : (
                      <span
                        key={tag.id}
                        className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-midnight border border-white/10 text-neutral-300"
                      >
                        {tag.name}
                      </span>
                    )
                  ))}
                </div>
                <div className="flex gap-4">
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium cursor-pointer hover-animation text-sm text-neutral-300 hover:text-white"
                    >
                      GitHub
                      <img src="assets/arrow-up.svg" className="size-3.5" alt="arrow" />
                    </a>
                  )}
                  {live && (
                    <a
                      href={live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium cursor-pointer hover-animation text-sm text-sand hover:text-white"
                    >
                      Download
                      <img src="assets/arrow-up.svg" className="size-3.5" alt="arrow" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Landscape layout */
          <>
            <img src={image} alt={title} className="w-full rounded-t-2xl max-h-72 object-cover border-b border-white/5" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
              <p className="mb-3 font-normal text-neutral-400">{description}</p>
              <div className="max-h-40 overflow-y-auto mb-4 pr-2">
                {subDescription.map((subDesc, index) => (
                  <p className="mb-2 text-sm font-normal text-neutral-400 leading-relaxed" key={index}>
                    • {subDesc}
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 mt-4 pt-2">
                <div className="flex flex-wrap gap-2 items-center">
                  {tags.map((tag) => (
                    tag.path ? (
                      <img
                        key={tag.id}
                        src={tag.path}
                        alt={tag.name}
                        title={tag.name}
                        className="rounded-lg size-9 hover-animation"
                      />
                    ) : (
                      <span
                        key={tag.id}
                        className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-midnight border border-white/10 text-neutral-300"
                      >
                        {tag.name}
                      </span>
                    )
                  ))}
                </div>
                <div className="flex gap-4">
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium cursor-pointer hover-animation text-sm text-neutral-300 hover:text-white"
                    >
                      GitHub
                      <img src="assets/arrow-up.svg" className="size-3.5" alt="arrow" />
                    </a>
                  )}
                  {live && (
                    <a
                      href={live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium cursor-pointer hover-animation text-sm text-sand hover:text-white"
                    >
                      Live Demo
                      <img src="assets/arrow-up.svg" className="size-3.5" alt="arrow" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
