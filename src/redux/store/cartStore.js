const { createStore } = require("redux");
const { cartReducer } = require("../reducers/cartReducers");

export const store = createStore(cartReducer);