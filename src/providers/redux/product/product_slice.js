//* LIBRARY
import { createSlice } from '@reduxjs/toolkit';

//* REDUX THUNK
import { getAllProductInitial } from './product_thunk';

const initialState = {
  loading: false,
  error: null,
  products: null,
};

const Products = createSlice({
  name: 'product_slice',
  initialState,
  reducers: {},
  extraReducers: {
    //* Get all books
    [getAllProductInitial.pending]: (state, action) => {
      state.loading = true;
    },
    [getAllProductInitial.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [getAllProductInitial.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const ProductSlice = Products.reducer;
export default ProductSlice;
