import Icon from '../atoms/Icon';
import Btn from '../atoms/Btn';

export default function MenuProjects({ links, setStateMenu, stateMenu }) {
    const li = links.map(link => (
        link.status === stateMenu
            ?
            <li key={link.id} className='border-b transition-border duration-300'>
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
        <nav className='mt-10 w-100% border-b-2 border-[#181818]'>
            <ul className='flex gap-5 items-center'>
                {li}
            </ul>
        </nav>
    )
}