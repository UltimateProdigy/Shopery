import { HashLoader } from "react-spinners";
import { Logo } from "../logo";

export const Loader = () => {
	return (
		<div className="flex items-center justify-center h-screen flex-col">
			<HashLoader size={80} color="#00B207" />
            <Logo className="mt-6"/>
		</div>
	);
};
