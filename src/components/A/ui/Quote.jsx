export function AQuote({ data }) {
  return (
    <blockquote className="my-16 border-l-2 border-accent bg-white/[0.02] p-12 lg:p-16">
      <p className="font-sans text-xl md:text-2xl font-light italic leading-relaxed text-text-main opacity-90">
        &ldquo;{data}&rdquo;
      </p>
    </blockquote>
  );
}
