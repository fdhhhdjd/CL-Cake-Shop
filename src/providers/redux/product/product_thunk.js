//* LIBRARY
import { createAsyncThunk } from '@reduxjs/toolkit';

//* API
import API_JSON from '../../../api/json/products.json';

//* CONFIGS
import { TIME } from '../../../configs';

// Get all products
export const getAllProductInitial = createAsyncThunk(
  // Type prefix for the action to identify it uniquely in the Redux store.
  'product/get/all',
  async (_, { rejectWithValue }) => {
    // Async function taking no input (using '_') and a rejectWithValue callback.
    try {
      // Simulate API delay with setTimeout (Adjust the delay time in milliseconds as needed)
      await new Promise((resolve) => setTimeout(resolve, TIME._1_SECOND));

      // Return the product data fetched from the API.
      return API_JSON;
    } catch (error) {
      if (error) {
        // If an error occurs, call rejectWithValue to create a rejected action with the error value.
        return rejectWithValue(error);
      }
    }
  }
);

// Get Detail product
export const getDetailProductInitial = createAsyncThunk(
  // Type prefix for the action to identify it uniquely in the Redux store.
  'product/get/detail',
  async ({ id }, { rejectWithValue }) => {
    // Async function taking an object with 'id' and a rejectWithValue callback.
    try {
      // Simulate API delay with setTimeout (Adjust the delay time in milliseconds as needed)
      await new Promise((resolve) => setTimeout(resolve, TIME._1_SECOND));

      // Get the product data fetched from the API.
      const allProduct = API_JSON;

      // Return the product detail that matches the specified 'id'.
      return allProduct.find((product) => product.id === id);
    } catch (error) {
      if (error) {
        // If an error occurs, call rejectWithValue to create a rejected action with the error value.
        return rejectWithValue(error);
      }
    }
  }
);
