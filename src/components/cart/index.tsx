import { CartIcon } from "../icons";

type CartProps = {
	amount: number;
	value: number;
	onClick: () => void;
};

export default function Cart({ amount, value, onClick }: CartProps) {
	return (
		<div className="flex gap-4 cursor-pointer" onClick={onClick}>
			<CartIcon className="mt-1" value={value} />
			<div className="hidden md:block">
				<p className="text-gray-400 text-[12px]">Shopping cart:</p>
				<p className="font-bold">{`$ ${amount}`}</p>
			</div>
		</div>
	);
}
