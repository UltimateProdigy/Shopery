import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { useNavigate } from "react-router-dom";
import { PhoneIcon } from "../icons";

export default function Navlinks() {
	const navigate = useNavigate();
	const links = [
		{
			id: 1,
			name: "Home",
			subLinks: [
				{ name: "Homepage", href: "/" },
			],
		},
		{
			id: 2,
			name: "Shop",
			subLinks: [
				{ name: "Cart", href: "/cart" },
				{ name: "Products", href: "/products" },
				{ name: "Categories", href: "/categories" },
			],
		},
		{
			id: 3,
			name: "About Us",
			subLinks: [{ name: "Team", href: "/team" }],
		},
		{
			id: 4,
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
								<NavigationMenuContent className="bg-[#333333] text-white">
									<div className="grid w-[200px] p-2">
										{link.subLinks.map((subLink) => (
											<NavigationMenuLink
												asChild
												key={subLink.name}
												className="px-4 cursor-pointer"
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
			<div className="flex gap-3">
				<PhoneIcon className="mt-1" />
				<p className="text-white text-[13px] mt-2">{`(219) 555-0114`}</p>
			</div>
		</div>
	);
}
