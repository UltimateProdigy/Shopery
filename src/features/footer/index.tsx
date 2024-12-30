import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";

export default function Footer() {
	return (
		<div className="bg-black text-white px-4 sm:px-6 py-8 sm:py-10">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
				{/* About Section */}
				<div>
					<p className="font-bold text-lg">About Ecobazar</p>
					<p className="text-gray-400 text-sm max-w-[300px] mt-4">
						Morbi cursus porttitor enim lobortis molestie. Duis
						gravida turpis dui, eget bibendum magna congue nec.
					</p>
					<p className="flex flex-wrap items-center gap-2 text-sm mt-4">
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

				{/* My Account Section */}
				<div>
					<p className="font-bold text-lg">My Account</p>
					<div className="text-gray-400 flex flex-col gap-3 mt-3 text-sm">
						<a
							href=""
							className="hover:text-white transition-colors"
						>
							My Account
						</a>
						<a
							href=""
							className="hover:text-white transition-colors"
						>
							Order History
						</a>
						<a
							href=""
							className="hover:text-white transition-colors"
						>
							Shopping Cart
						</a>
						<a
							href=""
							className="hover:text-white transition-colors"
						>
							Wishlist
						</a>
						<a
							href=""
							className="hover:text-white transition-colors"
						>
							Settings
						</a>
					</div>
				</div>

				{/* Helps Section */}
				<div>
					<p className="font-bold text-lg">Helps</p>
					<div className="flex flex-col text-gray-400 gap-3 mt-3 text-sm">
						<a
							href=""
							className="hover:text-white transition-colors"
						>
							Contact
						</a>
						<a
							href=""
							className="hover:text-white transition-colors"
						>
							FAQs
						</a>
						<a
							href=""
							className="hover:text-white transition-colors"
						>
							Terms & Condition
						</a>
						<a
							href=""
							className="hover:text-white transition-colors"
						>
							Privacy and Policy
						</a>
					</div>
				</div>

				{/* Proxy Section */}
				<div>
					<p className="font-bold text-lg">Proxy</p>
					<div className="flex flex-col text-gray-400 gap-3 mt-3 text-sm">
						<a
							href=""
							className="hover:text-white transition-colors"
						>
							About
						</a>
						<a
							href=""
							className="hover:text-white transition-colors"
						>
							Shop
						</a>
						<a
							href=""
							className="hover:text-white transition-colors"
						>
							Product
						</a>
						<a
							href=""
							className="hover:text-white transition-colors"
						>
							Product Details
						</a>
						<a
							href=""
							className="hover:text-white transition-colors"
						>
							Track Order
						</a>
					</div>
				</div>

				{/* Download App Section */}
				<div className="space-y-4 sm:col-span-2 lg:col-span-3 xl:col-span-1">
					<p className="font-bold text-xl">Download our Mobile App</p>
					<div className="flex flex-wrap gap-4">
						<Button
							variant="secondary"
							className="h-auto py-2 px-4 bg-zinc-400 hover:bg-zinc-500 text-left space-y-1 w-full sm:w-auto"
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
							className="h-auto py-2 px-4 bg-zinc-400 hover:bg-zinc-500 text-left space-y-1 w-full sm:w-auto"
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
		</div>
	);
}
