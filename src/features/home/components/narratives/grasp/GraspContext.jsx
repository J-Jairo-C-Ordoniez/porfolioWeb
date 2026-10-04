const CONTEXT_LIST = [
  "El negocio.",
  "El sector.",
  "Las personas.",
  "Los procesos.",
  "Las restricciones."
];

export default function GraspContext() {
  return (
    <article className="grasp-context-panel w-[300vw] h-screen flex shrink-0 relative overflow-hidden">
      <div className="grasp-context-sticky w-screen h-screen shrink-0 relative">
        <p className="grasp-comprendo opacity-0 pt-[8vw] pl-[8vw] text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-background/80 leading-none">
          comprendo
        </p>

        <div className="absolute inset-0 flex items-center justify-end px-[8vw] pt-[12vw]">
          <ul className="flex flex-col items-end gap-5">
            {CONTEXT_LIST.map((item, i) => (
              <li
                key={i}
                className="grasp-list-item opacity-0 text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white/80"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
