import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import axiosInstance from "../../Helpers/AxiosInstance"


const initialState={
    cartsData:'',
    incart:false,
}

export const addproductcart= createAsyncThunk('cart/addproduct',async (productid)=>{
        try {
            const response= axiosInstance.post(`carts/add/${productid}`)
            toast.promise(response, {
                loading: 'Adding product to cart',
                error: 'Something went wrong cannot add product to cart',
                success: 'Product added successfully',
            });
            const apiresponse=await response
            console.log(apiresponse)
            return apiresponse

        } catch (error) {
            console.log(error)
            toast.error("something went wrong")
        }
})

export const removeproduct= createAsyncThunk('cart/removeproduct',async (productid)=>{
    try {
        const response= axiosInstance.post(`carts/remove/${productid}`)
        toast.promise(response, {
            loading: 'Removing product from the cart',
            error: 'Something went wrong cannot remove product from the cart',
            success: 'Product removed successfully',
        });
        const apiresponse=await response
        console.log(apiresponse)
        return apiresponse

    } catch (error) {
        console.log(error)
        toast.error("something went wrong")
    }
})

export const getcartdetails= createAsyncThunk('cart/cartdetails',async (productid)=>{
    try {
        const response= axiosInstance.get('/carts')
        toast.promise(response, {
            loading: 'Fetching cart details',
            error: 'Something went wrong cannot fetch the cart',
            success: 'Cart fetched successfully',
        });
        const apiresponse=await response
        console.log(apiresponse)
        return apiresponse

    } catch (error) {
        console.log(error.response)
        if(error?.response?.status===401){
            toast.error("Please login to view the cart")
            return{
                isUnauthorized:true
            }
        }
        toast.error("something went wrong")
    }
})

const cartslice= createSlice({
    name:'cart',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getcartdetails.fulfilled,(state,action)=>{
            state.cartsData=action?.payload?.data?.data
        })
    }
})
export default cartslice.reducer