//* LIBRARY
import { createAsyncThunk } from '@reduxjs/toolkit';

// Add To Cart
export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ productId }, { rejectWithValue }) => {
    try {
      return productId;
    } catch (error) {
      if (error) {
        // Trả về error nếu có lỗi xảy ra
        return rejectWithValue(error);
      }
    }
  }
);

// Add To Cart Muting Quantity
export const addToCartMutingQuantity = createAsyncThunk(
  'cart/addToCartMutingQuantity',
  async ({ productId, quantity }, { rejectWithValue }) => {
    try {
      return {
        productId,
        quantity,
      };
    } catch (error) {
      if (error) {
        // Trả về error nếu có lỗi xảy ra
        return rejectWithValue(error);
      }
    }
  }
);

// Delete To Cart
export const deleteToCart = createAsyncThunk(
  'cart/deleteToCart',
  async ({ productId }, { rejectWithValue }) => {
    try {
      return productId;
    } catch (error) {
      if (error) {
        // Trả về error nếu có lỗi xảy ra
        return rejectWithValue(error);
      }
    }
  }
);

// Increment quantity
export const incrementQuantity = createAsyncThunk(
  'cart/incrementToCart',
  async ({ productId }, { rejectWithValue }) => {
    try {
      return productId;
    } catch (error) {
      if (error) {
        // Trả về error nếu có lỗi xảy ra
        return rejectWithValue(error);
      }
    }
  }
);

// decrement quantity
export const decrementQuantity = createAsyncThunk(
  'cart/decrementToCart',
  async ({ productId }, { rejectWithValue }) => {
    try {
      return productId;
    } catch (error) {
      if (error) {
        // Trả về error nếu có lỗi xảy ra
        return rejectWithValue(error);
      }
    }
  }
);
