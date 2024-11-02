import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter-slice";
import taskReducer from "./task-slice";
import { loadState, saveState } from "../config/storage";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        task: taskReducer,
    },
    preloadedState: {
        task: loadState("task")
    }
});

store.subscribe(() => {
    saveState("task", store.getState().task)
})