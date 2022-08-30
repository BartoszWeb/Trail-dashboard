import { useAppSelector } from "../../../hooks/useAppSelector";
import { selectTheme, toggleTheme } from "../../../store/ThemeSlice/themeSlice";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { SwitchWrapper, SwitchInput, SwitchLabel } from "./ThemeSwitch.style";
import { KeyboardEvent } from "react";

const ThemeSwitch = () => {
    const dispatch = useAppDispatch();
    const isDark = useAppSelector(selectTheme);

    const handleInput = () => {
        dispatch(toggleTheme());
    };
    const handleKey = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            dispatch(toggleTheme());
        }
    };

    return (
        <SwitchWrapper>
            <SwitchInput onKeyDown={ handleKey } onInput={ handleInput } type="checkbox" id="switch"/>
            <SwitchLabel className={ isDark ? "activeDarkTheme" : "" }
                         htmlFor="switch"/>
        </SwitchWrapper>

    );
};

export default ThemeSwitch;