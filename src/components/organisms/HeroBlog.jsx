"use client";

import APicture from "../atoms/Picture";
import AText from "../atoms/Text";
import { ATitleBold, ATitleMain } from "../atoms/Title";

export default function OHeroBlog({ data }) {
  return (
    <header>
      <article className="space-y-6">
        <ATitleMain
          data={data.title}
          color="#cbd5e1"
          fontSize="text-3xl md:text-4xl font-bold tracking-tight"
        />

        <AText
          data={data.description}
          fontSize="text-lg leading-relaxed text-slate-400"
        />
      </article>

      <article className="mt-8 flex items-center gap-4">
        <div className="h-12 w-12 rounded-full bg-[#090909] p-1 ring-2 ring-slate-800">
          <APicture
            src={data.author.avatar}
            alt={data.author.name}
            size="100"
          />
        </div>

        <div className="text-left">
          <ATitleBold data={data.author.name} fontSize="text-sm font-medium" color="#e0e0e0" />
          <div className="flex gap-2 text-sm">
            <AText data={data.author.date} color="#94a3b8" />
            <span className="text-slate-600">•</span>
            <AText data={data.author.readTime} color="#00C896" />
          </div>
        </div>
      </article>
    </header>
  );
}
