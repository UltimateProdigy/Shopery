import Categories from "@/features/categories";
import HeroSection from "@/features/hero/hero";
import Products from "@/features/products";

export const Home = () => {
	return (
		<div className="px-4 mt-4 h-full">
			<HeroSection />
			<Categories />
			<Products />
		</div>
	);
};
