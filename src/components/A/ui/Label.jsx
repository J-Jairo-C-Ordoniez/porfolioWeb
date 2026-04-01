import { AIcon } from "./Icon";
import { AText } from "../../structure/main/ui/Text";

export function ALabel({ data }) {
  return (
    <span
      className="transition-scale flex w-fit items-center gap-2 rounded-none px-3 py-2 text-sm duration-300 ease-in-out hover:scale-105"
      style={{
        background: `${data.color}20`,
        border: `1px solid ${data.color}50`,
        color: data.color,
      }}
    >
      {data.icon && <AIcon data={data.icon} />}

      <AText data={data.text} color={`${data.color}`} fontSize="text-xs" />
    </span>
  );
}
