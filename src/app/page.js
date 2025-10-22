import cHeader from "../content/home/cHeader";
import cHero from "../content/home/cHero";
import cProject from "../content/home/cProject";
import cTestimonials from "../content/home/cTestimonial";
import cAbout from "../content/home/cAbout";
import cSkill from "../content/home/cSkill";
import cBlog from "../content/home/cBlog";
import cContact from "../content/home/cContact";

import SHero from "../pages/home/hero/sHero";
import SProject from "../pages/home/project/sProject";
import STestimonials from "../pages/home/testimonials/sTestimonials";
import SAbout from "../pages/home/about/sAbout";
import SSkill from "../pages/home/skills/sSkill";
import SBlog from "../pages/home/blog/sBlog";
import SContact from "../pages/home/contact/sContact";

import OHeader from "../ui/organisms/oHeader";



/* 
import Footer from "../ui/organisms/Footer"; 
*/

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


      {/* 
      <Footer /> */}
    </>
  );
}