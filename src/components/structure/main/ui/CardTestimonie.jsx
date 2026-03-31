import Link from "next/link";
import Text from "./Text";
import * as Icon from "lucide-react";

export default function CardTestimonie({ data }) {
  const AIcon = Icon[data.link?.icon || "ExternalLink"];

  return (
    <article className="relative h-full flex flex-col justify-between p-4">
      <div className="absolute -top-2 -left-2 text-accent opacity-60">
        <Icon.Quote size={32} />
      </div>

      <div className="relative z-10 mb-12">
        <Text text={data.text} />
      </div>

      <div className="relative z-10 mt-auto flex items-center gap-5 border-t border-white/5 pt-4">
        <figure className="flex h-12 w-12 items-center justify-center bg-white/200 border border-primary/10">
          <Icon.User size={20} className="text-primary" />
        </figure>

        <div className="flex flex-col">
          <h3 className="text-accent text-sm uppercase tracking-widest">
            {data.author}
          </h3>

          <Text
            text={data.rol}
            align="left"
          />
        </div>

        <div className="ml-auto">
          <Link
            href={data.link?.href || "#"}
            target="_blank"
            className="!p-2 border-none ring-0 bg-transparent hover:text-accent text-primary"
          >
            <AIcon size={20} />
          </Link>
        </div>
      </div>
    </article>
  );
}
