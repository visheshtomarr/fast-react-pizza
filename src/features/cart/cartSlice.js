import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
    // cart: [
    //     {
    //         pizzaId: 12,
    //         name: 'Mediterranean',
    //         quantity: 2,
    //         unitPrice: 16,
    //         totalPrice: 32,
    //     },
    // ]
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            // payload = newItem
            state.cart.push(action.payload);
        },
        deleteItem(state, action) {
            // payload = pizzaId
            state.cart = state.cart.filter(item => item.pizzaId !== action.payload);
        },
        incItemQuantity(state, action) {
            // payload = pizzaId
            const item = state.cart.find(item => item.pizzaId === action.payload);
            item.quantity++;
            // Calculate the total price of item after the quantity is updated.
            item.totalPrice = item.quantity * item.unitPrice;
        },
        decItemQuantity(state, action) {
            // payload = pizzaId
            const item = state.cart.find(item => item.pizzaId === action.payload);
            item.quantity--;
            // Calculate the total price of item after the quantity is updated.
            item.totalPrice = item.quantity * item.unitPrice;
        },
        clearCart(state) {
            state.cart = [];
        }
    }
});

export const {
    addItem,
    deleteItem,
    incItemQuantity,
    decItemQuantity,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

