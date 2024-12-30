import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { categories } from "@/features/data";
import { Loader } from "@/components/loader";
import { ICartProduct } from "@/constants/types";
import { Button } from "@/components/ui/button";
import { ShoppingBagIcon } from "lucide-react";
import Counter from "@/components/counter";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/store/slice/cartSlice";
import { RootState } from "@/store/store";
import { toast, Bounce } from "react-toastify";
import Back from "@/components/backButton";

export default function ProductDetails() {
	const { id } = useParams();
	const cart = useSelector((state: RootState) => state.cartReducer.cart);
	const dispatch = useDispatch();
	const [product, setProduct] = useState<ICartProduct | null>(null);
	const [quantity, setQuantity] = useState(0);
	const [categoryName, setCategoryName] = useState<string>("");
	const itemInCart = cart.find(
		(item: ICartProduct) => item.id === Number(id)
	);

	const handleCartClick = () => {
		if (product?.id === undefined) return;
		if (itemInCart) {
			dispatch(removeFromCart({ id: product?.id }));
			toast.warn("Removed from cart", {
				position: "top-center",
				theme: "dark",
				transition: Bounce,
			});
		} else {
			dispatch(
				addToCart({
					id: product?.id,
					name: product?.name,
					price: product?.price,
					image: product?.image,
					quantity: quantity,
				})
			);
			toast.success("Added to cart", {
				position: "top-center",
				theme: "dark",
				transition: Bounce,
			});
		}
	};

	useEffect(() => {
		const foundProduct = categories
			.flatMap((category) => category.products || [])
			.find((p) => p.id === Number(id));
		const foundCategory = categories.find((category) =>
			category.products?.some((p) => p.id === Number(id))
		);
		setCategoryName(foundCategory?.name || "");
		setProduct(foundProduct || null);
	}, [id]);

	if (!product)
		return (
			<div>
				<Loader />
			</div>
		);

	return (
		<>
			<Back className="mt-3" />
			<div className="flex flex-col md:flex-row gap-6 md:gap-10 px-4 md:px-[150px] mt-6 md:mt-10">
				<div className="product-image-container w-full md:max-w-[500px] aspect-square overflow-hidden flex items-center justify-center">
					<img
						src={product.image}
						alt={product.name}
						className="w-full h-full object-contain max-h-[600px]"
					/>
				</div>
				<div className="w-full">
					<div className="flex flex-wrap gap-2 md:gap-4">
						<p className="font-bold text-2xl md:text-3xl">
							{product.name}
						</p>
						<span className="h-6 mt-1 md:mt-2 bg-[#00B207] text-white text-xs font-semibold px-2 py-1 rounded">
							In-Stock
						</span>
					</div>
					<p className="text-sm text-yellow-400 mt-1">
						{"★".repeat(5)}{" "}
						<span className="text-black">5 reviews</span>
					</p>
					<p className="text-[#00B207] text-xl font-bold mt-2">{`$ ${product.price}`}</p>
					<hr className="mt-4" />
					<p className="mt-4 text-gray-500 text-sm md:text-base">
						Class aptent taciti sociosqu ad litora torquent per
						conubia nostra, per inceptos himenaeos. Nulla nibh diam,
						blandit vel consequat nec, ultrices et ipsum. Nulla
						varius magna a consequat pulvinar.{" "}
					</p>
					<hr className="mt-4" />
					<div className="flex flex-col sm:flex-row gap-4 mt-4">
						<Counter
							productId={product.id}
							initialQuantity={
								itemInCart ? itemInCart.quantity : 1
							}
							onQuantityChange={setQuantity}
						/>
						<Button
							className={`${
								itemInCart ? "bg-red-500" : "bg-[#00B207]"
							} rounded-full w-full sm:w-[370px]`}
							onClick={handleCartClick}
						>
							{itemInCart ? "Remove from Cart" : "Add to Cart"}{" "}
							<ShoppingBagIcon />
						</Button>
					</div>
					<hr className="mt-4" />
					<div className="mt-3">
						<p className="font-bold">
							Category:{" "}
							<span className="font-normal text-gray-600">
								{categoryName}
							</span>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
