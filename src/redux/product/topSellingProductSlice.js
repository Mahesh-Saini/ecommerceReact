import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTopSellingProducts = createAsyncThunk(
  "product/fetchTopSellingProducts",
  async () => {
    const response = await fetch(`http://127.0.0.1:3000/api/v1/product/all`);
    return response.json();
  }
);

const topSellingProductSlice = createSlice({
  name: "topSellingProductSlice",
  initialState: {
    loading: false,
    topSellingProducts: null,
    error: null,
    count: null,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTopSellingProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTopSellingProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.topSellingProducts = action.payload.products;
      state.count = action.payload.count;
    });
    builder.addCase(fetchTopSellingProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});

export default topSellingProductSlice.reducer;
