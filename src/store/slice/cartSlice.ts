import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
	CartState,
	ICartProduct,
	IncreaseQuantityPayload,
	DecreaseQuantityPayload,
	RemoveItemPayload,
} from "@/constants/types";

const cartSlice = createSlice({
	name: "cart",
	initialState: { cart: [] } as CartState,
	reducers: {
		addToCart: (state, action) => {
			const itemInCart = state.cart.find(
				(item: ICartProduct) => item.id === action.payload.id
			);
			if (itemInCart) {
				if (itemInCart.quantity !== undefined) {
					itemInCart.quantity++;
				}
			} else {
				state.cart.push({ ...action.payload, quantity: 1 });
			}
		},
		removeFromCart: (state, action: PayloadAction<RemoveItemPayload>) => {
			state.cart = state.cart.filter(
				(item) => item.id !== action.payload.id
			);
		},
		increaseQuantity: (
			state,
			action: PayloadAction<IncreaseQuantityPayload>
		) => {
			const item = state.cart.find(
				(item) => item.id === action.payload.id
			);
			if (item && item.quantity !== undefined) {
				item.quantity++;
			}
		},
		decreaseQuantity: (
			state,
			action: PayloadAction<DecreaseQuantityPayload>
		) => {
			const item = state.cart.find(
				(item) => item.id === action.payload.id
			);
			if (item && item.quantity !== undefined && item.quantity > 1) {
				item.quantity--;
			}
		},
		updateQuantity: (
			state,
			action: PayloadAction<{ id: number; quantity: number }>
		) => {
			const item = state.cart.find(
				(item) => item.id === action.payload.id
			);
			if (item) {
				item.quantity = Math.max(1, action.payload.quantity);
			}
		},
		clearCart: (state) => {
			state.cart = [];
		},
	},
});

export const {
	addToCart,
	removeFromCart,
	increaseQuantity,
	decreaseQuantity,
	clearCart,
	updateQuantity,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
