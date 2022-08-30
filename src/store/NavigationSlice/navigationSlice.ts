import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface NavigationState {
    desktop: { isActive: boolean },
    mobile: { isActive: boolean }
}

const initialState: NavigationState = {
    desktop: { isActive: false },
    mobile: { isActive: false },
};

const navigationSlice = createSlice({
    name: "navigation",
    initialState,
    reducers: {
        switchDesktopMenu: (state) => {
            state.desktop.isActive = !state.desktop.isActive;
        },
        switchMobileMenu: (state) => {
            state.mobile.isActive = !state.mobile.isActive;
        },
    },
});

export const selectDesktopMenu = (state: RootState) => state.navigation.desktop.isActive;
export const selectMobileMenu = (state: RootState) => state.navigation.mobile.isActive;
export const { switchDesktopMenu, switchMobileMenu } = navigationSlice.actions;
export default navigationSlice.reducer;