//* LIBRARY
import { createAsyncThunk } from '@reduxjs/toolkit';

//* API
import API_JSON from '../../../api/json/products.json';

//
export const getAllProductInitial = createAsyncThunk(
  'product/get/all',
  async (_, { rejectWithValue }) => {
    try {
      return API_JSON;
    } catch (error) {
      if (error) {
        // return error
        return rejectWithValue(error);
      }
    }
  }
);
