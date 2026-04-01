import { ALink } from "../atoms/Link";
import { APicture } from "../atoms/Picture";

export default function MLogo({ data }) {
  return (
    <ALink href={data.link}>
      <div className="w-12 h-12 grayscale contrast-125 opacity-80 transition-all hover:grayscale-0 hover:opacity-100">
        <APicture 
          src={data.src} 
          alt={data.alt} 
          size="100" 
        />
      </div>
    </ALink>
  );
}
