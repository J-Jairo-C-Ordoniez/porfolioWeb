"use client";

export default function Menu({ data, setActiveSection, activeSection, onClose }) {
  return (
    <nav className="w-full">
      <ul className="space-y-2">
        {data.map((section) => (
          <li key={section.id} onClick={onClose}>
            <button
              onClick={() => setActiveSection(section.id)}
              className={`flex w-full items-start rounded-xs px-4 py-4 text-xs uppercase tracking-wider transition-colors text-left ${activeSection === section.id
                ? "bg-accent/10 text-accent font-medium"
                : "text-secondary hover:bg-accent/10 hover:text-accent cursor-pointer"
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
