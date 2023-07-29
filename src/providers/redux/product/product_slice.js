//* LIBRARY
import { createSlice } from '@reduxjs/toolkit';

//* REDUX THUNK
import { getAllProductInitial, getDetailProductInitial } from './product_thunk';

const initialState = {
  loading: false,
  error: null,
  products: null,
  productsDetail: null,
};

const Products = createSlice({
  name: 'product_slice',
  initialState,
  reducers: {},
  extraReducers: {
    //* Get all products
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
    //* Get Detail products
    [getDetailProductInitial.pending]: (state, action) => {
      state.loading = true;
    },
    [getDetailProductInitial.fulfilled]: (state, action) => {
      state.loading = false;
      state.productsDetail = action.payload;
    },
    [getDetailProductInitial.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const ProductSlice = Products.reducer;
export default ProductSlice;
