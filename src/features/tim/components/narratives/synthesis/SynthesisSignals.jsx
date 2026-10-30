"use client";

const signals = [
  "Conocer a Tim.",
  "Más allá del escenario.",
  "Una canción, una historia personal.",
  "Un mismo show, muchos recuerdos.",
  "Lo que inspira.",
];

export default function SynthesisSignals() {
  return (
    <div className="synth-frame--signals flex h-screen w-screen shrink-0 flex-col justify-center px-[8vw]">
      <p className="synth-signals-lead opacity-0 will-change-transform text-xl font-light tracking-tight leading-tight text-background/80 md:text-2xl lg:text-3xl mb-10 md:mb-14">
        De la observación surgieron cinco líneas narrativas.
      </p>
      <ul className="flex flex-col">
        {signals.map((signal, index) => (
          <li
            key={index}
            className="synth-signal opacity-0 will-change-transform border-b border-background/20 py-5 md:py-8 first:pt-0 text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight text-background leading-tight"
          >
            {signal}
          </li>
        ))}
      </ul>
    </div>
  );
}
