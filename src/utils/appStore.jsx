// Import configureStore from Redux Toolkit
// configureStore is the modern way to create a Redux store
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// Creating the Redux store here
// Currently the store is empty because no reducer is passed
// Without reducers, the store does not hold or manage any state
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Exporting the store
// So that the entire application can access it using the Provider
export default appStore;
