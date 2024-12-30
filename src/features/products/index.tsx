import { categories } from "../data";
import { categoryColors } from "../color";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ShoppingBagIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "@/constants";
import { Bounce, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "@/store/slice/cartSlice";
import "react-toastify/dist/ReactToastify.css";
export default function Products() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [randomProducts, setRandomProducts] = useState<any>([]);
	const allProducts = categories.flatMap((category) =>
		(category.products || []).map((product) => ({
			...product,
			categoryName: category.name,
		}))
	);

	const [activeProductIds, setActiveProductIds] = useState<number[]>([]);

	const handleShoppingBagClick = (productId: number) => {
		setActiveProductIds((prev: number[]) =>
			prev.includes(productId)
				? prev.filter((id) => id !== productId)
				: [...prev, productId]
		);
		const productToCart = allProducts.find(
			(product) => product.id === productId
		);
		if (productToCart) {
			if (activeProductIds.includes(productId)) {
				dispatch(removeFromCart(productToCart));
				toast.warn("Removed removed cart", {
					position: "top-center",
					theme: "dark",
					transition: Bounce,
				});
			} else {
				dispatch(addToCart(productToCart));
				toast.success("Added to cart", {
					position: "top-center",
					theme: "dark",
					transition: Bounce,
				});
			}
		}
	};
	useEffect(() => {
		const selectedProducts = allProducts
			.sort(() => 0.5 - Math.random())
			.slice(0, 12);
		setRandomProducts(selectedProducts);
	}, []);

	return (
		<div className="mt-[60px] px-4 sm:px-6 lg:px-8">
			<div className="flex justify-between items-center">
				<p className="font-bold text-xl sm:text-2xl">
					Popular Products
				</p>
				<p
					className="text-green-500 cursor-pointer arrow text-sm sm:text-base"
					onClick={() => navigate(routes.products.index)}
				>
					View All →
				</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-6">
				{randomProducts.map((product: any) => (
					<div
						key={product.id}
						className="flex flex-col justify-center items-center border h-[280px] sm:h-[250px] border-black/10 p-4 hover:shadow-md hover:border-green-400 hover:text-green-400 transition-shadow duration-300 cursor-pointer relative"
					>
						<LazyLoadImage
							src={product.image}
							alt={product.name}
							className="mt-6 sm:mt-10 w-32 sm:w-30 h-24 sm:h-20 object-contain"
							onClick={() => navigate(`/products/${product.id}`)}
						/>
						<div className="flex justify-between items-center w-full mt-auto">
							<div
								className="flex flex-col"
								onClick={() =>
									navigate(`/products/${product.id}`)
								}
							>
								<p className="text-sm sm:text-xs">
									{product.name}
								</p>
								<p className="font-bold text-sm sm:text-xs">
									{`$ ${product.price.toFixed(2)}`}
								</p>
								<p className="text-sm text-yellow-400">
									{"★".repeat(5)}
								</p>
							</div>
							<div
								onClick={() =>
									handleShoppingBagClick(product.id)
								}
								className={`p-2 rounded-full cursor-pointer transition-colors duration-300 hover:bg-[#00B207] hover:text-white ${
									activeProductIds.includes(product.id)
										? "bg-[#00B207] text-white"
										: "bg-gray-300 text-black"
								}`}
							>
								<ShoppingBagIcon size={15} />
							</div>
						</div>
						<span
							className={`absolute top-2 right-2 text-[10px] sm:text-xs font-semibold px-2 py-1 rounded ${
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
