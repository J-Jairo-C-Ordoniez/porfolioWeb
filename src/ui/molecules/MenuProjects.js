import Icon from '../atoms/Icon';
import Btn from '../atoms/Btn';

export default function MenuProjects({ links, setStateMenu, stateMenu }) {
    const li = links.map(link => (
        link.status === stateMenu
            ?
            <li key={link.id}>
                <Btn color='#e0e0e0'>
                    <Icon name={link.icon} />
                    {link.text}
                </Btn>
            </li>
            :
            <li key={link.id} onClick={() => setStateMenu(link.status)}>
                <Btn color='#777'>
                    <Icon name={link.icon} />
                    {link.text}
                </Btn>
            </li>
    ))

    return (
        <nav className='mt-10 px-5 py-3 bg-[#262626] rounded-full items-center w-fit m-auto shadow-slate-500 shadow-sm'>
            <ul className='flex gap-5 justify-center items-center'>
                {li}
            </ul>
        </nav>
    )
}