"use client";

export default function MMenuDoc({
  data,
  setActiveSection,
  activeSection,
  onClose,
}) {
  return (
    <nav className="w-full">
      <ul className="space-y-1">
        {data.map((section) => (
          <li key={section.id} onClick={onClose}>
            <button
              onClick={() => setActiveSection(section.id)}
              className={`flex w-full items-center rounded-md px-4 py-2 text-sm transition-colors ${activeSection === section.id
                ? "bg-[#00C896]/10 text-[#00C896] font-medium"
                : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
                }`}
            >
              <span>{section.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
