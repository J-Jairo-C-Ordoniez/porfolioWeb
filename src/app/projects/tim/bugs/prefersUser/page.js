import Main from "@/features/tim/bugs/prefersUser/components/main";

export const metadata = {
  title: "Un bug inesperado en TIM",
  description:
    "De un bug de animación a una decisión de arquitectura: cómo prefers-reduced-motion reveló una dependencia estructural entre contenido y animación en TIM.",
  alternates: {
    canonical: "/projects/tim/bugs/prefersUser",
  },
};

export default function BugPrefersUserPage() {
  return <Main />;
}
