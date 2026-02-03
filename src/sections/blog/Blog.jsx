"use client";

import { useState } from "react";
import cBlog from "../../data/home/Blog";
import OListBlog from "../../components/organisms/ListBlog";
import OHeroBlog from "../../components/organisms/HeroBlog";
import MBlogContent from "../../components/molecules/BlogContent";
import AIcon from "@/components/atoms/Icon";

export default function SBlog({ data }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="flex flex-col justify-between py-0 lg:flex-row lg:py-10">
      <section className="w-full space-y-5 px-20 pb-5 pt-2 lg:w-[75%] lg:px-40">
        <OHeroBlog data={data} />
        <MBlogContent data={data.items} />
      </section>

      <section className="order-first sticky top-0 w-full space-y-5 self-start p-10 pt-5 lg:order-none lg:w-[25%]">
        <div className="hidden lg:block">
          <OListBlog data={cBlog} idCurrent={data.id} />
        </div>

        <button
          className="pl-4 cursor-pointer text-[#e0e0e0] transition-transform duration-200 hover:scale-104 focus:outline-none lg:hidden"
          aria-label="Abrir menú"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <AIcon data={isMenuOpen ? "PanelRightOpen" : "PanelLeftOpen"} />
        </button>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 z-10 w-[100%] h-[100vh] bg-[#101828] px-20 py-4 lg:hidden">
            <OListBlog data={cBlog} idCurrent={data.id} />
          </div>
        )}

      </section>
    </main>
  );
}
