import { MouseEvent, useEffect, useRef } from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { selectTableTime, updateTime } from "../../../store/UsersTableSlice/usersTableSlice";
import { NavTable, ButtonTableMenu } from "./UserTableMenu.style";
import { useAppSelector } from "../../../hooks/useAppSelector";

const UsersTableMenu = () => {
    const dispatch = useAppDispatch();
    const timeSelector = useAppSelector(selectTableTime);
    const buttonsList = useRef<HTMLUListElement>(null);

    const addRemoveActiveClass = (e: any) => {
        if (!buttonsList.current) return;

        Array.from(buttonsList.current.children).forEach((element) => {
            if (!element.firstElementChild) return;
            element.firstElementChild.classList.remove("active");
        });

        e.target.classList.add("active");
    };

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        const time = (e.target as HTMLButtonElement).textContent?.toLowerCase();
        addRemoveActiveClass(e);
        dispatch(updateTime(time));
    };

    useEffect(() => {
        if (!buttonsList.current) return;
        Array.from(buttonsList.current.children).forEach(element => {
            if ((element.childNodes[0] as HTMLButtonElement).textContent?.toLowerCase() === timeSelector) {
                (element.childNodes[0] as HTMLButtonElement).classList.add("active");
            }

        });
    });
    return (
        <NavTable>
            <ul ref={ buttonsList }>
                <li>
                    <ButtonTableMenu onClick={ (e) => handleClick(e) }>All</ButtonTableMenu>
                </li>
                <li>
                    <ButtonTableMenu onClick={ (e) => handleClick(e) }>Today</ButtonTableMenu>
                </li>
                <li>
                    <ButtonTableMenu onClick={ (e) => handleClick(e) }>Yesterday</ButtonTableMenu>
                </li>
                <li>
                    <ButtonTableMenu onClick={ (e) => handleClick(e) }>Week</ButtonTableMenu>
                </li>
                <li>
                    <ButtonTableMenu onClick={ (e) => handleClick(e) }>Month</ButtonTableMenu>
                </li>
                <li>
                    <ButtonTableMenu onClick={ (e) => handleClick(e) }>Quarter</ButtonTableMenu>
                </li>
                <li>
                    <ButtonTableMenu onClick={ (e) => handleClick(e) }>Year</ButtonTableMenu>
                </li>
            </ul>
        </NavTable>
    );
};

export default UsersTableMenu;