import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


const initialState = {
  items:[],
  status:null,
};
export const productFetch= createAsyncThunk(
  "product/productFetch",
  async()=>{
    const response= await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }
)

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
  
  },
  extraReducers:{
      [productFetch.pending]: (state, action) => {
        state.status="loading";
  },
      [productFetch.fulfilled]: (state, action) => {
        state.status="succeeded";
        state.items=action.payload;
      },
      [productFetch.rejected]: (state, action) => {
        state.status="rejected"; 
    },
  },
})



export default productSlice.reducer