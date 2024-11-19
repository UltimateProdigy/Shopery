import { CartIcon } from "../icons";

type CartProps = {
	amount: number;
	value: number;
};

export default function Cart({ amount, value }: CartProps) {
	return (
		<div className="flex gap-4">
			<CartIcon className="mt-1" value={value} />
			<div>
				<p className="text-gray-400 text-[12px]">Shopping cart:</p>
				<p className="font-bold">{`$ ${amount}`}</p>
			</div>
		</div>
	);
}
