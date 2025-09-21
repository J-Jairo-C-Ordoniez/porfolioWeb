'use client';

import { useState, useEffect } from 'react'
import Order from '../../ui/molecules/Order';
import TitleSection from "../../ui/atoms/TitleSection";
import Blogs from '../../ui/organisms/Blogs.js'
import WithoutProjects from '../../ui/molecules/WithoutProjects';

export default function Blog({ blog }) {
    const [typeOrder, setTypeOrder] = useState(blog.orders[0]?.type || 'recents')
    const [dataOrder, setDataOrder] = useState(blog.blogs)

    useEffect(() => {
        if (!blog || !typeOrder) return

        const orderData = (data, order) => {
            switch (order) {
                case "alpha":
                    return data.sort((a, b) => a.title.localeCompare(b.title));
                case "time":
                    return data.sort(
                        (a, b) => parseInt(a.readTime) - parseInt(b.readTime)
                    );
                case "recent":
                default:
                    return data.sort(
                        (a, b) => new Date(b.date) - new Date(a.date)
                    );

            }
        }

        setDataOrder(orderData(blog.blogs, typeOrder))

    }, [typeOrder])

    return (
        <section id="blog" className="py-10 px-20">
            <article className="pb-4 border-b-2 border-[#181818] flex justify-between items-center relative">
                <TitleSection
                    title={blog.title}
                    color="#e0e0e0"
                />

                <Order orders={blog.orders} setOption={setTypeOrder} optionCurrent={typeOrder} />
            </article>

            {
                dataOrder
                    ? <article className='mt-10'>
                        <Blogs blogs={dataOrder} />
                    </article>

                    : <article className='mt-10'>
                        <WithoutProjects />
                    </article>
            }

        </section>
    )
}