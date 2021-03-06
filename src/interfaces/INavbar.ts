import { IconBaseProps } from "react-icons/lib";

export interface IItem {
    title: string,
    path: string,
    icon?: IconBaseProps,
    cName: string,
}

export interface ILinkItem {
    item: IItem
    subItem?: IItem
}

export interface INavBarProps {
    items: ILinkItem[]
}
