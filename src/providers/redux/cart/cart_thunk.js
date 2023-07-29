//* LIBRARY
import { createAsyncThunk } from '@reduxjs/toolkit';

// Add To Cart
export const addToCart = createAsyncThunk(
  // Type prefix for the action, used to identify it uniquely among other actions in the Redux store.
  'cart/addToCart',
  async ({ productId }, { rejectWithValue }) => {
    // Async function that takes an object with a productId property and a rejectWithValue callback.
    try {
      // Return the productId if the operation is successful (presumably, adding the item to the cart).
      return productId;
    } catch (error) {
      if (error) {
        // If an error occurs, call rejectWithValue to create a rejected action with the error value.
        return rejectWithValue(error);
      }
    }
  }
);

// Add To Cart Muting Quantity
export const addToCartMutingQuantity = createAsyncThunk(
  // Type prefix for the action to identify it uniquely in the Redux store.
  'cart/addToCartMutingQuantity',
  // Async function taking an object with productId and quantity, and a rejectWithValue callback.
  async ({ productId, quantity }, { rejectWithValue }) => {
    try {
      // Return an object containing the productId and quantity if the operation is successful (adding item to cart with the given quantity).
      return {
        productId,
        quantity,
      };
    } catch (error) {
      if (error) {
        // If an error occurs, call rejectWithValue to create a rejected action with the error value.
        return rejectWithValue(error);
      }
    }
  }
);

// Delete To Cart
export const deleteToCart = createAsyncThunk(
  // Type prefix for the action to identify it uniquely in the Redux store.
  'cart/deleteToCart',
  async ({ productId }, { rejectWithValue }) => {
    // Async function taking an object with productId, and a rejectWithValue callback.
    try {
      // Return the productId if the operation is successful (removing item from cart).
      return productId;
    } catch (error) {
      if (error) {
        // If an error occurs, call rejectWithValue to create a rejected action with the error value.
        return rejectWithValue(error);
      }
    }
  }
);

// Increment quantity
export const incrementQuantity = createAsyncThunk(
  // Type prefix for the action to identify it uniquely in the Redux store.
  'cart/incrementToCart',
  async ({ productId }, { rejectWithValue }) => {
    // Async function taking an object with productId, and a rejectWithValue callback.
    try {
      // Return the productId if the operation is successful (incrementing the quantity of an item in the cart).
      return productId;
    } catch (error) {
      if (error) {
        // If an error occurs, call rejectWithValue to create a rejected action with the error value.
        return rejectWithValue(error);
      }
    }
  }
);

// Decrement quantity
export const decrementQuantity = createAsyncThunk(
  // Type prefix for the action to identify it uniquely in the Redux store.
  'cart/decrementToCart',
  async ({ productId }, { rejectWithValue }) => {
    // Async function taking an object with productId, and a rejectWithValue callback.
    try {
      // Return the productId if the operation is successful (decrementing the quantity of an item in the cart).
      return productId;
    } catch (error) {
      if (error) {
        // If an error occurs, call rejectWithValue to create a rejected action with the error value.
        return rejectWithValue(error);
      }
    }
  }
);
