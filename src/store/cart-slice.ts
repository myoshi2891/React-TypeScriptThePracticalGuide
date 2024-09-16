import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type CartIrem = {
	id: string;
	title: string;
	price: number;
	quantity: number;
};

type CartState = {
	items: CartItem[];
};

const initialState: CartState = {
	items: [],
};
export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart(
			state,
			action: PayloadAction<{ id: string; title: string; price: number }>
		) {},
		removeFromCart() {},
	},
});
