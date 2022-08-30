import LeftSideMenu from "../../molecules/LeftSideMenu/LeftSideMenu";
import RightSideMenu from "../../molecules/RightSideMenu/RightSideMenu";
import { NavHeader, NavDesktopWrapper } from "./Navigation.styles";
import { Link } from "react-router-dom";
import { NavMobileWrapper } from "./Navigation.styles";
import Logo from "../../atoms/Logo/Logo";
import ThemeSwitch from "../../atoms/ThemeSwitch/ThemeSwitch";
import Hamburger from "../../atoms/Hamburger/Hamburger";
import { LogoWrapper } from "./Navigation.styles";
import MobileMenu from "../../molecules/MobileMenu/MobileMenu";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { selectMobileMenu } from "../../../store/NavigationSlice/navigationSlice";
import { useEffect } from "react";
import useEnableDisableScroll from "../../../hooks/useEnableDisableScroll";

const Navigation = () => {
    const [blockScroll, allowScroll] = useEnableDisableScroll() as Array<() => {}>;
    const menuMobileIsActive = useAppSelector(selectMobileMenu);
    useEffect(() => {
        if (menuMobileIsActive) {
            blockScroll();
        } else {
            allowScroll();
        }
    }, [menuMobileIsActive]);
    return (
        <>
            <NavHeader>
                <NavDesktopWrapper>
                    <LeftSideMenu/>
                    <RightSideMenu/>
                </NavDesktopWrapper>
                <NavMobileWrapper>
                    <LogoWrapper>
                        <Link to="./">
                            <Logo size={ "80px" }/>
                        </Link>
                    </LogoWrapper>
                    <ThemeSwitch/>
                    <Hamburger/>
                </NavMobileWrapper>
            </NavHeader>
            { menuMobileIsActive && <MobileMenu/> }
        </>
    );
};

export default Navigation;