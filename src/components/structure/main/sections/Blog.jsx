"use client";

import { useState } from "react";
import { ATitleSection } from "../ui/Title";
import { ABtn } from "../ui/Btn";
import { CardBlog } from "../ui/CardBlog";

export default function SBlog({ data }) {
  const [showAll, setShowAll] = useState(false);
  const visibleBlogs = showAll ? data.items : data.items.slice(0, 4);

  return (
    <section id={data.id} className="py-32 px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40">
      <header className="mb-24 flex flex-col items-center text-center">
        <ATitleSection data={data.title} className="mb-6 font-black tracking-tighter" />
        <div className="h-px w-12 bg-accent opacity-50" />
      </header>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {visibleBlogs.map((blog) => (
          <CardBlog key={blog.id} data={blog} />
        ))}
      </div>

      {data.items.length > 4 && (
        <div className="mt-20 flex justify-center">
          <ABtn
            onClick={() => setShowAll(!showAll)}
            data={{
              text: showAll ? "Show Less" : "View All Stories",
              icon: showAll ? "PanelLeftOpen" : "PanelBottomOpen",
            }}
            className="border-b border-white/10 pb-2 hover:border-accent"
          />
        </div>
      )}
    </section>
  );
}
