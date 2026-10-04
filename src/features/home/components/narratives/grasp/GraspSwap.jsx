export default function GraspSwap() {
  return (
    <article className="grasp-swap-panel w-[200vw] h-screen flex flex-col justify-center shrink-0">
      <div className="grasp-swap-text w-screen relative flex justify-center items-center">
        <p className="grasp-swap-text-container text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-background flex items-center">
          <span className="text-background/80 whitespace-pre">Antes</span>
          <span className="inline-grid text-left ml-3 md:ml-4 text-background">
            <span className="grasp-word-1 col-start-1 row-start-1">de la interfaz</span>
            <span className="grasp-word-2 col-start-1 row-start-1 opacity-0">del diseño</span>
            <span className="grasp-word-3 col-start-1 row-start-1 opacity-0">del código</span>
          </span>
        </p>
      </div>
    </article>
  );
}
