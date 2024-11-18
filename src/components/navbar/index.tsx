import { Logo } from "../logo";
import { Navlink1 } from "../typography/headers";

export default function Navbar() {
	return (
		<div>
			<div className="flex justify-between">
				<div className="flex gap-1">
					<img
						className="w-3"
						src="/img/location.svg"
						alt="location"
					/>
					<p className="text-gray-400 text-[10px] mt-3">
						Store Location: Lincoln- 344, Illinois, Chicago, USA
					</p>
				</div>
				<div className="flex gap-1">
					<Navlink1 text="ENG" />
					<Navlink1 text="USD" />
				</div>
			</div>
			<hr className="mt-2" />

			<Logo />
		</div>
	);
}
