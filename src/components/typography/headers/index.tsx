import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface HeaderProps {
	text: string;
	link?: string[];
}
export function Navlink1({ text, link }: HeaderProps) {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger className="text-gray-400 text-[10px]">{text}</NavigationMenuTrigger>
					<NavigationMenuContent>
						<NavigationMenuLink>{link}</NavigationMenuLink>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

export function Header2() {
	return <div></div>;
}
