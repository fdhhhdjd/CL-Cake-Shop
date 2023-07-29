//* LIBRARY
import { createSlice } from '@reduxjs/toolkit';

//* REDUX THUNK
import {
  addToCart,
  deleteToCart,
  incrementQuantity,
  decrementQuantity,
  addToCartMutingQuantity,
} from './cart_thunk';

//* API JSON
import productArr from '../../../api/json/products.json';

const initialState = {
  loading: false,
  error: null,
  cart: [],
  total: 0,
  cost: 0,
};

const Carts = createSlice({
  name: 'cart_slice',
  initialState,
  reducers: {},
  extraReducers: {
    //* Add to cart
    [addToCart.pending]: (state, action) => {
      state.loading = true;
    },
    [addToCart.fulfilled]: (state, action) => {
      state.loading = false;

      const productId = action.payload;

      const existingProduct = state.cart.find((product) => product.id === productId);

      if (existingProduct?.quantity > existingProduct?.stock_count) {
        return;
      }

      if (!existingProduct) {
        // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm vào mảng state.cart
        const foundProduct = productArr.flat().find((product) => product.id === productId);
        if (foundProduct) {
          // Nếu tìm thấy sản phẩm trong danh sách productArr
          const productToAdd = {
            ...foundProduct, // Sao chép các thuộc tính từ foundProduct
            quantity: 1, // Thêm thuộc tính quantity
          };

          state.cart.push(productToAdd);
        } else {
          console.log('Không tìm thấy sản phẩm với id tương ứng trong danh sách.');
        }
      } else {
        // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng quantity lên 1
        existingProduct.quantity += 1;
      }

      // Calculate total and cost
      state.total = state.cart.reduce((total, product) => {
        const price = product.discounted_price || product.original_price;

        return total + price * product.quantity;
      }, 0);

      state.cost = state.cart.reduce((total, product) => {
        const price = product.original_price;

        return total + price * product.quantity;
      }, 0);
    },
    [addToCart.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //* Delete cart
    [deleteToCart.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteToCart.fulfilled]: (state, action) => {
      state.loading = false;

      const productId = action.payload;

      state.cart = state.cart.filter((product) => product.id !== productId);
    },
    [deleteToCart.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //* Incr cart
    [incrementQuantity.pending]: (state, action) => {
      state.loading = true;
    },
    [incrementQuantity.fulfilled]: (state, action) => {
      state.loading = false;

      const productId = action.payload;

      const existingProduct = state.cart.find((product) => product.id === productId);

      if (existingProduct) {
        if (existingProduct.quantity > existingProduct.stock_count) {
          return;
        }
        existingProduct.quantity += 1;
      }

      // Calculate total and cost
      state.total = state.cart.reduce((total, product) => {
        const price = product.discounted_price || product.original_price;

        return total + price * product.quantity;
      }, 0);

      state.cost = state.cart.reduce((total, product) => {
        const price = product.original_price;

        return total + price * product.quantity;
      }, 0);
    },
    [incrementQuantity.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //* Decr cart
    [decrementQuantity.pending]: (state, action) => {
      state.loading = true;
    },
    [decrementQuantity.fulfilled]: (state, action) => {
      state.loading = false;

      const productId = action.payload;

      const existingProduct = state.cart.find((product) => product.id === productId);

      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
        } else {
          // Nếu số lượng sản phẩm là 1 thì xóa sản phẩm khỏi giỏ hàng
          state.cart = state.cart.filter((product) => product.id !== productId);
        }
      }

      // Calculate total and cost
      state.total = state.cart.reduce((total, product) => {
        const price = product.discounted_price || product.original_price;

        return total + price * product.quantity;
      }, 0);

      state.cost = state.cart.reduce((total, product) => {
        const price = product.original_price;

        return total + price * product.quantity;
      }, 0);
    },
    [decrementQuantity.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //* Add cart with quantity
    [addToCartMutingQuantity.pending]: (state, action) => {
      state.loading = true;
    },
    [addToCartMutingQuantity.fulfilled]: (state, action) => {
      state.loading = false;

      const { productId, quantity } = action.payload;
      const existingProduct = state.cart.find((product) => product.id === productId);
      if (!existingProduct) {
        const foundProduct = productArr.flat().find((product) => product.id === productId);

        const productToAdd = {
          ...foundProduct, // Sao chép các thuộc tính từ foundProduct
          quantity: 1, // Thêm thuộc tính quantity
        };

        state.cart.push(productToAdd);
      } else {
        if (existingProduct.quantity + quantity > existingProduct.stock_count) {
          return;
        }
        // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng
        existingProduct.quantity += quantity;
      }
    },
    [addToCartMutingQuantity.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const CartsSlice = Carts.reducer;
export default CartsSlice;
