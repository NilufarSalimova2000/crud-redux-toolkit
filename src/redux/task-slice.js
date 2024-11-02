import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    taskList: [],
    count: 0
}

const taskReducer = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            return {...state, taskList:[...state.taskList, action.payload]}
        },
        removeTask: (state, action) => {
            const newTaskList = state.taskList.filter((item) => item.id !== action.payload);
            return {...state, taskList:newTaskList}
        },
        editTask: (state, action) => {
            const editTaskName = prompt("Edit name")
            return {
                ...state,
                taskList: state.taskList.map((item) =>
                    item.id === action.payload ? { ...item, title: editTaskName } : item
                ),
            };
        }
    },
});

export default taskReducer.reducer;
export const {addTask, removeTask, editTask} = taskReducer.actions;