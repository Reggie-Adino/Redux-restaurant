import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ResevationState {
    value:string[]
}

const initialState:ResevationState = {
    value : ['']
}

export const reservationSlice = createSlice({
    name:"reservations",
    initialState:initialState,
    reducers:{
        addRservation: (state, action:PayloadAction<string>) => {
            state.value.push(action.payload)
        },
        removeRservation:(state, action:PayloadAction<number>)=> {
            state.value.splice(action.payload,1)
        }
    }
})

export default reservationSlice.reducer

export const {addRservation, removeRservation} = reservationSlice.actions
