import { ATitleBold } from "../atoms/aTitle";
import ACode from "../atoms/aCode";
import AList from "../atoms/aList";
import AQuote from "../atoms/aQuote";
import ATableDoc from "../atoms/aTable";
import AText from "../atoms/aText";

export default function MBlogContent({ data }) {
  return (
    <article className="space-y-5 border-t border-[#22222281] pt-10">
      {data.map((item) => {
        if (item.type === "title")
          return (
            <ATitleBold
              key={item.id}
              data={item.value}
              fontSize="1.4rem"
              color="#F1F3F5"
            />
          );

        if (item.type === "text")
          return (
            <AText
              key={item.id}
              data={item.value}
              color="#ACB4BF"
              fontSize="1.2rem"
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
