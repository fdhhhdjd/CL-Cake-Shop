//* LIBRARY
import { createSlice } from '@reduxjs/toolkit';

//* REDUX THUNK
import { getAllProductInitial, getDetailProductInitial } from './product_thunk';

//* CONSTANTS
import { REDUX_NAME } from '../../../configs';

const initialState = {
  loading: false,
  error: null,
  products: null,
  productsDetail: null,
};

const Products = createSlice({
  name: REDUX_NAME.PRODUCT,
  initialState,
  reducers: {},
  extraReducers: {
    //* Get all products
    [getAllProductInitial.pending]: (state, action) => {
      state.loading = true; // When the 'getAllProductInitial' async action starts (is pending), set the loading state to true.
    },
    [getAllProductInitial.fulfilled]: (state, action) => {
      state.loading = false; // When the 'getAllProductInitial' async action is fulfilled (successfully completed), set the loading state to false.
      state.products = action.payload; // Update the 'products' state with the fetched product data from the action's payload.
    },
    [getAllProductInitial.rejected]: (state, action) => {
      state.loading = false; // When the 'getAllProductInitial' async action is rejected (encountered an error), set the loading state to false.
      state.error = action.payload; // Set the error state to the payload of the rejected action.
    },

    //* Get Detail products
    [getDetailProductInitial.pending]: (state, action) => {
      state.loading = true; // When the 'getDetailProductInitial' async action starts (is pending), set the loading state to true.
    },
    [getDetailProductInitial.fulfilled]: (state, action) => {
      state.loading = false; // When the 'getDetailProductInitial' async action is fulfilled (successfully completed), set the loading state to false.
      state.productsDetail = action.payload; // Update the 'productsDetail' state with the fetched product detail data from the action's payload.
    },
    [getDetailProductInitial.rejected]: (state, action) => {
      state.loading = false; // When the 'getDetailProductInitial' async action is rejected (encountered an error), set the loading state to false.
      state.error = action.payload; // Set the error state to the payload of the rejected action.
    },
  },
});

const ProductSlice = Products.reducer;
export default ProductSlice;
