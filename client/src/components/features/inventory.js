import { createSlice } from "@reduxjs/toolkit";


export const inventorySlice = createSlice({
    name: "inventory",
    initialState: {value: {
        id: 0,
        weapon: "fist",
        weaponStrength: 100,
        weaponMax: 100,
        healthPacks: 0,
        item1: {
            id: 0,
            collected: false,
            map: "",
            object_type: "",
            x: 0,
            y: 0
        },
        item2: {
            id: 0,
            collected: false,
            map: "",
            object_type: "",
            x: 0,
            y: 0
        },
        item3: {
            id: 0,
            collected: false,
            map: "",
            object_type: "",
            x: 0,
            y: 0
        },
        item4: {
            id: 0,
            collected: false,
            map: "",
            object_type: "",
            x: 0,
            y: 0
        },
        item5: {
            id: 0,
            collected: false,
            map: "",
            object_type: "",
            x: 0,
            y: 0
        },
        item6: {
            id: 0,
            collected: false,
            map: "",
            object_type: "",
            x: 0,
            y: 0
        }
    }},
    reducers: {
        updateId: (state, action) => {
            state.value.id = action.payload;
        },
        updateWeapon: (state, action) => {
            state.value.weapon = action.payload;
        },
        updateHealthPacks: (state, action) => {
            state.value.healthPacks = action.payload;
        },
        updateItem1: (state, action) => {
            console.log("update item1: ", action.payload);
            state.value.item1 = action.payload;
        },
        updateItem2: (state, action) => {
            state.value.item2 = action.payload;
        },
        updateItem3: (state, action) => {
            state.value.item3 = action.payload;
        },
        updateItem4: (state, action) => {
            state.value.item4 = action.payload;
        },
        updateItem5: (state, action) => {
            state.value.item5 = action.payload;
        },
        updateItem6: (state, action) => {
            state.value.item6 = action.payload;
        },
    },
});

export const { 
    updateId,
    updateWeapon,
    updateHealthPacks,
    updateItem1, 
    updateItem2, 
    updateItem3, 
    updateItem4, 
    updateItem5, 
    updateItem6 
} = inventorySlice.actions;

export default inventorySlice.reducer;