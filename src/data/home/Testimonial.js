const cTestimonials = {
  id: "testimonies",
  title: "¿Qué es lo que dicen de mí?",
  subTitle: "Testimonios",
  items: [
    {
      id: 1,
      text: "Trabajar con Jhon fue una experiencia increíble. Su visión creativa y gran técnica hicieron que el proyecto fluyera sin complicaciones.",
      author: "Carlos Pérez",
      rol: "Diseñador UX",
      link: {
        id: 1,
        icon: "Linkedin",
        href: "https://linkedin.com/in/arlosperez",
      },
    },
    {
      id: 2,
      text: "Jhon entiende la importancia del detalle y la funcionalidad. Su manera de abordar los retos nos aportó un valor moderno y profesional.",
      author: "Laura Méndez",
      rol: "Project Manager",
      link: { id: 2, icon: "Globe", href: "https://lauramendez.com" },
    },
    {
      id: 3,
      text: "Su forma de estructurar y documentar el código hace que todo sea fácil de mantener y escalar. Definitivamente un aliado con visión a futuro.",
      author: "Andrés Torres",
      rol: "Desarrollador Backend",
      link: { id: 1, icon: "Github", href: "https://github.com/ndrestorres" },
    },
    {
      id: 4,
      text: "Jhon no solo desarrolla, sino que también aporta ideas frescas para hacer crecer el producto. Su implicación es total.",
      author: "Mariana López",
      rol: "Startup Founder",
      link: {
        id: 1,
        icon: "Instagram",
        href: "https://instagram.com/arianalopez",
      },
    },
  ],

  metrics: [
    {
      id: 1,
      icon: "FolderKanban",
      value: "Proyectos",
      label: { text: "Proyectos", color: "#E91E63" },
      detail:
        "Más de 20 proyectos desarrollados que van desde páginas informativas hasta aplicaciones completas. Cada proyecto refleja un enfoque en diseño limpio, código mantenible y soluciones pensadas para crecer a futuro."
    },
    {
      id: 2,
      icon: "GraduationCap",
      value: "Educación",
      label: { text: "Educación", color: "#9C27B0" },
      detail:
        "Formación en Tecnología en Desarrollo de Software en la UNAD, complementada con cursos de animación, diseño web y programación autodidacta. Mi aprendizaje está basado en teoría sólida aplicada directamente a la práctica."
    },
    {
      id: 3,
      icon: "Map",
      value: "Roadmaps",
      label: { text: "HTML • CSS • JS • React • Next.js", color: "#009900" },
      detail:
        "He diseñado y seguido roadmaps para aprender tecnologías frontend y backend de forma estructurada. Esto me ha permitido avanzar paso a paso y construir una base sólida antes de explorar áreas más avanzadas."
    },
    {
      id: 4,
      icon: "Palette",
      value: "Diseño",
      label: { text: "UI Minimalista", color: "#03A9F4" },
      detail:
        "Experiencia en crear interfaces modernas, limpias y accesibles. Uso Figma y aplico principios de Atomic Design, lo que me permite diseñar componentes consistentes y escalables con un enfoque centrado en el usuario."
    },
    {
      id: 5,
      icon: "Users",
      value: "Colaboraciones",
      label: { text: "Freelance & Comunidad", color: "#8F6D05" },
      detail:
        "He trabajado en proyectos colaborativos donde aprendí a comunicar ideas claramente y organizar tareas en equipo. Además, participo en comunidades tech, compartiendo experiencias y aprendiendo de otros desarrolladores."
    },
    {
      id: 6,
      icon: "Zap",
      value: "Habilidades",
      label: { text: "Frontend • Backend • Animación", color: "#009688" },
      detail:
        "Habilidades en React, Next.js, Tailwind, Node.js y MySQL. También tengo experiencia en animación 2D con Adobe Animate y ActionScript 3.0, lo que me da una perspectiva creativa única dentro del desarrollo."
    },
  ],
};

export default cTestimonials;
