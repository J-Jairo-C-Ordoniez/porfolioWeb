import ALink from "../atoms/Link";
import AText from "../atoms/Text";

export default function MMenu({ data, isOpen = false, onClose }) {
  return (
    <nav aria-label="Menú principal" className="relative">
      <ul
        className={`fixed top-20 left-0 z-40 flex h-full w-full flex-col items-center justify-center gap-5 bg-[#101828] p-8 transition-all duration-500 ease-in-out lg:static lg:h-auto lg:flex-row lg:bg-transparent lg:p-0 ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-5 opacity-0 lg:visible lg:translate-y-0 lg:opacity-100"
        } `}
      >
        {data.map((link) => (
          <li key={link.id} onClick={onClose}>
            <ALink href={link.href}>
              <AText 
                data={link.text} 
                fontSize="text-sm" />
            </ALink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
