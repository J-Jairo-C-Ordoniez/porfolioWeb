const signals = ["Saber qué se vendió.", "Qué queda.", "Qué se debe.", "Qué hace cada empleado.", "Qué necesita el negocio.", "Qué está ocurriendo ahora mismo."];

export default function QuestionSignals() {
  return <article className="question-frame question-frame--signals absolute inset-0 flex items-center px-6 opacity-0 sm:px-8 md:px-12 lg:px-20"><div className="w-full max-w-5xl"><p className="question-understanding mb-8 text-3xl font-normal tracking-tight text-primary/70 md:mb-12 md:text-5xl">Era poder entenderla.</p>{signals.map((signal) => <p key={signal} className="question-signal border-b border-primary/20 py-3 text-2xl font-medium tracking-tight sm:text-3xl md:py-4 md:text-5xl">{signal}</p>)}</div></article>;
}
