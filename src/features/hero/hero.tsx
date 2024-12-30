import { Button } from "@/components/ui/button";
import { ArrowBigRightIcon } from "lucide-react";
import { services } from "../data";
import "./hero.css";

export default function HeroSection() {
	return (
		<div className="mt-4 md:mt-0">
			<div className="bg-[#EDF2EE] w-full min-h-[400px] md:h-[630px] rounded-xl p-4 md:p-8 flex flex-col md:flex-row justify-between md:py-[120px]">
				<div className="text-center md:text-left">
					<p className="text-[#00B207] text-sm md:text-base">
						WELCOME TO SHOPERY
					</p>
					<p className="text-[40px] md:text-[80px] font-semibold leading-[1.1] md:leading-[80px] mt-4 md:mt-6">
						Fresh & Healthy <br /> Organic Food
					</p>
					<p className="mt-4 md:mt-8 text-xl md:text-3xl">
						Sale up to{" "}
						<span className="text-[#FF8A00] font-bold">
							30% OFF
						</span>
					</p>
					<p className="text-[#808080] mt-2 md:mt-4 text-sm md:text-base">
						Free shipping on all your order. we deliver, you enjoy
					</p>
					<Button className="bg-[#00B207] text-white w-[160px] md:w-[200px] h-[45px] md:h-[55px] rounded-3xl mt-6 md:mt-10 text-sm md:text-base">
						Shop Now <ArrowBigRightIcon className="mt-1" />
					</Button>
				</div>
				<div className="mt-6 md:mt-0 md:block">
					<img
						src="/img/banner.png"
						alt="banner"
						className="image w-full md:w-[650px] object-contain"
					/>
				</div>
			</div>
			<div className="flex flex-col md:flex-row flex-wrap justify-between mt-8 border border-black/10 rounded-[10px] shadow-lg p-3 md:space-x-4 space-y-3 md:space-y-0">
				{services.map((service) => (
					<div
						key={service.name}
						className="flex items-center gap-4 p-2"
					>
						<img
							src={service.icon}
							alt="icon"
							className="w-10 md:w-auto"
						/>
						<div>
							<p className="font-bold text-sm md:text-base">
								{service.name}
							</p>
							<p className="text-gray-400 text-xs md:text-sm">
								{service.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
