import ABtnDoc from "../atoms/Btn";
import AText from "../atoms/Text";

export default function MMenuDoc({ data, setActiveSection, activeSection, onClose }) {
  return (
    <nav className="relative z-100000000000000000 space-y-2 w-full h-[100vh]">
      <ul>
        {data.map((section) => (
          <li key={section.id} onClick={onClose}>
            <ABtnDoc
              onClick={() => setActiveSection(section.id)}
              background={activeSection === section.id && "#00C89620"}
              color={activeSection === section.id && "#00C896"}
            >
              <AText
                data={section.title}
                color={activeSection === section.id ? "#00C896" : "#b3b3b3"}
              />
            </ABtnDoc>
          </li>
        ))}
      </ul>
    </nav>
  );
}
