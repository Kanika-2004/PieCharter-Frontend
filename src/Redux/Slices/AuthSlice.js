import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/AxiosInstance";
import toast from "react-hot-toast";
import { act } from "react";
const initialState= {
    isLoggedIn: localStorage.getItem('isLoggedIn')=='true' || false,
    role: localStorage.getItem('role') || '', 
    data: JSON.parse(localStorage.getItem('data')) || {}
};
export const createAccount =createAsyncThunk('auth/createaccount',async (data)=>{
    console.log("incoming data",data);
    try {
        
        const response= axiosInstance.post('/users',data);
        toast.promise(response,{
            success:(resolvedpromise)=>{
                return resolvedpromise?.data?.message
            },
            loading:"Hold tight, we are registering",
            error:"Something went wrong"
        })
        return response

    } catch (error) {
        console.log(error)
    }
})
export const login =createAsyncThunk('auth/logindata',async (data)=>{
    console.log("incoming data",data);
    try {
        
        const response=  axiosInstance.post('/auth/login',data);
        toast.promise(response,{
            success:(resolvedpromise)=>{
                return resolvedpromise?.data?.message
            },
            loading:"Hold tight, we are logging in",
            error:"Something went wrong"
        })
        const apiresponse= await response
        return apiresponse

    } catch (error) {
        console.log(error)
    }
})
export const logout =createAsyncThunk('/auth/logout',async ()=>{
    console.log("incoming data");
    try {
        
        const response=  axiosInstance.post('/auth/logout');
        toast.promise(response,{
            success:(resolvedpromise)=>{
                return resolvedpromise?.data?.message
            },
            loading:"Logging out.....",
            error:"Something went wrong"
        })
        const apiresponse= await response
        console.log(apiresponse)
        return apiresponse

    } catch (error) {
        console.log(error)
    }
})

const AuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(login.fulfilled, (state,action)=>{
            state.isLoggedIn=true;
            state.data=action?.payload?.data?.data?.userData

            localStorage.setItem('isLoggedIn',true)
            localStorage.setItem('data',JSON.stringify(action?.payload?.data?.data?.userData))

        })
        .addCase(logout.fulfilled, (state)=>{
            localStorage.setItem('isLoggedIn',false);
            localStorage.setItem('data',JSON.stringify({}))
            state.isLoggedIn=false;
            state.data={}
        })
    }
})
export default AuthSlice.reducer