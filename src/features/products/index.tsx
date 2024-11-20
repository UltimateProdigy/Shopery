import { categories } from "../data";
import { categoryColors } from "../color";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ShoppingBagIcon } from "lucide-react";
import { useState } from "react";
export default function Products() {
	const allProducts = categories.flatMap((category) =>
		(category.products || []).map((product) => ({
			...product,
			categoryName: category.name,
		}))
	);

	const [activeProductIds, setActiveProductIds] = useState<number[]>([]);

	const handleShoppingBagClick = (productId: number) => {
		setActiveProductIds((prev) =>
			prev.includes(productId)
				? prev.filter((id) => id !== productId)
				: [...prev, productId]
		);
	};

	const randomProducts = allProducts
		.sort(() => 0.5 - Math.random())
		.slice(0, 12);

	return (
		<div className="mt-[60px]">
			<div className="flex justify-between">
				<p className="font-bold text-2xl">Popular Products</p>
				<p className="text-green-500 cursor-pointer arrow">
					View All →
				</p>
			</div>

			<div className="grid grid-cols-6 mt-6">
				{randomProducts.map((product) => (
					<div
						key={product.id}
						className="flex flex-col justify-center items-center border h-[250px] border-black/10 p-4 hover:shadow-md hover:border-green-400 hover:text-green-400 transition-shadow duration-300 cursor-pointer relative"
					>
						<LazyLoadImage
							src={product.image}
							alt={product.name}
							className="mt-10 w-30 h-20 object-cover"
						/>
						<div className="flex justify-between items-center w-full mt-auto">
							<div className="flex flex-col">
								<p className="text-xs">{product.name}</p>
								<p className=" font-bold text-xs">
									{`$ ${product.price.toFixed(2)}`}
								</p>
								<p className="text-xs">⭐⭐⭐⭐⭐</p>
							</div>
							<div
								onClick={() =>
									handleShoppingBagClick(product.id)
								}
								className={`p-2 rounded-full cursor-pointer transition-colors duration-300 ${
									activeProductIds.includes(product.id)
										? "bg-[#00B207] text-white"
										: "bg-gray-200 text-black"
								}`}
							>
								<ShoppingBagIcon size={15} />
							</div>
						</div>
						{/* Category tag */}
						<span
							className={`absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded ${
								categoryColors[
									product.categoryName as keyof typeof categoryColors
								] || "bg-gray-100 text-gray-600"
							}`}
						>
							{product.categoryName}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}
