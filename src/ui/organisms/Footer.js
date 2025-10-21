// src/components/Footer.tsx
import Picture from "../atoms/aPicture";
import TitleSection from "../atoms/TitleSection";
import Menu from "../molecules/Menu";
import Red from "../atoms/aRed";
import Icon from "../atoms/aIcon";
import Text from "../atoms/aText";

const links = [
    { id: 1, href: "#home", text: "Inicio" },
    { id: 2, href: "#projects", text: "Proyectos" },
    { id: 3, href: "#testimonies", text: "Testimonios" },
    { id: 4, href: "#about", text: "Sobre mí" },
    { id: 5, href: "#skills", text: "Habilidades" },
    { id: 6, href: "#blog", text: "Blog" },
    { id: 7, href: "#contact", text: "Contacto" },
]

const reds = [
    { id: 1, text: "GitHub", href: "https://github.com", icon: "Github" },
    { id: 2, text: "Linkedin", href: "https://Linkedin.com/", icon: "Linkedin" },
    { id: 3, text: "Mail", href: "mailto:cordobaojhonjairo21@gmail.com", icon: "Mail" }
]

export default function Footer() {
    const redsItems = reds.map(red => (
        <Red key={red.id} href={red.href}>
            <Icon name={red.icon} />
        </Red>
    ))

    return (
        <footer className="w-full bg-[#181818] py-10">
            <article className="max-w-5xl mx-auto flex flex-col items-center gap-6 px-4">
                <div className="flex flex-col items-center gap-4">
                    <Picture
                        src="/logo.svg"
                        alt="Logo J Jairo C Ordoñez"
                        size="20"
                    />
                    <TitleSection
                        title='J Jairo C Ordoñez'
                        fontSize="1.4rem"
                        color="#e0e0e0"
                    />
                </div>

                <Menu links={links} />

                <div className="flex gap-4">
                    {redsItems}
                </div>

                <div className="text-xs text-gray-500 mt-4 flex flex-col items-center gap-2">
                    <Text text={`© ${new Date().getFullYear()} J Jairo C Ordoñez`} />
                </div>
            </article>
        </footer>
    );
}
