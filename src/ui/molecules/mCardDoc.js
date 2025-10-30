import { ATitleBold, ATitleSection } from "../atoms/aTitle";
import ACode from "../atoms/aCode";
import AList from "../atoms/aList";
import AQuote from "../atoms/aQuote";
import ATableDoc from "../atoms/aTable";
import AText from "../atoms/aText";

export default function MCardDoc({ data }) {
    return (
        <article 
            id={data.id}
            className="doc-card space-y-4"
        >
            <div className="mb-4">
                <ATitleSection
                    data={data.title}
                    color="#e0e0e0"
                    fontSize="1.6rem"
                />
            </div>

            {
                data.content.map(item => {
                    if (item.type === 'title') return (
                        <ATitleBold 
                            key={item.id} 
                            data={item.value} 
                            fontSize="1.2rem" 
                            color="#e0e0e0"
                        />
                    )

                    if (item.type === 'text') return (
                        <AText 
                            key={item.id} 
                            data={item.value} 
                        />
                    )

                    if (item.type === 'quote') return (
                        <AQuote 
                            key={item.id} 
                            data={item.value} 
                        />
                    )

                    if (item.type === 'table') return (
                        <ATableDoc 
                            key={item.id} 
                            data={item.value} 
                        />
                    )

                    if (item.type === 'list') return (
                        <AList
                            key={item.id} 
                            data={item.value} 
                        />
                    )

                    if (item.type === 'code') return (
                        <ACode 
                            key={item.id} 
                            code={item.value} 
                            language={item.language} 
                        />
                    )
                })
            }
        </article>
    );
}   