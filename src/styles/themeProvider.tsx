import React from "react";
import { ThemeProvider as EmotionThemeProvider } from "styled-components";
import { selectTheme } from "../store/ThemeSlice/themeSlice";
import { useAppSelector } from "../hooks/useAppSelector";
import { theme } from "./theme";


interface Props {
    children: React.ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
    const isDark = useAppSelector(selectTheme);
    return (
        <EmotionThemeProvider theme={ () => theme(isDark) }>
            { children }
        </EmotionThemeProvider>
    );
};