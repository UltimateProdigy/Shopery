import Ecobazar from "../../assets/Ecobazar.svg";

interface LogoProps {
	className?: string;
}

export function Logo({ className }: LogoProps) {
	return (
		<div className={`cursor-pointer ${className}`}>
			<img src={Ecobazar} alt="logo" />
		</div>
	);
}
