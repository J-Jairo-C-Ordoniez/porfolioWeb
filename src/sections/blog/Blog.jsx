"use client";

import cBlog from "../../data/home/Blog";
import OListBlog from "../../components/organisms/ListBlog";
import OHeroBlog from "../../components/organisms/HeroBlog";
import MBlogContent from "../../components/molecules/BlogContent";

export default function SBlog({ data }) {
  return (
    <main className="min-h-screen pb-20">
      <article className="mx-auto max-w-4xl px-6 pt-10 lg:pt-20">
        <header className="mb-12">
          <OHeroBlog data={data} />
        </header>

        <section className="mb-16">
          <MBlogContent data={data.items} />
        </section>

        <div className="my-20 h-px w-full bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

        <section>
          <OListBlog data={cBlog} idCurrent={data.id} />
        </section>
      </article>
    </main>
  );
}
