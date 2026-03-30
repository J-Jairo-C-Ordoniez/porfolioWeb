export default function MenuProject({ data, setStateMenu, stateMenu }) {
  return (
    <ul className="mt-2 flex w-fit items-center justify-center gap-5 px-5 py-3 sm:px-5 sm:py-4">
      {data.map((link) =>
        link.status === stateMenu ? (
          <li key={link.id}>
            <button 
              className="text-primary border-b border-primary uppercase text-sm tracking-wider cursor-pointer pb-2"
              onClick={() => setStateMenu(link.status)}
            >
              {link.text}
            </button>
          </li>
        ) : (
          <li key={link.id}>
            <button 
              className="uppercase text-sm tracking-wider text-primary/50 cursor-pointer pb-2 hover:text-primary transition-colors duration-300 ease-in-out"
              onClick={() => setStateMenu(link.status)}
            >
              {link.text}
            </button>
          </li>
        ),
      )}
    </ul>
  );
}