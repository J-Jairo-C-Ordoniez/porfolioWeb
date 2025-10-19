"use client"

import DocProject from "@/ui/organisms/DocProject"
import HomeProject from "../../ui/organisms/HomeProject"
import { useState } from "react"

export default function Doc({ project }) {
    const [route, setRoute] = useState('home')

    return (
        !route || route === 'home' 
            ? <HomeProject
                project={project}
                setRoute={setRoute}
            />
            : <DocProject
                documentation={project.documentation}
            />
    )
}