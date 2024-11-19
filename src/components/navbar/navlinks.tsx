import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { useNavigate } from "react-router-dom";

export default function Navlinks() {
    const navigate = useNavigate();
	const links = [
		{
			id: 1,
			name: "Home",
			subLinks: [
				{ name: "Home 1", href: "/home1" },
				{ name: "Home 2", href: "/home2" },
			],
		},
		{
			id: 2,
			name: "Shop",
			subLinks: [
				{ name: "Product List", href: "/products" },
				{ name: "Product Details", href: "/product-details" },
			],
		},
		{
			id: 3,
			name: "Pages",
			subLinks: [
				{ name: "About", href: "/about" },
				{ name: "Services", href: "/services" },
			],
		},
		{
			id: 4,
			name: "About Us",
			subLinks: [
				{ name: "Our Story", href: "/story" },
				{ name: "Team", href: "/team" },
			],
		},
		{
			id: 5,
			name: "Contact Us",
			subLinks: [
				{ name: "Contact", href: "/contact" },
				{ name: "Location", href: "/location" },
			],
		},
	];

	return (
		<div className="flex bg-[#333333] text-white space-x-4 px-4 py-2 justify-between">
			<div className="flex">
				{links.map((link) => (
					<NavigationMenu key={link.id}>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger className="text-gray-400 hover:text-white hover:bg-[#333333] bg-[#333333] text-[13px] active:bg-[#333333]">
									{link.name}
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<div className="grid w-[200px] p-4">
										{link.subLinks.map((subLink) => (
											<NavigationMenuLink
												asChild
												key={subLink.name}
											>
												<p
													onClick={() =>
														navigate(subLink.href)
													}
													className="block py-2 hover:bg-gray-700 rounded"
												>
													{subLink.name}
												</p>
											</NavigationMenuLink>
										))}
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				))}
			</div>
			<p className="text-gray-400 text-[13px] mt-2">{`(219) 555-0114`}</p>
		</div>
	);
}
