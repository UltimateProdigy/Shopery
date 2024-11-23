import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { members } from "../data";

export default function Members() {
	return (
		<div className="mt-[60px]">
			<div className="flex flex-col justify-center items-center">
				<p className="text-green-400">Team</p>
				<p className="font-bold text-[35px]">
					Our Professional Members
				</p>
			</div>
			<div className="flex justify-between mt-8 space-x-4 cursor-pointer">
				{members.map((member) => (
					<div
						key={member.name}
						className="border overflow-hidden group relative"
					>
						<div className="relative">
							<img
								src={member.image}
								alt={member.name}
								className="w-full transition-transform duration-300"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center space-x-4">
								<a
									href="#"
									className="text-white opacity-0 group-hover:opacity-100 hover:text-green-400 transition-opacity"
								>
									<Facebook size={24} />
								</a>
								<a
									href="#"
									className="text-white opacity-0 group-hover:opacity-100 hover:text-green-400 transition-opacity"
								>
									<Instagram size={24} />
								</a>
								<a
									href="#"
									className="text-white opacity-0 group-hover:opacity-100 hover:text-green-400 transition-opacity"
								>
									<Linkedin size={24} />
								</a>
								<a
									href="#"
									className="text-white opacity-0 group-hover:opacity-100 hover:text-green-400 transition-opacity"
								>
									<Twitter size={24} />
								</a>
							</div>
						</div>
						<div className="px-3 py-5">
							<p className="font-bold">{member.name}</p>
							<p className="text-sm text-gray-500 mt-1">
								{member.position}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
