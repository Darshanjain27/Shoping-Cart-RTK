import { configureStore } from '@reduxjs/toolkit'
import productReducer, { productFetch } from '../features/productSlice'
import cartReducer,{getTotals} from '../features/cartSlice'
export const store = configureStore({
  reducer: {
    product:productReducer,
    cart:cartReducer,
  },
})
store.dispatch(productFetch());
store.dispatch(getTotals());