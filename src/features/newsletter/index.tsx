import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
	return (
		<div className="flex flex-col md:flex-row justify-between gap-6 mt-10 px-4 md:px-10 bg-[#E6E6E6] py-8">
			<div className="flex justify-center md:justify-start">
				<Logo />
			</div>

			<div className="text-center md:text-left">
				<p className="font-bold">Subscribe to our Newsletter</p>
				<p className="text-sm">
					Subscribe to our Monthly newsletter to get new updates from
					us...
				</p>
			</div>

			<div className="flex w-full md:w-auto md:max-w-sm items-center space-x-2">
				<div className="relative w-full">
					<Input
						type="text"
						placeholder="Your email address"
						className="pl-8 rounded-2xl bg-white w-full"
					/>
				</div>
				<Button
					type="submit"
					className="bg-[#00B207] rounded-2xl whitespace-nowrap"
				>
					Subscribe
				</Button>
			</div>
		</div>
	);
}
