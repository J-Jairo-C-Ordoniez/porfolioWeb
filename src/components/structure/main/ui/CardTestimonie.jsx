import Text from "./Text";
import { Quote, User } from "lucide-react";

export default function CardTestimonie({ data }) {
  return (
    <article className="relative h-full flex flex-col justify-between">
      <div className="absolute -top-2 -left-2 text-accent opacity-60">
        <Quote size={32} />
      </div>

      <div className="relative z-10 mb-12">
        <Text
          text={data.text}
        />
      </div>

      <div className="relative z-10 mt-auto flex items-center gap-5 border-t border-white/5 pt-8">
        <figure className="flex h-12 w-12 items-center justify-center bg-white/[0.03] border border-white/10">
          <User size={20} className="text-text-secondary" />
        </figure>

        <div className="flex flex-col">
          <h3 className="text-accent text-sm uppercase tracking-widest">
            {data.author}
          </h3>

          <Text
            data={data.rol}
            fontSize="text-[10px]"
            color="text-text-secondary"
            className="font-caps tracking-widest opacity-60"
          />
        </div>

        {/* <div className="ml-auto">
          <ARed href={data.link?.href || "#"} target="_blank" className="!p-2 border-none ring-0 bg-transparent hover:text-accent">
            <AIcon data={data.link?.icon || "ExternalLink"} size={16} />
          </ARed>
        </div> */}
      </div>
    </article>
  );
}
