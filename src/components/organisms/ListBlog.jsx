import { ATitleSection } from "../atoms/Title";
import MListBlog from "../molecules/LIstBlog";

export default function OListBlog({ data, idCurrent }) {
  return (
    <>
      <ATitleSection data="LEER MÁS" fontSize="text-lg" color="#999999" />

      {data.items.map(
        (item) =>
          item.id !== idCurrent && <MListBlog key={item.id} data={item} />,
      )}
    </>
  );
}
