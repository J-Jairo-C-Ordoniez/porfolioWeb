export const bloodyyueDoc = {
  id: "bloodyyue",
  title: "BloodyYue - Documentación",
  description:
    "Documentación técnica detallada del proyecto BloodyYue, un portal web moderno y escalable construido con Next.js y MySQL.",
  avatar: "/projects/project1/logo.png",
  url: "https://bloodyyue.com",

  head: {
    name: "J Jairo | BloodyYue",
    logo: {
      src: "/logo.svg",
      alt: "Logo de mi portafolio",
      link: "/docs/bloodyyue",
    },

    menu: [
      {
        id: 1,
        text: "Repositorio",
        href: "https://github.com/miusuario/bloodyyue",
        icon: "Github",
      },
      {
        id: 2,
        text: "Ver Demo",
        href: "https://bloodyyue.com",
        icon: "ExternalLink",
      },
    ],
  },

  hero: {
    title: "BloodyYue",
    logo: "/projects/project1/logo.png",
    description:
      "Portal web concebido como catálogo digital moderno, accesible y altamente escalable. Esta documentación muestra la arquitectura, decisiones técnicas y resultados del proyecto.",
    Btn: { id: 1, text: "Revisar Documentación", icon: "FileText" },
    link: { id: 2, text: "Ver Galería", icon: "Image", href: "#gallery" },

    tecnologies: [
      { id: 1, text: "Next.js", color: "#607D8B" },
      { id: 2, text: "TailwindCSS", color: "#38BDF8" },
      { id: 3, text: "Node.js", color: "#8CC84B" },
      { id: 4, text: "MySQL", color: "#FF5722" },
    ],

    gallery: [
      {
        id: 1,
        title: "Pantalla principal",
        description:
          "UI - Diseño de la sección de inicio del proyecto siguiendo las mejores prácticas de diseño",
        src: "/projects/project1/gallery/hero.jpg",
      },
      {
        id: 2,
        title: "Detalle de proyecto",
        description: "Docs - Detalles mientras trabajaba en la documentación",
        src: "/projects/project1/gallery/studio.jpg",
      },
      {
        id: 3,
        title: "Arquitectura simplificada",
        description:
          "Arquitectura - Diseño de la arquitectura en un gráfico general",
        src: "/projects/project1/gallery/architecture.jpg",
      },
    ],

    sections: [
      {
        id: 1,
        title: "Arquitectura",
        text: "BloodyYue implementa una arquitectura basada en MVC para el backend y Atomic Design en el frontend.",
        description:
          "El patrón MVC asegura un backend ordenado y mantenible, mientras que Atomic Design facilita la reutilización de componentes en el frontend, garantizando escalabilidad y consistencia visual.",
        src: {
          id: 1,
          type: "img",
          alt: "Arquitectura",
          content: "/projects/project1/architecture.jpg",
        },
        labels: [
          { id: 1, text: "Escalable", color: "#4CAF50" },
          { id: 2, text: "Modular", color: "#2196F3" },
        ],
      },
      {
        id: 2,
        title: "Base de Datos",
        text: "El sistema usa MySQL con relaciones controladas mediante stored procedures para optimizar rendimiento.",
        description:
          "Se implementaron procedimientos almacenados para manejar relaciones como etiquetas en posts, evitando múltiples queries y asegurando mejor rendimiento en operaciones complejas.",
        src: {
          id: 1,
          type: "code",
          language: "sql",
          content: `
CREATE TABLE users (
  userId INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(50) UNIQUE,
  password VARCHAR(255),
-- ...`,
        },
        labels: [
          { id: 1, text: "Performance", color: "#009688" },
          { id: 2, text: "Backend", color: "#795548" },
          { id: 3, text: "SQL", color: "#607D8B" },
        ],
      },
      {
        id: 3,
        title: "UI & UX",
        text: "Interfaz diseñada con Next.js y TailwindCSS, con un estilo minimalista y accesible, inspirado en Medium y la documentación de Next.",
        description:
          "La experiencia de usuario se centra en claridad y velocidad. El diseño minimalista evita distracciones y asegura compatibilidad en todos los dispositivos, reforzado con accesibilidad ARIA.",
        src: {
          id: 1,
          type: "img",
          alt: "Diseño UI & UX - BloodyYue",
          content: "/projects/project1/ui.jpg",
        },
        labels: [
          { id: 1, text: "Accesibilidad", color: "#8BC34A" },
          { id: 2, text: "Minimalista", color: "#E91E63" },
        ],
      },
      {
        id: 4,
        title: "Escalabilidad",
        text: "Pensado como un catálogo digital moderno y escalable, soporta integración de múltiples proyectos y documentación en Markdown.",
        description:
          "Cada proyecto puede tener su propia documentación en formato Markdown, lo que permite crecer sin modificar la base del sistema, ofreciendo modularidad y soporte para documentación avanzada.",
        src: {
          id: 1,
          type: "code",
          language: "javascript",
          content: `
async function Talks({ confId }) {
 return (
    <ConferenceLayout conf={conf}>
    </ConferenceLayout>
  );
}`,
        },
        labels: [
          { id: 1, text: "Modular", color: "#2196F3" },
          { id: 2, text: "Documentación", color: "#FFC107" },
        ],
      },
      {
        id: 5,
        title: "Integración",
        text: "El sistema permite enlazar demos, repositorios y documentación técnica de cada proyecto para consulta directa.",
        description:
          "Cada card de proyecto está conectada con su demo en vivo, repositorio en GitHub y página de documentación, facilitando la exploración tanto para usuarios como para desarrolladores.",
        src: {
          id: 1,
          type: "code",
          language: "javascript",
          content: `
const architecture = { 
    backend: "MVC", 
    frontend: "Atomic Design" 
};`,
        },
        labels: [
          { id: 1, text: "DevOps", color: "#00BCD4" },
          { id: 2, text: "Colaborativo", color: "#FFEB3B" },
        ],
      },
      {
        id: 6,
        title: "Algoritmos",
        text: "BloodyYue implementa lógicas clave como filtrado dinámico de proyectos y búsqueda optimizada por etiquetas.",
        description:
          "El filtrado avanzado asegura que los usuarios encuentren rápidamente proyectos por categorías o etiquetas. Estas búsquedas son dinámicas y optimizadas para grandes volúmenes de datos.",
        src: {
          id: 1,
          type: "code",
          language: "javascript",
          content: `
import { useState } from 'react';

function SearchableVideoList({ videos }) {
  return ();
}`,
        },
        labels: [
          { id: 1, text: "Optimización", color: "#009688" },
          { id: 2, text: "Creativo", color: "#E91E63" },
        ],
      },
    ],
  },

  documentation: [
    {
      id: "start",
      title: "Inicio",
      items: [
        {
          id: 1,
          title: "BloodyYue",
          content: [
            {
              id: 1,
              type: "text",
              value:
                "BloodyYue es una plataforma web creativa inspirada en la estética digital y el ritmo de la música electrónica, que combina diseño minimalista con una arquitectura sólida basada en Next.js y MySQL. Su objetivo es ofrecer una experiencia visual y fluida donde el arte digital, la música y la interacción se fusionan.",
            },
            {
              id: 2,
              type: "quote",
              value:
                "“El minimalismo no es la ausencia de complejidad, sino el control absoluto sobre ella.”",
            },
          ],
        },
        {
          id: 2,
          title: "Problema",
          content: [
            {
              id: 1,
              type: "text",
              value:
                "En la actualidad, vender arte digital se ha convertido en un desafío constante para los artistas independientes. Las redes sociales, aunque ofrecen alcance global, se han transformado en un espacio saturado donde la visibilidad depende de algoritmos opacos y de la inversión en publicidad. Esto ha generado una brecha entre la calidad del arte y su capacidad de llegar a un público realmente interesado."
            },
            {
              id: 2,
              type: "text",
              value:
                "Muchos artistas digitales dependen casi por completo de plataformas externas para exhibir y vender sus obras, lo que los deja expuestos a la falta de control sobre sus datos, a la pérdida de derechos sobre su contenido y, en algunos casos, a entornos poco seguros donde el fraude o la apropiación indebida de obras son frecuentes. A esto se suma la ausencia de espacios que combinen comunidad, exposición y comercio de forma ética y sostenible.",
            },
            {
              id: 3,
              type: "text",
              value:
                "En síntesis, el principal problema identificado es la falta de un canal confiable, transparente y equitativo para que los artistas digitales puedan conectar con sus compradores, gestionar sus obras y asegurar su propiedad sin depender de intermediarios abusivos.",
            },
          ],
        },
        {
          id: 3,
          title: "Solucion",
          content: [
            {
              id: 1,
              type: "text",
              value:
                "BloodyYue nace como respuesta a esta problemática. Su objetivo es construir un entorno digital donde la artista bloodyyue pueda mostrar, vender y proteger su trabajo bajo sus propios términos, priorizando la confianza, la trazabilidad y la independencia creativa.",
            },
          ],
        },
        {
          id: 4,
          title: "Resultado",
          content: [
            {
              id: 1,
              type: "text",
              value:
                "Una plataforma moderna, visualmente coherente, con navegación fluida, tiempos de carga reducidos y una interfaz inspirada en el minimalismo de Avicii: simple, elegante y precisa.",
            },
          ],
        },
      ],
    },

    {
      id: "changelog",
      title: "Registro de Cambios",
      items: [
        {
          id: 1,
          title: "Versión 1.0.0",
          content: [
            {
              id: 1,
              type: "text",
              value: `
        Se definió el diseño atómico y se crearon los primeros componentes base, estableciendo una estructura modular
        que permite escalar el proyecto sin perder coherencia. El objetivo fue crear un entorno limpio, con componentes
        reutilizables, tipografía fluida y variables globales que definieran la estética general.`,
            },
            {
              id: 2,
              type: "table",
              value: {
                heads: [
                  { id: 1, title: "Tipo" },
                  { id: 2, title: "Fecha" },
                  { id: 3, title: "Autor" },
                  { id: 4, title: "Cambio" },
                ],
                values: [
                  { id: 1, title: "Feature" },
                  { id: 2, title: "2025-10-16" },
                  { id: 3, title: "J. Ordoñez" },
                  {
                    id: 4,
                    title:
                      "Implementación inicial del frontend con Next.js y Tailwind.",
                  },
                ],
              },
            },
            {
              id: 3,
              type: "text",
              value: `
        Se añadieron los primeros componentes atómicos como botones, textos, inputs y encabezados, cada uno diseñado
        con enfoque accesible y semántico. También se definieron las escalas de espaciado y color, asegurando consistencia
        visual en todas las futuras capas del diseño.`,
            },
          ],
        },
        {
          id: 2,
          title: "Versión 1.1.0",
          content: [
            {
              id: 1,
              type: "text",
              value: `
        Se incorporaron moléculas como botones, campos de formulario y contenedores reutilizables. Estos componentes
        combinan los átomos previamente creados, aplicando principios de composición que mejoran la mantenibilidad.`,
            },
            {
              id: 2,
              type: "table",
              value: {
                heads: [
                  { id: 1, title: "Tipo" },
                  { id: 2, title: "Fecha" },
                  { id: 3, title: "Autor" },
                  { id: 4, title: "Cambio" },
                ],
                values: [
                  { id: 1, title: "Feature" },
                  { id: 2, title: "2025-10-17" },
                  { id: 3, title: "J. Ordoñez" },
                  {
                    id: 4,
                    title:
                      "Creación de moléculas y definición de variables globales en Tailwind.",
                  },
                ],
              },
            },
            {
              id: 3,
              type: "text",
              value: `
        En esta versión también se integró la estructura de tipografía fluida con escalado responsivo, garantizando que
        el diseño se mantuviera equilibrado en distintos tamaños de pantalla. Se ajustaron espaciados internos y márgenes
        mediante una jerarquía visual coherente.`,
            },
          ],
        },
        {
          id: 3,
          title: "Versión 1.2.0",
          content: [
            {
              id: 1,
              type: "text",
              value: `
        Se añadieron templates para las vistas principales, conectando organismos con datos estáticos.
        Este paso marcó el inicio de la estructura de navegación dentro del sitio, definiendo cómo se presentarían las
        secciones clave y cómo interactuarían con los componentes del sistema atómico.`,
            },
            {
              id: 2,
              type: "table",
              value: {
                heads: [
                  { id: 1, title: "Tipo" },
                  { id: 2, title: "Fecha" },
                  { id: 3, title: "Autor" },
                  { id: 4, title: "Cambio" },
                ],
                values: [
                  { id: 1, title: "Feature" },
                  { id: 2, title: "2025-10-18" },
                  { id: 3, title: "J. Ordoñez" },
                  {
                    id: 4,
                    title:
                      "Implementación de templates y sistema de navegación inicial.",
                  },
                ],
              },
            },
            {
              id: 3,
              type: "text",
              value: `
        Se documentó la estructura de carpetas bajo Atomic Design para mantener la trazabilidad y facilitar
        la integración de nuevos componentes. La documentación se convirtió en un punto de referencia para el desarrollo
        futuro, asegurando que cada pieza del sistema se integrara con una lógica clara y reutilizable.`,
            },
          ],
        },
        {
          id: 4,
          title: "Versión 1.3.0",
          content: [
            {
              id: 1,
              type: "text",
              value: `
        Se agregó soporte para modo oscuro y tema dinámico basado en las preferencias del usuario. Se diseñaron
        variables CSS y tokens de color adaptables que reaccionan automáticamente según el sistema operativo, ofreciendo
        una experiencia visual fluida tanto en entornos oscuros como claros.`,
            },
            {
              id: 2,
              type: "table",
              value: {
                heads: [
                  { id: 1, title: "Tipo" },
                  { id: 2, title: "Fecha" },
                  { id: 3, title: "Autor" },
                  { id: 4, title: "Cambio" },
                ],
                values: [
                  { id: 1, title: "Enhancement" },
                  { id: 2, title: "2025-10-18" },
                  { id: 3, title: "J. Ordoñez" },
                  {
                    id: 4,
                    title:
                      "Implementación de modo oscuro con preferencia guardada en localStorage.",
                  },
                ],
              },
            },
            {
              id: 3,
              type: "text",
              value: `
        También se añadieron animaciones suaves entre transiciones de color, mejorando la percepción visual y evitando
        cortes abruptos. Esta actualización marcó un paso importante hacia una interfaz más madura y profesional.`,
            },
          ],
        },
        {
          id: 5,
          title: "Versión 1.4.0",
          content: [
            {
              id: 1,
              type: "text",
              value: `
        Se conectó el frontend con la base de datos MySQL mediante un backend estructurado con controladores,
        middleware y un sistema de rutas modular. Esto permitió gestionar datos de forma centralizada y controlada,
        garantizando integridad en las relaciones entre entidades.`,
            },
            {
              id: 2,
              type: "table",
              value: {
                heads: [
                  { id: 1, title: "Tipo" },
                  { id: 2, title: "Fecha" },
                  { id: 3, title: "Autor" },
                  { id: 4, title: "Cambio" },
                ],
                values: [
                  { id: 1, title: "Integration" },
                  { id: 2, title: "2025-10-19" },
                  { id: 3, title: "J. Ordoñez" },
                  {
                    id: 4,
                    title:
                      "Integración del backend con el frontend y validación de endpoints REST.",
                  },
                ],
              },
            },
            {
              id: 3,
              type: "text",
              value: `
        Se implementaron logs de servidor, middleware de sanitización y validadores personalizados para asegurar la
        protección frente a inyecciones SQL y ataques XSS. Con esto, el proyecto alcanzó un nivel sólido en su capa
        de seguridad y trazabilidad de errores.`,
            },
          ],
        },
      ],
    },

    {
      id: "requirements",
      title: "Objetivos y Requerimientos",
      items: [
        {
          id: 1,
          title: "Objetivo Principal",
          content: [
            {
              id: 1,
              type: "text",
              value:
                "Captar nuevos usuarios mediante SEO, demos y una experiencia visual atractiva; mejorar la retención ofreciendo navegación fluida, accesibilidad y recomendaciones relevantes; y automatizar procesos administrativos (publicación de contenido, gestión multimedia y despliegues) para escalar eficientemente.",
            },
          ],
        },
        {
          id: 2,
          title: "Requerimientos Funcionales Clave",
          content: [
            {
              id: 1,
              type: "text",
              value:
                "El sistema debe ofrecer una administración completa de contenido digital, asegurando flexibilidad y escalabilidad.",
            },
            {
              id: 2,
              type: "list",
              value: [
                {
                  id: 1,
                  text: "Gestión de usuarios con roles diferenciados (admin, editor, visitante).",
                },
                {
                  id: 2,
                  text: "Panel administrativo para crear, editar y eliminar publicaciones.",
                },
                {
                  id: 3,
                  text: "Soporte para carga y visualización de imágenes, audio y video.",
                },
                {
                  id: 4,
                  text: "Sistema de etiquetas (labels_x_post) con manejo de arrays serializados en MySQL.",
                },
                {
                  id: 5,
                  text: "Control de versiones para cada publicación y registro de auditoría.",
                },
              ],
            },
          ],
        },
        {
          id: 3,
          title: "Requerimientos No Funcionales",
          content: [
            {
              id: 1,
              type: "text",
              value:
                "Los aspectos no funcionales se enfocan en la calidad, accesibilidad y seguridad del sistema.",
            },
            {
              id: 2,
              type: "list",
              value: [
                {
                  id: 1,
                  text: "Rendimiento optimizado (puntaje Lighthouse > 90).",
                },
                {
                  id: 2,
                  text: "Uso de SSR (Server Side Rendering) y Lazy Loading de imágenes.",
                },
                {
                  id: 3,
                  text: "Cumplimiento de estándares WCAG 2.1 de accesibilidad.",
                },
                {
                  id: 4,
                  text: "Protección de endpoints mediante CORS y sanitización de entradas.",
                },
                {
                  id: 5,
                  text: "Gestión segura de sesiones y tokens de autenticación.",
                },
                {
                  id: 6,
                  text: "Logs de servidor y monitorización de errores en tiempo real.",
                },
              ],
            },
          ],
        },
      ],
    },

    {
      id: "desicionsArchitectonicas",
      title: "Decisiones Arquitectónicas y Tecnológicas",
      items: [
        {
          id: 1,
          title: "Opciones Clave",
          content: [
            {
              id: 1,
              type: "text",
              value:
                "Se optó por una arquitectura basada en Next.js con SSR para mejorar SEO y rendimiento, combinada con MySQL y procedimientos almacenados para optimizar la gestión de datos complejos. TailwindCSS se eligió por su flexibilidad y rapidez en el desarrollo frontend.",
            },
            {
              id: 2,
              type: "list",
              value: [
                { id: 1, text: "Next.js + MySQL con API Routes integradas" },
                { id: 2, text: "React SPA + API separada en Node" },
                {
                  id: 3,
                  text: "Frameworks Full-Stack como Meteor o RedwoodJS",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          title: "Alternativas Consideradas",
          content: [
            {
              id: 1,
              type: "text",
              value:
                "Se consideraron varias alternativas antes de tomar la decisión final.",
            },
            {
              id: 2,
              type: "table",
              value: {
                heads: [
                  { id: 1, title: "Opción" },
                  { id: 2, title: "Descripción" },
                  { id: 3, title: "¿Por qué no?" },
                ],
                values: [
                  { id: 1, title: "React SPA + API separada en Node" },
                  {
                    id: 2,
                    title:
                      "Arquitectura tradicional de SPA con backend independiente.",
                  },
                  {
                    id: 3,
                    title:
                      "Aumenta la complejidad de despliegue y reduce el SEO debido al renderizado en cliente.",
                  },
                ],
              },
            },

            {
              id: 3,
              type: "table",
              value: {
                heads: [
                  { id: 1, title: "Opción" },
                  { id: 2, title: "Descripción" },
                  { id: 3, title: "¿Por qué no?" },
                ],
                values: [
                  {
                    id: 1,
                    title: "Frameworks Full-Stack como Meteor o RedwoodJS",
                  },
                  {
                    id: 2,
                    title:
                      "Soluciones todo en uno que integran frontend y backend.",
                  },
                  {
                    id: 3,
                    title:
                      "Menor flexibilidad y control sobre componentes específicos, además de una comunidad más pequeña.",
                  },
                ],
              },
            },

            {
              id: 4,
              type: "table",
              value: {
                heads: [
                  { id: 1, title: "Opción" },
                  { id: 2, title: "Descripción" },
                  { id: 3, title: "¿Por qué no?" },
                ],
                values: [
                  { id: 1, title: "Headless CMS con frontend estático" },
                  {
                    id: 2,
                    title:
                      "Uso de CMS como Strapi o Contentful con un frontend estático.",
                  },
                  {
                    id: 3,
                    title:
                      "Limitaciones en personalización y rendimiento dinámico, además de costos asociados al CMS.",
                  },
                ],
              },
            },
          ],
        },
        {
          id: 3,
          title: "Decisión Detallada",
          content: [
            {
              id: 1,
              type: "text",
              value:
                "A continuación se detallan las principales decisiones arquitectónicas y tecnológicas adoptadas en el desarrollo de BloodyYue. Cada elección responde a criterios de escalabilidad, rendimiento, y coherencia con una visión de producto moderno y sostenible.",
            },
            {
              id: 2,
              type: "title",
              value: "Arquitectura Base: Next.js + MySQL con API Routes",
            },
            {
              id: 3,
              type: "text",
              value:
                "Se optó por una arquitectura full-stack integrada en Next.js, aprovechando sus API Routes para construir un backend ligero y coherente con el entorno frontend. Esto elimina la necesidad de servidores externos (como Express) y reduce el tiempo de despliegue al centralizar la aplicación en un solo stack. MySQL fue elegido como gestor relacional por su estabilidad, soporte maduro y compatibilidad con relaciones complejas (por ejemplo, 'labels_x_post').",
            },
            {
              id: 4,
              type: "text",
              value:
                "Esta combinación permite un flujo de desarrollo ágil: los endpoints se definen directamente dentro del proyecto Next.js, facilitando la comunicación con el frontend mediante fetch asíncrono, y garantizando una arquitectura mantenible y escalable sin recurrir a microservicios innecesarios.",
            },
          ],
        },
        {
          id: 4,
          title: "Stack Tecnológico Principal",
          content: [
            {
              id: 1,
              type: "text",
              value:
                "Se seleccionaron tecnologías que optimizan el desarrollo, rendimiento y escalabilidad del proyecto.",
            },
            {
              id: 2,
              type: "title",
              value: "Frontend",
            },
            {
              id: 3,
              type: "text",
              value:
                "Next.js con TailwindCSS y Framer Motion para una UI rápida, responsiva y animada.",
            },
            {
              id: 4,
              type: "list",
              value: [
                { id: 1, text: "Next.js 15" },
                { id: 2, text: "TailwindCSS" },
                { id: 3, text: "Framer Motion" },
              ],
            },
            {
              id: 5,
              type: "title",
              value: "Backend",
            },
            {
              id: 6,
              type: "text",
              value:
                "Next.js API Routes con Node.js y Express para manejar lógica del servidor y endpoints RESTful.",
            },
            {
              id: 7,
              type: "list",
              value: [
                { id: 1, text: "Next.js API Routes" },
                { id: 2, text: "Node.js" },
                { id: 3, text: "Express Middleware" },
              ],
            },
            {
              id: 8,
              type: "title",
              value: "Base de Datos",
            },
            {
              id: 9,
              type: "text",
              value:
                "MySQL como sistema de gestión de bases de datos relacional.",
            },
            {
              id: 10,
              type: "list",
              value: [
                { id: 1, text: "MySQL" },
                { id: 2, text: "Procedimientos almacenados" },
                { id: 3, text: "PlanetScale (opcional)" },
              ],
            },
            {
              id: 11,
              type: "title",
              value: "Vercel - Plataforma e Infraestructura (Logística)",
            },
            {
              id: 12,
              type: "text",
              value:
                "Se eligió una plataforma que facilita el despliegue continuo, escalabilidad automática y optimización de recursos.",
            },
            {
              id: 13,
              type: "text",
              value:
                "Ofrece integración nativa con Next.js, despliegue automático desde GitHub, y escalabilidad sin complicaciones.",
            },
          ],
        },
      ],
    },

    {
      id: "technicalDetails",
      title: "Detalles Técnicos y de Implementación",
      items: [
        {
          id: 1,
          title: "Patrones de Diseño",
          content: [
            {
              id: 1,
              type: "text",
              value:
                "Descripción de la estructura del código y los patrones de diseño utilizados en el proyecto.",
            },
            {
              id: 2,
              type: "table",
              value: {
                heads: [
                  { id: 1, title: "Nombre" },
                  { id: 2, title: "Descripción" },
                ],
                values: [
                  { id: 1, title: "Patrón de Diseño: Componente" },
                  {
                    id: 2,
                    title:
                      "Cada parte de la UI se implementa como un componente reutilizable.",
                  },
                ],
              },
            },
            {
              id: 3,
              type: "table",
              value: {
                heads: [
                  { id: 1, title: "Nombre" },
                  { id: 2, title: "Descripción" },
                ],
                values: [
                  { id: 1, title: "Patrón de Diseño: Contenedor" },
                  {
                    id: 2,
                    title:
                      "Los componentes se agrupan en contenedores para gestionar el estado y la lógica.",
                  },
                ],
              },
            },
            {
              id: 4,
              type: "table",
              value: {
                heads: [
                  { id: 1, title: "Nombre" },
                  { id: 2, title: "Descripción" },
                ],
                values: [
                  { id: 1, title: "Patrón de Diseño: Presentación" },
                  {
                    id: 2,
                    title:
                      "Los contenedores se encargan de la lógica, mientras que los componentes de presentación se centran en la UI.",
                  },
                ],
              },
            },
          ],
        },
        {
          id: 2,
          title: "Estructura del Código",
          content: [
            {
              id: 1,
              type: "text",
              value:
                "Descripción de la estructura del código y los patrones de diseño utilizados en el proyecto.",
            },
            {
              id: 2,
              type: "code",
              language: "markdown",
              value: `
/src
 ├─ /app                     # App Router (Next.js)
 │   ├─ layout.tsx           # Layout global (Header, Footer, ThemeProvider)
 │   ├─ page.tsx             # Home (/inicio → por defecto en Next.js)
 │   ├─ /proyectos
 │   │   ├─ page.tsx
 │   │   └─ [id]/page.tsx
 │   └─ /blog
 │       ├─ page.tsx
 │       └─ [slug]/page.tsx
 │
 ├─ /ui                      # ATOMIC DESIGN
 │   ├─ /atoms
 │   ├─ /molecules
 │   └─ /organisms
 │
 ├─ /sections                # FSD Adaptado
 │   ├─ /inicio
 │   ├─ /proyectos
 │   ├─ /sobre-mi
 │   ├─ /habilidades
 │   ├─ /blog
 │   └─ /contacto
 │
 ├─ /shared                  # Hooks, utils, config, constants
 ├─ /content                 # Blog (MDX), proyectos.json, testimonios.json
 └─ /styles                  # globals.css, tailwind.css`,
            },
          ],
        },
        {
          id: 3,
          title: "Nomenclatura",
          content: [
            {
              id: 1,
              type: "list",
              value: [
                { id: 1, text: "Archivos y carpetas en kebab-case" },
                { id: 2, text: "IDs en camelCase" },
                { id: 3, text: "Componentes React en PascalCase" },
              ],
            },
          ],
        },
        {
          id: 4,
          title: "Componentes, Módulos o Algoritmos Notables",
          content: [
            {
              id: 1,
              type: "title",
              value: "Algoritmo de búsqueda dinámica",
            },
            {
              id: 2,
              type: "text",
              value:
                "Algoritmo que permite filtrar los proyectos por etiquetas de forma dinámica.",
            },
            {
              id: 3,
              type: "code",
              language: "javascript",
              value: `
import { useState } from 'react';

function SearchableVideoList({ videos }) {
    return (
        <div>
            <input type="text" placeholder="Buscar" onChange={handleSearch} />
        </div>
    )
}`,
            },
          ],
        },
        {
          id: 5,
          title: "Componente de visualización de proyectos",
          content: [
            {
              id: 1,
              type: "text",
              value:
                "Componente que permite visualizar los proyectos de forma dinámica.",
            },
            {
              id: 2,
              type: "code",
              language: "javascript",
              value: `
import { useState } from 'react';

function SearchableVideoList({ videos }) {
    return (
        <div>
            <input type="text" placeholder="Buscar" onChange={handleSearch} />
        </div>
    )
}`,
            },
          ],
        },
        {
          id: 6,
          title: "Servicios Externos",
          content: [
            {
              id: 1,
              type: "title",
              value: "API de proyectos",
            },
            {
              id: 2,
              type: "text",
              value: "API que permite obtener los proyectos de forma dinámica.",
            },
          ],
        },
        {
          id: 7,
          title: "API del proyecto",
          content: [
            {
              id: 1,
              type: "text",
              value: "API que permite obtener los proyectos de forma dinámica.",
            },
          ],
        },
        {
          id: 8,
          title: "Testing y Calidad del Código",
          content: [
            {
              id: 1,
              type: "text",
              value:
                "Testing funcional mediante pruebas manuales + Jest para componentes clave.",
            },
            {
              id: 2,
              type: "title",
              value: "Herramientas",
            },
            {
              id: 3,
              type: "list",
              value: [
                { id: 1, text: "Jest" },
                { id: 2, text: "React Testing Library" },
                { id: 3, text: "Lighthouse" },
              ],
            },
            {
              id: 4,
              type: "title",
              value: "Calidad",
            },
            {
              id: 5,
              type: "text",
              value:
                "El código se mantiene con métricas de legibilidad y rendimiento en tiempo real.",
            },
          ],
        },
      ],
    },

    {
      id: "retrospective",
      title: "Retrospectiva",
      items: [
        {
          id: 1,
          title: "Logros Principales",
          content: [
            {
              id: 1,
              type: "title",
              value: "A nivel de proyecto",
            },
            {
              id: 2,
              type: "text",
              value: "Base sólida para escalabilidad futura.",
            },
            {
              id: 3,
              type: "list",
              value: [
                { id: 1, text: "Base sólida para escalabilidad futura." },
                {
                  id: 2,
                  text: "Integración fluida de arquitectura Atomic con Next.js.",
                },
              ],
            },
            {
              id: 4,
              type: "title",
              value: "A nivel personal",
            },
            {
              id: 5,
              type: "text",
              value:
                "Profundización en arquitectura SSR y gestión avanzada de MySQL.",
            },
            {
              id: 6,
              type: "list",
              value: [
                {
                  id: 1,
                  text: "Profundización en arquitectura SSR y gestión avanzada de MySQL.",
                },
                {
                  id: 2,
                  text: "Mejora en la organización modular de componentes.",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          title: "Desafíos y Complicaciones",
          content: [
            {
              id: 1,
              type: "title",
              value: "Mayor Desafío Técnico",
            },
            {
              id: 2,
              type: "text",
              value:
                "Optimización de consultas SQL con procedimientos almacenados y su integración en Next.js.",
            },
            {
              id: 3,
              type: "title",
              value: "Desafíos no técnicos",
            },
            {
              id: 4,
              type: "text",
              value:
                "Gestión de tiempo entre desarrollo, documentación y diseño visual.",
            },
          ],
        },
        {
          id: 3,
          title: "Aprendizajes Clave",
          content: [
            {
              id: 1,
              type: "title",
              value: "Tecnologías Nuevas",
            },
            {
              id: 2,
              type: "list",
              value: [
                { id: 1, text: "Next.js avanzado" },
                { id: 2, text: "Framer Motion" },
                { id: 3, text: "MySQL Procedures." },
              ],
            },
            {
              id: 3,
              type: "title",
              value: "Conceptos o Habilidades",
            },
            {
              id: 4,
              type: "text",
              value: "Atomic Design aplicado a entornos SSR.",
            },
            {
              id: 5,
              type: "title",
              value: "Soft Skills",
            },
            {
              id: 6,
              type: "text",
              value:
                "Gestión de versiones efectiva, Comunicación técnica clara, Documentación estructurada.",
            },
          ],
        },
        {
          id: 4,
          title: "¿Qué Haría Diferente la Próxima Vez?",
          content: [
            {
              id: 1,
              type: "title",
              value: "Tecnológicas",
            },
            {
              id: 2,
              type: "text",
              value: "Adoptar TypeScript desde el inicio.",
            },
            {
              id: 3,
              type: "title",
              value: "De Proceso",
            },
            {
              id: 4,
              type: "text",
              value: "Mejorar la organización de tareas y documentación.",
            },
            {
              id: 5,
              type: "list",
              value: [
                { id: 1, text: "Adoptar TypeScript desde el inicio." },
                {
                  id: 2,
                  text: "Mejorar la organización de tareas y documentación.",
                },
              ],
            },
          ],
        },
        {
          id: 5,
          title: "Vision Futura",
          content: [
            {
              id: 1,
              type: "text",
              value:
                "Escalar BloodyYue hacia una plataforma de portafolios interactivos con experiencias visuales en tiempo real, integrando WebGL y un sistema de usuarios completo",
            },
            {
              id: 2,
              type: "title",
              value: "Tecnológicas",
            },
            {
              id: 3,
              type: "text",
              value: "Adoptar TypeScript desde el inicio.",
            },
            {
              id: 4,
              type: "title",
              value: "De Proceso",
            },
            {
              id: 5,
              type: "text",
              value: "Mejorar la organización de tareas y documentación",
            },
            {
              id: 6,
              type: "list",
              value: [
                { id: 1, text: "Adoptar TypeScript desde el inicio." },
                {
                  id: 2,
                  text: "Mejorar la organización de tareas y documentación.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default bloodyyueDoc;
