export interface NavigatorLink {
    name: string;
    icon: JSX.Element;
}

export interface Navigator {
    title: string;
    links: NavigatorLink[];
}