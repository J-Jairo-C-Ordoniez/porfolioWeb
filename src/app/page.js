import Main from "@/features/home/components/main"
import Footer from "@/shared/components/footer/Footer"

export const metadata = {
  title: "J Jairo C Ordoñez",
  alternates: {
    canonical: "https://tu-dominio.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "J Jairo C Ordoñez",
  url: "https://j-jairo-c-ordonez.vercel.app/",
  sameAs: [
    "https://www.linkedin.com/in/j-jairo-c-ordonez-dev/"
  ],
  jobTitle: "Desarrollador Web",
  worksFor: {
    "@type": "Organization"
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Main />
      <Footer />
    </>
  );
}
