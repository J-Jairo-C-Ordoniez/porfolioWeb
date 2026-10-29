"use client";

import HighlightsGallery from "@/shared/components/HighlightsGallery";

const slides = [
  { copy: "Lo importante del día, siempre a la vista.", image: "/koda/dailySummary.png", alt: "Resumen de KODA mostrado en una tableta" },
  { copy: "Cada prenda sabe dónde está.", image: "/koda/productCatalog.png", alt: "Catálogo de productos de KODA mostrado en una tableta" },
  { copy: "Vender rápido también puede sentirse simple.", image: "/koda/salesPos.png", alt: "Punto de venta de KODA mostrado en una tableta" },
  { copy: "Tus pendientes no se pierden de vista.", image: "/koda/customerManagement.png", alt: "Gestión de clientes de KODA mostrada en una tableta" },
  { copy: "Todos saben qué pasó y quién estuvo.", image: "/koda/teamManagement.png", alt: "Gestión de equipo de KODA mostrada en una tableta" },
];

export default function Highlights() {
  return (
    <HighlightsGallery
      id="highlights"
      title="Todo en su lugar."
      slides={slides}
      mode="light"
      ariaLabel="Secciones de KODA"
    />
  );
}
