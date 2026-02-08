import { ATitleBold } from "../atoms/Title";
import AText from "../atoms/Text";
import ALink from "../atoms/Link";
import AIcon from "../atoms/Icon";

export default function MListBlog({ data }) {
  return (
    <ALink href={data.href}>
      <article className="group mt-4 cursor-pointer space-y-2 border border-slate-700/30 rounded-lg p-5 transition-all duration-300 hover:border-slate-600/50 hover:bg-slate-800/20">
        <ATitleBold
          data={data.title}
          color="#f1f5f9"
          fontSize="text-base lg:text-lg"
          className="group-hover:text-slate-200 transition-colors line-clamp-2"
        />

        <div className="flex items-center gap-2 text-slate-500">
          <AIcon data="Timer" />
          <AText data={data.readTime} color="#94a3b8" fontSize="text-xs" />
        </div>
      </article>
    </ALink>
  );
}
