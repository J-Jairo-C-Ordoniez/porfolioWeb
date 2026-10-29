"use client";

import FeatureTabsGallery from "@/shared/components/FeatureTabsGallery";

const researchSpaces = [
  {
    title: "Reddit",
    description: "Recuerdos de actuaciones, proyectos de fans y homenajes dedicados a su música.",
    img: "/tim/gallery1.png",
    alt: "Comunidad de Avicii en Reddit",
  },
  {
    title: "YouTube",
    description: "Testimonios sobre el impacto personal de sus canciones y su proceso creativo.",
    img: "/tim/gallery2.png",
    alt: "Comentarios e historias en YouTube",
  },
  {
    title: "Discord",
    description: "Expresiones espontáneas, fanarts y recuerdos afectivos dentro de la conversación diaria.",
    img: "/tim/gallery3.png",
    alt: "Comunidad de Avicii en Discord",
  },
  {
    title: "Web oficial",
    description: "Fotografías, grabaciones de actuaciones y registros visuales de su trayectoria creativa.",
    img: "/tim/gallery4.png",
    alt: "Material de archivo en la web oficial de Avicii",
  },
];

export default function ResearchSpaces() {
  return (
    <FeatureTabsGallery
      id="research-spaces"
      title="Los espacios donde su comunidad mantenía viva su voz."
      items={researchSpaces}
      mode="dark"
      ariaLabel="Espacios digitales de investigación de la comunidad"
    />
  );
}
