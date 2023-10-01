import { createStore } from "redux";

const allState = (
  state = {
    cart: false,
    products: "",
    addedToCart: 0,
    currency: "€",
    addedProducts: [],
    addedIds: [],
  },
  action
) => {
  if (action.type === "add") {
    return {
      addedToCart: state.addedToCart,
      cart: state.cart,
      products: action.itemId,
      addedProducts: state.addedProducts,
      currency: state.currency,
      addedIds: state.addedIds,
    };
  }

  if (action.type === "showCart") {
    return {
      addedToCart: state.addedToCart,
      products: state.products,
      cart: action.showCart,
      addedProducts: state.addedProducts,
      currency: state.currency,
      addedIds: state.addedIds,
    };
  }
  if (action.type === "addItems") {
    return {
      cart: state.cart,
      products: state.products,
      addedToCart: action.addedToCart,
      addedProducts: state.addedProducts,
      currency: state.currency,
      addedIds: state.addedIds,
    };
  }
  if (action.type === "currencyChange") {
    return {
      cart: state.cart,
      products: state.products,
      addedToCart: state.addedToCart,
      addedProducts: state.addedProducts,
      currency: action.currency,
      addedIds: state.addedIds,
    };
  }

  if (action.type === "addProducts") {
    return {
      cart: state.cart,
      products: state.products,
      addedToCart: state.addedToCart,
      addedProducts: action.addedProducts,
      currency: state.currency,
      addedIds: state.addedIds,
    };
  }
  if (action.type === "addIds") {
    return {
      cart: state.cart,
      products: state.products,
      addedToCart: state.addedToCart,
      addedProducts: state.addedProducts,
      currency: state.currency,
      addedIds: action.addedIds,
    };
  }
  return state;
};

const store = createStore(allState);

export default store;
