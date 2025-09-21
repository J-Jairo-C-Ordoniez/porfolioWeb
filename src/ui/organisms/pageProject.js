import TitleSection from "../atoms/TitleSection";
import Header from "./Header";

export default function PageProject({ project }) {
    const logo = {
        name: "J Jairo C Ordoñez",
        logo: {
            src: "/logo.svg",
            alt: "Logo de mi portafolio",
            size: 100,
        }
    }

    return (
        <>
            <Header logo={logo} links={[]} />
            <main className="px-20 py-10">
                <TitleSection title={project.title} />
            </main>
        </>
    )
}