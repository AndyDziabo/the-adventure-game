import { createSlice } from "@reduxjs/toolkit";


export const gameSlice = createSlice({
    name: "game",
    initialState: {value: {
        id: 0,
        map: "LevelOne",
        armor_level: 0,
        armor_max: 100,
        coins: 0,
        health: 100,
        healthMax: 100,
        score: 0,
        xP: 65,
        yP: 65,
        xM: 0,
        yM: 0,
    }},
    reducers: {
        gameId: (state, action) => {
            state.value.id = action.payload;
        },
        gameMap: (state, action) => {
            state.value.map = action.payload;
        },
        gameArmorLevel: (state, action) => {
            state.value.armor_level = action.payload;
        },
        gameArmorMax: (state, action) => {
            state.value.armor_max = action.payload;
        },
        gameCoins: (state, action) => {
            state.value.coins = action.payload;
        },
        gameHealth: (state, action) => {
            state.value.health = action.payload;
        },
        gameHealthMax: (state, action) => {
            state.value.healthMax = action.payload;
        },
        gameScore: (state, action) => {
            state.value.score = action.payload;
        },
        gameXP: (state, action) => {
            state.value.xP = action.payload;
        },
        gameYP: (state, action) => {
            state.value.yP = action.payload;
        },
        gameXM: (state, action) => {
            state.value.xM = action.payload;
        },
        gameYM: (state, action) => {
            state.value.yM = action.payload;
        },
    },
});

export const { 
    gameId,
    gameMap,
    gameArmorLevel,
    gameArmorMax,
    gameCoins,
    gameHealth,
    gameHealthMax,
    gameScore,
    gameXM,
    gameXP,
    gameYM,
    gameYP 
} = gameSlice.actions;

export default gameSlice.reducer;