import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface PopUpState {
    isActive: boolean,
    id: number | null,
}

const initialState: PopUpState = {
    isActive: false,
    id: null,
};

const popUpSlice = createSlice({
    name: "popUp",
    initialState,
    reducers: {
        togglePopUp: (state, action: PayloadAction<PopUpState>) => {
            state.isActive = action.payload.isActive;
            state.id = action.payload.id;
        },
    },
});

export const selectPopUp = (state: RootState) => state.popUp;
export const { togglePopUp } = popUpSlice.actions;
export default popUpSlice.reducer;