"use client";

import { usePathname } from "next/navigation";
import TimMenu from "./TimMenu";

export default function TimNavWrapper() {
  const pathname = usePathname();

  // En las subrutas de casos de estudio / bugs no mostramos el menú hamburguesa
  if (pathname?.startsWith("/projects/tim/bugs")) {
    return null;
  }

  return <TimMenu />;
}
