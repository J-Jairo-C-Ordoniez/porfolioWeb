export default function CardBlog({ data }) {
    if (!data) return null;

    return (
        <article id={data.id} className="doc-card flex flex-col gap-10 scroll-mt-32">
            <div className="flex flex-col gap-4">
                {data && (() => {
                    if (data.type === "title")
                        return (
                            <h4
                                key={data.id}
                                className="text-lg lg:text-xl font-semibold tracking-wider uppercase text-primary/70"
                            >
                                {data.value}
                            </h4>
                        );

                    if (data.type === "text")
                        return (
                            <p
                                key={data.id}
                                className="font-sans text-md font-light tracking-wider text-secondary/80"
                            >
                                {data.value}
                            </p>
                        );

                    if (data.type === "quote")
                        return (
                            <blockquote
                                key={data.id}
                                className="my-4"
                            >
                                <p className="font-sans text-md font-light tracking-wider text-secondary/80">
                                    {data.value}
                                </p>
                            </blockquote>
                        );

                    if (data.type === "table")
                        return (
                            <table
                                key={data.id}
                                className="w-full border-collapse my-6"
                            >
                                <thead>
                                    <tr className="border-b border-white/10">
                                        {data.value.headers.map((header) => (
                                            <th
                                                key={header.id}
                                                className="py-3 px-4 text-left text-sm font-semibold text-accent uppercase tracking-wider"
                                            >
                                                {header.title}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.value.rows.map((row, i) => (
                                        <tr
                                            key={i}
                                            className="border-b border-white/5 hover:bg-white/5 transition-colors"
                                        >
                                            {row.map((cell) => (
                                                <td
                                                    key={cell.id}
                                                    className="py-3 px-4 font-sans text-md font-light tracking-wider text-secondary/80"
                                                >
                                                    {cell.title}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        );

                    if (data.type === "list")
                        return (
                            <ul
                                key={data.id}
                                className="list-disc pl-5 space-y-2 my-6"
                            >
                                {data.value.map((listItem) => (
                                    <li
                                        key={listItem.id}
                                        className="font-sans text-md font-light tracking-wider text-secondary/80"
                                    >
                                        {listItem.text}
                                    </li>
                                ))}
                            </ul>
                        );

                    return null;
                })()}
            </div>
        </article>
    );
}
