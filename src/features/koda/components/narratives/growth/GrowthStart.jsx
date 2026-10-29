"use client";

import FeatureTabsGallery from "@/shared/components/FeatureTabsGallery";

const items = [
  {
    title: "Más productos",
    description: "El inventario crece y el control manual genera graves pérdidas.",
    img: "/koda/manualInventory.png",
    alt: "Inventario descontrolado",
  },
  {
    title: "Más ventas",
    description: "Mayor volumen exige rapidez; anotar a mano retrasa cada transacción.",
    img: "/koda/manualSales.png",
    alt: "Registro de ventas",
  },
  {
    title: "Más clientes",
    description: "Aumentan los fiados; es vital registrar la deuda sin errores.",
    img: "/koda/storeCustomers.png",
    alt: "Clientes y fiados",
  },
  {
    title: "Más cosas que recordar",
    description: "La carga mental sube al dispersarse la información del negocio.",
    img: "/koda/mentalLoad.png",
    alt: "Carga mental acumulada",
  },
];

export default function GrowthStart() {
  return (
    <FeatureTabsGallery
      title="El problema apareció cuando todo empezó a crecer."
      items={items}
      mode="light"
      ariaLabel="Puntos de fricción por crecimiento"
    />
  );
}
