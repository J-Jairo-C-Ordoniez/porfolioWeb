'use client'

import { useState } from "react"

import { ABtn } from "../atoms/aBtn"
import MCardBlog from "../molecules/mCardBlog"

export default function OBlog({ data }) {
    const [showAll, setShowAll] = useState(false)
    const visibleBlogs = showAll ? data : data.slice(0, 4)

    return (
        <>
            <div className="space-y-6 my-10">
                {visibleBlogs.map(blog => (
                    <MCardBlog
                        key={blog.id}
                        data={blog}
                    />
                ))}
            </div>

            {data.length > 4 && (
                <ABtn 
                    onClick={() => setShowAll(!showAll)}
                    data={{
                        text: showAll ? "Ver menos" : "Ver más", 
                        icon: showAll ? 'PanelLeftOpen' : 'PanelBottomOpen'
                    }}
                />
            )}
        </>
    )
}
