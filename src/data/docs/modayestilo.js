export const modayestiloDoc = {
  id: "modayestilo",
  title: "Moda y Estilo",
  description: "Sistema integral de Gestión de Catálogo e Inventario, proporcionando una vitrina digital pública y un panel administrativo avanzado.",
  avatar: "/Logo.svg",
  url: "https://moda-estilo-phi.vercel.app/",

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
                   value: "/projects/modayestilo/others/home.png",
                   alt: "Preview de la Plataforma Moda y Estilo"
                },
                {
                   id: 2,
                   type: "text",
                   value: "Moda y Estilo es una plataforma completa que incluye una Landing pública y un Panel de Administración. Está diseñada para digitalizar el catálogo, manejar inventarios y mejorar la visualización de los productos hacia los clientes, todo conectado para finalizar en soporte directo por WhatsApp."
                },
                {
                   id: 3,
                   type: "buttons",
                   value: [
                      { text: "Ver Demo", href: "https://moda-estilo-phi.vercel.app/" },
                      { text: "Ver Repositorio", href: "https://github.com/J-Jairo-C-Ordoniez/ModaEstilo" },
                   ]
                }
             ]
          }
       ]
    },

    {
      id: "context",
      title: "Contexto del Proyecto",
      items: [
        {
          id: 1,
          title: "Problemática Central",
          content: [
            {
              id: 1,
              type: "text",
              value: "La adopción de herramientas digitales en pequeños y medianos negocios aún es muy limitada en ciertos territorios. Muchos comercios gestionan procesos de forma empírica o manual, lo cual genera fricción operativa especialmente en áreas como el control del catálogo de productos y su posterior venta o inventario."
            },
            {
              id: 2,
              type: "list",
              value: [
                { id: 1, text: "Falta de unificados de productos." },
                { id: 2, text: "Pérdida de tiempo en responder manual a clientes sobre la disposición de inventario." },
                { id: 3, text: "Sin control claro ni panel analítico de qué es lo más vendido y cuándo se agota." }
              ]
            }
          ]
        },
        {
          id: 2,
          title: "Objetivo del Sistema",
          content: [
             {
                id: 1,
                type: "quote",
                value: "Desarrollar un sistema web que permita al administrador del negocio gestionar su catálogo e inventario de productos de forma ágil, y al mismo tiempo ofrezca a los clientes una vitrina digital moderna para explorarlos y solicitarlos por WhatsApp."
             }
          ]
        }
      ]
    },

    {
      id: "architecture",
      title: "Arquitectura y Tecnologías",
      items: [
        {
          id: 1,
          title: "Estructura Monolítica con Next.js",
          content: [
            {
              id: 1,
              type: "text",
              value: "Dado el alcance, utilizamos una arquitectura monolítica pero altamente modular, alojando frontend, SSR y capa de backend (API Routes de Next.js) en un solo repositorio. Todo enrutado y respaldado bajo el patrón interno Controller → Service → Repository."
            },
            {
              id: 2,
              type: "table",
              headers: ["Capa / Elemento", "Rol y Responsabilidad"],
              rows: [
                ["Frontend (UI)", "Renderización reactiva (React), estilos con Tailwind e interacciones de Store con Zustand. Módulos bajo /components y estado local."],
                ["API Routes", "Manejo de peticiones HTTP en `/api/...` recibiendo al cliente web."],
                ["Controllers", "Escriben su lógica en `/modules`. Dirigen el payload de la API al servicio adecuado."],
                ["Services", "Aplicación de lógica del negocio (ej. 'disminuirStock', o 'comprobarPassword')."],
                ["Repositories", "Uso directo de PrismaORM para CRUD."]
              ]
            }
          ]
        },
        {
          id: 2,
          title: "Stack Resumen",
          content: [
             {
                id: 1,
                type: "table",
                headers: ["Tecnología", "Uso en el Sistema", "Por qué"],
                rows: [
                   ["Next.js", "Fullstack framework", "Velocidad y unificación del código."],
                   ["NextAuth (Auth.js)", "Administración de Sesión", "Seguridad para los administradores de la tienda."],
                   ["Prisma + TiDB", "Base de datos Relacional", "ORM fuertemente tipado. Base mysql veloz."],
                   ["Zustand", "Gestión Global del Front", "Reducción de prop-drilling en las vistas panel."],
                   ["Cloudinary", "Distribución de medios", "Hosting e imágenes de variantes optimizadas."]
                ]
             }
          ]
        }
      ]
    },

    {
       id: "database",
       title: "Diseño de la Base de Datos",
       items: [
          {
             id: 1,
             title: "Relaciones Principales",
             content: [
                {
                   id: 1,
                   type: "text",
                   value: "El modelo de datos refleja las operaciones reales. Tenemos roles administrativos, modelos para Landing pública y modelos para negocio puro:"
                },
                {
                   id: 2,
                   type: "code",
                   value: `users ──────────── codes
  │
aboutUs           policies

categories ─────── products ───────── variants ─────── images
                                          │
                                     inventories
                                          │
                                        sales
                                          │
                                  purchaseIntents`
                }
             ]
          },
          {
             id: 2,
             title: "Diccionario de Datos Clave",
             content: [
                {
                   id: 1,
                   type: "table",
                   headers: ["Entidad", "Descripción Lógica"],
                   rows: [
                      ["Users", "Permite acceso seguro al Dashboard administrativo."],
                      ["Categories", "Moda, calzado, etc. Clasifican los 'Products'."],
                      ["Products", "Tienen agrupación general (Marca, Nombre, Descripción), referencian Category."],
                      ["Variants", "La variación física del producto (Color, Talla, Precio y su SKU único)."],
                      ["Inventories", "Llevan la trazabilidad de unidades (stock numerico >= 0) de cadaVariant."],
                      ["Sales", "Registra un histórico de venta consumida que afecta directamente a los inventarios y al Dashboard."]
                   ]
                }
             ]
          }
       ]
    },

    {
       id: "requirements",
       title: "Módulos Lógicos / Flujos",
       items: [
          {
             id: 1,
             title: "Gestión Compuesta",
             content: [
                {
                   id: 1,
                   type: "text",
                   value: "El sistema no trata datos aislados; trata procesos de negocio completos mediante flujos:"
                },
                {
                   id: 2,
                   type: "code",
                   value: `Flujo Registro Venta: 
Accede a Ventas → Registrar Venta
  └── Busca y selecciona variante de producto
        └── Ingresa cantidad vendida
              └── Confirma transacción
                    ├── Venta registrada en BD historial
                    ├── Inventario se le descuenta automáticamente
                    └── Métricas numéricas y gráficas del Dashboard actualizadas`
                }
             ]
          },
          {
             id: 2,
             title: "El Landing (Web Vitrina Pública)",
             content: [
                {
                   id: 1,
                   type: "list",
                   value: [
                      { id: 1, text: "Acceso a Catálogo e inventarios actualizados en vivo de lectura sin bloqueo login." },
                      { id: 2, text: "Buscadores interactivos con 'Search' modular que filtran hasta dentro del nombre o variaciones." },
                      { id: 3, text: "Módulo AboutUs y Policies 100% controlados desde base de datos, editable por Administrador." },
                      { id: 4, text: "Botones 'Comprar por WhatsApp' automatizados generando mensaje preciso." }
                   ]
                }
             ]
          }
       ]
    },

    {
       id: "ux",
       title: "Diseño e Identidad",
       items: [
          {
             id: 1,
             title: "Principios Visuales",
             content: [
                {
                   id: 1,
                   type: "quote",
                   value: "El buen diseño no es solo 'verlo bonito', sino comunicar orden, visuales directas y menos clicks."
                },
                {
                   id: 2,
                   type: "text",
                   value: "El concepto asume un Minimalismo Puro donde el producto fotografiado domina la pantalla. Paleta controlada bajo Regla de Uso: 90% de la plataforma es de color neutro y minimalista, el resto usa acentos verdes o oscuros controlados."
                }
             ]
          }
       ]
    },

    {
       id: "retrospective",
       title: "Retroalimentación",
       items: [
          {
             id: 1,
             title: "Entender el negocio",
             content: [
                {
                   id: 1,
                   type: "text",
                   value: "Antes de escribir código, tuve que entender cómo funcionaba el negocio del local. Aparecieron problemas reales:"
                },
                {
                   id: 2,
                   type: "list",
                   value: [
                      { id: 1, text: "Cómo manejan productos y variantes (tallas, colores, etc.)." },
                      { id: 2, text: "Cómo representar el SKU por variante." },
                      { id: 3, text: "Cómo mostrar productos de una manera sencilla al cliente final." },
                      { id: 4, text: "Cómo organizar el catálogo general del negocio." }
                   ]
                }
             ]
          },
          {
             id: 2,
             title: "Diseñar arquitectura reutilizable",
             content: [
                {
                   id: 1,
                   type: "text",
                   value: "Aunque el sistema fue a medida, pensé en algo más grande: una estructura reutilizable con separación limpia de frontend y backend en una arquitectura tipo MVC para el diseño de un sistema que pueda seguir creciendo a futuro."
                }
             ]
          },
          {
             id: 3,
             title: "Construir toda la plataforma completa",
             content: [
                {
                   id: 1,
                   type: "text",
                   value: "El MVP terminó operando dos piezas de gran magnitud. Por el lado de la Landing pública, el catálogo completo, la navegación de productos y su visualización de variantes; por el lado administrativo, el panel con login propio, un dashboard numérico y un gestor total de carga de productos, variantes e imágenes."
                }
             ]
          },
          {
             id: 4,
             title: "Manejo de imágenes",
             content: [
                {
                   id: 1,
                   type: "text",
                   value: "Implementé la plataforma de Cloudinary para resolver múltiples problemas: estandarizar la subida de imágenes optimizadas, normalizar tamaños para grillas, eliminación de fondo en tiempo real y la obtención de una URL de distribución ágil."
                },
                {
                   id: 2,
                   type: "text",
                   value: "Esto evitó por completo el saturar mi propio servidor, previno problemas crónicos por pesos de imágenes subidas por el usuario y eliminó el manejo manual de los archivos."
                }
             ]
          },
          {
             id: 5,
             title: "Infraestructura en la nube",
             content: [
                {
                   id: 1,
                   type: "text",
                   value: "El despliegue me forzó a orquestar y conectar distintos servicios como el host en Vercel, la base de datos distribuida en TiDB y el storage multimedia en Cloudinary. Tuve que resolver:"
                },
                {
                   id: 2,
                   type: "list",
                   value: [
                      { id: 1, text: "Seguridad y correcta asignación de variables de entorno." },
                      { id: 2, text: "Manejo de conexiones dinámicas remotas." },
                      { id: 3, text: "Blindar la seguridad general de las credenciales." },
                      { id: 4, text: "Compatibilidad integral entre proveedores Cloud distintos." }
                   ]
                }
             ]
          },
          {
             id: 6,
             title: "Refactorización del frontend",
             content: [
                {
                   id: 1,
                   type: "text",
                   value: "Me enfrenté al típico dilema que llega después de tenerlo funcionando: vi que mi código fuente interno necesitaba limpieza para mi tranquilidad. Me tomé el tiempo de refactorizar ciertos componentes, mejorar la estructura de carpetas y dejar código mucho más limpio."
                }
             ]
          },
          {
             id: 7,
             title: "Despliegue para cliente real",
             content: [
                {
                   id: 1,
                   type: "text",
                   value: "Tuve que salir de mi plano de 'desarrollo local' para pensar y decidir un plan de entrega lógica del sistema para el cliente final. Decidir en dónde alojarlo transparentemente y cómo generar los accesos."
                },
                {
                   id: 2,
                   type: "text",
                   value: "Por ende, la entrega terminó consistiendo en un repositorio configurado, un espacio productivo deployado, su correspondiente cuenta admin con protección y su documento formal de entrega de especificaciones."
                }
             ]
          }
       ]
    }
  ]
};

export default modayestiloDoc;
