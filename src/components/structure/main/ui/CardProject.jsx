import Image from "next/image";
import Link from "next/link";
import Text from "../ui/Text";

export default function CardProject({ data }) {
  return (
    <article className="flex w-full flex-col gap-6 group px-4 py-2">
      <figure className="relative aspect-video w-full overflow-hidden">
        <Image
          src={data.poster}
          alt={data.title}
          width={400}
          height={400}
          className="h-full w-full  transition-all duration-700 group-hover:scale-105"
        />
      </figure>

      <article className="flex w-full flex-col gap-4 px-2">
        <span className="font-sans text-xs tracking-wider text-accent opacity-80 uppercase bg-accent/20 w-fit px-2 py-1 rounded-full">
          {data.labels?.text || "Project"}
        </span>
        <h4 className="text-primary/90 font-semibold uppercase tracking-wider">
          {data.title}
        </h4>

        <Text
          text={data.description}
          aling="left"
        />

        <div className="mt-2 flex items-center gap-6">
          {data.links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="group/link flex items-center gap-2"
            >
              <span className="font-sans font-medium text-accent/50 text-xs uppercase tracking-wider transition-colors group-hover/link:text-accent">
                {link.text}
              </span>
              <div className="h-[1px] w-4 bg-accent/50 transition-all group-hover/link:w-8 group-hover/link:bg-accent" />
            </Link>
          ))}
        </div>
      </article>
    </article>
  );
}
