import Hero from "./sections/Hero";
import Project from "./sections/Project";
import Testimonie from "./sections/Testimonie";
import About from "./sections/About";
import Skill from "./sections/Skill";
import Blog from "./sections/Blog";

export default function Main() {
    return (
        <main className="w-full min-h-screen">
            <Hero />
            <Project />
            <Testimonie />
            <About />
            <Skill />
            <Blog />
        </main>
    );
}