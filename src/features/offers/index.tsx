export default function Offers() {
	const bannerData = [
		{
			image: "/src/assets/banner/banner_1.png",
			title: "Sale of the Month",
			description: "Get amazing discounts",
			buttonText: "Shop Now →",
		},
		{
			image: "/src/assets/banner/banner_2.png",
			title: "Low-Fat Meat",
			description: "Exclusive deals",
			buttonText: "Shop Now →",
		},
		{
			image: "/src/assets/banner/banner_3.png",
			title: "100% Fresh Fruit",
			description: "Limited time offer",
			buttonText: "Shop Now →",
		},
	];

	return (
		<div className="flex justify-between space-x-4 mt-[90px]">
			{bannerData.map((banner, index) => (
				<div
					key={index}
					className="relative bg-cover bg-center bg-no-repeat flex-1 h-[500px] group rounded-md"
					style={{ backgroundImage: `url('${banner.image}')` }}
				>
					<div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4 text-center">
						<h3 className="text-4xl font-bold mb-2">
							{banner.title}
						</h3>
						<p className="mb-10">{banner.description}</p>
						<button className="bg-white text-green-400 px-4 py-2 hover:bg-gray-200 rounded-3xl">
							{banner.buttonText}
						</button>
					</div>
				</div>
			))}
		</div>
	);
}