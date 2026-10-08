const questions = ["¿Qué necesita ver el dueño?", "¿Qué necesita hacer un vendedor mientras atiende?", "¿Qué información debe aparecer inmediatamente?", "¿Qué puede desaparecer?"];

export default function ExperienceQuestions() {
  return <article className="experience-frame experience-frame--questions absolute inset-0 flex items-center px-6 opacity-0 sm:px-8 md:px-12 lg:px-20"><div className="w-full max-w-5xl"><p className="experience-lead mb-8 text-3xl font-normal tracking-tight text-background/70 md:mb-12 md:text-5xl">La interfaz debía adaptarse a la forma de trabajar del negocio.</p>{questions.map((question) => <p key={question} className="experience-question border-b border-background/20 py-4 text-3xl font-medium tracking-tight sm:text-4xl md:py-6 md:text-6xl">{question}</p>)}</div></article>;
}
