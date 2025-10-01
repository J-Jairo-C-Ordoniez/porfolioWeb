import Testimonials from "@/pages/testimonials/page";
import homeContent from "../content/home";
import projectsContent from "../content/projects";
import testimonialsContent from "../content/testimonials";
import aboutContent from "../content/about";
import skillsContent from "../content/skills";
import blogContent from "../content/blog";

import Header from "../ui/organisms/Header";
import Start from "../pages/home/Page";
import Projects from "../pages/projects/page";
import About from "../pages/about/page";
import Skills from "../pages/skills/page";
import Blog from "../pages/blog/page";
import Contact from "../pages/contact/page";
import Footer from "../ui/organisms/Footer";

export default function Home() {
  return (
    <>
      <Header logo={homeContent.logo} links={homeContent.links} />
      <main className="px-4">
        <Start home={homeContent} />
        <Projects projects={projectsContent} />
        <Testimonials testimonials={testimonialsContent} />
        <About about={aboutContent} />
        <Skills skills={skillsContent} />
        <Blog blog={blogContent} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}