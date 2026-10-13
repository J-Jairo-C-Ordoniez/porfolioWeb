export const metadata = {
  title: "Investigación · KODA",
  description:
    "Comprender antes de construir: el proceso de investigación, aprendizajes y observaciones de campo detrás de KODA.",
  alternates: {
    canonical: "/projects/koda/research",
  },
};

export default function ResearchLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-background text-primary">
      {children}
    </div>
  );
}
