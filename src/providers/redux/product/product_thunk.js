//* LIBRARY
import { createAsyncThunk } from '@reduxjs/toolkit';

//* API
import API_JSON from '../../../api/json/products.json';

// Get all products
export const getAllProductInitial = createAsyncThunk(
  'product/get/all',
  async (_, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Adjust the delay time (in milliseconds) as needed

      return API_JSON;
    } catch (error) {
      if (error) {
        // return error
        return rejectWithValue(error);
      }
    }
  }
);

// Get Detail product

export const getDetailProductInitial = createAsyncThunk(
  'product/get/detail',
  async ({ id }, { rejectWithValue }) => {
    try {
      // Simulate API delay with setTimeout
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Adjust the delay time (in milliseconds) as needed

      const allProduct = API_JSON;

      return allProduct.find((product) => product.id === id);
    } catch (error) {
      if (error) {
        // return error
        return rejectWithValue(error);
      }
    }
  }
);
