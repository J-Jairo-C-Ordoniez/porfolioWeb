"use client";

import { useState } from "react";
import data from "../../../../data/home/Blog";
import CardBlog from "../ui/CardBlog";

export default function SBlog() {
  const [showAll] = useState(false);
  const visibleBlogs = showAll ? data.items : data.items.slice(0, 4);

  return (
    <section
      id={data.id}
      className="relative min-h-[calc(100vh-100px)] overflow-x-hidden flex justify-center"
    >
      <div className="container mx-auto py-10 px-4">
        <header className="mb-10 flex flex-col">
          <h3 className="text-xl font-medium text-primary tracking-wider uppercase pb-4 pl-2 border-b border-primary/10">
            {data.title}
          </h3>
        </header>

        <article className="grid grid-cols-1 gap-x-12 gap-y-24 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-10 xl:gap-y-16">
          {visibleBlogs.map((blog) => (
            <CardBlog key={blog.id} data={blog} />
          ))}
        </article>
      </div>
    </section>
  );
}
