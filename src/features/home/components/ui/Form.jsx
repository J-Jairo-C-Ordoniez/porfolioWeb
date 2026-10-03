"use client";

import { useState } from "react";
import { useForm } from "@formspree/react";
import { AIcon } from "../atoms/Icon";
import { ARed } from "../atoms/Red";
import { AText } from "../atoms/Text";

export default function ContactSection() {
  const [state, handleSubmit] = useForm("mrbywadq");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <article className="w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-3">
            <label className="font-sans font-caps text-[10px] tracking-widest text-accent">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Juan Manuel"
              className="w-full border-b border-white/10 bg-transparent py-3 text-text-main transition-colors focus:border-accent focus:outline-none"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-sans font-caps text-[10px] tracking-widest text-accent">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Cardenas"
              className="w-full border-b border-white/10 bg-transparent py-3 text-text-main transition-colors focus:border-accent focus:outline-none"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label className="font-sans font-caps text-[10px] tracking-widest text-accent">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="ejemplo21@gmail.com"
            className="w-full border-b border-white/10 bg-transparent py-3 text-text-main transition-colors focus:border-accent focus:outline-none"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col gap-3">
          <label className="font-sans font-caps text-[10px] tracking-widest text-accent">Your Message</label>
          <textarea
            name="message"
            placeholder="Escribe tu Mensaje..."
            rows="5"
            className="w-full border-b border-white/10 bg-transparent py-3 text-text-main transition-colors focus:border-accent focus:outline-none"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="mt-6 flex flex-col items-center gap-8">
          <button
            type="submit"
            disabled={state.submitting}
            className="group relative w-full overflow-hidden border border-accent bg-transparent px-10 py-5 transition-all duration-500 hover:bg-accent active:scale-95"
          >
            <span className="relative z-10 font-sans font-caps text-xs font-bold tracking-[0.3em] text-accent group-hover:text-background transition-colors">
              {state.submitting ? "Sending..." : "Send Inquiry"}
            </span>
          </button>

          {state.succeeded && (
            <AText data="Message sent successfully." color="text-accent" className="font-caps text-[10px] tracking-widest" />
          )}
          {state.errors && (
            <AText data="Something went wrong. Please try again." color="text-red-500" className="font-caps text-[10px] tracking-widest" />
          )}
        </div>
      </form>

      <div className="mt-20 flex flex-col items-center gap-6 opacity-40">
        <AText data="Or reach out directly via email" fontSize="text-[10px]" className="font-caps tracking-[0.2em]" />
        <ARed href="mailto:cordobaojhonjairo21@gmail.com" className="!p-3 border-none ring-0 bg-transparent">
          <AIcon data="Send" size={16} />
        </ARed>
      </div>
    </article>
  );
}