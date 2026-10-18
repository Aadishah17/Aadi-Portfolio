import { useState } from "react";
import { Particles } from "../components/Particles";

const email = "shahaadi285@gmail.com";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (event) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nReply to: ${formData.email}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative flex items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={80}
        ease={80}
        color="#ffffff"
        refresh
      />
      <div className="mx-auto flex w-full max-w-lg flex-col items-center justify-center rounded-2xl border border-white/10 bg-primary p-6 sm:p-8">
        <div className="mb-8 flex w-full flex-col items-start gap-3">
          <h2 className="text-heading">Get in touch</h2>
          <p className="text-sm leading-relaxed text-neutral-400">
            If you want to talk about a project, CUDA, or building software that has to work offline, send me a note.
          </p>
          <div className="w-full border-t border-white/10 pt-3 text-sm text-neutral-400">
            <a className="transition-colors hover:text-white" href={`mailto:${email}`}>
              {email}
            </a>
            <span className="mx-2 text-neutral-600" aria-hidden="true">·</span>
            <a className="transition-colors hover:text-white" href="tel:+919819427909">
              +91 9819427909
            </a>
          </div>
        </div>

        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Your name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="you@example.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="field-input field-input-focus"
              placeholder="What would you like to discuss?"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer rounded-md bg-radial from-lavender to-royal px-1 py-3 text-center text-lg hover-animation"
          >
            Open email draft
          </button>
          <p className="mt-3 text-center text-xs text-neutral-500">
            Your mail app opens with the message ready to send.
          </p>
        </form>
      </div>
    </section>
  );
}
