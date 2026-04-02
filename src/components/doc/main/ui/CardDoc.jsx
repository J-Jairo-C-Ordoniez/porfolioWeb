export default function CardDoc({ data }) {
  if (!data) return null;

  return (
    <article id={data.id} className="doc-card flex flex-col gap-10 scroll-mt-32">
      <header className="flex flex-col gap-4 border-b border-white/5 pb-8">
        <h3 className="text-lg lg:text-xl font-semibold tracking-wider uppercase text-primary/80">
          {data.title}
        </h3>
      </header>

      <div className="flex flex-col gap-4">
        {data.content?.map((item) => {
          if (item.type === "title")
            return (
              <h4
                key={item.id}
                className="text-lg lg:text-xl font-semibold tracking-wider uppercase text-primary/70"
              >
                {item.value}
              </h4>
            );

          if (item.type === "text")
            return (
              <p
                key={item.id}
                className="font-sans text-md font-light tracking-wider text-secondary/80"
              >
                {item.value}
              </p>
            );

          if (item.type === "quote")
            return (
              <blockquote
                key={item.id}
                className="my-4"
              >
                <p className="font-sans text-md font-light tracking-wider text-secondary/80">
                  {item.value}
                </p>
              </blockquote>
            );

          if (item.type === "table")
            return (
              <table
                key={item.id}
                className="w-full border-collapse my-6"
              >
                <thead>
                  <tr className="border-b border-white/10">
                    {item.headers.map((header, i) => (
                      <th
                        key={i}
                        className="py-3 px-4 text-left text-sm font-semibold text-accent uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {item.rows.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className="py-3 px-4 text-secondary/80 tracking-wider"
                        >
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
              <ul
                key={item.id}
                className="list-disc pl-5 space-y-2 my-6"
              >
                {item.value.map((listItem) => (
                  <li
                    key={listItem.id}
                    className="font-sans text-md font-light tracking-wider text-secondary/80"
                  >
                    {listItem.text}
                  </li>
                ))}
              </ul>
            );

          if (item.type === "code")
            return (
              <pre
                key={item.id}
                className="bg-black/50 border border-primary/10 p-4 rounded-lg overflow-x-auto text-sm text-secondary/90 font-mono my-4"
              >
                <code>{item.value}</code>
              </pre>
            );

          if (item.type === "image")
            return (
              <div key={item.id} className="w-full my-8 rounded-xl overflow-hidden border border-white/5">
                <img 
                  src={item.value} 
                  alt={item.alt || "Document image"} 
                  className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity" 
                />
              </div>
            );

          if (item.type === "buttons")
            return (
              <div key={item.id} className="flex flex-wrap gap-4 my-6">
                {item.value.map((btn, i) => (
                  <a 
                    key={i} 
                    href={btn.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-6 py-2 bg-primary/5 hover:bg-primary/10 border border-primary/20 text-text-primary rounded-full transition-colors text-sm tracking-widest uppercase font-light"
                  >
                    {btn.text}
                  </a>
                ))}
              </div>
            );
            
          return null;
        })}
      </div>
    </article>
  );
}
