import { language } from "gray-matter";

const desingUI = {
    id: 'desingUI',
    title: 'Cómo diseñar interfaces minimalistas sin perder funcionalidad',
    description: 'Explora las claves del diseño minimalista aplicado al desarrollo web: desde la jerarquía visual hasta la elección de tipografías y colores.',
    author: {
        name: 'J Jairo C Ordoñez',
        avatar: '/avatar.png',
        date: '2025-10-19',
        readTime: '5 min'
    },
    items: [
        {
            id: 1,
            type: 'text',
            value: 'Decidiste crear tu propia aplicación web, tenés la tarea de definir los lineamientos del proyecto...'
        },
        {
            id: 2,
            type: 'title',
            value: 'Principios clave del minimalismo funcional'
        },
        {
            id: 3,
            type: 'text',
            value: 'El minimalismo en interfaces no es simplemente eliminar elementos: es diseñar con intención. Cada componente debe existir para resolver una necesidad concreta, reducir la carga cognitiva y facilitar la acción del usuario sin sacrificar la usabilidad.'
        },
        {
            id: 4,
            type: 'list',
            value: [
                { id: 1, text: 'Priorizar contenido y tareas principales' },
                { id: 2, text: 'Eliminar elementos que no aportan valor' },
                { id: 3, text: 'Usar patrones consistentes y predecibles' },
                { id: 4, text: 'Feedback claro y mínimo' }
            ]
        },
        {
            id: 5,
            type: 'title',
            value: 'Jerarquía visual y uso del espacio'
        },
        {
            id: 6,
            type: 'text',
            value: 'La jerarquía se consigue con tamaño, contraste, espaciado y posición. En interfaces minimalistas el espacio en blanco funciona como herramienta para separar bloques y guiar la mirada: no temas al vacío, úsalo para enfatizar lo importante.'
        },
        {
            id: 7,
            type: 'img',
            value: {
                src: '/images/minimal-ui-example.png',
                alt: 'Ejemplo de interfaz minimalista con mucho espacio en blanco y tipografía clara'
            }
        },
        {
            id: 8,
            type: 'quote',
            value: '“Menos, pero mejor.” — Principio aplicable al diseño de interfaces: reducir ruido para amplificar la función.'
        },
        {
            id: 9,
            type: 'title',
            value: 'Tipografías, tamaño y contraste'
        },
        {
            id: 10,
            type: 'text',
            value: 'Elige una o dos familias tipográficas legibles. Define una escala tipográfica clara (título, subtítulo, cuerpo, meta). El contraste suficiente entre texto y fondo es esencial: la estética minimalista no debe sacrificar accesibilidad.'
        },
        {
            id: 11,
            type: 'table',
            value: {
                heads: [
                    { id: 1, title: "Elemento" },
                    { id: 2, title: "Minimalismo efectivo" },
                    { id: 3, title: "Peligro a evitar" }
                ],
                values: [
                    { id: 1, title: "Botones" },
                    { id: 2, title: "Acción clara" },
                    { id: 3, title: "etiqueta directa" }
                ]
            }
        },
        {
            id: 12,
            type: 'title',
            value: 'Patrones y componentes reutilizables'
        },
        {
            id: 13,
            type: 'list',
            value: [
                { id: 1, text: 'Cabecera limpia: logo, título y una acción principal' },
                { id: 2, text: 'Tarjetas de contenido con jerarquía clara (título, resumen, CTA)' },
                { id: 3, text: 'Barra de navegación simplificada con máximo 5 opciones' },
                { id: 4, text: 'Estados y mensajes claros para acciones (éxito, error, carga)' }
            ]
        },
        {
            id: 14,
            type: 'code',
            language: 'css',
            value: `
<button class="btn-primary">Siguiente</button>

/* CSS minimalista para botón */
.btn-primary {
    background: #0a74da;
    color: #fff;
    border: none;
    padding: 0.6rem 1rem;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: none; /* evitar adornos innecesarios */
    transition: background 120ms ease;
}

.btn-primary:hover {
    background: #095bb5;
}`,
        },
        {
            id: 15,
            type: 'text',
            value: 'Diseña sistemas de componentes donde las variantes se controlen por configuración (color, tamaño, icono). Esto permite mantener consistencia y reducir código duplicado, clave para mantener una UI minimalista mantenible.'
        },
        {
            id: 16,
            type: 'title',
            value: 'Accesibilidad y rendimiento'
        },
        {
            id: 17,
            type: 'text',
            value: 'Minimalismo y accesibilidad van de la mano: texto legible, contraste, foco visible y navegación por teclado. Un diseño simple suele mejorar el rendimiento — menos assets, menos peticiones, y tiempos de interacción más rápidos.'
        },
        {
            id: 18,
            type: 'quote',
            value: '“La simplicidad efectiva es accesible, rápida y comprensible.”'
        },
        {
            id: 19,
            type: 'title',
            value: 'Checklist práctico antes de lanzar'
        },
        {
            id: 20,
            type: 'list',
            value: [
                { id: 1, text: '¿Cada elemento en pantalla tiene un propósito claro?' },
                { id: 2, text: '¿La acción principal está fácil de identificar?' },
                { id: 3, text: '¿Los textos y contrastes cumplen WCAG básico?' },
                { id: 4, text: '¿Los componentes son reutilizables y coherentes?' },
                { id: 5, text: '¿Se han eliminado imágenes y scripts innecesarios?' }
            ]
        },
        {
            id: 21,
            type: 'text',
            value: 'Conclusión: diseñar interfaces minimalistas es un ejercicio de disciplina y priorización. No se trata de un estilo frío, sino de diseñar con intención para que la funcionalidad y la experiencia del usuario sean claras y eficaces.'
        },
        {
            id: 22,
            type: 'title',
            value: 'Recursos y lecturas recomendadas'
        },
        {
            id: 23,
            type: 'list',
            value: [
                { id: 1, text: 'Principios de diseño de Dieter Rams' },
                { id: 2, text: 'Guías de accesibilidad WCAG' },
                { id: 3, text: 'Artículos sobre diseño centrado en tareas y sistemas de diseño' }
            ]
        }
    ]
}

export default desingUI;