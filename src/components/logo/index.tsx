import Ecobazar from "../../assets/Ecobazar.svg";

interface LogoProps {
	className?: string;
}

export function Logo({ className }: LogoProps) {
	return (
		<div
			className={`cursor-pointer ${className} w-[100px] sm:w-[120px] md:w-[160px] lg:w-[200px] mt-3 md:mt-0 transition-all duration-300`}
		>
			<img src={Ecobazar} alt="logo" className="w-full h-auto" />
		</div>
	);
}
