import { createSlice } from "@reduxjs/toolkit";


export const gameItemSlice = createSlice({
    name: "gameItem",
    initialState: {
        entities: [],
    },
    reducers: {
        loadObjects: (state, action) => {
            state.entities.push(action.payload);
        },
        objUpdate: (state, action) => {
            const entities = state.entities.map((entity) => {
                if(entity.id === action.payload.id){
                    entity = action.payload;
                }
                return entity;
            });
            return {...state, entities: [...entities]};            
        },
        objId: (state, action) => {
            state.value.id = action.payload;
        },
        objCollected: (state, action) => {
            state.value.collected = action.payload;
        },
        objMap: (state, action) => {
            state.value.map = action.payload;
        },
        objType: (state, action) => {
            state.value.object_type = action.payload;
        },
        objX: (state, action) => {
            state.value.x = action.payload;
        },
        objY: (state, action) => {
            state.value.y = action.payload;
        },        
    },
});

export const {
    loadObjects,
    objUpdate,
    objId,
    objCollected,
    objMap,
    objType,
    objX,
    objY
} = gameItemSlice.actions;

export default gameItemSlice.reducer;