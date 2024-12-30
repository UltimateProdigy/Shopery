import "./categories.css";
import { categories } from "../data";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Categories() {
	return (
		<div className="mt-[60px]">
			<div className="flex justify-between items-center">
				<p className="font-bold text-xl md:text-2xl">
					Popular Categories
				</p>
				<p className="text-green-500 cursor-pointer arrow text-sm md:text-base">
					View All →
				</p>
			</div>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-6 mt-4 md:mt-6">
				{categories.map((category) => (
					<div className="flex flex-col justify-center items-center border border-black/10 rounded-lg p-3 md:p-4 hover:shadow-md hover:border-green-400 hover:text-green-400 transition-shadow duration-300 cursor-pointer">
						<LazyLoadImage
							src={category.image}
							alt="category"
							className="mb-2 w-12 md:w-auto"
						/>

						<p className="text-center font-bold mt-4 md:mt-6 text-sm md:text-base">
							{category.name}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
