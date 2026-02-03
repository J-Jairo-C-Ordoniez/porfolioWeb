import { ATitleBold } from "../atoms/Title";
import ACode from "../atoms/Code";
import AList from "../atoms/List";
import AQuote from "../atoms/Quote";
import ATableDoc from "../atoms/Table";
import AText from "../atoms/Text";

export default function MBlogContent({ data }) {
  return (
    <article className="space-y-5 border-t border-slate-600/20 ring-t-1 ring-slate-700/6 pt-10">
      {data.map((item) => {
        if (item.type === "title")
          return (
            <ATitleBold
              key={item.id}
              data={item.value}
              fontSize="text-xl"
              color="#F1F3F5"
            />
          );

        if (item.type === "text")
          return (
            <AText
              key={item.id}
              data={item.value}
            />
          );

        if (item.type === "quote")
          return <AQuote key={item.id} data={item.value} />;

        if (item.type === "table")
          return <ATableDoc key={item.id} data={item.value} />;

        if (item.type === "list")
          return <AList key={item.id} data={item.value} />;

        if (item.type === "code")
          return (
            <ACode key={item.id} code={item.value} language={item.language} />
          );
      })}
    </article>
  );
}
