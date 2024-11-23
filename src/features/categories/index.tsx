import "./categories.css";
import { categories } from "../data";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Categories() {
	return (
		<div className="mt-[60px]">
			<div className="flex justify-between">
				<p className="font-bold  text-2xl">Popular Categories</p>
				<p className="text-green-500 cursor-pointer arrow">
					View All →
				</p>
			</div>
			<div className="grid grid-cols-6 gap-6 mt-6">
				{categories.map((category) => (
					<div className="flex flex-col justify-center items-center border border-black/10 rounded-lg p-4 hover:shadow-md hover:border-green-400  hover:text-green-400 transition-shadow duration-300 cursor-pointer">
						<LazyLoadImage
							src={category.image}
							alt="category"
							className="mb-2"
						/>

						<p className="text-center font-bold mt-6">
							{category.name}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
