import { Outlet } from "react-router-dom";
import Navbar from "@/components/navbar";

export default function MainLayout() {
	return (
		<div className="bg-white h-[100vh] mt-10 mb-10 p-3">
			<Navbar />
			<Outlet />
		</div>
	);
}
