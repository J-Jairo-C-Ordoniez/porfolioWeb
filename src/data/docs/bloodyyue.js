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
      alt: "Logo institucional",
      link: "/docs/bloodyyue",
    },

    menu: [
      {
        id: 1,
        text: "Código Fuente",
        href: "https://github.com/jjairoordonez/bloodyyue",
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
      "Una plataforma personalizada hecha a medida para la artista BloodyYue. Un espacio donde ella puede gestionar, mostrar y vender su arte digital con total control, sin depender de redes sociales o intermediarios.",
    Btn: { id: 1, text: "Ver Detalles", icon: "FileText" },
    link: { id: 2, text: "Ver Galería", icon: "Image", href: "#gallery" },

    tecnologies: [
      { id: 1, text: "Next.js", color: "#607D8B" },
      { id: 2, text: "TailwindCSS", color: "#38BDF8" },
      { id: 3, text: "Node.js", color: "#8CC84B" },
      { id: 4, text: "Express.js", color: "#607D8B" },
      { id: 5, text: "MySQL", color: "#FF5722" },
    ]
  },

  documentation: [
    {
      id: "start",
      title: "Introducción",
      items: [
        {
          id: 1,
          title: "El Problema",
          content: [
            {
              id: 1,
              type: "text",
              value:
                "Vender arte digital hoy en día es difícil. Las redes sociales están saturadas y sus algoritmos hacen que el trabajo de artistas como BloodyYue se pierda entre tanto contenido, quitándoles el control sobre quién ve su arte y cómo lo vende."
            },
            {
              id: 2,
              type: "text",
              value:
                "Depender de plataformas externas es arriesgado. Se pierde el control de los datos, los derechos de autor son vulnerables y no siempre es el entorno más seguro para vender. Hacía falta un lugar propio que uniera comunidad, exposición y ventas de forma honesta y segura.",
            },
            {
              id: 3,
              type: "text",
              value:
                "En resumen: faltaba un espacio confiable donde la artista pudiera manejar su carrera y sus obras sin las restricciones de las grandes plataformas.",
            },
          ],
        },
        {
          id: 3,
          title: "Solución",
          content: [
            {
              id: 1,
              type: "text",
              value:
                "Creé BloodyYue como una respuesta directa a estos retos. Diseñé un sistema donde la artista tiene el mando absoluto, donde su trabajo está protegido y puede conectar con su público sin ruidos externos, priorizando su independencia creativa.",
            },
          ],
        },
        {
          id: 4,
          title: "Resultados",
          content: [
            {
              id: 1,
              type: "text",
              value:
                "El resultado es una plataforma rápida, bonita y fácil de usar. Un sitio que refleja el estilo visual de BloodyYue y que funciona bien, uniendo diseño y técnica de forma natural.",
            },
          ],
        },
      ],
    },

    {
      id: "overview",
      title: "Objetivos del Proyecto",
      items: [
        {
          id: 1,
          title: "Objetivo",
          content: [
            {
              id: 1,
              type: "text",
              value:
                "Diseñar un sitio a medida para BloodyYue que le permita organizar todo su trabajo de forma centralizada, facilitar sus ventas y presentar una imagen profesional y sólida que mezcle técnica y arte.",
            },
          ],
        },
        {
          id: 2,
          title: "Metas Clave",
          content: [
            {
              id: 1,
              type: "list",
              value: [
                { id: 1, text: "Hacer más fácil el acceso a su catálogo y catálogos de precios." },
                { id: 2, text: "Crear filtros sencillos para manejar pedidos complejos." },
                { id: 3, text: "Tener un panel de control para ver cómo van las ventas y métricas." },
                { id: 4, text: "Centralizar los mensajes y el seguimiento de cada pedido." },
                { id: 5, text: "Mantener una estética única y profesional en toda la plataforma." }
              ]
            }
          ]
        },
        {
          id: 3,
          title: "Alcance",
          content: [
            {
              id: 1,
              type: "text",
              value:
                "El sistema ha sido diseñado específicamente como el punto de encuentro exclusivo entre la artista BloodyYue y su audiencia. La plataforma permite:",
            },
            {
              id: 2,
              type: "list",
              value: [
                {
                  id: 1,
                  text: "Mostrar el portafolio artístico con categorías, post, testimonios y descripciones.",
                },
                {
                  id: 2,
                  text: "Publicar información sobre precios y políticas de comisiones.",
                },
                {
                  id: 3,
                  text: "Implementar un panel administrativo para la gestión de obras, mensajes y ventas.",
                },
                {
                  id: 4,
                  text: "Ofrecer una experiencia visual coherente con la identidad artística de BloodyYue, optimizada para cualquier dispositivo.",
                },
                {
                  id: 5,
                  text: "Mensajería en tiempo real y contacto por formularios y correo.",
                },
              ],
            },
          ],
        },
        {
          id: 4,
          title: "Limitaciones",
          content: [
            {
              id: 1,
              type: "list",
              value: [
                {
                  id: 1,
                  text: "No se desarrollará una aplicación móvil nativa, solo versión web responsive.",
                },
                {
                  id: 2,
                  text: "Las métricas avanzadas de analítica (como seguimiento de usuarios) quedarán para una fase posterior.",
                }
              ],
            },
          ],
        },
      ],
    },

    {
      id: "architecturalDecisions",
      title: "Arquitectura general del sistema y Tecnologías",
      items: [
        {
          id: 1,
          title: "Arquitectura propuesta",
          content: [
            {
              id: 1,
              type: "text",
              value:
                "Para BloodyYue, usaremos una arquitectura modular y escalable, separando claramente las capas: Usuario ⇄ Frontend ⇄ Backend ⇄ Base de datos ",
            }
          ],
        },
        {
          id: 2,
          title: "Frontend",
          content: [
            {
              id: 1,
              type: "title",
              value: "Framework",
            },
            {
              id: 2,
              type: "list",
              value: [
                { id: 1, text: "Next.js" }
              ],
            },
            {
              id: 3,
              type: "title",
              value: "Estilos",
            },
            {
              id: 4,
              type: "list",
              value: [
                { id: 1, text: "Tailwind CSS" },
                { id: 2, text: "Framer Motion" }
              ],
            },
            {
              id: 5,
              type: "title",
              value: "Arquitectura: Atomic Design",
            },
            {
              id: 6,
              type: "list",
              value: [
                { id: 1, text: "Renderizar la interfaz del sitio (portafolio, contacto, galería, políticas, etc.)" },
                { id: 2, text: "Conectarse con el backend mediante API REST." },
                { id: 3, text: "Manejar rutas públicas (home, portafolio, contacto) y privadas (dashboard de la artista)." },
                { id: 4, text: "Implementar componentes reutilizables (átomos, moléculas, organismos, plantillas)." }
              ],
            },
          ],
        },
        {
          id: 3,
          title: "Backend",
          content: [
            {
              id: 1,
              type: "title",
              value: "Tecnologías base",
            },
            {
              id: 2,
              type: "list",
              value: [
                { id: 1, text: "Node.js" },
                { id: 2, text: "Express" }
              ],
            },
            {
              id: 3,
              type: "title",
              value: "Arquitectura: Modelo-Vista-Controlador (MVC).",
            },
            {
              id: 4,
              type: "list",
              value: [
                { id: 1, text: "Servir los datos al frontend mediante endpoints REST." },
                { id: 2, text: "Gestionar la lógica de negocio (ventas, solicitudes, contacto, autenticación)." },
                { id: 3, text: "Controlar validaciones y seguridad básica (tokens, sanitización de inputs)." },
                { id: 4, text: "Conectarse con la base de datos MySQL." }
              ],
            },
            {
              id: 5,
              type: "title",
              value: "Capas dentro del backend",
            },
            {
              id: 6,
              type: "list",
              value: [
                { id: 1, text: "Middlewares: reciben peticiones del frontend antes que los controladores como capa de seguridad." },
                { id: 2, text: "Controladores: reciben peticiones del frontend." },
                { id: 3, text: "Servicios: ejecutan la lógica (por ejemplo, crear venta, filtrar mensajes)." },
                { id: 4, text: "Modelos: interactúan directamente con la base de datos." },
                { id: 5, text: "Rutas: exponen los endpoints REST (ejemplo: /api/artworks, /api/sales)." }
              ],
            },
          ],
        },
      ],
    },

    {
      id: "nonFunctionalRequirements",
      title: "Especificaciones Técnicas",
      items: [
        {
          id: 1,
          title: "Eficiencia Operativa (Performance)",
          content: [
            {
              id: 1,
              type: "list",
              value: [
                { id: 1, text: "Latencia de respuesta en endpoints REST inferior a 300ms bajo condiciones operativas estándar." },
                { id: 2, text: "Tiempo de carga de interfaz crítica (First Contentful Paint) inferior a 2 segundos en redes móviles 4G." },
                { id: 3, text: "Soporte de concurrencia mínima de 200 usuarios simultáneos sin degradación de la experiencia de usuario." },
                { id: 4, text: "Implementación de estrategias de renderizado híbrido (ISR/SSR) para la optimización de SEO y performance." },
                { id: 5, text: "Optimización de activos visuales mediante compresión adaptativa y servicio según resolución de dispositivo." }
              ]
            }
          ]
        },
        {
          id: 2,
          title: "Modularidad y Escalabilidad",
          content: [
            {
              id: 1,
              type: "list",
              value: [
                { id: 1, text: "Arquitectura desacoplada que permite la extensión de funcionalidades sin comprometer la estabilidad del núcleo." },
                { id: 2, text: "Capacidad de expansión del catálogo mediante indexación eficiente sin impacto en tiempos de consulta." },
                { id: 3, text: "Sistema de diseño atómico que permite la incorporación de nuevas vistas manteniendo la integridad visual." }
              ]
            }
          ]
        },
        {
          id: 3,
          title: "Seguridad y Gobernanza de Datos",
          content: [
            {
              id: 1,
              type: "list",
              value: [
                { id: 1, text: "Encriptación de tráfico extremo a extremo mediante protocolos TLS/SSL (HTTPS)." },
                { id: 2, text: "Implementación de políticas de sanitización y validación de esquemas de entrada en la capa de servicios." },
                { id: 3, text: "Control de acceso basado en roles y permisos para la segregación de privilegios administrativos." },
                { id: 4, text: "Gestión de sesiones mediante tokens JWT con mecanismos de expiración y renovación controlada." },
                { id: 5, text: "Mitigación de vectores de ataque de fuerza bruta mediante rate limiting en endpoints de autenticación." }
              ]
            }
          ]
        },
        {
          id: 4,
          title: "Accesibilidad y UX Técnica",
          content: [
            {
              id: 1,
              type: "list",
              value: [
                { id: 1, text: "Cumplimiento de estándares de accesibilidad WCAG 2.1 nivel AA." },
                { id: 2, text: "Retroalimentación háptica y visual instantánea para todos los estados de interacción del sistema." },
                { id: 3, text: "Validación semántica de formularios con mensajes de error accesibles y preventivos." },
                { id: 4, text: "Jerarquía de contenido estructurada para facilitar la navegación asistida por lectores de pantalla." }
              ]
            }
          ]
        }
      ]
    },

    {
      id: "databaseDesign",
      title: "Esquema de Datos",
      items: [
        {
          id: 1,
          title: "Diccionario de Datos",
          content: [
            {
              id: 1,
              type: "text",
              value: "Definición técnica de las entidades y atributos que componen el modelo de persistencia del sistema."
            },
            {
              id: 2,
              type: "list",
              value: [
                { id: 1, text: "Settings: Configuraciones dinámicas, identidad visual y políticas de plataforma." },
                { id: 2, text: "Users: Gestión de identidad, perfiles de usuario y roles de acceso." },
                { id: 3, text: "Codes: para la verificación de identidad y recuperación de acceso." },
                { id: 4, text: "Roles: Definición de privilegios y niveles de autoridad en el sistema." },
                { id: 5, text: "Permits: Granularidad de acciones permitidas para cada rol administrativo." },
                { id: 6, text: "Testimonies: testimonios de clientes." },
                { id: 7, text: "Labels: Etiquetas para post y comissions." },
                { id: 8, text: "Commissions: Especificaciones, precios y estados del catálogo transaccional." },
                { id: 9, text: "CartItems: Persistencia de ítems en proceso de adquisición." },
                { id: 10, text: "Sales: Registro histórico de transacciones y conciliación de pagos." },
                { id: 11, text: "detailsSale: Trazabilidad del estado de entrega y procesamiento de pedidos." },
                { id: 12, text: "Posts: Gestión de contenido dinámico y comunicación interactiva." }
              ]
            }
          ]
        }
      ]
    },

    {
      id: "retrospective",
      title: "Retrospectiva",
      items: [
        {
          id: 1,
          title: "Más que una landing, un sistema",
          content: [
            {
              id: 1,
              type: "text",
              value:
                "Lo que comenzó como una simple landing visual terminó siendo una plataforma completa. Esto me obligó a repensar la arquitectura, la seguridad y cómo fluyen los datos."
            },
          ],
        },
        {
          id: 2,
          title: "Abordar soluciones",
          content: [
            {
              id: 1,
              type: "text",
              value:
                "Separar bien el frontend, el backend y los módulos de negocio me permitió reducir el desorden y facilitar las pruebas. Entendí que la arquitectura no es algo teórica que solo suena bien, sino una herramienta necesaria para que nada se rompa al crecer."
            },
          ],
        },
        {
          id: 3,
          title: "Problemas, errores y aprendizaje",
          content: [
            {
              id: 1,
              type: "text",
              value:
                "Lidiar con cookies, tokens y HTTPS me enseñó cómo decide el navegador y cómo viaja la información de forma segura. Cada error que corregí fue una capa más de aprendizaje sobre qué implica desarrollar una plataforma, algunos de los retos fueron:",
            },
            {
              id: 2,
              type: "text",
              value:
                "Primero, la gestión de autenticación fue una batalla real. Me enfrenté a tokens de acceso y de refresco que no se comportaban como esperaba; las cookies 'llegaban' al cliente pero el navegador, en un silencio conspirador, se negaba a guardarlas. Descubrí que la causa real era un simple 'fetch' sin credentials: 'include' y un HTTPS local mal configurado que chocaba con los certificados CA. Ahí entendí que, aunque el backend esté perfecto, el navegador es quien decide qué es seguro y qué no.",
            },
            {
              id: 3,
              type: "text",
              value:
                "Luego vino el 'boss final' del proyecto: el HTTPS local. Las cookies httpOnly no persistían y Chrome ignoraba mis certificados. Resulta que tenía mkcert instalado dos veces (npm vs sistema) y la CA no estaba bien configurada. Al final, logré levantar tanto la API como el frontend con HTTPS real, haciendo que las cookies funcionaran exactamente como en producción.",
            },
            {
              id: 4,
              type: "text",
              value:
                "También hubo momentos tensos entre WebSockets y HTTP. De pronto, el chat empezó a causar errores inesperados en endpoints normales, incluso sin sockets activos. La causa era Socket.io interceptando flujos y un navegador con sesiones viejas y caché persistente. ¿La solución inesperada? Probar en otro navegador. Aprendí que no todo error está en el código; a veces es solo 'estado fantasma' del cliente.",
            },
            {
              id: 5,
              type: "text",
              value:
                "A medida que el proyecto crecía, lidié con una arquitectura de API que ya no cabía en un solo archivo. Había mucha lógica mezclada y era difícil de mantener. Decidí separar la API por módulos de negocio, con un index por módulo y queries separadas por intención (GET, POST, etc.). Esto convirtió el backend en algo mantenible y predecible.",
            },
            {
              id: 6,
              type: "text",
              value:
                "En cuanto al diseño, el gran reto fue el equilibrio. Tenía demasiadas secciones gráficas juntas que hacían la landing pesada visualmente. Opté por alternar secciones gráficas y textuales, usando cards para dar un ritmo visual y manteniendo la identidad oscura y minimalista. El resultado fue un diseño con respiración visual, no solo algo que se viera bonito.",
            },
            {
              id: 7,
              type: "text",
              value:
                "Pero el aprendizaje transversal más importante fue aprender a manejar conceptos técnicos que aún no dominaba completamente y, aun así, ser capaz de avanzar. Entendí que el verdadero valor está en descifrar el problema sobre la marcha.",
            },
          ],
        },
        {
          id: 4,
          title: "Equilibrio entre diseño y función",
          content: [
            {
              id: 1,
              type: "text",
              value:
                "Busqué que el sitio fuera coherente visualmente sin sacrificar la velocidad ni la facilidad de uso. Aprendí que el buen diseño no es solo 'verlo bonito', sino comunicar orden, intención y profesionalismo."
            },
          ],
        },
        {
          id: 6,
          title: "Errores, paciencia y método",
          content: [
            {
              id: 1,
              type: "text",
              value:
                "Desde bugs difíciles hasta configuraciones complejas, este proyecto me exigió mucha paciencia. Me ayudó a interiorizar que los problemas en programación no se evitan, se entienden y se resuelven con método."
            },
          ],
        },
        {
          id: 7,
          title: "De prototipo a producto",
          content: [
            {
              id: 1,
              type: "text",
              value:
                "BloodyYue hoy es funcional, seguro y escalable. No lo veo como un simple prototipo, sino como un producto real que está listo para ser usado por un cliente de verdad."
            },
          ],
        },
        {
          id: 8,
          title: "Mi aprendizaje principal",
          content: [
            {
              id: 1,
              type: "text",
              value:
                "Este proyecto me dejó una lección grabada: programar no es solo escribir código que funcione hoy, es tomar decisiones que sigan funcionando mañana."
            },
          ],
        }
      ],
    },
  ],
};

export default bloodyyueDoc;
