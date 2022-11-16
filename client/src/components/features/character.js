import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
    name: "character",
    initialState: {
        entities: [],
    },
    reducers: {
        loadCharacters: (state, action) => {
            state.entities.push(action.payload);
        },
        charUpdate: (state, action) => {
            const entities = state.entities.map((entity) => {
                if(entity.id === action.payload.id){
                    entity = action.payload;
                }
                return entity;
            });
            return {...state, entities: [...entities]};            
        },
    },
});

export const { loadCharacters, charUpdate } = characterSlice.actions;

export default characterSlice.reducer;