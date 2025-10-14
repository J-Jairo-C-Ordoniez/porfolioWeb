export const bloodyyueDoc = {
    id: "bloodyyue",

    menu: [
        { id: 1, text: "GitHub", href: "https://github.com/miusuario/bloodyyue", icon: "Github" },
        { id: 2, text: "Ver Demo", href: "https://bloodyyue.com", icon: "ExternalLink" }
    ],

    hero: {
        title: "BloodyYue",
        logo: '/projects/project1/logo.png',
        description: 'Portal web concebido como un catálogo digital moderno, accesible y altamente escalable.',
        link: { id: 1, text: "Revisar Documentación", icon: "FileText" },

        sections: [
            {
                id: 1,
                title: 'Arquitectura',
                text: 'BloodyYue implementa una arquitectura basada en MVC para el backend y Atomic Design en el frontend.',
                description: 'El patrón MVC asegura un backend ordenado y mantenible, mientras que Atomic Design facilita la reutilización de componentes en el frontend, garantizando escalabilidad y consistencia visual.',
                src: {
                    id: 1,
                    type: 'img',
                    alt: 'Arquitectura',
                    content: '/projects/project1/architecture.png'  
                },
                labels: [
                    { id: 1, text: "Escalable", color: "#4CAF50" },
                    { id: 2, text: "Modular", color: "#2196F3" }
                ]
            },
            {
                id: 2,
                title: 'Base de Datos',
                text: 'El sistema usa MySQL con relaciones controladas mediante stored procedures para optimizar rendimiento.',
                description: 'Se implementaron procedimientos almacenados para manejar relaciones como etiquetas en posts, evitando múltiples queries y asegurando mejor rendimiento en operaciones complejas.',
                src: {
                    id: 1,
                    type: 'code',
                    language: 'sql',
                    content: `
CREATE TABLE users (
  userId INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(50) UNIQUE,
  password VARCHAR(255),
  avatar VARCHAR(255),
  pitchVideo VARCHAR(255),
  biography TEXT,
  details TEXT,
  rolId INT UNSIGNED,
  country VARCHAR(255),
  isVerified BOOLEAN DEFAULT false,
    codeExpiresAt TIMESTAMP,
  code VARCHAR(255),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX iUsers (name, email),
  FOREIGN KEY (rolId) REFERENCES roles(rolId)
);

-- ...`
                },
                labels: [
                    { id: 1, text: "Performance", color: "#009688" },
                    { id: 2, text: "Backend", color: "#795548" },
                    { id: 3, text: "SQL", color: "#607D8B" }
                ]
            },
            {
                id: 3,
                title: 'UI & UX',
                text: 'Interfaz diseñada con Next.js y TailwindCSS, con un estilo minimalista y accesible, inspirado en Medium y la documentación de Next.',
                description: 'La experiencia de usuario se centra en claridad y velocidad. El diseño minimalista evita distracciones y asegura compatibilidad en todos los dispositivos, reforzado con accesibilidad ARIA.',
                src: {
                    id: 1,
                    type: 'img',
                    alt: 'Diseño UI & UX - BloodyYue',
                    content: '/projects/project1/ui.jpeg'
                },
                labels: [
                    { id: 1, text: "Accesibilidad", color: "#8BC34A" },
                    { id: 2, text: "Minimalista", color: "#E91E63" }
                ]
            },
            {
                id: 4,
                title: 'Escalabilidad',
                text: 'Pensado como un catálogo digital moderno y escalable, soporta integración de múltiples proyectos y documentación en Markdown.',
                description: 'Cada proyecto puede tener su propia documentación en formato Markdown, lo que permite crecer sin modificar la base del sistema, ofreciendo modularidad y soporte para documentación avanzada.',
                src: {
                    id: 1,
                    type: 'code',
                    language: 'javascript',
                    content: `
const architecture = { 
    backend: "MVC", 
    frontend: "Atomic Design" 
};`
                },
                labels: [
                    { id: 1, text: "Modular", color: "#2196F3" },
                    { id: 2, text: "Documentación", color: "#FFC107" }
                ]
            },
            {
                id: 5,
                title: 'Integración',
                text: 'El sistema permite enlazar demos, repositorios y documentación técnica de cada proyecto para consulta directa.',
                description: 'Cada card de proyecto está conectada con su demo en vivo, repositorio en GitHub y página de documentación, facilitando la exploración tanto para usuarios como para desarrolladores.',
                src: {
                    id: 1,
                    type: 'code',
                    language: 'javascript',
                    content: `
const architecture = { 
    backend: "MVC", 
    frontend: "Atomic Design" 
};`
                },
                labels: [
                    { id: 1, text: "DevOps", color: "#00BCD4" },
                    { id: 2, text: "Colaborativo", color: "#FFEB3B" }
                ]
            },
            {
                id: 6,
                title: 'Algoritmos',
                text: 'BloodyYue implementa lógicas clave como filtrado dinámico de proyectos y búsqueda optimizada por etiquetas.',
                description: 'El filtrado avanzado asegura que los usuarios encuentren rápidamente proyectos por categorías o etiquetas. Estas búsquedas son dinámicas y optimizadas para grandes volúmenes de datos.',
                src: {
                    id: 1,
                    type: 'code',
                    language: 'javascript',
                    content: `
const architecture = { 
    backend: "MVC", 
    frontend: "Atomic Design" 
};`
                },
                labels: [
                    { id: 1, text: "Optimización", color: "#009688" },
                    { id: 2, text: "Creativo", color: "#E91E63" }
                ]
            }
        ]
    },

    news: {
        title: 'Novedades',
        menu: [],
        content: {}
    },

    presentation: {
        title: 'Introducción a BloodyYue',
        menu: [
            { id: 'intro', text: 'Presentación' }
        ],

        content: {
            intro: {
                data: {
                    title: '¿Qué es Bloodyyue?',
                    description: 'Bloodyyue es un portal web concebido como un catálogo digital moderno, accesible y altamente escalable. El proyecto nace de la necesidad de fusionar un diseño minimalista y elegante con un rendimiento técnico superior. Busca ofrecer una experiencia de usuario rápida y fluida, manteniendo siempre una arquitectura de código limpia y modular que facilite su crecimiento y mantenimiento a futuro.',
                },

                properties: {
                    title: 'Propiedades Clave',
                    description: 'Estas son las características fundamentales que definen a Bloodyyue y lo diferencian de otros portales web:',
                    items: [
                        { id: 1, title: 'Accesibilidad:', text: 'Uso de etiquetas ARIA, estructura semántica y validadores personalizados y un diseño responsivo para garantizar usabilidad en distintos dispositivos y usuarios.' },
                        { id: 2, title: 'Arquitectura modular y escalable:', text: 'Atomic Design en frontend (atoms, molecules, organisms, templates, pages) y MVC en backend, separando lógica de negocio, rutas y controladores.' },
                        { id: 3, title: 'Optimización SEO y rendimiento:', text: 'Next.js con SSR/SSG para indexación eficiente y carga rápida con lazy loading, imágenes optimizadas y compresión.' },
                        { id: 4, title: 'Documentación integrada:', text: 'Documentación estilo Next.js (clara y técnica para devs) y presentación de proyectos estilo Medium (narrativa amigable y visual).' }
                    ]
                }
            }
        }
    },

    context: {
        title: 'Contexto y Fundamentación',
        menu: [
            { id: 'problema', text: 'Planteamiento del Problema' },
            { id: 'requerimientos', text: 'Requerimientos' },
            { id: 'objetivos', text: 'Objetivos' }
        ],

        content: {
            problema: 'El principal desafío en el mundo de los catálogos digitales es el pobre rendimiento y la falta de accesibilidad. Muchos portales existentes son lentos, difíciles de navegar en móviles y no están optimizados para motores de búsqueda, lo que resulta en una mala experiencia de usuario y una baja visibilidad orgánica. El cliente/usuario final necesitaba una solución que atacara directamente estos puntos débiles, demandando: Un portal totalmente accesible desde cualquier dispositivo, optimización para SEO que garantice un buen posicionamiento y una velocidad de carga casi instantánea sin sacrificar la calidad visual.',

            requerimientos: {
                title: 'Para garantizar el éxito del proyecto, se definieron los siguientes requerimientos clave, tanto funcionales como no funcionales:',
                list: [
                    { id: 1, title: 'Compatibilidad (Mobile-First)', text: 'El diseño y desarrollo deben priorizar la experiencia en dispositivos móviles y luego adaptarse a pantallas más grandes.' },
                    { id: 2, title: 'Rendimiento (Performance)', text: 'Lograr tiempos de carga mínimos, implementando técnicas como Lazy Loading para imágenes y apuntando a excelentes métricas en Core Web Vitals.' },
                    { id: 3, title: 'SEO Optimizado', text: 'Utilizar Server-Side Rendering (SSR) y Static Site Generation (SSG) para una indexación perfecta por parte de los motores de búsqueda.' },
                    { id: 4, title: 'Accesibilidad (a11y)', text: 'Cumplir con los estándares de accesibilidad web, usando etiquetas ARIA, una estructura HTML semántica y un diseño de UI inclusivo.' },
                    { id: 5, title: 'Escalabilidad', text: 'Construir sobre una arquitectura flexible basada en Atomic Design en el frontend y MVC en el backend para facilitar futuras expansiones.' },
                ]
            },

            objetivos: {
                title: 'Se establecieron objetivos claros y medibles para guiar el desarrollo:',
                main: 'Crear un portal web de catálogo digital que sea **accesible, minimalista y esté completamente optimizado para SEO**, estableciendo un nuevo estándar de calidad en su nicho.',
                second: [
                    { id: 1, text: 'Garantizar una compatibilidad impecable en los principales navegadores y dispositivos.' },
                    { id: 2, text: 'Mantener una **arquitectura modular y escalable** que soporte el crecimiento a largo plazo.' },
                    { id: 3, text: 'Aplicar las **mejores prácticas de UI/UX** para asegurar una experiencia de usuario intuitiva y agradable.' }
                ]
            }
        }
    },

    strategy: {
        title: 'Estrategia y Desarrollo',
        menu: [
            { id: 'arquitectura', text: 'Arquitectura' },
            { id: 'tecnologias', text: 'Tecnologías y Herramientas' },
            { id: 'soluciones', text: 'Soluciones Específicas' }
        ],

        content: {
            arquitectura: {
                title: '¿Qué arquitectura se usa?',
                description: 'La arquitectura fue la piedra angular del proyecto, diseñada para cumplir con los objetivos de rendimiento, escalabilidad y mantenibilidad.',
                items: [
                    { id: 1, title: 'Frontend (JAMstack)', text: 'Se optó por Next.js por su capacidad híbrida de renderizado (SSR/SSG), crucial para el SEO y la velocidad. La interfaz se construyó bajo la metodología de Atomic Design, que nos permitió crear un sistema de componentes reutilizables y consistentes, desde los átomos (botones, inputs) hasta las plantillas completas.' },
                    { id: 2, title: 'Backend (MVC)', text: 'Para el servidor, se implementó una API REST con Node.js y Express, siguiendo el patrón arquitectónico Modelo-Vista-Controlador (MVC). Esta separación de responsabilidades (lógica de negocio, datos y presentación) hace que el código sea increíblemente organizado y fácil de depurar.' },
                    { id: 3, title: 'Base de Datos (Relacional)', text: 'Se eligió MySQL por su robustez y fiabilidad. El uso de procedimientos almacenados permitió encapsular la lógica de negocio compleja directamente en la base de datos, optimizando las consultas.' }
                ]
            },

            tecnologias: {
                title: 'El stack tecnológico fue seleccionado cuidadosamente para maximizar la eficiencia y el rendimiento',
                items: [
                    { id: 1, title: 'Framework Frontend', text: 'Next.js (React)' },
                    { id: 2, title: 'Estilos', text: 'TailwindCSS' },
                    { id: 3, title: 'Backend', text: 'Node.js + Express' },
                    { id: 4, title: 'Base de Datos', text: 'MySQL' },
                    { id: 5, title: 'Hosting', text: 'Vercel (Frontend) y Railway (Backend)' },
                    { id: 6, title: 'Control de Versiones', text: 'Git y GitHub' }
                ]
            },

            soluciones: {
                title: 'Se implementaron varias soluciones técnicas para abordar los desafíos clave del proyecto',
                items: [
                    { id: 1, title: 'SEO Avanzado', text: 'Se crearon metadatos dinámicos para cada página del catálogo y un script para generar el sitemap.xml automáticamente, asegurando que todo el contenido fuera visible para los motores de búsqueda.' },
                    { id: 2, title: 'Performance Web', text: 'Se optimizaron todas las imágenes al formato WebP, se aplicó Lazy Loading de forma nativa con Next.js y se comprimieron los activos para reducir el tiempo de carga.' },
                    { id: 3, title: 'Gestión de Estado', text: 'En lugar de una librería pesada, se utilizó la Context API de React junto con hooks personalizados para gestionar el estado global de la aplicación (como el carrito o la sesión de usuario), manteniendo la ligereza.' }
                ]
            }
        }
    },

    result: {
        title: 'Resultado y Evidencias',
        menu: [
            { id: 'resultado-final', text: 'Resultado Final' },
            { id: 'metricas', text: 'Métricas y Pruebas' },
            { id: 'aprendizajes', text: 'Aprendizajes y Reflexión' },
            { id: 'codigo-clave', text: 'Código Clave' }
        ],

        content: {
            result: {
                title: 'Resultado final',
                subtitle: 'El resultado es un portal web que no solo cumple, sino que supera las expectativas iniciales. Se logró un producto digital:',
                items: [
                    { id: 1, title: 'Excepcionalmente Rápido', text: 'Con una carga inicial casi instantánea y transiciones fluidas.' },
                    { id: 2, title: 'Accesible', text: 'Garantizando una experiencia inclusiva para todos los usuarios.' },
                    { id: 3, title: 'Estéticamente Elegante', text: 'Con un diseño minimalista que pone el foco en el contenido.' },
                    { id: 4, title: 'Robusto y Escalable', text: 'Preparado para crecer y adaptarse a futuras necesidades sin problemas.' }
                ]
            },

            merics: {
                title: 'Metricas',
                description: 'Las pruebas de rendimiento validaron el éxito de la arquitectura y las optimizaciones implementadas.Se alcanzó y mantuvo de forma consistente una puntuación en Lighthouse de 95/100 o superior en la categoría de Performance. Además, se realizaron pruebas de compatibilidad manuales en los principales navegadores(Chrome, Firefox, Safari) y dispositivos para asegurar una experiencia de usuario consistente.'
            },

            aprendizajes: {
                title: 'Aprendisaje',
                description: 'Este proyecto fue un campo de aprendizaje inmenso.La mayor lección fue la confirmación de que ** una buena arquitectura inicial ahorra incontables horas de trabajo a futuro**.La implementación de Atomic Design y MVC desde el día uno fue clave para mantener la organización a medida que el proyecto crecía. Si tuviera que hacer algo diferente, sería integrar un sistema de pruebas automatizadas(como Jest o Cypress) desde una etapa más temprana para agilizar el proceso de QA y garantizar una mayor robustez en cada despliegue.'
            }
        },
    }
};

export default bloodyyueDoc;