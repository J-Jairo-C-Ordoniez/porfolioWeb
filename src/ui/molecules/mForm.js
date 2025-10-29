"use client";
import { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';

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
        <article className="px-10 w-full space-y-10">

            <form
                onSubmit={handleSubmit}
                className="w-[50%] space-y-6 border-t-2 border-[#181818] pt-6 m-auto"
            >
                <div>
                    <label className="block mb-3">
                        Nombre (obligatorio)
                    </label>

                    <div className="flex gap-2">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Juan Manuel"
                            className="w-1/2 bg-transparent border-b-2 border-[#181818] focus:outline-none focus:border-[#999]"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Cardenas"
                            className="w-1/2 bg-transparent border-b-2 border-[#181818] focus:outline-none focus:border-[#999]"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div>
                    <label className="block mb-3">Correo (obligatorio)</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="ejemplo21@gmail.com"
                        className="w-full bg-transparent border-b-2 border-[#181818] focus:outline-none focus:border-[#999]"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1">Mensaje (obligatorio)</label>
                    <textarea
                        name="message"
                        placeholder="Escribe tu Mensaje..."
                        rows="4"
                        className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-white resize-none"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    disabled={state.submitting}
                    className="px-6 py-2 bg-white text-black font-semibold rounded-full cursor-pointer hover:bg-gray-200 transition"
                >
                    {state.submitting ? "ENVIANDO..." : "ENVIAR"}
                </button>

                {state.succeeded && (
                    <AText
                        data='¡Mensaje enviado exitosamente!'
                        color="green"
                    />
                )}
                {state.errors && (
                    <AText
                        data='Algo salió mal. Inténtalo de nuevo.'
                        color="red"
                    />
                )}
            </form>

            <div className="mx-auto mt-10 w-fit flex items-center gap-8">
                <AText
                    data='Contactame directamente al correo:'
                />

                <ARed href='mailto:cordobaojhonjairo21@gmail.com'>
                    <AIcon data='Send' />
                </ARed>
            </div>
        </article>
    );
}

/* 
// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';


function ContactForm() {
  
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
*/