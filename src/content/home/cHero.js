const cHero = {
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
}

export default cHero;