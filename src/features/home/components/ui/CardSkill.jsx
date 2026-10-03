import * as Icon from "lucide-react";

export default function CardSkill({ data }) {
    const AIcon = Icon[data.icon];
    return (
        <div className="group flex flex-col items-center justify-center gap-6 bg-foreground p-8 transition-colors hover:bg-primary/5">
            <div className="text-accent transition-transform duration-500 group-hover:scale-110">
                <AIcon size={40} strokeWidth={1.5} />
            </div>
            <span className="font-sans font-caps text-sm uppercase tracking-wider text-secondary/80 group-hover:text-accent text-center">
                {data.name.split(":")[0]}
            </span>
        </div>
    );
}