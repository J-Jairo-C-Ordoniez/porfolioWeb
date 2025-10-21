import { ABtn } from '../atoms/aBtn';

export default function MMenuProjects({ data, setStateMenu, stateMenu }) {
    return (
        <ul className='flex justify-center items-center gap-5 mt-10 px-5 py-4 bg-[#262626] rounded-full w-fit m-auto shadow-slate-500 shadow-sm'>
            {data.map(link => (
                link.status === stateMenu
                    ? <li key={link.id} >
                        <ABtn
                            data={link}
                            color='#e0e0e0'
                        />
                    </li>
                    : <li key={link.id} >
                        <ABtn
                            data={link}
                            color='#777'
                            onClick={() => setStateMenu(link.status)}
                        />
                    </li>
            ))}
        </ul>
    )
}