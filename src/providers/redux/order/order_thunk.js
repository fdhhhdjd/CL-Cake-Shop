//* LIBRARY
import { createAsyncThunk } from '@reduxjs/toolkit';

// Create order action
// The 'createOrder' is an asynchronous action used to initiate the process of creating an order.
export const createOrders = createAsyncThunk('order/create', async (cart, { rejectWithValue }) => {
  try {
    // Inside the 'try' block, the function simply returns the 'cart' to indicate a successful order creation.
    let arrayOrders = [];
    arrayOrders.push(cart);

    return arrayOrders;
  } catch (error) {
    // If there is an error during the order creation process, the 'catch' block is executed.
    // The 'rejectWithValue' function is called with the 'error' as an argument, and the action returns the error value.
    // This allows the action to handle errors gracefully and include the error in the payload to be consumed by the reducer.
    // In the reducer, the error can be stored in the state for further error handling or displaying error messages to the user.
    if (error) {
      return rejectWithValue(error);
    }
  }
});
