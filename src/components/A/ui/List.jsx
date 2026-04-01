import { AText } from "../../structure/main/ui/Text";

export function AList({ data }) {
  return (
    <ul className="my-10 space-y-6">
      {data.map((item) => (
        <li key={item.id} className="flex items-start gap-4 group">
          <div
            className="mt-2 h-1 w-1 flex-shrink-0 bg-accent transition-all duration-300 group-hover:w-2"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-1">
            <AText data={item.text} fontSize="text-sm" color="text-text-secondary" className="leading-relaxed" />
          </div>
        </li>
      ))}
    </ul>
  );
}
