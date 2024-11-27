export interface ICartProduct {
	id: number;
	name: string;
	quantity?: number;
	price: number;
    image: string;
}

export interface CartState {
	cart: ICartProduct[];
}

interface CartOperationPayload {
	id: number;
}

export type IncreaseQuantityPayload = CartOperationPayload;
export type DecreaseQuantityPayload = CartOperationPayload;
export type RemoveItemPayload = CartOperationPayload;
