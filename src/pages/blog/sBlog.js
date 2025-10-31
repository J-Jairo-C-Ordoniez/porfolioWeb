import cBlog from "../../content/home/cBlog";
import OListBlog from "../../ui/organisms/oListBlog";
import OHeroBlog from "../../ui/organisms/oHeroBlog";
import MBlogContent from "../../ui/molecules/mBlogContent";

export default function SBlog({ data }) {
    return (
        <main className="flex justify-between py-10">
            <section className="w-[75%] space-y-5 py-5 px-40 pt-0">
                <OHeroBlog data={data} />
                <MBlogContent data={data.items} />
            </section>

            <section className="w-[25%] space-y-5 p-10 pt-0 sticky top-20 self-start">
                <OListBlog data={cBlog} idCurrent={data.id} />
            </section>
        </main>
    )
}