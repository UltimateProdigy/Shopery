import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "../data";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getInitials } from "@/constants/function";

export default function Testimonials() {
	return (
		<div className="mt-[50px] w-full bg-[#e1f4e1] py-10">
			<div className="flex flex-col items-center mb-6">
				<h2 className="text-2xl font-bold mb-2 mt-[50px]">
					What Our Clients Say
				</h2>
				<p className="text-gray-500">
					Testimonials from satisfied clients
				</p>
			</div>
			<div className="px-[70px]">
				<Carousel className="w-full">
					<div className="flex space-x-2">
						<CarouselPrevious />
						<CarouselNext />
					</div>
					<CarouselContent className="-ml-4 md:-ml-6 lg:-ml-8">
						{testimonials.map((testimonial, index) => (
							<CarouselItem
								key={index}
								className="pl-4 md:pl-6 lg:pl-8 md:basis-1/2 lg:basis-1/3"
							>
								<Card className="h-[260px]">
									<CardHeader>
										<img
											src="/img/quote.svg"
											alt="quote"
											className="w-10 mb-4"
										/>
										<p className="text-gray-600">
											{testimonial.quote}
										</p>
									</CardHeader>
									<CardContent className="mt-10">
										<div className="flex items-center justify-between">
											<div className="flex gap-4">
												<Avatar className="h-10 w-10">
													<AvatarFallback className="bg-green-400 text-slate-900">
														{getInitials(
															testimonial.name
														)}
													</AvatarFallback>
												</Avatar>
												<div className="mt-1">
													<CardTitle className="font-bold">
														{testimonial.name}
													</CardTitle>
													<CardDescription>
														{testimonial.position}
													</CardDescription>
												</div>
											</div>
											<div className="text-yellow-400">
												{"★".repeat(testimonial.rating)}
											</div>
										</div>
									</CardContent>
								</Card>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</div>
	);
}
