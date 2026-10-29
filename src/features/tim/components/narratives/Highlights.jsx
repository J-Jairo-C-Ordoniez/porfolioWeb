"use client";

import HighlightsGallery from "@/shared/components/HighlightsGallery";

const slides = [
  {
    copy: "Antes de Avicii, existió Tim.",
    image: "/tim/gallery1.png",
    alt: "Retrato de Tim Bergling",
  },
  {
    copy: "Descubrir una melodía mientras toma forma.",
    image: "/tim/gallery2.png",
    alt: "Tim Bergling durante la creación y producción en el estudio",
  },
  {
    copy: "Canciones que acompañaron momentos decisivos.",
    image: "/tim/gallery3.png",
    alt: "El impacto emocional y personal de la música de Avicii en quienes la escuchan",
  },
  {
    copy: "Un recuerdo colectivo que permanece en el tiempo.",
    image: "/tim/gallery4.png",
    alt: "Avicii en su última actuación en directo en Ushuaïa Ibiza",
  },
  {
    copy: "El mayor tributo a un creador es seguir creando.",
    image: "/tim/gallery5.png",
    alt: "El legado de Tim Bergling como impulso para nuevas creaciones",
  },
];

export default function Highlights() {
  return (
    <HighlightsGallery
      id="highlights"
      title="Más allá de la música."
      slides={slides}
      mode="dark"
      ariaLabel="Momentos destacados de TIM"
    />
  );
}
