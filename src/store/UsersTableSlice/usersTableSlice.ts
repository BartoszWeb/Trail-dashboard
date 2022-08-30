import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Time } from "../ChartTimeSlice/chartTimeSlice";

const initialState: Time = {
    time: "all",
};

const usersTableSlice = createSlice({
    name: "usersTable",
    initialState,
    reducers: {
        updateTime(state, action) {
            state.time = action.payload;
        },
    },
});

export const selectTableTime = (state: RootState) => state.usersTable.time;
export const { updateTime } = usersTableSlice.actions;
export default usersTableSlice.reducer;