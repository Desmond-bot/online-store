import { combineReducers } from "redux";

const initialCartState = {
  items: [],
  totalCost: 0,
  shippingMethod: "standard",
};

const initialUserState = {
  isAuthenticated: false,
  user: null,
};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const updatedItems = [...state.items, action.payload];
      const updatedTotalCost = state.totalCost + action.payload.price;
      return {
        ...state,
        items: updatedItems,
        totalCost: updatedTotalCost,
      };
    case "SET_SHIPPING_METHOD":
      return {
        ...state,
        shippingMethod: action.payload,
      };
    default:
      return state;
  }
};

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return action.payload;
    default:
      return state;
  }
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "LOGIN_USER":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "LOGOUT_USER":
      return initialUserState;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  products: productsReducer,
});
