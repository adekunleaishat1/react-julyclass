import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  isfetching: false,
  alluser:[],
  fetcherror:null
}

export const userslice = createSlice({
    name:"user",
    initialState,
    reducers:{
        FetchingUser:(state)=>{
          state.isfetching = true
          state.alluser = []
          state.fetcherror = null
        },
        FetchingSuccessful:(state, action)=>{
            state.isfetching = false
            state.alluser = action.payload
            state.fetcherror = null
        },
        FetchingFailed:(state, action)=>{
            state.isfetching = false
            state.alluser =[]
            state.fetcherror = action.payload
        }

    }
})

export const {FetchingFailed, FetchingSuccessful, FetchingUser}  = userslice.actions
export default userslice.reducer
