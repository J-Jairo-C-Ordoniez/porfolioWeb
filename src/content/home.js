const homeContent = {
    id: "home",
    user: {
        name: "Jhon Jairo",
        lastName: "Cordoba Ordoñez",
        rol: "DESARROLLADOR WEB",
        description: "Construyo experiencias web minimalistas, claras y profesionales, con un enfoque creativo que une funcionalidad, diseño y tecnología para dar vida a tus ideas.",
        photo: {
            src: "/photo.png",
            alt: "Foto de perfil de Jhon",
            size: 100,
        }
    },

    cta: [
        {
            id: 1,
            href: "#projects",
            text: "Ver Proyectos",
            icon: 'ChartNoAxesGantt',
            type: "linear"
        },

        {
            id: 2,
            href: "#contact",
            text: "Habemos",
            icon: 'MessagesSquare',
            type: "backdrop"
        }
    ],

    links: [
        { id: 1, href: "#home", text: "Inicio" },
        { id: 2, href: "#projects", text: "Proyectos" },
        { id: 3, href: "#testimonies", text: "Testimonios" },
        { id: 4, href: "#about", text: "Sobre mí" },
        { id: 5, href: "#skills", text: "Habilidades" },
        { id: 6, href: "#blog", text: "Blog" },
        { id: 7, href: "#contact", text: "Contacto" },
    ],

    logo: {
        name: "J Jairo C Ordoñez",
        logo: {
            src: "/logo.svg",
            alt: "Logo de mi portafolio",
            size: 100,
        }
    }
}

export default homeContent;