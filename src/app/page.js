import cHeader from "../content/home/cHeader";
import cHero from "../content/home/cHero";
import cProject from "../content/home/cProject";
import cTestimonials from "../content/home/cTestimonial";

import SHero from "../pages/home/hero/sHero";
import SProject from "../pages/home/project/sProject";
import STestimonials from "../pages/home/testimonials/sTestimonials";

import OHeader from "../ui/organisms/oHeader";



/* 
import aboutContent from "../content/cAbout";
import skillsContent from "../content/cSkill";
import blogContent from "../content/cBlog";



import About from "../pages/about/page";
import Skills from "../pages/skills/page";
import Blog from "../pages/blog/page";
import Contact from "../pages/contact/page";
import Footer from "../ui/organisms/Footer"; */

export default function Home() {
  return (
    <>
      <OHeader data={cHeader} />
      <main>
        <SHero data={cHero} />
        <SProject data={cProject} />
        <STestimonials data={cTestimonials} />
      </main>


      {/* 
        
        <Testimonials testimonials={testimonialsContent} />
        <About about={aboutContent} />
        <Skills skills={skillsContent} />
        <Blog blog={blogContent} />
        <Contact />
      </main>
      <Footer /> */}
    </>
  );
}