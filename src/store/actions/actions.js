export const setShippingMethod = (method) => ({
  type: "SET_SHIPPING_METHOD",
  payload: method,
});

export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});
