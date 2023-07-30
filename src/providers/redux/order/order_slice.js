//* LIBRARY
import { createSlice } from '@reduxjs/toolkit';

//* REDUX THUNK
import { createOrders } from './order_thunk';

//* CONSTANTS
import { REDUX_NAME } from '../../../configs/constants';

const initialState = {
  loading: false,
  error: null,
  order: [],
};

const Orders = createSlice({
  name: REDUX_NAME.ORDER,
  initialState,
  reducers: {},
  extraReducers: {
    //* Create Orders
    [createOrders.pending]: (state, action) => {
      state.loading = true;
    },
    [createOrders.fulfilled]: (state, action) => {
      state.loading = false;
      state.order = [...state.order, ...action.payload]; // Append the new array elements to the existing state.order
    },
    [createOrders.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const OrderSlice = Orders.reducer;
export default OrderSlice;
