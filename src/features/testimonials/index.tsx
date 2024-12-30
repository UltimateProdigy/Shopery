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
			<div className="flex flex-col items-center mb-6 px-4">
				<h2 className="text-xl md:text-2xl font-bold mb-2 mt-[50px] text-center">
					What Our Clients Say
				</h2>
				<p className="text-gray-500 text-center">
					Testimonials from satisfied clients
				</p>
			</div>
			<div className="px-4 sm:px-6 md:px-[70px]">
				<Carousel className="w-full">
					<div className="flex space-x-2">
						<CarouselPrevious className="hidden sm:flex" />
						<CarouselNext className="hidden sm:flex" />
					</div>
					<CarouselContent className="-ml-2 sm:-ml-4 md:-ml-6 lg:-ml-8">
						{testimonials.map((testimonial, index) => (
							<CarouselItem
								key={index}
								className="pl-2 sm:pl-4 md:pl-6 lg:pl-8 basis-full sm:basis-1/2 lg:basis-1/3"
							>
								<Card className="h-auto min-h-[260px]">
									<CardHeader>
										<img
											src="/img/quote.svg"
											alt="quote"
											className="w-8 sm:w-10 mb-4"
										/>
										<p className="text-sm sm:text-base text-gray-600">
											{testimonial.quote}
										</p>
									</CardHeader>
									<CardContent className="mt-4 sm:mt-10">
										<div className="flex items-center justify-between flex-wrap gap-2">
											<div className="flex gap-2 sm:gap-4">
												<Avatar className="h-8 w-8 sm:h-10 sm:w-10">
													<AvatarFallback className="bg-green-400 text-slate-900 text-sm sm:text-base">
														{getInitials(
															testimonial.name
														)}
													</AvatarFallback>
												</Avatar>
												<div className="mt-1">
													<CardTitle className="font-bold text-sm sm:text-base">
														{testimonial.name}
													</CardTitle>
													<CardDescription className="text-xs sm:text-sm">
														{testimonial.position}
													</CardDescription>
												</div>
											</div>
											<div className="text-yellow-400 text-sm sm:text-base">
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
