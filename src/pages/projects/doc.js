"use client"

import HomeProject from "../../ui/organisms/HomeProject"
import { useState } from "react"

export default function Doc({ project }) {
    const [open, setOpen] = useState(null)
    const [item, setItem] = useState(null)

    return (
        !item 
            ? <HomeProject
                project={project}
                setItem={setItem}
            />
            : <div>project selected</div>
    )
}