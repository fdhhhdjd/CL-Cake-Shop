export function findProductInCart(cart, productId) {
  return cart.find((product) => product.id === productId);
}

// Thêm sản phẩm vào giỏ hàng
export function addToCart(cart, productToAdd) {
  return [...cart, productToAdd];
}

// Tăng số lượng sản phẩm trong giỏ hàng
export function incrementQuantity(existingProduct, quantity) {
  return existingProduct.quantity + quantity;
}

// Kiểm tra xem số lượng sản phẩm có vượt quá giới hạn tồn kho hay không
export function isQuantityExceedStock(newQuantity, stockCount) {
  return newQuantity <= stockCount;
}

// Hàm util để chuyển đổi productsArr thành productsById
export function convertToProductsById(productsArr) {
  const productsById = {};

  productsArr.flat().forEach((product) => {
    productsById[product.id] = product;
  });

  return productsById;
}
