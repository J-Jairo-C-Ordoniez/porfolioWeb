import OBlog from '@/ui/organisms/oBlog';
import { ATitleSection } from '../../../ui/atoms/aTitle';

export default function SBlog({ data }) {
    return (
        <section 
            id={data.id}
            className="py-10 px-40 space-y-10"
        >
            <ATitleSection
                data={data.title}
                color="#e0e0e0"
            />

            <OBlog data={data.items} />
        </section>
    )
}