export function ATable({ data }) {
  return (
    <div className="my-12 overflow-x-auto border border-white/5">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-white/10 bg-white/[0.02]">
            {data.heads?.map((h) => (
              <th
                key={h.id}
                className="px-6 py-4 font-sans font-caps text-[10px] tracking-widest text-accent uppercase"
              >
                {h.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="transition-colors hover:bg-white/[0.01]">
            {data.values?.map((v) => (
              <td
                key={v.id}
                className="px-6 py-4 font-sans text-sm text-text-secondary font-light"
              >
                {v.title}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
