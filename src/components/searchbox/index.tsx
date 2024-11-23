import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchBox() {
	return (
		<div className="flex w-full max-w-sm items-center space-x-2">
			<div className="relative w-full">
				<Search
					className="absolute left-2 top-1/2 -translate-y-1/2 text-black"
					size={20}
				/>
				<Input type="text" placeholder="Search" className="pl-8" />
			</div>
			<Button type="submit" className="bg-[#00B207]">
				Search
			</Button>
		</div>
	);
}
