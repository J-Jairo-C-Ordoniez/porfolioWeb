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

export async function generateMetadata() {
  return {
    metadataBase: new URL("https://tu-dominio.com"),
    title: "J Jairo C Ordoñez",
    description:
      "Construyo experiencias web minimalistas, claras y profesionales, con un enfoque creativo que une funcionalidad, diseño y tecnología para dar vida a tus ideas.",
    openGraph: {
      title: "J Jairo C Ordoñez",
      description:
        "Construyo experiencias web minimalistas, claras y profesionales, con un enfoque creativo que une funcionalidad, diseño y tecnología para dar vida a tus ideas.",
      url: "https://jj.com/",
      siteName: "J Jairo C Ordoñez",
      images: [
        {
          url: "/avatar.png",
          width: 1200,
          height: 630,
          alt: "Avatar de J Jairo C Ordoñez",
        },
      ],
      locale: "es_COL",
      type: "website",
    },

    icons: {
      icon: "/Logo.svg",
    },
  };
}

export default function Home() {
  return (
    <>
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
