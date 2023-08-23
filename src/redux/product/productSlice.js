import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllProducts = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetch(`http://127.0.0.1:3000/api/v1/product/all`);
    return response.json();
  }
);

const allProductSlice = createSlice({
  name: "allProductSlice",
  initialState: {
    loading: false,
    error: null,
    count: null,
    allProducts: null,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.allProducts = action.payload.products;
    });
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});

export default allProductSlice.reducer;
