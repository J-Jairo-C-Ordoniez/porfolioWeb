"use client"
import { useState } from "react"

import OHomeDoc from "../../ui/organisms/oHomeDoc"
import ODoc from "@/ui/organisms/oDoc"

export default function SDoc({ data }) {
    const [route, setRoute] = useState('home')

    return (
        !route || route === 'home' 
            ? <OHomeDoc
                data={data}
                setState={setRoute}
            />
            : <ODoc data={data.documentation} /> 
    )
}