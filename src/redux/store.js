import { configureStore } from "@reduxjs/toolkit";
import allProductReducer from "./product/productSlice.js";
import recommendedProductReducer from "./product/recomemdedProductSlice.js";
import topSellingProductReducer from "./product/topSellingProductSlice.js";
import cartReducer from "./cart/cartSlice.js";

const store = configureStore({
  reducer: {
    allProduct: allProductReducer,
    recommendedProduct: recommendedProductReducer,
    topSellingProduct: topSellingProductReducer,
    carts: cartReducer,
  },
});

export default store;
