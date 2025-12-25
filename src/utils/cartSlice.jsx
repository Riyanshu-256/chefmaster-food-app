// Import createSlice from Redux Toolkit
// createSlice helps us create reducers + actions in a clean way
import { createSlice } from "@reduxjs/toolkit";

// Creating a slice for cart-related state
const cartSlice = createSlice({
  // Name of the slice (used as a key in the Redux store)
  name: "cart",

  // Initial state of the cart
  initialState: {
    items: [], // Array to store cart items
  },

  // Reducer functions to update the cart state
  reducers: {
    // Adds a new item to the cart
    // action.payload contains the item data
    addItem: (state, action) => {
      state.items.push(action.payload);
    },

    // Removes the last item from the cart
    removeItem: (state) => {
      state.items.pop();
    },

    // Clears all items from the cart
    // originalState = ["pizza"]
    clearCart: (state, action) => {
      //   state.items.length = 0;
      return { items: [] };
    },
  },
});

// Export actions to change cart data (add, remove, clear)
export const { addItem, removeItem, clearCart } = cartSlice.actions;

// Export reducer to update the Redux store
export default cartSlice.reducer;
