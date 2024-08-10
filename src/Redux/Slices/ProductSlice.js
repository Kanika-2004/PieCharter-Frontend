import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/AxiosInstance"
import toast from "react-hot-toast"

const initialState={
    productData:[],
}


export const getallproducts= createAsyncThunk('products/getall', async()=>{
    try {
        const products=axiosInstance.get('/products');
        toast.promise(products,{
            loading: 'Loading all the products',
            error: 'Something went cannot load products',
            success: 'Products loaded successfully',
        });
        const apiresponse=await products
        console.log(apiresponse)
        return apiresponse
        
    } catch (error) {
        console.log(error)
        toast.error("something went wrong")
    }
})


export const getproductdetails= createAsyncThunk('products/getdetail', async(id)=>{
    try {
        const products=axiosInstance.get(`/products/${id}`);
        toast.promise(products,{
            loading: 'Loading all the products',
            error: 'Something went wrong cannot load products',
            success: 'Product loaded successfully',
        });
        const apiresponse=await products
        console.log(apiresponse)
        return apiresponse
        
    } catch (error) {
        console.log(error)
        toast.error("something went wrong")
    }
})

const productslice= createSlice({
    name:'product',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getallproducts.fulfilled,(state,action)=>{
            console.log(action.payload)
            state.productData=action?.payload?.data?.data;
        });
    }
})
export default productslice.reducer