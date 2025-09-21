export default function Name({ name, lastName }) {
    return (
        <h2 className="flex flex-col text-[#e0e0e0] text-[4rem] font-[500] font-poppins leading-14">
            {name}
            <strong className="font-extrabold">
                {lastName}
            </strong>
        </h2>
    )
}