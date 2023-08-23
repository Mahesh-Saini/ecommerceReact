import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRecommendedProducts = createAsyncThunk(
  "product/fetchRecommendedProducts",
  async () => {
    const response = await fetch(`http://127.0.0.1:3000/api/v1/product/all`);
    return response.json();
  }
);

const recommendedProductSlice = createSlice({
  name: "recommendedProductSlice",
  initialState: {
    loading: false,
    error: null,
    recommendedProducts: null,
    count: null,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchRecommendedProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRecommendedProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.recommendedProducts = action.payload.products;
      state.count = action.payload.count;
    });
    builder.addCase(fetchRecommendedProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});

export default recommendedProductSlice.reducer;
