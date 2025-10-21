import BtnDoc from "../atoms/btnDoc";
import Text from "../atoms/aText";

export default function MenuNavDoc({ sections, setActiveSection, activeSection }) {
    return (
        <nav className="space-y-2">
            {sections.map((section) => (
                <BtnDoc
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    background={activeSection === section.id && "#00C89620"}
                    color={activeSection === section.id && "#00C896"}
                >
                    <Text
                        text={section.title}
                        color={activeSection === section.id ? "#00C896" : "#b3b3b3"}
                    />
                </BtnDoc>
            ))}
        </nav>
    )
}