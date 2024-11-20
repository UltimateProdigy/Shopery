import { Button } from "@/components/ui/button";
import { ArrowBigRightIcon } from "lucide-react";
import { services } from "../data";
import "./hero.css";

export default function HeroSection() {
	return (
		<div>
			<div className="bg-[#EDF2EE] w-full h-[630px] rounded-xl p-8 flex justify-between py-[120px]">
				<div>
					<p className="text-[#00B207]">WELCOME TO SHOPERY</p>
					<p className="text-[80px] font-semibold leading-[80px] mt-6">
						Fresh & Healthy <br /> Organic Food
					</p>
					<p className="mt-8 text-3xl">
						Sale up to{" "}
						<span className="text-[#FF8A00] font-bold">30% OFF</span>
					</p>
					<p className="text-[#808080] mt-4">
						Free shipping on all your order. we deliver, you enjoy
					</p>
					<Button className="bg-[#00B207] text-white w-[200px] h-[55px] rounded-3xl mt-10">
						Shop Now <ArrowBigRightIcon className="mt-1" />
					</Button>
				</div>
				<div>
					<img
						src="/img/banner.png"
						alt="banner"
						className="image w-[650px]"
					/>
				</div>
			</div>
			<div className="flex flex-wrap justify-between mt-8 border border-black/10 rounded-[10px] shadow-lg p-3 space-x-4 space-y-3">
				{services.map((service) => (
					<div className="flex items-center gap-4 p-2">
						<img src={service.icon} alt="icon" />
						<div>
							<p className="font-bold">{service.name}</p>
							<p className="text-gray-400 text-sm">
								{service.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
