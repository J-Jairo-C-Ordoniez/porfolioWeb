import ABtnDoc from "../atoms/aBtn";
import AText from "../atoms/aText";

export default function MMenuDoc({ data, setActiveSection, activeSection }) {
    return (
        <nav className="space-y-2">
            {data.map((section) => (
                <ABtnDoc
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    background={activeSection === section.id && "#00C89620"}
                    color={activeSection === section.id && "#00C896"}
                >
                    <AText
                        data={section.title}
                        color={activeSection === section.id ? "#00C896" : "#b3b3b3"}
                    />
                </ABtnDoc>
            ))}
        </nav>
    )
}