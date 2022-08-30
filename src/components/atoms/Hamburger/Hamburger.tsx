import { HamburgerButton, HamburgerBox, HamburgerBoxSr, HamburgerInner } from "./Hamburger.style";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { selectMobileMenu } from "../../../store/NavigationSlice/navigationSlice";
import { switchMobileMenu } from "../../../store/NavigationSlice/navigationSlice";

const Hamburger = () => {
    const dispatch = useAppDispatch();
    const isActive = useAppSelector(selectMobileMenu);

    const handleClick = () => {
        dispatch(switchMobileMenu());
    };

    return (
        <HamburgerButton aria-expanded="false" onClick={ handleClick }>
            <HamburgerBoxSr>Open/Close menu</HamburgerBoxSr>
            <HamburgerBox className={ isActive ? "active" : "" }>
                <HamburgerInner className={ isActive ? "active" : "" }/>
            </HamburgerBox>
        </HamburgerButton>
    );
};


export default Hamburger;