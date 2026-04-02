const data = {
  id: "projects",
  title: "Mi Trabajo Reciente",

  menu: [
    {
      id: 1,
      status: "professional",
      text: "Profesionales",
      icon: "BookUser"
    },
    {
      id: 2,
      status: "personal",
      text: "Personales",
      icon: "PanelBottomOpen",
    },
    {
      id: 3,
      status: "conceptual",
      text: "Conceptuales",
      icon: "CircleEllipsis"
    },
  ],

  items: {
    professional: [
      {
        id: "modayestilo",
        title: "Moda y Estilo",
        labels: {
          text: "Gestión"
        },
        description:
          "Sistema de Gestión de Catálogo e Inventario para un negocio local, permitiendo control ágil desde un panel administrativo y una vitrina web moderna para los clientes.",
        poster: "/projects/modayestilo/poster.png",
        links: [
          {
            id: 1,
            text: "Ver Demo",
            href: "https://moda-estilo-phi.vercel.app/"
          },
          {
            id: 2,
            text: "Ver Documentación",
            href: "/docs/modayestilo"
          },
        ],
      },
    ],

    personal: [
      {
        id: "tim",
        title: "Tim",
        direction: "right",
        labels: {
          text: "Emocional"
        },
        description:
          "Web interactiva inspirada en la música de Avicii, donde la experiencia se centra en lo emocional: luces dinámicas y ritmo sincronizado con efectos visuales.",
        poster: "/projects/project2.png",
        links: [
          {
            id: 1,
            text: "Ver Demo",
            href: "https://bloodyyue.com",
          },
          {
            id: 2,
            text: "Ver Documentación",
            href: "/docs/vicii",
          },
        ],
      },
      {
        id: "bloodyyue",
        title: "BloodyYue",
        direction: "right",
        labels: {
          text: "Creativo"
        },
        description:
          "Proyecto experimental con estética oscura y visuales impactantes. Buscó transmitir una identidad digital alternativa con animaciones fluidas y transiciones.",
        poster: "/projects/project1/ui.jpg",
        links: [
          {
            id: 1,
            text: "Ver Demo",
            href: "https://bloodyyue.com"
          },
          {
            id: 2,
            text: "Ver Documentación",
            href: "/docs/bloodyyue"
          },
        ],
      },
    ],
  },
};

export default data;
