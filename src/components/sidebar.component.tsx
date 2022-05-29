import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navigator, NavigatorLink } from '../types';
import { navigations } from '../data/dummy';

export function SidebarComponent() {

    const activeMenu = true;

    return <div className={styles.container}>
        {
            activeMenu && <>
                <div className={styles.linksRow}>
                    <Link to={'/'} onClick={() => { }} className={styles.link} >
                        <SiShopware /><span>React App</span>
                    </Link>
                    <TooltipComponent content='Menu' position='BottomCenter' >
                        <button type='button' onClick={() => { }} className={styles.cancelButton}>
                            <MdOutlineCancel />
                        </button>
                    </TooltipComponent>
                </div>
                <div className='mt-10'>
                    {
                        navigations.map(
                            (navigator: Navigator) => <div key={navigator.title}>
                                <p className={styles.navSectionTitle} >{navigator.title}</p>
                                {
                                    navigator.links.map(
                                        (link: NavigatorLink) => <NavLink
                                            onClick={() => { }}
                                            key={link.name}
                                            to={`/${link.name}`}
                                            className={({ isActive }) => isActive ? styles.activeLink : styles.passiveLink}
                                        >
                                            {link.icon}
                                            <span className='capitalize'>
                                                {link.name}
                                            </span>
                                        </NavLink>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
            </>
        }
    </div>;
}

const styles = {
    container: 'ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10',
    navSectionTitle: 'text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase',
    linksRow: 'flex justify-between items-center',
    link: 'items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900',
    cancelButton: 'text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden',
    activeLink: 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-grey font-bold  text-md m-2',
    passiveLink: 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2',
}