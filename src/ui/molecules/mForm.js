"use client";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

import AIcon from "../atoms/aIcon";
import ARed from "../atoms/aRed";
import AText from "../atoms/aText";

export default function ContactSection() {
  const [state, handleSubmit, reset] = useForm("mrbywadq");
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
    <article className="w-full space-y-10 px-10">
      <form
        onSubmit={handleSubmit}
        className="m-auto w-[100%] lg:w-[70%] xl:w-[50%] space-y-6 border-t-2 border-[#1A2534] pt-6"
      >
        <div>
          <label className="mb-3 block">Nombre (obligatorio)</label>

          <div className="flex gap-2">
            <input
              type="text"
              name="firstName"
              placeholder="Juan Manuel"
              className="w-1/2 border-b-2 border-[#1A2534] bg-transparent focus:border-[#999] focus:outline-none"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Cardenas"
              className="w-1/2 border-b-2 border-[#1A2534] bg-transparent focus:border-[#999] focus:outline-none"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="mb-3 block">Correo (obligatorio)</label>
          <input
            type="email"
            name="email"
            placeholder="ejemplo21@gmail.com"
            className="w-full border-b-2 border-[#1A2534] bg-transparent focus:border-[#999] focus:outline-none"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="mb-1 block">Mensaje (obligatorio)</label>
          <textarea
            name="message"
            placeholder="Escribe tu Mensaje..."
            rows="4"
            className="w-full resize-none border-b border-slate-600/20 ring-b-1 ring-slate-700/6  bg-transparent focus:border-white focus:outline-none"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="cursor-pointer rounded-full bg-white px-6 py-2 font-semibold text-black transition hover:bg-gray-200"
        >
          {state.submitting ? "ENVIANDO..." : "ENVIAR"}
        </button>

        {state.succeeded && (
          <AText data="¡Mensaje enviado exitosamente!" color="green" />
        )}
        {state.errors && (
          <AText data="Algo salió mal. Inténtalo de nuevo." color="red" />
        )}
      </form>

      <div className="mx-auto mt-10 flex w-fit items-center gap-8">
        <AText data="Contactame directamente al correo:" />

        <ARed href="mailto:cordobaojhonjairo21@gmail.com">
          <AIcon data="Send" />
        </ARed>
      </div>
    </article>
  );
}