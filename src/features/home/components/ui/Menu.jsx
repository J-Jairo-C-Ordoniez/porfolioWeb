import { ALink } from "../atoms/Link";
import { AText } from "../atoms/Text";

export default function MMenu({ data, isOpen = false, onClose }) {
  return (
    <nav aria-label="Main Navigation" className="relative">
      <ul
        className={`fixed inset-0 z-[100] flex h-screen w-full flex-col items-center justify-center gap-12 bg-background p-12 transition-all duration-700 ease-editorial lg:static lg:h-auto lg:flex-row lg:bg-transparent lg:p-0 ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-10 opacity-0 lg:visible lg:translate-y-0 lg:opacity-100"
        } `}
      >
        {data?.map((link) => (
          <li key={link.id} onClick={onClose} className="group">
            <ALink href={link.href} className="flex flex-col items-center gap-1">
              <AText 
                data={link.text} 
                fontSize="text-2xl lg:text-[10px]" 
                className="font-caps tracking-[0.4em] text-text-main transition-all group-hover:text-accent group-hover:tracking-[0.5em]" 
              />
              <div className="h-px w-0 bg-accent transition-all duration-500 group-hover:w-full lg:hidden" />
            </ALink>
          </li>
        ))}
        {isOpen && (
          <button 
            onClick={onClose}
            className="mt-20 font-sans font-caps text-xs tracking-widest text-accent lg:hidden"
          >
            Close Menu
          </button>
        )}
      </ul>
    </nav>
  );
}
