import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef(null);
  const email = "shahaadi285@gmail.com";

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  const copyToClipboard = async () => {
    let success = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
        success = true;
      }
    } catch {
      success = false;
    }

    if (!success) success = fallbackCopy(email);

    clearTimeout(resetTimer.current);
    setCopied(success);
    if (success) {
      resetTimer.current = setTimeout(() => setCopied(false), 2000);
    }
  };

  const fallbackCopy = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    try {
      document.body.appendChild(textArea);
      textArea.select();
      return document.execCommand("copy");
    } catch {
      return false;
    } finally {
      textArea.remove();
    }
  };
  return (
    <motion.button
      onClick={copyToClipboard}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="copied"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <img src="assets/copy-done.svg" className="w-5" alt="copy Icon" />
            Email Copied!
          </motion.p>
        ) : (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="copy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <img src="assets/copy.svg" className="w-5" alt="copy icon" />
            Copy Email Address
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;
