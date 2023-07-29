//* LIBRARY
import { createSlice } from '@reduxjs/toolkit';

//* REDUX THUNK
import {
  addToCart,
  addToCartMutingQuantity,
  decrementQuantity,
  deleteToCart,
  incrementQuantity,
} from './cart_thunk';

//* API JSON
import {
  calculationTotalCart,
  calculationTotalCostCart,
  checkExistingProduct,
  deleteOneId,
  flatArrayAndGetProductFlowId,
} from '../../../utils';

//* CONSTANTS
import { REDUX_NAME } from '../../../configs/constants';

const initialState = {
  loading: false,
  error: null,
  cart: [],
  total: 0,
  cost: 0,
};

const Carts = createSlice({
  name: REDUX_NAME.CART,
  initialState,
  reducers: {},
  extraReducers: {
    //* Add to cart
    [addToCart.pending]: (state, action) => {
      state.loading = true; // When the 'addToCart' async action starts (is pending), set the loading state to true.
    },
    [addToCart.fulfilled]: (state, action) => {
      state.loading = false; // When the 'addToCart' async action is fulfilled (successfully completed), set the loading state to false.
      state.exceedStock = false; // Reset the 'exceedStock' state to false, meaning the cart does not contain items with quantities exceeding their stock count.

      const productId = action.payload; // Get the productId from the payload of the fulfilled action.

      const existingProduct = checkExistingProduct(state.cart, productId); // Check if the product already exists in the cart.

      const checkQuantityAndStock = existingProduct?.quantity >= existingProduct?.stock_count; // Check if the quantity of the product in the cart exceeds its stock count.
      if (checkQuantityAndStock) {
        return; // If the quantity exceeds stock count, return early, without making any further changes to the cart.
      }

      if (!existingProduct) {
        // If the product does not already exist in the cart:
        const foundProduct = flatArrayAndGetProductFlowId(productId); // Attempt to find the product information based on its productId.

        if (foundProduct) {
          const productToAdd = {
            ...foundProduct,
            quantity: 1, // If found, create a new cart item with quantity set to 1.
          };

          state.cart.push(productToAdd); // Add the new item to the cart.
        } else {
          // If the product is not found (e.g., it does not exist in the data source):
          // Do nothing and return early.
          return;
        }
      } else {
        // If the product already exists in the cart, simply increment its quantity by 1.
        existingProduct.quantity += 1;
      }

      // Calculate total
      state.total = calculationTotalCart(state.cart); // Recalculate the total quantity of items in the cart.

      // Calculate cost
      state.cost = calculationTotalCostCart(state.cart); // Recalculate the total cost of the items in the cart.
    },
    [addToCart.rejected]: (state, action) => {
      state.loading = false; // When the 'addToCart' async action is rejected (encountered an error), set the loading state to false.
      state.error = action.payload; // Set the error state to the payload of the rejected action.
    },

    //* Delete cart
    [deleteToCart.pending]: (state, action) => {
      state.loading = true; // When the 'deleteToCart' async action starts (is pending), set the loading state to true.
    },
    [deleteToCart.fulfilled]: (state, action) => {
      state.loading = false; // When the 'deleteToCart' async action is fulfilled (successfully completed), set the loading state to false.

      const productId = action.payload; // Get the productId from the payload of the fulfilled action.

      state.cart = deleteOneId(state.cart, productId); // Update the cart state by removing the item with the specified productId.
    },
    [deleteToCart.rejected]: (state, action) => {
      state.loading = false; // When the 'deleteToCart' async action is rejected (encountered an error), set the loading state to false.
      state.error = action.payload; // Set the error state to the payload of the rejected action.
    },

    //* Increment cart
    [incrementQuantity.pending]: (state, action) => {
      state.loading = true; // When the 'incrementQuantity' async action starts (is pending), set the loading state to true.
    },
    [incrementQuantity.fulfilled]: (state, action) => {
      state.loading = false; // When the 'incrementQuantity' async action is fulfilled (successfully completed), set the loading state to false.

      const productId = action.payload; // Get the productId from the payload of the fulfilled action.

      const existingProduct = checkExistingProduct(state.cart, productId); // Check if the product already exists in the cart.

      if (existingProduct) {
        // If the product already exists in the cart:
        const checkQuantityThanStock = existingProduct.quantity >= existingProduct.stock_count; // Check if the quantity of the product in the cart exceeds its stock count.
        if (checkQuantityThanStock) {
          return; // If the quantity exceeds stock count, return early, without making any further changes to the cart.
        }
        existingProduct.quantity += 1; // Increment the quantity of the existing product in the cart by 1.
      }

      // Calculate total
      state.total = calculationTotalCart(state.cart); // Recalculate the total quantity of items in the cart.

      // Calculate cost
      state.cost = calculationTotalCostCart(state.cart); // Recalculate the total cost of the items in the cart.
    },
    [incrementQuantity.rejected]: (state, action) => {
      state.loading = false; // When the 'incrementQuantity' async action is rejected (encountered an error), set the loading state to false.
      state.error = action.payload; // Set the error state to the payload of the rejected action.
    },

    //* Decrement cart
    [decrementQuantity.pending]: (state, action) => {
      state.loading = true; // When the 'decrementQuantity' async action starts (is pending), set the loading state to true.
    },
    [decrementQuantity.fulfilled]: (state, action) => {
      state.loading = false; // When the 'decrementQuantity' async action is fulfilled (successfully completed), set the loading state to false.

      const productId = action.payload; // Get the productId from the payload of the fulfilled action.

      const existingProduct = state.cart.find((product) => product.id === productId); // Find the product with the specified productId in the cart.

      if (existingProduct) {
        // If the product already exists in the cart:
        const checkQuantityThanOne = existingProduct.quantity > 1; // Check if the quantity of the product in the cart is greater than 1.
        if (checkQuantityThanOne) {
          existingProduct.quantity -= 1; // If the quantity is greater than 1, decrement the quantity of the existing product in the cart by 1.
        } else {
          state.cart = deleteOneId(state.cart, productId); // If the quantity is exactly 1, remove the product from the cart.
        }
      }

      // Calculate total
      state.total = calculationTotalCart(state.cart); // Recalculate the total quantity of items in the cart.

      // Calculate cost
      state.cost = calculationTotalCostCart(state.cart); // Recalculate the total cost of the items in the cart.
    },
    [decrementQuantity.rejected]: (state, action) => {
      state.loading = false; // When the 'decrementQuantity' async action is rejected (encountered an error), set the loading state to false.
      state.error = action.payload; // Set the error state to the payload of the rejected action.
    },

    //* Add cart with quantity
    [addToCartMutingQuantity.pending]: (state, action) => {
      state.loading = true; // When the 'addToCartMutingQuantity' async action starts (is pending), set the loading state to true.
    },
    [addToCartMutingQuantity.fulfilled]: (state, action) => {
      state.loading = false; // When the 'addToCartMutingQuantity' async action is fulfilled (successfully completed), set the loading state to false.

      const { productId, quantity } = action.payload; // Get the productId and quantity from the payload of the fulfilled action.

      const existingProduct = checkExistingProduct(state.cart, productId); // Check if the product already exists in the cart.

      if (!existingProduct) {
        // If the product does not already exist in the cart:
        const foundProduct = flatArrayAndGetProductFlowId(productId); // Attempt to find the product information based on its productId.

        const productToAdd = {
          ...foundProduct,
          quantity: 1, // If found, create a new cart item with quantity set to 1.
        };

        state.cart.push(productToAdd); // Add the new item to the cart.
      } else {
        // If the product already exists in the cart:
        const checkQuantityThanStock =
          existingProduct.quantity + quantity > existingProduct.stock_count; // Check if the total quantity after adding the new quantity exceeds the stock count.

        if (checkQuantityThanStock) {
          return; // If the total quantity exceeds stock count, return early, without making any further changes to the cart.
        }
        // If the quantity doesn't exceed the stock count, increment the quantity of the existing product in the cart by the specified 'quantity'.
        existingProduct.quantity += quantity;
      }
    },
    [addToCartMutingQuantity.rejected]: (state, action) => {
      state.loading = false; // When the 'addToCartMutingQuantity' async action is rejected (encountered an error), set the loading state to false.
      state.error = action.payload; // Set the error state to the payload of the rejected action.
    },
  },
});

const CartsSlice = Carts.reducer;
export default CartsSlice;