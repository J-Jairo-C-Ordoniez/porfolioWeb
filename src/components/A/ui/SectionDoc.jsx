import { ATitleBold } from "../atoms/Title";
import { ALabel } from "../atoms/Label";
import { AText } from "../atoms/Text";
import { ACode } from "../atoms/Code";
import { APicture } from "../atoms/Picture";

export default function MSectionDoc({ data }) {
  if (!data) return null;

  return (
    <article className="flex flex-col border border-white/5 bg-white/[0.01] p-10 transition-all duration-500 hover:border-white/10 hover:bg-white/[0.02]">
      <div className="flex flex-col gap-6">
        <ATitleBold
          data={data.title}
          fontSize="text-2xl"
          color="text-text-main"
          className="font-bold tracking-tight"
        />

        <div className="flex flex-wrap gap-3">
          {data.labels?.map((label) => (
            <ALabel key={label.id} data={label} />
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-6">
          <AText data={data.text} fontSize="text-lg" color="text-text-secondary" className="opacity-80 leading-relaxed" />
          <AText data={data.description} fontSize="text-sm" color="text-text-secondary" className="opacity-60 leading-relaxed italic" />
        </div>
      </div>

      <div className="mt-12 w-full aspect-video bg-white/[0.03] border border-white/5 overflow-hidden">
        {data.src?.type === "code" ? (
          <ACode 
            code={data.src.content} 
            language={data.src.language} 
          />
        ) : (
          <APicture
            src={data.src?.content}
            alt={data.src?.alt}
            size="100"
            className="h-full w-full object-cover grayscale contrast-125"
          />
        )}
      </div>
    </article>
  );
}