import { ABtn } from '../atoms/aBtn';

export function MMenuProjects({ data, setStateMenu, stateMenu }) {
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


export function MMenuSkill({ data, setStateMenu, stateMenu }) {
    return (
        <nav className='mt-10 w-100% border-b-2 border-[#181818]'>
            <ul className='flex gap-5 items-center'>
                {data.map(link => (
                    link.status === stateMenu
                        ? <li 
                            key={link.id} 
                            className='border-b transition-border duration-300'
                        >
                            <ABtn
                                data={link}
                                color='#e0e0e0'
                            />
                        </li>
                        : <li key={link.id}>
                            <ABtn
                                data={link}
                                color='#777'
                                onClick={() => setStateMenu(link.status)}
                            />
                        </li>
                ))}
            </ul>
        </nav>
    )
}