export default function CardDoc({ data }) {
  if (!data) return null;

  return (
    <article id={data.id} className="doc-card flex flex-col gap-10 scroll-mt-32">
      <header className="flex flex-col gap-4 border-b border-white/5 pb-8">
        <h2 className="text-3xl lg:text-4xl font-black tracking-tighter uppercase">
          {data.title}
        </h2>
        <div className="h-1 w-12 bg-accent" />
      </header>

      <div className="flex flex-col gap-10">
        {data.content?.map((item) => {
          if (item.type === "title")
            return (
              <h3 key={item.id} className="text-xl text-accent mt-6 uppercase tracking-widest font-bold">
                {item.value}
              </h3>
            );

          if (item.type === "text")
            return (
              <p key={item.id} className="text-lg text-text-secondary opacity-80 leading-relaxed">
                {item.value}
              </p>
            );

          if (item.type === "quote")
            return (
              <div key={item.id} className="my-4">
                <p className="text-lg text-text-secondary opacity-80 leading-relaxed">
                  {item.value}
                </p>
              </div>
            );

          if (item.type === "table")
            return (
              <table key={item.id} className="w-full border-collapse my-6">
                <thead>
                  <tr className="border-b border-white/10">
                    {item.headers.map((header, i) => (
                      <th key={i} className="py-3 px-4 text-left text-sm font-semibold text-accent uppercase tracking-wider">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {item.rows.map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      {row.map((cell, j) => (
                        <td key={j} className="py-3 px-4 text-text-secondary">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            );

          if (item.type === "list")
            return (
              <ul key={item.id} className="list-disc pl-5 space-y-2 my-6">
                {item.value.map((listItem) => (
                  <li key={listItem.id} className="text-lg text-text-secondary opacity-80 leading-relaxed">
                    {listItem.text}
                  </li>
                ))}
              </ul>
            );

          if (item.type === "code")
            return (
              <div key={item.id} className="my-6">
                <pre className="bg-black/20 p-4 rounded-md overflow-x-auto">
                  <code className="text-sm text-text-secondary">
                    {item.value}
                  </code>
                </pre>
              </div>
            );
            
          return null;
        })}
      </div>
    </article>
  );
}
