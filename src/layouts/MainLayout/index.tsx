import { Outlet } from "react-router-dom";
import Navbar from "@/components/navbar";

export default function MainLayout() {
	return (
		<div className="bg-white h-full md:mt-10 md:mb-10 p-3">
			<Navbar />
			<Outlet />
		</div>
	);
}
