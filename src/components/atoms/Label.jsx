import AIcon from "./Icon";
import AText from "./Text";

export default function ALabel({ data }) {
  return (
    <span
      className="transition-scale flex w-fit items-center gap-2 rounded-full px-3 py-2 text-sm duration-300 ease-in-out hover:scale-105"
      style={{
        background: `${data.color}20`,
        border: `.2vh solid ${data.color}50`,
        color: data.color,
      }}
    >
      {data.icon && <AIcon data={data.icon} />}

      <AText data={data.text} color={`${data.color}`} fontSize=".9rem" />
    </span>
  );
}
