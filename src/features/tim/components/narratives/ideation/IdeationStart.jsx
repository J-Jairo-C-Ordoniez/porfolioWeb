"use client";

import FeatureTabsGallery from "@/shared/components/FeatureTabsGallery";

const items = [
  {
    title: "Conocer a Tim",
    description: "Acercarse a la persona detrás de Avicii, más allá del nombre.",
    img: "/tim/gallery1.png",
    alt: "Tim Bergling",
  },
  {
    title: "Más allá del escenario",
    description: "Explorar su faceta creativa y su relación con la música.",
    img: "/tim/gallery2.png",
    alt: "Proceso creativo de Avicii",
  },
  {
    title: "Una canción, una historia personal",
    description: "Mostrar cómo una canción puede adquirir un significado propio.",
    img: "/tim/gallery3.png",
    alt: "Música y experiencia personal",
  },
  {
    title: "Un mismo show, muchos recuerdos",
    description: "Reconocer las experiencias compartidas alrededor de sus presentaciones.",
    img: "/tim/gallery4.png",
    alt: "Presentaciones en vivo de Avicii",
  },
  {
    title: "Lo que inspira",
    description: "Explorar cómo su música y legado continúan motivando nuevas expresiones.",
    img: "/tim/gallery5.png",
    alt: "El legado de Avicii",
  },
];

export default function IdeationStart() {
  return (
    <FeatureTabsGallery
      title="Con las líneas definidas, había que conectarlas."
      items={items}
      mode="dark"
      ariaLabel="Líneas narrativas conectadas en la ideación"
    />
  );
}
