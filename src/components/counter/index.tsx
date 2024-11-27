import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import { increaseQuantity, decreaseQuantity } from "@/store/slice/cartSlice";
import { useEffect, useState } from "react";

interface CounterProps {
	productId: number;
	initialQuantity?: number;
	onQuantityChange?: (quantity: number) => void;
}

export default function Counter({
	productId,
	initialQuantity = 1,
	onQuantityChange,
}: CounterProps) {
	const dispatch = useDispatch();
	const [quantity, setQuantity] = useState(initialQuantity);

	useEffect(() => {
		if (onQuantityChange) {
			onQuantityChange(quantity);
		}
	}, [quantity, onQuantityChange]);

	const handleIncrease = () => {
		dispatch(increaseQuantity({ id: productId }));
		setQuantity((prev) => prev + 1);
	};

	const handleDecrease = () => {
		if (quantity > 1) {
			dispatch(decreaseQuantity({ id: productId }));
			setQuantity((prev) => prev - 1);
		}
	};

	return (
		<div className="flex items-center border rounded-full p-1 space-x-2">
			<Button
				variant="outline"
				size="icon"
				onClick={handleDecrease}
				disabled={quantity <= 1}
				className="rounded-full w-7 h-7 text-xl font-bold"
			>
				-
			</Button>
			<p className="text-lg font-medium min-w-[40px] text-center">
				{quantity}
			</p>
			<Button
				variant="outline"
				size="icon"
				onClick={handleIncrease}
				className="rounded-full w-7 h-7 text-xl font-bold"
			>
				+
			</Button>
		</div>
	);
}
