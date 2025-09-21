const projects = {
    title: "Mi Tabajo Reciente",
    menu: [
        { id: 1, status: "personal", text: "Personales", icon: "BookUser" },
        { id: 2, status: "openSource", text: "Open Source", icon: "PanelBottomOpen" },
        { id: 3, status: "others", text: "Otros", icon: "CircleEllipsis" }
    ],

    items: {
        personal: [
            {
                id: 'bloodyyue',
                title: "BloodyYue",
                direction: 'left',
                labels: [
                    { id: 1, text: "Creativo", color: "#E91E63" },
                    { id: 2, text: "Experimental", color: "#9C27B0" },
                    { id: 3, text: "UI/UX", color: "#03A9F4" },
                ],
                description: "Proyecto experimental con estética oscura y visuales impactantes. Buscó transmitir una identidad digital alternativa con animaciones fluidas y transiciones dramáticas.",
                poster: "/projects/project1.png",
                links: [
                    { id: 1, text: "Ver Demo", href: "https://bloodyyue.com", icon: "ExternalLink" },
                    { id: 2, text: "Ver Código", href: "https://github.com/miusuario/bloodyyue", icon: "Github" },
                    { id: 3, text: "Ver Documentación", href: "/docs/bloodyyue", icon: "FileText" }
                ]
            },
            {
                id: 'avicii',
                title: "Tributo Avicii",
                direction: 'right',
                labels: [
                    { id: 1, text: "Creativo", color: "#E91E63" },
                    { id: 2, text: "Interactivo", color: "#4CAF50" },
                    { id: 3, text: "Emocional", color: "#FF5722" },
                ],
                description: "Web interactiva inspirada en la música de Avicii, donde la experiencia se centra en lo emocional: luces dinámicas y ritmo sincronizado con efectos visuales.",
                poster: "/projects/project2.png",
                links: [
                    { id: 1, text: "Ver Demo", href: "https://bloodyyue.com", icon: "ExternalLink" },
                    { id: 2, text: "Ver Código", href: "https://github.com/miusuario/bloodyyue", icon: "Github" },
                    { id: 3, text: "Ver Documentación", href: "/docs/avicii", icon: "FileText" }
                ]
            },
            {
                id: 'panaderia',
                title: "Panadería La Tradición",
                direction: 'left',
                labels: [
                    { id: 1, text: "Sistématico", color: "#607D8B" },
                    { id: 2, text: "Funcional", color: "#2196F3" },
                    { id: 3, text: "Corporativo", color: "#0D47A1" },
                ],
                description: "Sitio web para una panadería local, enfocado en la calidez de marca y la facilidad de mostrar productos frescos con un diseño minimalista y apetitoso.", poster: "/projects/project3.png",
                links: [
                    { id: 1, text: "Ver Demo", href: "https://mi-proyecto-personal-2.com", icon: "ExternalLink" },
                    { id: 2, text: "Ver Código", href: "https://github.com/miusuario/tributo-avicii", icon: "Github" },
                    { id: 3, text: "Ver Documentación", href: "/docs/panaderia", icon: "FileText" }
                ]
            },
            {
                id: 'e-commerce',
                title: "E-commerce Minimalista",
                direction: 'right',
                labels: [
                    { id: 1, text: "Analítico", color: "#8F6D05" },
                    { id: 2, text: "Profesional", color: "#009900" },
                    { id: 3, text: "Escalable", color: "#009688" },
                ],
                description: "Plataforma de ventas en línea con un diseño limpio, enfocada en la experiencia del usuario y optimizada para SEO y escalabilidad.",
                poster: "/projects/project4.png",
                links: [
                    { id: 1, text: "Ver Demo", href: "https://mi-proyecto-open-source-1.com", icon: "ExternalLink" },
                    { id: 2, text: "Ver Código", href: "https://github.com/miusuario/mi-proyecto-open-source-1", icon: "Github" },
                    { id: 3, text: "Ver Documentación", href: "/docs/e-commerce", icon: "FileText" }
                ]
            }
        ]
    }
}

export default projects;