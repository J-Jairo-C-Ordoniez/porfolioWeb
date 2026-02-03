import cHeader from "../data/home/Header";
import cHero from "../data/home/Hero";
import cProject from "../data/home/Project";
import cTestimonials from "../data/home/Testimonial";
import cAbout from "../data/home/About";
import cSkill from "../data/home/Skill";
import cBlog from "../data/home/Blog";
import cContact from "../data/home/Contact";
import cFooter from "../data/home/Footer";

import SHero from "../sections/home/hero/Hero";
import SProject from "../sections/home/project/Project";
import STestimonials from "../sections/home/testimonials/Testimonials";
import SAbout from "../sections/home/about/About";
import SSkill from "../sections/home/skills/Skill";
import SBlog from "../sections/home/blog/Blog";
import SContact from "../sections/home/contact/Contact";

import OHeader from "../components/organisms/Header";
import OFooter from "../components/organisms/Footer";

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
  url: "https://tu-dominio.com",
  sameAs: [
    "https://github.com/tu-usuario",
    "https://linkedin.com/in/tu-usuario",
  ],
  jobTitle: "Desarrollador Web",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OHeader data={cHeader} />
      <main>
        <SHero data={cHero} />
        <SProject data={cProject} />
        <STestimonials data={cTestimonials} />
        <SAbout data={cAbout} />
        <SSkill data={cSkill} />
        <SBlog data={cBlog} />
        <SContact data={cContact} />
      </main>
      <OFooter data={cFooter} />
    </>
  );
}
