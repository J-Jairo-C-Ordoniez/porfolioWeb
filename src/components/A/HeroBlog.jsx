import { APicture } from "../ui/Picture";
import { AText } from "../ui/Text";
import { ATitleBold, ATitleMain } from "../ui/Title";

export default function OHeroBlog({ data }) {
  if (!data) return null;

  return (
    <header className="flex flex-col gap-12 border-b border-white/5 pb-20">
      <div className="flex flex-col gap-6 max-w-4xl">
        <ATitleMain
          data={data.title}
          color="text-text-main"
          fontSize="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter"
        />

        <AText
          data={data.description}
          fontSize="text-lg md:text-xl font-light leading-relaxed text-text-secondary"
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="h-16 w-16 bg-white/[0.03] border border-white/10 p-1">
          <APicture
            src={data.author?.avatar}
            alt={data.author?.name}
            size="100"
            className="grayscale contrast-125"
          />
        </div>

        <div className="flex flex-col gap-1">
          <ATitleBold 
            data={data.author?.name} 
            fontSize="text-sm uppercase tracking-widest" 
            color="text-text-main" 
          />
          <div className="flex items-center gap-3">
            <AText data={data.author?.date} color="text-text-secondary" fontSize="text-[10px]" className="font-caps tracking-widest opacity-60" />
            <span className="text-white/10">•</span>
            <AText data={data.author?.readTime} color="text-accent" fontSize="text-[10px]" className="font-caps tracking-widest" />
          </div>
        </div>
      </div>
    </header>
  );
}
