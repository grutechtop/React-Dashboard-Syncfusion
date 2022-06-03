import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useStateContext } from './contexts/context.provider';
import { routes } from './data/dummy';
import { RouteType } from './types';
import { NavbarComponent } from './components/navbar.component';
import { SidebarComponent } from './components/sidebar.component';

export default function App() {

    const { isMenuVisible } = useStateContext();

    return <BrowserRouter>
        <div className={styles.container} >
            <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
                <TooltipComponent position='TopLeft' content='Settings' />
                <button
                    style={{ background: 'blue', borderRadius: 50, }}
                    type='button'
                    className={styles.settingsButton}>
                    <FiSettings />
                </button>
            </div>
            <div className={isMenuVisible ? styles.openedSidebarContainer : styles.closedSidebarContainer} >
                <SidebarComponent />
            </div>
            <div className={`${styles.navbarContainer} ${isMenuVisible && 'md:ml-72'}`}>
                <div className={styles.navbar}>
                    <NavbarComponent />
                </div>
                <div>
                    <Routes>
                        {routes.map((route: RouteType) => <Route key={route.path} {...route} />)}
                    </Routes>
                </div>

            </div>

        </div>
    </BrowserRouter>;
}

const styles = {
    container: 'flex relative dark:bg-main-dark-bg',
    settingsButton: 'text-3xl p-3 hover:drop-shadow-xl hover:bg-light-grey text-white',
    openedSidebarContainer: 'w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white',
    closedSidebarContainer: 'w-0 dark:bg-secondary-dark-bg',
    navbarContainer: 'dark:bg-main-dark-bg  bg-main-bg min-h-screen w-full',
    navbar: 'fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'
}
