import {createSlice} from "@reduxjs/toolkit"

 const userSlice =createSlice({
    name:"user",
    initialState:{
        currentUser:null,
        isFetching:false,
        error: false,
 }
 ,
    reducers: {
        Login_Begin: (state) => {
            state.isFetching = true;
            },
            Login_Sucess: (state,action) => {
                state.isFetching = false;
                state.currentUser =action.payload;

                },
                Login_Failure: (state) => {
                    state.error = true;
                state.isFetching = false;

                    }
}});

export const {Login_Begin, Login_Sucess, Login_Failure} =userSlice.actions;
export default userSlice.reducer;