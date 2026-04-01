import { ATitleBold } from "../atoms/Title";
import { AText } from "../atoms/Text";
import { ALink } from "../atoms/Link";
import { AIcon } from "../atoms/Icon";

export default function MListBlog({ data }) {
  if (!data) return null;

  return (
    <ALink href={data.href} className="block group">
      <article className="flex flex-col gap-6 border border-white/5 bg-white/[0.01] p-8 transition-all duration-500 hover:border-accent hover:bg-white/[0.03]">
        <ATitleBold
          data={data.title}
          color="text-text-main"
          fontSize="text-lg lg:text-xl"
          className="font-bold tracking-tight line-clamp-2 group-hover:text-accent transition-colors"
        />

        <div className="flex items-center gap-3 border-t border-white/5 pt-6 text-text-secondary opacity-60">
          <AIcon data="Timer" size={14} />
          <AText data={data.readTime} color="text-text-secondary" fontSize="text-[10px]" className="font-caps tracking-widest" />
        </div>
      </article>
    </ALink>
  );
}
