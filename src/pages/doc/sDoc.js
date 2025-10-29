"use client"
import { useState } from "react"

import OHomeDoc from "../../ui/organisms/oHomeDoc"

export default function SDoc({ data }) {
    const [route, setRoute] = useState('home')

    return (
        !route || route === 'home' 
            ? <OHomeDoc
                data={data}
                setState={setRoute}
            />
            : <p>hola</p> 
    )
}