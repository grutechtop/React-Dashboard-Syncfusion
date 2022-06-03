import React, { createContext, useContext, useState } from 'react';

interface State {
    isMenuVisible: boolean;
    setIsMenuVisible: (isVisible: boolean) => void;
    isNavbarClicked: { [key: string]: boolean };
    setIsNavbarClicked: (isVisible: any) => void;
    toggleNavbarElement: (clickedNavbar: string) => void;
    setScreenSize: (screenSize: any) => void;
    screenSize: number | undefined;
}

const StateContext = createContext<State>({} as State);

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notifications: false,
}

export const ContextProvider = ({ children }: any) => {

    const [isMenuVisible, setIsMenuVisible] = useState(true);
    const [isNavbarClicked, setIsNavbarClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);

    function toggleNavbarElement(clickedNavbar: string) {
        setIsNavbarClicked(
            () => (
                {
                    ...initialState,
                    [clickedNavbar]: true
                }
            )
        )
    }

    return <StateContext.Provider value={{ isMenuVisible, setIsMenuVisible, isNavbarClicked, setIsNavbarClicked, toggleNavbarElement, screenSize, setScreenSize }}>
        {children}
    </StateContext.Provider>
}

export const useStateContext = () => useContext(StateContext);