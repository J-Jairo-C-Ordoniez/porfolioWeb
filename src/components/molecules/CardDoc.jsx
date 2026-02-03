import { ATitleBold, ATitleSection } from "../atoms/Title";
import ACode from "../atoms/Code";
import AList from "../atoms/List";
import AQuote from "../atoms/Quote";
import ATableDoc from "../atoms/Table";
import AText from "../atoms/Text";

export default function MCardDoc({ data }) {
  return (
    <article id={data.id} className="doc-card space-y-4">
      <div className="mb-4">
        <ATitleBold data={data.title} color="#e0e0e0" fontSize="text-3xl" />
      </div>

      {data.content.map((item) => {
        if (item.type === "title")
          return (
            <ATitleSection
              key={item.id}
              data={item.value}
              fontSize="text-xl"
              color="#e0e0e0"
            />
          );

        if (item.type === "text")
          return <AText key={item.id} data={item.value} />;

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
