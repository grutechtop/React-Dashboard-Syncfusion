export interface NavigatorLink {
    name: string;
    icon: JSX.Element;
}

export interface Navigator {
    title: string;
    links: NavigatorLink[];
}

export interface RouteType {
    path: string;
    element: JSX.Element;
}

export interface NavButtonType {
    title: string;
    onClick: () => void;
    color: string;
    dotColor?: string;
    icon: JSX.Element;
}