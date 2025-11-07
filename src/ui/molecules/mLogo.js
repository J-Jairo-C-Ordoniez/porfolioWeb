import ALink from "../atoms/aLink";
import APicture from "../atoms/aPicture";

export default function MLogo({ data }) {
  return (
    <ALink href={data.link}>
      <APicture src={data.src} alt={data.alt} size="60" />
    </ALink>
  );
}
