// components/DocCard.jsx
import React from "react";
import TitleSpace from "../atoms/TitleSpace";
import Text from "../atoms/aText";
import Quote from "../atoms/Quote";
import TableDoc from "../atoms/Table";
import List from "../atoms/List";
import Code from "../atoms/aCode";

export default function DocCard({ item }) {
    return (
        <article className="doc-card space-y-4" id={item.id}>
            <div className="mb-4">
                {item.title && (<TitleSpace
                    title={item.title}
                    color="#e0e0e0"
                    fontSize="1.6rem"
                />
                )}
            </div>

            {
                item.content.map(cont => {
                    if (cont.type === 'text') return <Text key={cont.id} text={cont.value} />
                    if (cont.type === 'quote') return <Quote key={cont.id} quote={cont.value} />
                    if (cont.type === 'table') return <TableDoc key={cont.id} dataTable={cont.value} />
                    if (cont.type === 'list') return <List key={cont.id} list={cont.value} />
                    if (cont.type === 'title') return <TitleSpace key={cont.id} title={cont.value} fontSize="1rem" />
                    if (cont.type === 'code') return <Code key={cont.id} code={cont.value} language={cont.language} />
                })
            }
        </article>
    );
}