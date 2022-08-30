import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services/api/api";
import themeReducer from "./ThemeSlice/themeSlice";
import desktopMenuReducer from "./NavigationSlice/navigationSlice";
import chartTimeReducer from "./ChartTimeSlice/chartTimeSlice";
import usersTableReducer from "./UsersTableSlice/usersTableSlice";
import popUpReducer from "./PopUpSlice/popUpSlice";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        theme: themeReducer,
        navigation: desktopMenuReducer,
        chartTime: chartTimeReducer,
        usersTable: usersTableReducer,
        popUp: popUpReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;