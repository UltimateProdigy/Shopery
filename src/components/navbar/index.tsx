import { Logo } from "../logo";
import Cart from "../cart";
import SearchBox from "../searchbox";
import Navlinks from "./navlinks";
import { routes } from "@/constants";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
	const navigate = useNavigate();
	return (
		<div className="px-4">
			<div className="flex justify-between">
				<div className="flex gap-1">
					<img
						className="w-3"
						src="/img/location.svg"
						alt="location"
					/>
					<p className="text-gray-400 text-[10px] mt-1.5">
						Store Location: Lincoln- 344, Illinois, Chicago, USA
					</p>
				</div>
				<div className="flex gap-1">
					<p className="text-gray-400 text-[12px] mt-2 mr-4 cursor-pointer">
						ENG
					</p>
					<p className="text-gray-400 text-[12px] mt-2 mr-3 cursor-pointer">
						USD
					</p>
					<p className="text-gray-400 text-[12px] mt-2 mr-2">|</p>
					<p
						className="text-gray-400 text-[12px] mt-2 cursor-pointer"
						onClick={() => navigate(routes.login.index)}
					>
						SIGN IN/ SIGN UP
					</p>
				</div>
			</div>
			<hr className="mt-2 mb-2" />
			<div className="flex justify-between">
				<Logo />
				<SearchBox />
				<Cart amount={0} value={0} />
			</div>
			<div className="mt-3">
				<Navlinks />
			</div>
		</div>
	);
}
