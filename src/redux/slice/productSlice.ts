/* eslint-disable @typescript-eslint/no-explicit-any */
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstancefrom from "../axiosinstance";


export const fetchProduct = createAsyncThunk("/products/", async (args : any, {rejectWithValue}) => {
    const {intinalCount} = args
    console.log(intinalCount)
    try{
        const response = await axiosInstancefrom.get(`/products/${intinalCount}`);
        return response.data;
    }catch(error){
        return rejectWithValue(error)
    }
})

const productSlice = createSlice({
    name:"product",
    initialState:{
        status: "idle",
        data: [],
        errorMsg  : ""
    },
    reducers:{},
    extraReducers:(builder) => {

        builder.addCase(fetchProduct.pending, (state,action) => {
            state.status = "loading";
        })

        builder.addCase(fetchProduct.fulfilled, (state,action) => {
            state.status = "success";
            console.log(action.payload)
            state.data = action.payload;
        })

        builder.addCase(fetchProduct.rejected, (state,action) => {
            state.status = "failed";
            state.errorMsg = action.error.message;
        })
    }
})

export default productSlice.reducer
