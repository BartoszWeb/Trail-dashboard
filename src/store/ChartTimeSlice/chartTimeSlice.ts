import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Periods = "all" | "year" | "quarter" | "month" | "week" | "today" | "yesterday";

export interface Time {
    time: Periods;
}

const initialState: Time = {
    time: "all",
};

const chartTimeSlice = createSlice({
    name: "chartTime",
    initialState,
    reducers: {
        updateTime(state, action) {
            state.time = action.payload;
        },
    },
});

export const selectChartTime = (state: RootState) => state.chartTime.time;
export const { updateTime } = chartTimeSlice.actions;
export default chartTimeSlice.reducer;