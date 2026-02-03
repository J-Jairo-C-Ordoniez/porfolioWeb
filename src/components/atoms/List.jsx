import AText from "./Text";

export default function AList({ data }) {
  return (
    <ul className="my-4 pl-6">
      {data.map((item) => (
        <li key={item.id} className="flex items-center gap-3 py-1">
          <span
            className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#00c896b3]"
            aria-hidden="true"
          />
          <div className="min-w-0">
            <div className="text-sm text-gray-800 dark:text-gray-200">
              <AText data={item.text} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
