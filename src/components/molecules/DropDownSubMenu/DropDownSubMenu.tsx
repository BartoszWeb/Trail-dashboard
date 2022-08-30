import React, { useEffect, useRef } from "react";
import { Button, StyledLink } from "../RightSideMenu/RgihtSideMenu.style";
import UserID from "../../atoms/UserID/UserID";
import ArrowDown from "../../atoms/ArrowDown/ArrowDown";
import ThemeSwitch from "../../atoms/ThemeSwitch/ThemeSwitch";
import {
    selectDesktopMenu,
    switchDesktopMenu,
} from "../../../store/NavigationSlice/navigationSlice";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { DropDownSubMenu } from "./DropDownSubMenu.style";

const DropDownDesktopMenu = () => {
    const menuRef = useRef<HTMLLIElement>(null);
    const dispatch = useAppDispatch();
    const isActive = useAppSelector(selectDesktopMenu);

    const changeDesktopMenu = () => {
        dispatch(switchDesktopMenu());
    };


    useEffect(() => {
        if (!isActive) return;

        const handleEscapeKey = (e: KeyboardEvent) => {
            e.key === "Escape" && dispatch(switchDesktopMenu());
        };

        window.addEventListener("keydown", handleEscapeKey);

        return () => {
            window.removeEventListener("keydown", handleEscapeKey);
        };

    }, [isActive]);

    useEffect(() => {
        if (!isActive) return;
        if (!menuRef.current) return;

        const handleClick = (e: MouseEvent) => {
            if (!menuRef.current) return;
            if (!(menuRef.current?.parentElement as HTMLElement).contains((e.target as HTMLElement))) {
                dispatch(switchDesktopMenu());
            }
        };

        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, [isActive]);

    return (
        <DropDownSubMenu ref={ menuRef } className={ isActive ? "active" : "" }>
            <Button onClick={ changeDesktopMenu }>
                <UserID/>
                <ArrowDown/>
            </Button>
            <ul>
                <li><StyledLink to="./">Chat with us</StyledLink></li>
                <li><StyledLink to="./">Email us</StyledLink></li>
                <li><StyledLink to="./">Account management</StyledLink></li>
                <li><StyledLink to="./">Log out</StyledLink></li>
                <li><ThemeSwitch/></li>
            </ul>
        </DropDownSubMenu>
    );
};

export default DropDownDesktopMenu;