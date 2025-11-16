import { ATitleBold } from "../atoms/aTitle";
import ALabel from "../atoms/aLabel";
import AText from "../atoms/aText";
import ACode from "../atoms/aCode";
import APicture from "../atoms/aPicture";

export default function MSectionDoc({ data }) {
  return (
    <article className="rounded-2xl border border-slate-600/20 bg-[#1A2534] ring-1 ring-slate-700/6 p-6">
      <ATitleBold
        data={data.title}
        fontSize="text-2xl"
      />

      <div className="mt-4 flex flex-wrap gap-2">
        {data.labels.map((label) => (
          <ALabel key={label.id} data={label} />
        ))}
      </div>

      <span className="mt-6 flex flex-col gap-4">
        <AText data={data.text} />
        <AText data={data.description} />
      </span>

      <div className="my-6 w-full h-60">
        {data.src.type === "code" ? (
          <ACode 
            code={data.src.content} 
            language={data.src.language} 
          />
        ) : (
          <APicture
            src={data.src.content}
            alt={data.src.alt}
            size="100"
          />
        )}
      </div>
    </article>
  );
}