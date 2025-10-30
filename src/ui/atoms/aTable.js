export default function ATableDoc({ data }) {
    return (
        <table className="w-full my-6">
            <thead className="bg-white/4">
                <tr>
                    {data.heads.map((h) => (
                        <th
                            key={h.id}
                            className="px-3 py-2 text-left font-medium uppercase tracking-wider text-gray-400"
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
                            className="px-3 py-2 border-t text-[#aaa] border-white/10 font-mono"
                        >
                            {v.title}
                        </td>
                    ))}
                </tr>
            </tbody>
        </table>
    );
}
