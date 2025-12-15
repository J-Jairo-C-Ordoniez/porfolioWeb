import cHeader from "../content/home/cHeader";
import cHero from "../content/home/cHero";
import cProject from "../content/home/cProject";
import cTestimonials from "../content/home/cTestimonial";
import cAbout from "../content/home/cAbout";
import cSkill from "../content/home/cSkill";
import cBlog from "../content/home/cBlog";
import cContact from "../content/home/cContact";
import cFooter from "../content/home/cFooter";

import SHero from "../pages/home/hero/sHero";
import SProject from "../pages/home/project/sProject";
import STestimonials from "../pages/home/testimonials/sTestimonials";
import SAbout from "../pages/home/about/sAbout";
import SSkill from "../pages/home/skills/sSkill";
import SBlog from "../pages/home/blog/sBlog";
import SContact from "../pages/home/contact/sContact";

import OHeader from "../ui/organisms/oHeader";
import OFooter from "../ui/organisms/oFooter";

export const metadata = {
  title: "Inicio",
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
