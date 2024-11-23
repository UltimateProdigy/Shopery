import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";

export default function Footer() {
	return (
		<div className="bg-black text-white px-6 py-10 flex justify-between">
			<div>
				<p className="font-bold text-lg">About Ecobazar</p>
				<p className="text-gray-400 text-sm w-[300px] mt-4">
					Morbi cursus porttitor enim lobortis molestie. Duis gravida
					turpis dui, eget bibendum magna congue nec.
				</p>
				<p className="flex items-center gap-2 text-sm mt-4">
					<a
						href="tel:+12195550114"
						className="decoration-green-500 underline hover:text-green-600 transition-colors"
					>
						(219) 555-0114
					</a>
					<span className="text-gray-500">or</span>
					<a
						href="mailto:ecobazar@mail.com"
						className="decoration-green-500 underline hover:text-green-600 transition-colors"
					>
						ecobazar@mail.com
					</a>
				</p>
			</div>
			<div>
				<p className="font-bold text-lg">My Account</p>
				<div className="text-gray-400 flex flex-col gap-3 mt-3 text-sm">
					<a href="">My Account</a>
					<a href="">Order History</a>
					<a href="">Shopping Cart</a>
					<a href="">Wishlist</a>
					<a href="">Settings</a>
				</div>
			</div>
			<div>
				<p className="font-bold text-lg">Helps</p>
				<div className="flex flex-col text-gray-400 gap-3 mt-3 text-sm">
					<a href="">Contact</a>
					<a href="">FAQs</a>
					<a href="">Terms & Condition</a>
					<a href="">Privacy and Policy</a>
				</div>
			</div>
			<div>
				<p className="font-bold text-lg">Proxy</p>
				<div className="flex flex-col text-gray-400 gap-3 mt-3 text-sm">
					<a href="">About</a>
					<a href="">Shop</a>
					<a href="">Product</a>
					<a href="">Product Details</a>
					<a href="">Track Order</a>
				</div>
			</div>
			<div className="space-y-4">
				<p className="font-bold text-xl">Download our Mobile App</p>
				<div className="flex flex-wrap gap-4">
					<Button
						variant="secondary"
						className="h-auto py-2 px-4 bg-zinc-400 hover:bg-zinc-500 text-left space-y-1"
					>
						<div className="flex items-center gap-3">
							<Apple className="w-8 h-8" />
							<div>
								<p className="text-gray-200 text-xs">
									Download on the
								</p>
								<p className="text-white font-semibold">
									App Store
								</p>
							</div>
						</div>
					</Button>

					<Button
						variant="secondary"
						className="h-auto py-2 px-4 bg-zinc-400 hover:bg-zinc-500 text-left space-y-1"
					>
						<div className="flex items-center gap-3">
							<Play className="w-8 h-8" />
							<div>
								<p className="text-gray-200 text-xs">
									Download on the
								</p>
								<p className="text-white font-semibold">
									Google Play
								</p>
							</div>
						</div>
					</Button>
				</div>
			</div>
		</div>
	);
}
