import ALink from "../atoms/Link";
import APicture from "../atoms/Picture";

export default function MLogo({ data }) {
  return (
    <ALink href={data.link}>
      <div className="w-10 h-10">
        <APicture 
          src={data.src} 
          alt={data.alt} 
          size="100" 
        />
      </div>
    </ALink>
  );
}
