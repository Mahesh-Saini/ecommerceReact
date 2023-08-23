import { configureStore } from "@reduxjs/toolkit";
import allProductReducer from "./product/productSlice.js";
import recommendedProductReducer from "./product/recomemdedProductSlice.js";
import topSellingProductReducer from "./product/topSellingProductSlice.js";

const store = configureStore({
  reducer: {
    allProduct: allProductReducer,
    recommendedProduct: recommendedProductReducer,
    topSellingProduct: topSellingProductReducer,
  },
});

export default store;
