/* eslint-disable react-hooks/exhaustive-deps */
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { NavButton } from './navButton.component';
import { useStateContext } from '../contexts/context.provider';
import { NavButtonType } from '../types';
import { Cart } from './cart.component';
import { Chat } from './chat.component';
import { Notification } from './notificiation.component';
import { UserProfile } from './userProfile.component';
import { useEffect } from 'react';



export function NavbarComponent(): JSX.Element {

    const { isMenuVisible, setIsMenuVisible, toggleNavbarElement, isNavbarClicked, screenSize, setScreenSize } = useStateContext();

    useEffect(
        () => {
            const handleScreenSize = () => setScreenSize(window.innerWidth);
            handleScreenSize();
            window.addEventListener('resize', handleScreenSize)
            return () => {
                window.removeEventListener('resize', handleScreenSize);
            };
        },
        []
    );

    useEffect(
        () => {
            if ((screenSize as number) <= 900) {
                setIsMenuVisible(false)
            } else {
                setIsMenuVisible(true)
            }
        },
        [screenSize]
    )


    const navbarButtons: NavButtonType[] = [
        {
            title: 'Cart',
            onClick: () => toggleNavbarElement('cart'),
            color: 'red',
            dotColor: '#03C9D7',
            icon: <FiShoppingCart />,
        },
        {
            title: 'Chat',
            onClick: () => toggleNavbarElement('chat'),
            color: 'red',
            dotColor: '#03C9D7',
            icon: <BsChatLeft />,
        },
        {
            title: 'Notification',
            onClick: () => toggleNavbarElement('notification'),
            color: 'red',
            dotColor: 'rgb(254, 201, 15)',
            icon: <RiNotification3Line />,
        },
    ];

    return <div className={styles.container}>
        <NavButton title="Menu" onClick={() => setIsMenuVisible(!isMenuVisible)} color={'red'} icon={<AiOutlineMenu />} />
        <div className="flex pr-2 items-center">
            {navbarButtons.map((button: NavButtonType) => <NavButton key={button.title} {...button} />)}
            <TooltipComponent content="Profile" position='BottomCenter'>
                <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" >
                    <img className="rounded-full w-8 h-8" src={avatar} alt="user-profile" />
                    <p>
                        <span className={styles.textGray}>Hello, </span>{' '}
                        <span className={`${styles.textGray} font-bold ml-1`}>John</span>
                    </p>
                    <MdKeyboardArrowDown className={styles.textGray} />
                </div>
            </TooltipComponent>
            {isNavbarClicked.cart && <Cart />}
            {isNavbarClicked.chat && <Chat />}
            {isNavbarClicked.notification && <Notification />}
            {isNavbarClicked.userProfile && <UserProfile />}
        </div>
    </div>
}

const styles = {
    container: 'flex justify-between p-2 md:ml-6 md:mr-6 relative',
    textGray: 'text-gray-400 text-14',
}