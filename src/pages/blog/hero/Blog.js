import Btn from "@/ui/atoms/Btn";
import Code from "@/ui/atoms/aCode";
import Icon from "@/ui/atoms/aIcon";
import List from "@/ui/atoms/List";
import Picture from "@/ui/atoms/aPicture";
import Quote from "@/ui/atoms/Quote";
import TableDoc from "@/ui/atoms/Table";
import Text from "@/ui/atoms/aText";
import TitleSection from "@/ui/atoms/TitleSection";
import TitleSpace from "@/ui/atoms/TitleSpace";

export default function Blog({ dataBlog }) {
    return (
        <main className="flex justify-center py-20">
            <section>

            </section>
            <section className="w-[50%]">
                <article className="space-y-4">
                    <TitleSpace
                        title={dataBlog.title}
                        color="#e0e0e0"
                        fontSize="3rem"
                    />

                    <Text
                        text={dataBlog.description}
                        fontSize="1.4rem"
                    />
                </article>
                <header className="flex items-center gap-4 mt-10">
                    <div className="rounded-full p-1 w-10 h-10 bg-[#090909]">
                        <Picture
                            src={dataBlog.author.avatar}
                            alt={dataBlog.author.name}
                            size="100"
                        />
                    </div>


                    <TitleSection
                        title={dataBlog.author.name}
                        fontSize="1rem"
                        color="#e0e0e0"
                    />

                    <Text
                        text={dataBlog.author.readTime}
                        color="#E91E63"
                    />

                    <Text
                        text={dataBlog.author.date}
                        color="#0B84F3"
                    />
                </header>
                <article className="my-6 p-2 border-[#222222] border-b border-t">
                    <Btn>
                        <Icon name='Volume2' />
                    </Btn>
                </article>
                <article className="space-y-5">
                    {
                        dataBlog.items.map(cont => {
                            if (cont.type === 'text') return <Text key={cont.id} text={cont.value} fontSize="1.4rem" />
                            if (cont.type === 'quote') return <Quote key={cont.id} quote={cont.value} />
                            if (cont.type === 'table') return <TableDoc key={cont.id} dataTable={cont.value} />
                            if (cont.type === 'list') return <List key={cont.id} list={cont.value} fontSize='1.4rem' />
                            if (cont.type === 'title') return <TitleSpace key={cont.id} title={cont.value} fontSize="1.8rem" color="#e0e0e0" />
                            if (cont.type === 'code') return <Code key={cont.id} code={cont.value} language={cont.language} />
                        })
                    }
                </article>
            </section>
        </main>
    )
}