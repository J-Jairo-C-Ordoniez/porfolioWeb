const blog = {
    title: "Ideas y Experiencias",

    orders: [
        { id: "recent", label: "Recientes", type: 'recents' },
        { id: "alpha", label: "A-Z", type: 'alpha' },
        { id: "time", label: "Duración", type: 'duration' }
    ],

    blogs: [
        {
            id: 1,
            category: { text: "UI/UX", color: "#2196F3" },
            href: '/blog/desingUI',
            title: "Cómo diseñar interfaces minimalistas sin perder funcionalidad",
            excerpt:
                "Explora las claves del diseño minimalista aplicado al desarrollo web: desde la jerarquía visual hasta la elección de tipografías y colores.",
            date: "10/Sep/2025",
            readTime: "5 min",
            poster: {
                src: "/blog/blog1.png",
                alt: 'blog 1'
            }
        },
        {
            id: 2,
            category: { text: "Arquitectura", color: "#FF9800" },
            href: '/blog/archiquecture',
            title: "Atomic Design: mi experiencia aplicándolo en proyectos reales",
            excerpt:
                "Una guía práctica sobre cómo dividir interfaces en átomos, moléculas y organismos para mantener proyectos escalables y bien organizados.",
            date: "5/Sep/2025",
            readTime: "6 min",
            poster: {
                src: "/blog/blog2.png",
                alt: 'blog 2'
            }
        },
        {
            id: 3,
            category: { text: "Bases de Datos", color: "#4CAF50" },
            href: '/blog/dataBase',
            title: "Cómo estructuro bases de datos relacionales con MySQL",
            excerpt:
                "Un repaso de buenas prácticas para modelar datos, manejar claves foráneas y optimizar consultas en proyectos pequeños y medianos.",
            date: "1/Sep/2025",
            readTime: "7 min",
            poster: {
                src: "/blog/blog3.png",
                alt: 'blog 3'
            }
        },
        {
            id: 4,
            category: { text: "Frontend", color: "#9C27B0" },
            href: '/blog/reactNext',
            title: "React + Next.js: patrones que realmente funcionan",
            excerpt:
                "Comparto los patrones de arquitectura y organización que más me han servido para mantener proyectos Next.js escalables y fáciles de mantener.",
            date: "25/Ago/2025",
            readTime: "8 min",
            poster: {
                src: "/blog/blog4.png",
                alt: 'blog 4'
            }
        },
        {
            id: 5,
            category: { text: "Productividad", color: "#FF5722" },
            href: '/blog/productivity',
            title: "Mi flujo de trabajo con Git y control de versiones",
            excerpt:
                "Desde ramas principales hasta convenciones de commits, un vistazo a cómo organizo mis repositorios para no perder el control.",
            date: "20/Ago/2025",
            readTime: "4 min",
            poster: {
                src: "/blog/blog5.png",
                alt: 'blog 5'
            }
        },
        {
            id: 6,
            category: { text: "UI/UX", color: "#00BCD4" },
            href: '/blog/typografia',
            title: "El arte de elegir tipografías en proyectos web",
            excerpt:
                "Más allá de la estética: cómo usar la tipografía para mejorar la legibilidad y transmitir la identidad de un producto digital.",
            date: "10/Ago/2025",
            readTime: "6 min",
            poster: {
                src: "/blog/blog1.png",
                alt: 'blog 1'
            }
        },
        {
            id: 7,
            category: { text: "Backend", color: "#3F51B5" },
            href: '/blog/middlewares',
            title: "Middleware esenciales en una API Node.js",
            excerpt:
                "Exploro middlewares clave como logs, CORS, sanitización y seguridad para mantener APIs limpias y confiables.",
            date: "1/Ago/2025",
            readTime: "9 min",
            poster: {
                src: "/blog/blog1.png",
                alt: 'blog 1'
            }
        },
        {
            id: 8,
            category: { text: "Reflexión", color: "#607D8B" },
            href: '/blog/reflexion',
            title: "Lo que aprendí al migrar proyectos de monolito a microservicios",
            excerpt:
                "Una reflexión sobre los desafíos técnicos y de organización al cambiar a arquitecturas distribuidas.",
            date: "20/Jul/2025",
            readTime: "10 min",
            poster: {
                src: "/blog/blog1.png",
                alt: 'blog 1'
            }
        },
    ],
};

export default blog;