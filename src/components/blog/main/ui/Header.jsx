import Image from "next/image";

export default function Header({ data }) {
  if (!data) return null;

  return (
    <header className="w-full">
      <div className="border-b border-primary/5 py-6 pb-10 container mx-auto px-4 md:px-8 space-y-8">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-wider text-primary">
            {data.title}
          </h2>

          <p className="font-sans text-lg font-light tracking-wider text-secondary/80">
            {data.description}
          </p>
        </div>

        <figure className="flex items-center gap-6">
          <div className="h-16 w-16 bg-primary/5 border border-primary/10 p-2">
            <Image
              src={data.author?.avatar}
              alt={data.author?.name}
              width={400}
              height={400}
            />
          </div>

          <figcaption className="flex flex-col gap-1">
            <h4 className="font-sans text-md font-light tracking-wider text-secondary/90">
              {data.author?.name}
            </h4>
            <div className="flex items-center gap-3">
              <p className="font-sans text-xs font-light tracking-wider text-secondary/80">
                {data.author?.date}
              </p>
              <span className="text-white/10">•</span>
              <p className="font-sans text-xs font-light tracking-wider text-accent">
                {data.author?.readTime}
              </p>
            </div>
          </figcaption>
        </figure>
      </div>
    </header>
  );
}
