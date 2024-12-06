type IconProps = {
	value?: number;
	className?: any;
};
export const CartIcon = ({ value, className }: IconProps) => {
	return (
		<div className={`relative inline-block ${className}`}>
			<img src="/img/Bag.svg" alt="bag" />
			<p className="absolute top-2 right-1 -mt-2 -mr-2 bg-[#00B207] text-white rounded-full text-xs px-1.5 py-0.5">
				{value}
			</p>
		</div>
	);
};

export const PhoneIcon = ({ className }: IconProps) => {
	return (
		<div className={className}>
			<img src="/img/phone.svg" alt="phone" />
		</div>
	);
};
