import { createSlice } from "@reduxjs/toolkit";


export const actionSlice = createSlice({
    name: "action",
    initialState: {value: {
        xP: 65,
        yP: 65,
        xM: 0,
        yM: 0,
        direction: "right",
        walking: false,
    }},
    reducers: {
        actionXP: (state, action) => {
            state.value.xP = action.payload;
        },
        actionYP: (state, action) => {
            state.value.yP = action.payload;
        },
        actionXM: (state, action) => {
            state.value.xM = action.payload;
        },
        actionYM: (state, action) => {
            state.value.yM = action.payload;
        },
        actionDir: (state, action) => {
            state.value.direction = action.payload;
        },
        actionWalking: (state, action) => {
            state.value.walking = action.payload;
        },
    },
});

export const {
    actionXP,
    actionYP,
    actionXM,
    actionYM,
    actionDir,
    actionWalking
} = actionSlice.actions;

export default actionSlice.reducer;