import * as LucideIcons from "lucide-react";

export default function Icon({ name }) {
    const LucideIcon = LucideIcons[name];

    if (!LucideIcon) {
        return <span>⚠️ Icono no encontrado</span>;
    }

    return <LucideIcon />;
}