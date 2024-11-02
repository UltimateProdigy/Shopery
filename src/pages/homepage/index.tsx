import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Home = () => {
	return (
		<div>
			<Logo />
			<Button className="bg-lime-500 hover:bg-lime-700">Welcome</Button>
		</div>
	);
};