import { ATitleSection } from "../atoms/aTitle";
import MListBlog from "../molecules/mLIstBlog";

export default function OListBlog({ data, idCurrent }) {
    return (
        <>
        <ATitleSection 
            data='LEER MÁS'
            fontSize='1.2rem'
            color='#999999'
        />

            {data.items.map((item) => (
                item.id !== idCurrent &&
                <MListBlog
                    key={item.id}
                    data={item}
                />
            ))}
        </>
    );
}