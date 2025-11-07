export default function ATableDoc({ data }) {
  return (
    <table className="my-6 w-full">
      <thead className="bg-white/4">
        <tr>
          {data.heads.map((h) => (
            <th
              key={h.id}
              className="px-3 py-2 text-left font-medium tracking-wider text-gray-400 uppercase"
            >
              {h.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-white/5">
          {data.values.map((v) => (
            <td
              key={v.id}
              className="border-t border-white/10 px-3 py-2 font-mono text-[#aaa]"
            >
              {v.title}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
