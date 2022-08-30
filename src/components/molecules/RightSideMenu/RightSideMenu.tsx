import { NavRightSide } from "./RgihtSideMenu.style";
import Avatar from "../../atoms/Avatar/Avatar";
import DropDownDesktopMenu from "../DropDownSubMenu/DropDownSubMenu";

const RightSideMenu = () => {
    return (
        <NavRightSide>
            <Avatar/>
            <DropDownDesktopMenu/>
        </NavRightSide>
    );
};

export default RightSideMenu;