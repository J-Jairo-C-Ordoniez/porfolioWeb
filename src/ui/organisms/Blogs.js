'use client'

import { useState } from "react"
import Blog from "../molecules/Blog"
import Btn from "../atoms/Btn"
import Text from "../atoms/aText"

export default function Blogs({ blogs }) {
    const [showAll, setShowAll] = useState(false)
    const visibleBlogs = showAll ? blogs : blogs.slice(0, 4)

    const blogsCards = visibleBlogs.map(blog => (
        <Blog
            key={blog.id}
            blog={blog}
        />
    ))

    return (
        <section>
            <div className="flex flex-col gap-5">
                {blogsCards}
            </div>

            {blogs.length > 4 && (
                <div className="w-fit my-10 bg-[#181818] rounded-full px-5 py-2">
                    <Btn
                        onClick={() => setShowAll(!showAll)}
                    >
                        <Text text={showAll ? "Ver menos" : "Ver más"} />
                    </Btn>
                </div>
            )}
        </section>
    )
}
