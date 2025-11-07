import ALink from "../atoms/aLink";
import AText from "../atoms/aText";

export default function MMenu({ data, isOpen = false, onClose }) {
  return (
    <nav aria-label="Menú principal" className="relative">
      <ul
        className={`fixed top-20 left-0 z-40 flex h-full w-full flex-col items-center justify-center gap-5 bg-[#121212] p-8 transition-all duration-500 ease-in-out md:static md:h-auto md:flex-row md:bg-transparent md:p-0 ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-5 opacity-0 md:visible md:translate-y-0 md:opacity-100"
        } `}
      >
        {data.map((link) => (
          <li key={link.id} onClick={onClose}>
            <ALink href={link.href}>
              <AText data={link.text} fontSize=".9rem" />
            </ALink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
