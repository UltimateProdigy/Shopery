import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import {
	removeFromCart,
	updateQuantity,
	clearCart,
} from "@/store/slice/cartSlice";
import { Button } from "@/components/ui/button";
import { ShoppingBagIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { routes } from "@/constants";
import { usePaystackPayment } from "react-paystack";
import { config } from "@/constants/constant";
import Counter from "@/components/counter";
import { Bounce, toast } from "react-toastify";

export default function CartPage() {
	const cart = useSelector((state: RootState) => state.cartReducer.cart);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const total = cart.reduce((total, item) => {
		const itemQuantity = item.quantity ?? 1;
		return total + item.price * itemQuantity;
	}, 0);

	const configPaystack: any = {
		reference: new Date().getTime().toString(),
		email: config.email,
		publicKey: config.paystackKey,
		amount: total * 160000,
	};

	const onSuccess = (reference: any) => {
		toast.success("Payment Successful", {
			position: "top-center",
			theme: "dark",
			transition: Bounce,
		});
		console.log("Payment Successful", reference);
		dispatch(clearCart());
		navigate(routes.index);
	};

	const onClose = () => {
		toast.warn("Payment Closed", {
			position: "top-center",
			theme: "dark",
			transition: Bounce,
		});
	};

	const initializePayment = usePaystackPayment(configPaystack);

	const handleQuantityChange = (
		id: number,
		change: number,
		currentQuantity: number = 0
	) => {
		dispatch(
			updateQuantity({
				id,
				quantity: currentQuantity + change,
			})
		);
	};

	const handleRemove = (id: number) => {
		dispatch(removeFromCart({ id }));
	};

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	if (cart.length === 0) {
		return (
			<div className="flex flex-col justify-center items-center mt-20 px-4">
				<img
					className="w-[180px]"
					src="/img/empty.jpg"
					alt="empty-state"
				/>
				<p className="text-2xl font-semibold mt-2 text-center">
					Your cart is empty!
				</p>
				<Button
					className="mt-6 mb-[50px]"
					onClick={() => navigate(routes.products.index)}
				>
					Browse Products
				</Button>
			</div>
		);
	}

	return (
		<div className="container mx-auto px-4">
			<div className="flex justify-center mt-6">
				<h1 className="text-2xl md:text-3xl font-bold items-center text-center">
					My Shopping Cart
				</h1>
			</div>

			<div className="mt-10 flex flex-col lg:flex-row gap-6 lg:gap-10">
				<div className="space-y-6 w-full lg:w-2/3">
					{cart.map((item) => (
						<div
							key={item.id}
							className="flex flex-col sm:flex-row items-center justify-between border p-4 rounded-md shadow-sm w-full"
						>
							<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
								<img
									src={item.image}
									alt={item.name}
									className="w-20 h-20 object-cover rounded"
								/>
								<div className="text-center sm:text-left">
									<p className="text-lg font-semibold">
										{item.name}
									</p>
									<p className="text-gray-500">{`$${item.price.toFixed(
										2
									)}`}</p>
								</div>
							</div>
							<div className="flex flex-col sm:flex-row items-center gap-4 mt-4 sm:mt-0">
								<Counter
									productId={item.id}
									initialQuantity={item.quantity}
									onQuantityChange={() =>
										handleQuantityChange
									}
								/>
								<Button
									variant="outline"
									className="text-red-500"
									onClick={() => handleRemove(item.id)}
								>
									Remove
								</Button>
							</div>
						</div>
					))}
				</div>

				<div className="border p-4 rounded-lg w-full lg:w-1/3 h-fit">
					<p className="font-bold text-xl">Cart Total</p>
					<div className="flex justify-between mt-4 mb-2">
						<p>Subtotal</p>
						<p className="font-bold">{`$${total.toFixed(2)}`}</p>
					</div>
					<hr />
					<div className="flex justify-between mt-2 mb-2">
						<p>Shipping</p>
						<p className="font-bold">Free</p>
					</div>
					<hr />
					<div className="flex justify-between mt-2 mb-2">
						<p>Total</p>
						<p className="font-bold">{`$${total.toFixed(2)}`}</p>
					</div>

					<div className="flex flex-col justify-between items-center">
						<Button
							className="w-full rounded-full mt-2"
							onClick={handleClearCart}
							variant="destructive"
						>
							Clear Cart
						</Button>
						<Button
							className="bg-green-500 text-white w-full mt-4 rounded-full"
							onClick={() =>
								initializePayment({ onSuccess, onClose })
							}
						>
							Proceed To Checkout{" "}
							<ShoppingBagIcon className="ml-2" />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
