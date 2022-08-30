import { useEffect, useRef } from "react";
import { MenuNav, StyledLink } from "./MobileMenu.style";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { selectMobileMenu, switchMobileMenu } from "../../../store/NavigationSlice/navigationSlice";
import { selectTheme } from "../../../store/ThemeSlice/themeSlice";

const MobileMenu = () => {
    const menuRef = useRef<HTMLElement>(null);
    const dispatch = useAppDispatch();

    const menuMobileIsActive = useAppSelector(selectMobileMenu);
    const isDark = useAppSelector(selectTheme);

    const closeNavigation = () => {
        dispatch(switchMobileMenu());
    };

    useEffect(() => {
        if (!menuMobileIsActive) return;
        if (menuRef.current)
            menuRef.current.classList.add("active");
    }, [menuMobileIsActive, isDark]);


    useEffect(() => {
        if (!menuMobileIsActive) return;
        if (!menuRef.current) return;

        const handleClick = (e: MouseEvent) => {
            if (!menuRef.current) return;
            if ((e.target as HTMLElement).contains(menuRef.current?.firstChild)) {
                dispatch(switchMobileMenu());
            }
        };

        menuRef.current.addEventListener("click", handleClick);

        return () => {
            if (!menuRef.current) return;
            menuRef.current.removeEventListener("click", handleClick);
        };

    }, [menuMobileIsActive]);


    return (
        <MenuNav ref={ menuRef }>
            <ul>
                <li>
                    <StyledLink onClick={ closeNavigation } to="./">Help</StyledLink>
                </li>
                <li>
                    <StyledLink onClick={ closeNavigation } to="./">Account Management</StyledLink>
                </li>
                <li>
                    <StyledLink onClick={ closeNavigation } to="./">Blog</StyledLink>
                </li>
                <li>
                    <StyledLink onClick={ closeNavigation } to="./">Log out</StyledLink>
                </li>
            </ul>
        </MenuNav>
    );
};

export default MobileMenu;