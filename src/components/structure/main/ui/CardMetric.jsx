import * as Icon from "lucide-react";

export default function CardMetric({ data, onClick }) {
  const AIcon = Icon[data.icon];

  return (
    <div
      className="group flex shrink-0 cursor-pointer flex-col items-center justify-center gap-4 border border-white/5 p-6 transition-all duration-500 hover:border-accent hover:bg-background/50"
      onClick={onClick}
    >
      <div className="text-accent opacity-60">
        <AIcon size={20} />
      </div>

      <h2 className="text-primary/60 text-xs lg:text-sm uppercase tracking-wider font-medium">
        {data.value}
      </h2>
    </div>
  );
}
