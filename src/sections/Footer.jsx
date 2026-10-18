import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {mySocials.map((social) => (
          <a
            href={social.href}
            key={social.name}
            target={social.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className="transition-colors hover:text-white"
          >
            {social.name}
          </a>
        ))}
      </div>
      <p>© {new Date().getFullYear()} Aadi Shah</p>
    </section>
  );
};

export default Footer;
