//* API
import ProductArr from '../api/json/products.json';
import { ROUND } from '../configs/constants';

// Round a number to 3 decimal places
export const rouserNumber = (number) => {
  // Returns the number rounded to 3 decimal places.
  return number.toFixed(ROUND.NUMBER);
};

// Check if a product with the given productId exists in the cart
export const checkExistingProduct = (cart, productId) => {
  // Finds and returns the product with the given productId in the cart, if it exists. Otherwise, returns undefined.
  return cart.find((product) => product.id === productId);
};

// Search for a product with the given productId in the nested array 'ProductArr'
export const flatArrayAndGetProductFlowId = (productId) => {
  // Searches the nested array 'ProductArr' and returns the product with the given productId, if found. Otherwise, returns undefined.
  return ProductArr.flat().find((product) => product.id === productId);
};

// Delete the product with the given productId from the cart
export const deleteOneId = (cart, productId) => {
  // Returns a new cart array with the product removed (filtered out) based on the given productId.
  return cart.filter((product) => product.id !== productId);
};

// Calculate the total price of all items in the cart
export const calculationTotalCart = (cart) => {
  return cart.reduce((total, product) => {
    // If there's a 'discounted_price', use it; otherwise, use 'original_price'.
    const price = product.discounted_price || product.original_price;

    // Calculate the total price by summing the price of each product multiplied by its quantity.
    return total + price * product.quantity;
  }, 0);
};

// Calculate the total cost (without discount) of all items in the cart
export const calculationTotalCostCart = (cart) => {
  return cart.reduce((total, product) => {
    // Always use 'original_price' for cost calculation.
    const price = product.original_price;

    // Calculate the total cost by summing the cost of each product (original price) multiplied by its quantity.
    return total + price * product.quantity;
  }, 0);
};
