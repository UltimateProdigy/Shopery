import Categories from "@/features/categories";
import HeroSection from "@/features/hero/hero";
import Members from "@/features/members";
import Newsletter from "@/features/newsletter";
import Offers from "@/features/offers";
import Products from "@/features/products";
import Testimonials from "@/features/testimonials";
import Footer from "@/features/footer";

export const Home = () => {
	return (
		<div className=" px-1 md:px-4 my-0 md:my-4 h-full">
			<div>
				<HeroSection />
			</div>
			<div>
				<Categories />
			</div>
			<div>
				<Products />
			</div>
			<div>
				<Offers />
			</div>
			<div>
				<Members />
			</div>
			<div className="flex items-center justify-center">
				<Testimonials />
			</div>
			<div>
				<Newsletter />
			</div>
			<div>
				<Footer />
			</div>
            <div className="flex justify-center mb-2">
                <p>Ecobazar eCommerce © 2024. All Rights Reserved</p>
            </div>
		</div>
	);
};
