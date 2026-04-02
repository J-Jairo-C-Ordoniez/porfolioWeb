export const bloodyyueDoc = {
  id: "bloodyyue",
  title: "BloodyYue",
  description: "Plataforma web personalizada que permite a la artista digital BloodyYue gestionar su portafolio, ventas y comunicación con clientes de manera centralizada y segura.",
  avatar: "/logo.svg",
  url: "https://bloodyyue.com",

  documentation: [
    {
      id: "hero",
      title: "Hero",
      items: [
        {
          id: 1,
          title: "Resumen del Proyecto",
          content: [
            {
              id: 1,
              type: "image",
              value: "/logo.svg",
              alt: "BloodyYue Platform"
            },
            {
              id: 2,
              type: "text",
              value: "BloodyYue es una plataforma integral diseñada para que la artista digital gestione de forma independiente su portafolio, el proceso de sus comisiones y la comunicación directa con sus clientes, brindando una experiencia profesional y asegurando su completa independencia creativa."
            },
            {
              id: 3,
              type: "buttons",
              value: [
                { text: "Visitar Demo", href: "https://bloodyyue.com" },
                { text: "Repositorio Web", href: "#" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "vision",
      title: "Contexto Visual y Negocio",
      items: [
        {
          id: 1,
          title: "El Desafío del Arte Digital",
          content: [
            {
               id: 1,
               type: "text",
               value: "En la actualidad, vender arte digital se ha convertido en un desafío constante para los artistas independientes. Las redes sociales, aunque ofrecen alcance global, se han transformado en un espacio saturado donde la visibilidad depende de algoritmos opacos y de la inversión en publicidad."
            },
            {
               id: 2,
               type: "quote",
               value: "Muchos artistas digitales dependen casi por completo de plataformas externas, lo que los deja expuestos a la pérdida de control, pérdida de derechos sobre su contenido y fraude."
            },
            {
               id: 3,
               type: "text",
               value: "En síntesis, el principal problema detectado fue la falta de un canal confiable, transparente y equitativo para conectar con compradores y gestionar colecciones libremente."
            }
          ]
        },
        {
          id: 2,
          title: "La Solución",
          content: [
            {
               id: 1,
               type: "text",
               value: "BloodyYue nace como respuesta a esta problemática. Su objetivo central es construir un entorno digital donde la artista homónima pueda mostrar, vender y proteger su trabajo bajo sus propios términos, blindando la trazabilidad y la independencia creativa."
            }
          ]
        }
      ]
    },
    {
       id: "goals",
       title: "Fundamentos y Objetivos",
       items: [
          {
             id: 1,
             title: "Objetivo General",
             content: [
                {
                   id: 1,
                   type: "text",
                   value: "Diseñar y desarrollar una plataforma web personalizada que unifique presencia profesional, catálogo de comisiones, interacciones limitadas al comercio y gestión interna mediante roles (Común vs Admin)."
                }
             ]
          },
          {
             id: 2,
             title: "Mejoras Clave a Implementar",
             content: [
                {
                   id: 1,
                   type: "list",
                   value: [
                      { id: 1, text: "Mejorar la experiencia del cliente incorporando filtros de seriedad, solicitud condicionada y testimonios certificados." },
                      { id: 2, text: "Optimizar la gestión de la artista dotándola con un panel interno para métricas, facturación y bandeja controlada de mensajes." },
                      { id: 3, text: "Diferenciar su marca comercial aplicando la metodología Atomic Design y animaciones sutiles (branding)." },
                      { id: 4, text: "Construir todo lo anterior en una arquitectura moderna MVC altamente mantenible." }
                   ]
                }
             ]
          }
       ]
    },
    {
       id: "architecture",
       title: "Diseño y Arquitectura",
       items: [
          {
             id: 1,
             title: "Patrón Arquitectónico Estricto",
             content: [
                {
                   id: 1,
                   type: "text",
                   value: "A diferencia de diseños estáticos, este modelo adoptó una separación modular severa:"
                },
                {
                   id: 2,
                   type: "code",
                   value: "Usuario ⇄ Frontend ⇄ Backend ⇄ Base de datos"
                }
             ]
          },
          {
             id: 2,
             title: "Tecnologías por Roles",
             content: [
                {
                   id: 1,
                   type: "table",
                   headers: ["Capa del Sistema", "Definición Tecnológica", "Responsabilidad Asignada"],
                   rows: [
                      ["Frontend", "Next.js + TailwindCSS + Atomic Design", "Renderizar UI (átomos, moléculas, plantillas), manejar rutas blindadas y componentes CSR/SSR."],
                      ["Backend", "Node.js + Express (API REST)", "Recepcionar peticiones del usuario, sanitización (Middlewares) y ejecución sobre la DB pura."],
                      ["Database", "MySQL (Enfoque Relacional)", "Soporte absoluto para transacciones ACID, evitando colisión de chat e historiales."]
                   ]
                }
             ]
          },
          {
             id: 3,
             title: "Flujo Lógico Inter-capas Orientado",
             content: [
                {
                   id: 1,
                   type: "code",
                   value: `    Frontend (Next.js)      
        ↓   (HTTP request) 
    Backend (Node.js / Express)      
        ↓   (SQL queries) 
    Base de datos (MySQL)`
                }
             ]
          }
       ]
    },
    {
       id: "nonFunctional",
       title: "Requisitos Mínimos (Performance y UX)",
       items: [
          {
             id: 1,
             title: "Métricas Base Comprometidas",
             content: [
                {
                   id: 1,
                   type: "list",
                   value: [
                      { id: 1, text: "Rendimiento Límite: Cargas de FCP < 2 segundos, APIs con latencia inferior a los 300ms a 200 CCU." },
                      { id: 2, text: "Escalabilidad Frontend: Diseño modular enfocado para evitar rupturas de estilos al añadir catálogos inmensos." },
                      { id: 3, text: "Seguridad Perimetral: HTTPS forzado en producciones, Hash criptográfico en passwords, Tokens de rotación JWT y Rate-Limitings." },
                      { id: 4, text: "UX Estricta A11Y: Validación semántica y accesibilidad nivel AA (WCAG 2.1) indispensable." }
                   ]
                }
             ]
          }
       ]
    },
    {
       id: "database",
       title: "Agrupación del Modelo de Datos",
       items: [
          {
             id: 1,
             title: "Subsistemas Integrados Globalmente",
             content: [
                {
                   id: 1,
                   type: "table",
                   headers: ["Subsistema Dominante", "Entidades a Controlar"],
                   rows: [
                      ["Autenticación y Perfil", "Users, Roles, Permits, rolXpermits, Notifications"],
                      ["Marketing Artístico", "Posts, typePosts, Labels, labelsXposts, PostsReactions"],
                      ["Transacciones Monetarias", "Commissions, labelsXcommissions, Cart, CartItems, Sales, detailsSale"],
                      ["Comunicación Restringida", "Chats, ChatsItems, Testimonies"],
                      ["Configuraciones Globales", "Settings (Textos del portafolio, Hero, SEO dinámico)"]
                   ]
                }
             ]
          },
          {
             id: 2,
             title: "Detalles Críticos de Integridad",
             content: [
                {
                   id: 1,
                   type: "list",
                   value: [
                      { id: 1, text: "CartItems restringe rigurosamente los pedidos: ['selected', 'unavailable', 'discarded', 'purchased']." },
                      { id: 2, text: "Los sistemas de Chat quedan automáticamente inactivos a menos que intervenga un registro en proceso sobre la base de Sales." },
                      { id: 3, text: "El Rol común no puede interactuar jamás con otros usuarios comunes, imposibilitando spam entre ellos mismos." }
                   ]
                }
             ]
          }
       ]
    }
  ]
};

export default bloodyyueDoc;
