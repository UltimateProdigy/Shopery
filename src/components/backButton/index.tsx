import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

export default function Back({ className }: { className?: string }) {
	const navigate = useNavigate();
	return (
		<Button className={className} onClick={() => navigate(-1)}>
			←
		</Button>
	);
}
