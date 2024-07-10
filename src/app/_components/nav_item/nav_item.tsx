import React, { ReactNode } from "react";


export const NavItem: React.FC<{
    text: string,
    link_path: string,
    children: ReactNode,
    selected: boolean,
    horizontal: boolean
}> = (props) => (
    <a href={props.link_path} className={"flex items-center mx-2" + (props.horizontal ? " flex-row" : " flex-col")}>
        {props.children}
        <p className={"text-xs md:text-sm" + (props.selected ? " font-semibold" : " font-normal") + (props.horizontal ? " ms-1" : "")}>{props.text}</p>
    </a>
);