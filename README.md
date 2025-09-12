# Portfolio Profesional – Next.js + Atomic Design + FSD Adaptado  

Este proyecto es un **portfolio web moderno, modular y escalable**, desarrollado con **Next.js 14**, **TailwindCSS** y una arquitectura híbrida basada en **Atomic Design (70%)** y **Feature-Sliced Design adaptado (30%)**.  

Su objetivo es ser una **carta de presentación profesional**, fácil de mantener y optimizar para SEO, con espacio para crecer en el tiempo (blog, proyectos, contacto).  

## 📐 Arquitectura del Proyecto  
- **Atomic Design**
    - ATOMOS → Botón, Link, Input, Icono
    - MOLECULAS → CardProyecto
    - ORGANISMOS → Bloques UI reutilizables (Header, Footer, TestimoniosList)
    - PLANTILLAS → Estructura visual base sin datos
    - PÁGINAS → Plantilla + datos reales

- **FSD Adaptado**
    - /inicio → TemplateInicio + PageInicio
    - /proyectos → TemplateProyectos + PageProyectos
    - /testimonios → TemplateTestimonios + PageTestimonios
    - /sobre-mi → TemplateSobreMi + PageSobreMi
    - /habilidades → TemplateHabilidades + PageHabilidades
    - /blog → TemplateBlog + PageBlog
    - /contacto → TemplateContacto + PageContacto


---

## 🛠️ Stack Tecnológico  

- **Framework principal**: [Next.js 14 (App Router)](https://nextjs.org/) → SEO + performance + server components.  
- **Estilos**: [TailwindCSS](https://tailwindcss.com/) → rapidez, minimalismo y consistencia.  
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/) → transiciones suaves y modernas.  
- **Arquitectura UI**: Atomic Design + FSD adaptado.  
- **Estado**: React Hooks (`useState`, `useContext`).  
  - Futuro: [Zustand](https://github.com/pmndrs/zustand) para features interactivas más pesadas.  
- **Contenido**:  
  - Blog con **MDX** → markdown + componentes React.  
  - Datos iniciales en **JSON** (proyectos, testimonios).  
- **SEO / Marketing**:  
  - Metadata API de Next.js (title, description, og:image).  
  - Sitemap + robots.txt con plugin oficial.  
  - Rich Snippets (schema.org) para proyectos y artículos.  
- **Infraestructura**:  
  - Hosting en [Vercel](https://vercel.com/).  
  - Dominio personalizado (.dev / .tech recomendado).  

---

## 📂 Estructura de Carpetas  

```bash
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
 └─ /styles                  # globals.css, tailwind.css
```

### Clonar el repositorio
git clone https://github.com/J-Jairo-C-Ordoniez/portfolioWeb
cd portfolio-next

### Instalar dependencias
npm install

### Ejecutar en modo desarrollo
npm run dev

### Build de producción
npm run build
npm run start
