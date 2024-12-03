import {createSlice,configureStore } from '@reduxjs/toolkit'
const authSlice = createSlice({
    name :"auth", 
    initialState : {
        user : null,  
        isLoggedin : false
    },
    reducers : {
        login(state, action)
        {
            state.user = action.payload;
            state.isLoggedin = true;
        },
        logout(state)
        {
            state.user = null;
            state.isLoggedin = false;
        },
    }
})  
export const authActions = authSlice.actions;
export const store = configureStore({
    reducer: authSlice.reducer,
  });
