const data = {
  id: "projects",
  title: "Mi Trabajo Reciente",

  menu: [
    {
      id: 1,
      status: "personal",
      text: "Personales",
      icon: "BookUser"
    },
    {
      id: 2,
      status: "openSource",
      text: "Open Source",
      icon: "PanelBottomOpen",
    },
    {
      id: 3,
      status: "others",
      text: "Otros",
      icon: "CircleEllipsis"
    },
  ],

  items: {
    personal: [
      {
        id: "modayestilo",
        title: "Moda y Estilo",
        direction: "left",
        labels: {
          text: "Gestión"
        },
        description:
          "Sistema de Gestión de Catálogo e Inventario para un negocio local, permitiendo control ágil desde un panel administrativo y una vitrina web moderna para los clientes.",
        poster: "/projects/project3.png",
        links: [
          {
            id: 1,
            text: "Ver Demo",
            href: "https://modayestilo.vercel.app"
          },
          {
            id: 2,
            text: "Ver Documentación",
            href: "/docs/modayestilo"
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
      {
        id: "avicii",
        title: "Tributo Avicii",
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
        id: "panaderia",
        title: "Panadería La Tradición",
        direction: "left",
        labels: {
          text: "Corporativo"
        },
        description:
          "Sitio web para una panadería local, enfocado en la calidez de marca y la facilidad de mostrar productos frescos con un diseño minimalista y apetitoso.",
        poster: "/projects/project3.png",
        links: [
          {
            id: 1,
            text: "Ver Demo",
            href: "https://mi-proyecto-personal-2.com",
          },
          {
            id: 3,
            text: "Ver Documentación",
            href: "/docs/panaderia",
          },
        ],
      },
      {
        id: "e-commerce",
        title: "E-commerce Minimalista",
        direction: "right",
        labels: {
          text: "Escalable",
        },
        description:
          "Plataforma de ventas en línea con un diseño limpio, enfocada en la experiencia del usuario y optimizada para SEO y escalabilidad.",
        poster: "/projects/project4.png",
        links: [
          {
            id: 1,
            text: "Ver Demo",
            href: "https://mi-proyecto-open-source-1.com"
          },
          {
            id: 2,
            text: "Ver Documentación",
            href: "/docs/e-commerce"
          },
        ],
      },
    ],
  },
};

export default data;
