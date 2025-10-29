export function ATitleMain({ data, color = '#e0e0e0', fontSize = '2rem', textAlign = 'left' }) {
    return (
        <h1
            className="font-bold text-[#e0e0e0] font-poppins"
            style={{
                color,
                textAlign,
                fontSize
            }}
        >
            {data}
        </h1>
    )
}


export function ATitleSection({ data, color = '#e0e0e0', fontSize = '2rem', textAlign = 'left' }) {
    return (
        <h2
            className="font-light tracking-widest"
            style={{
                color,
                textAlign,
                fontSize
            }}
        >
            {data}
        </h2>
    )
}


export function ATitleName({ name, lastName }) {
    return (
        <h2 className="flex flex-col text-[#e0e0e0] text-[4rem] font-[500] font-poppins leading-14">
            {name}
            <strong className="font-extrabold">
                {lastName}
            </strong>
        </h2>
    )
}


export function ATitleBold({ data, color = '#b3b3b3', fontSize = '1rem', textAlign = 'left' }) {
    return (
        <h3
            className="font-semibold"
            style={{
                color,
                fontSize,
                textAlign
            }}
        >
            {data}
        </h3>
    )
}