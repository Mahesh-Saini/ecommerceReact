import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllProducts = createAsyncThunk(
  "product/fetchAllProducts",
  async (data) => {
    const [
      category,
      subcategory,
      item,
      search,
      min,
      max,
      currentPage,
      pageLimit,
    ] = data;
    let url;

    if (category && subcategory && item) {
      url = `http://127.0.0.1:3000/api/v1/product/all?category=${category}&subcategory=${subcategory}&item=${item}`;
    } else if (search) {
      url = `http://127.0.0.1:3000/api/v1/product/all?search=${search}`;
    } else if (min && max) {
      url = `http://127.0.0.1:3000/api/v1/product/all?lowestPrice=${min}&highestPrice=${max}`;
    } else if (currentPage || pageLimit) {
      url = `http://127.0.0.1:3000/api/v1/product/all?page=${currentPage}&limit=${pageLimit}`;
    } else {
      url = `http://127.0.0.1:3000/api/v1/product/all`;
    }

    const response = await fetch(url);
    return response.json();
  }
);

const allProductSlice = createSlice({
  name: "allProductSlice",
  initialState: {
    loading: false,
    error: null,
    count: null,
    totalCount: null,
    allProducts: null,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.allProducts = action.payload.products;
      state.totalCount = action.payload.totalCount;
    });
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});

export default allProductSlice.reducer;
