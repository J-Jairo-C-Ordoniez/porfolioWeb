export default function MenuSkill({ data, setStateMenu, stateMenu }) {
  return (
    <nav className="w-fit mt-4 border-b border-primary/10">
      <ul className="flex items-center gap-8">
        {data.map((link) =>
          link.status === stateMenu ? (
            <li
              key={link.id}
              className="transition-border border-b border-primary/90 duration-300"
            >
              <button className="text-primary/90 uppercase tracking-wider text-sm px-2 cursor-pointer">
                {link.text}
              </button>
            </li>
          ) : (
            <li key={link.id}>
              <button
                onClick={() => setStateMenu(link.status)}
                className="text-primary/50 uppercase tracking-wider text-sm px-2 cursor-pointer"
              >
                {link.text}
              </button>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}