import Hero from "./sections/Hero";
import Project from "./sections/Project";
import Testimonie from "./sections/Testimonie";
import About from "./sections/About";

export default function Main() {
    return (
        <main className="w-full min-h-screen">
            <Hero />
            <Project />
            <Testimonie />
            <About />
        </main>
    );
}