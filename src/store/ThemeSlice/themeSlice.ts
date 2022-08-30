import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ThemeState {
    isDark: boolean,
}


const initialState: ThemeState = {
    isDark: !localStorage.getItem("isDark") ? true : localStorage.getItem("isDark") === "true"

};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.isDark = !state.isDark;
            localStorage.setItem("isDark", state.isDark.toString());
        },
    },
});

export const selectTheme = (state: RootState) => state.theme.isDark;
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;