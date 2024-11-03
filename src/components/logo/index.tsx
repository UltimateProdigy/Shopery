import Ecobazar from "../../../public/img/Ecobazar.svg";

interface LogoProps {
    className?: string
}

export function Logo({ className }: LogoProps) {
	return (
		<div className={className}>
			<img src={Ecobazar} alt="logo" />
		</div>
	);
}
