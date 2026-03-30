import { ATitleBold } from "../atoms/Title";
import { ACode } from "../atoms/Code";
import { AList } from "../atoms/List";
import { AQuote } from "../atoms/Quote";
import { ATable } from "../atoms/Table";
import { AText } from "../atoms/Text";

export default function MBlogContent({ data }) {
  if (!data) return null;

  return (
    <article className="flex flex-col gap-12">
      {data.map((item) => {
        if (item.type === "title")
          return (
            <div key={item.id} className="pt-12 border-t border-white/5">
              <ATitleBold
                data={item.value}
                fontSize="text-2xl md:text-3xl"
                color="text-text-main"
                className="tracking-tight font-bold"
              />
            </div>
          );

        if (item.type === "text")
          return (
            <div key={item.id} className="max-w-3xl">
              <AText
                data={item.value}
                fontSize="text-lg leading-relaxed"
                color="text-text-secondary"
                className="opacity-90"
              />
            </div>
          );

        if (item.type === "quote")
          return (
            <div key={item.id} className="my-4">
              <AQuote data={item.value} />
            </div>
          );

        if (item.type === "table")
          return <ATable key={item.id} data={item.value} />;

        if (item.type === "list")
          return <AList key={item.id} data={item.value} />;

        if (item.type === "code")
          return (
            <div key={item.id} className="my-6">
              <ACode code={item.value} language={item.language} />
            </div>
          );
          
        return null;
      })}
    </article>
  );
}
