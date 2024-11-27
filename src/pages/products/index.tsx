import Footer from "@/features/footer";
import Newsletter from "@/features/newsletter";
import AllProducts from "@/features/products/allproducts";

export default function Products() {
	return (
		<div>
            <AllProducts />
			<Newsletter />
            <Footer />
		</div>
	);
}
