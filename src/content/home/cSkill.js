const cSkill = {
    id: 'skills',
    title: 'Habilidades',
    menu: [
        { id: 1, status: "soft", text: "Blandas", icon: "Smile" },
        { id: 2, status: "tech", text: "Técnicas", icon: "Code" },
    ],

    items: {
        soft: [
            {
                id: "soft-01",
                name: "Creatividad:",
                icon: "Sparkles",
                description: "Capacidad de proponer ideas innovadoras y resolver problemas desde ángulos diferentes."
            },
            {
                id: "soft-02",
                name: "Comunicación:",
                icon: "MessageCircle",
                description: "Expreso conceptos técnicos de forma clara tanto para equipos técnicos como no técnicos."
            },
            {
                id: "soft-03",
                name: "Colaboración:",
                icon: "Users",
                description: "Trabajo en equipo para alcanzar objetivos comunes y potenciar el talento colectivo."
            },
            {
                id: "soft-04",
                name: "Visión a futuro:",
                icon: "Eye",
                description: "Anticipo tendencias y pienso en soluciones escalables a largo plazo."
            },
            {
                id: "soft-05",
                name: "Organización:",
                icon: "CalendarCheck",
                description: "Planifico y gestiono tareas de forma eficiente para optimizar tiempos y recursos."
            }
        ],
        tech: [
            {
                id: "tech-01",
                name: "HTML & CSS:",
                icon: "Code",
                description: "Estructura semántica y estilos modernos con enfoque en accesibilidad y performance."
            },
            {
                id: "tech-02",
                name: "JavaScript / TypeScript:",
                icon: "Terminal",
                description: "Lógica robusta para aplicaciones dinámicas, con tipado estático cuando el proyecto lo amerita."
            },
            {
                id: "tech-03",
                name: "React & Next.js:",
                icon: "Atom",
                description: "Construcción de interfaces escalables y SSR/SSG para rendimiento óptimo."
            },
            {
                id: "tech-04",
                name: "TailwindCSS:",
                icon: "Layout",
                description: "Estilos consistentes y productivos con un enfoque utility-first."
            },
            {
                id: "tech-05",
                name: "Bases de datos (MySQL / MongoDB):",
                icon: "Database",
                description: "Diseño, modelado y consultas eficientes para aplicaciones escalables."
            },
            {
                id: "tech-06",
                name: "Git & Control de versiones:",
                icon: "GitBranch",
                description: "Flujos de trabajo colaborativos y ordenados con ramas bien definidas."
            }
        ]
    }
}

export default cSkill;