import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { Mail, Lock, Github } from "lucide-react";
import { routes } from "@/constants";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();
	// This will be replaced with Appwrite auth later
	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		// Appwrite auth logic will go here
	};

	return (
		<div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<Card className="w-full max-w-md">
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl font-bold text-center">
						Welcome back
					</CardTitle>
					<CardDescription className="text-center">
						Enter your email and password to login to your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<div className="relative">
								<Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
								<Input
									id="email"
									type="email"
									placeholder="name@example.com"
									className="pl-10"
									required
								/>
							</div>
						</div>
						<div className="space-y-2">
							<Label htmlFor="password">Password</Label>
							<div className="relative">
								<Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
								<Input
									id="password"
									type="password"
									placeholder="Enter your password"
									className="pl-10"
									required
								/>
							</div>
						</div>
						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<input
									id="remember-me"
									name="remember-me"
									type="checkbox"
									className="h-4 w-4 rounded border-gray-300"
								/>
								<Label htmlFor="remember-me" className="ml-2">
									Remember me
								</Label>
							</div>
							<Button variant="link" className="text-sm">
								Forgot password?
							</Button>
						</div>
						<Button type="submit" className="w-full bg-[#00B207] text-white">
							Sign in
						</Button>
					</form>
				</CardContent>
				<CardFooter className="flex flex-col space-y-4">
					<div className="relative">
						<div className="absolute inset-0 flex items-center">
							<span className="w-full border-t" />
						</div>
						<div className="relative flex justify-center text-xs uppercase">
							<span className="bg-white px-2 text-gray-500">
								Or continue with
							</span>
						</div>
					</div>
					<div className="flex space-x-2">
						<Button variant="outline" className="w-full">
							<Mail />
							Google
						</Button>
						<Button variant="outline" className="w-full">
							<Github />
							GitHub
						</Button>
					</div>
					<p className="text-center text-sm text-gray-600">
						Don't have an account?{" "}
						<Button variant="link" className="p-0" onClick={() => navigate(routes.register.index)}>
							Sign up
						</Button>
					</p>
				</CardFooter>
			</Card>
		</div>
	);
};

export default LoginForm;