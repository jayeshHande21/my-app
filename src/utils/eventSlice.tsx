import { createSlice } from "@reduxjs/toolkit";



interface EventState {
    allEvent : any[]
    currentEvent : any[]
}

const initialState : EventState ={
    allEvent : [],
    currentEvent : []
}
const eventSlice = createSlice({
    name : "event",
    initialState ,
    reducers : {
        addAllEvent : (state,action)=>{
            state.allEvent.push(action.payload)
        },
        addCurrentEvent : (state,action)=>{
            state.currentEvent.push(action.payload)
        }

    }
})

export const {addAllEvent,addCurrentEvent} = eventSlice.actions

export default eventSlice.reducer;