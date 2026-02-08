"use client";

import { ATitleBold } from "../atoms/Title";
import ACode from "../atoms/Code";
import AList from "../atoms/List";
import AQuote from "../atoms/Quote";
import ATableDoc from "../atoms/Table";
import AText from "../atoms/Text";

export default function MBlogContent({ data }) {
  return (
    <article className="space-y-8 text-lg leading-relaxed text-slate-300">
      {data.map((item) => {
        if (item.type === "title")
          return (
            <div key={item.id} className="pt-8 mb-4">
              <ATitleBold
                data={item.value}
                fontSize="text-xl font-bold"
                color="#F1F3F5"
              />
            </div>
          );

        if (item.type === "text")
          return (
            <div key={item.id} className="mb-6">
              <AText
                data={item.value}
                fontSize="text-lg leading-8"
                color="#cbd5e1"
              />
            </div>
          );

        if (item.type === "quote")
          return (
            <div key={item.id} className="my-8 border-l-4 border-[#00C896] pl-6 italic text-xl text-slate-400 bg-slate-800/20 py-4 pr-4 rounded-r-lg">
              <AQuote data={item.value} />
            </div>
          );

        if (item.type === "table")
          return <ATableDoc key={item.id} data={item.value} />;

        if (item.type === "list")
          return <AList key={item.id} data={item.value} />;

        if (item.type === "code")
          return (
            <div key={item.id} className="my-8">
              <ACode code={item.value} language={item.language} />
            </div>
          );
      })}
    </article>
  );
}
