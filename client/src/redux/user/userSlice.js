import { createSlice } from "@reduxjs/toolkit";

const initialState = {
currentUser:null,
error:null,
loading:false

};
const userSlice = createSlice({
name:"user",
initialState,
reducers:{
    signinStart :(state) =>{
        state.loading=true;
    },
    signinSuccsess: (state,action)=>{
        state.currentUser = action.payload
       state.loading= false;
       state.error = null;

},
signinFailure: (state,action)=> {
    state.currentUser = action.payload
    state.loading= false;
    state.error = null;}
}
})
export const {signinStart,signinSuccsess,signinFailure}= userSlice.actions;
export default userSlice.reducer;