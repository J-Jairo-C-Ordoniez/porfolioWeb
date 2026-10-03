import Header from "./ui/Header";
import CardBlog from "./ui/CardBlog";

export default function Main({ data }) {
    return (
        <main className="w-full min-h-[calc(100vh-100px)]">
            <div className="w-full h-full max-w-6xl mx-auto">
                <Header data={data} />
                <section className="w-full overflow-x-hidden">
                    <div className="container mx-auto py-10 px-4">
                        <div className="flex flex-col gap-12 py-10">
                            {data.items.length > 0 ? (
                                data.items.map((item) => (
                                    <CardBlog
                                        key={item.id}
                                        data={item} />
                                ))
                            ) : (
                                <div className="text-center py-32 border border-dashed border-white/5">
                                    <p className="font-sans text-md font-light tracking-wider text-secondary/80">
                                        No se encontraron resultados este Blog.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}