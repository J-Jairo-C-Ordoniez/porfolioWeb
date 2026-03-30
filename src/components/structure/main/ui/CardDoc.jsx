import { ATitleBold, ATitleSection } from "../atoms/Title";
import { ACode } from "../atoms/Code";
import { AList } from "../atoms/List";
import { AQuote } from "../atoms/Quote";
import { ATable } from "../atoms/Table";
import { AText } from "../atoms/Text";

export default function MCardDoc({ data }) {
  if (!data) return null;

  return (
    <article id={data.id} className="doc-card flex flex-col gap-10 scroll-mt-32">
      <header className="flex flex-col gap-4 border-b border-white/5 pb-8">
        <ATitleBold 
          data={data.title} 
          color="text-text-main" 
          fontSize="text-3xl lg:text-4xl" 
          className="font-black tracking-tighter uppercase"
        />
        <div className="h-1 w-12 bg-accent" />
      </header>

      <div className="flex flex-col gap-10">
        {data.content?.map((item) => {
          if (item.type === "title")
            return (
              <ATitleSection
                key={item.id}
                data={item.value}
                fontSize="text-xl"
                color="text-accent"
                className="mt-6 uppercase tracking-widest font-bold"
              />
            );

          if (item.type === "text")
            return (
              <AText 
                key={item.id} 
                data={item.value} 
                fontSize="text-lg" 
                color="text-text-secondary" 
                className="opacity-80 leading-relaxed"
              />
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
      </div>
    </article>
  );
}
