import { ShoppingBagIcon } from "lucide-react";
import { categories } from "../data";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { categoryColors } from "../color";
import { addToCart, removeFromCart } from "@/store/slice/cartSlice";
import { useDispatch } from "react-redux";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Back from "@/components/backButton";

export default function AllProducts() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [activeProductIds, setActiveProductIds] = useState<number[]>([]);
	const allProducts = categories.flatMap((category) =>
		(category.products || []).map((product) => ({
			...product,
			categoryName: category.name,
		}))
	);
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
				toast.warn("Removed from cart", {
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

	return (
		<>
			<div className="flex sm:flex-row gap-2 sm:gap-1 items-start sm:items-center mt-4 ml-4">
				<Back />
				<p className="font-bold text-2xl sm:text-3xl sm:ml-4">
					All Products
				</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 mt-6 px-4">
				{allProducts.map((product) => (
					<div
						key={product.id}
						className="flex flex-col justify-center items-center border h-[250px] border-black/10 p-4 hover:shadow-md hover:border-green-400 hover:text-green-400 transition-shadow duration-300 cursor-pointer relative"
					>
						<LazyLoadImage
							src={product.image}
							alt={product.name}
							className="mt-10 w-30 h-20 object-cover"
							onClick={() => navigate(`/products/${product.id}`)}
						/>
						<div className="flex justify-between items-center w-full mt-auto gap-2">
							<div
								className="flex flex-col flex-1 min-w-0"
								onClick={() =>
									navigate(`/products/${product.id}`)
								}
							>
								<p className="text-xs truncate">
									{product.name}
								</p>
								<p className="font-bold text-xs">
									{`$ ${product.price.toFixed(2)}`}
								</p>
								<p className="text-xs text-yellow-400">
									{"★".repeat(5)}
								</p>
							</div>
							<div
								onClick={() =>
									handleShoppingBagClick(product.id)
								}
								className={`p-2 rounded-full cursor-pointer transition-colors duration-300 hover:bg-[#00B207] hover:text-white flex-shrink-0 ${
									activeProductIds.includes(product.id)
										? "bg-[#00B207] text-white"
										: "bg-gray-300 text-black"
								}`}
							>
								<ShoppingBagIcon size={15} />
							</div>
						</div>
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
		</>
	);
}
