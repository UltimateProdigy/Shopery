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
import { Mail, Lock, User, AlertCircle, Github } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { routes } from "@/constants";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
	const navigate = useNavigate();
	// This will be replaced with Appwrite auth later
	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		// Appwrite account creation logic will go here
	};

	return (
		<div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<Card className="w-full max-w-md">
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl font-bold text-center">
						Create an account
					</CardTitle>
					<CardDescription className="text-center">
						Enter your details below to create your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="name">Full Name</Label>
							<div className="relative">
								<User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
								<Input
									id="name"
									type="text"
									placeholder="John Doe"
									className="pl-10"
									required
								/>
							</div>
						</div>

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
									placeholder="Create a password"
									className="pl-10"
									required
								/>
							</div>
						</div>

						<div className="space-y-2">
							<Label htmlFor="confirmPassword">
								Confirm Password
							</Label>
							<div className="relative">
								<Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
								<Input
									id="confirmPassword"
									type="password"
									placeholder="Confirm your password"
									className="pl-10"
									required
								/>
							</div>
						</div>

						<Alert
							variant="default"
							className="bg-blue-50 text-blue-800 border-blue-200"
						>
							<AlertCircle className="h-4 w-4" />
							<AlertDescription>
								Password must be at least 8 characters long and
								include a number and special character
							</AlertDescription>
						</Alert>

						<div className="flex items-center space-x-2">
							<input
								type="checkbox"
								id="terms"
								className="h-4 w-4 rounded border-gray-300"
								required
							/>
							<Label htmlFor="terms" className="text-sm">
								I agree to the{" "}
								<Button variant="link" className="p-0 h-auto">
									Terms of Service
								</Button>{" "}
								and{" "}
								<Button variant="link" className="p-0 h-auto">
									Privacy Policy
								</Button>
							</Label>
						</div>

						<Button type="submit" className="w-full bg-[#00B207] text-white">
							Create Account
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
						Already have an account?{" "}
						<Button
							variant="link"
							className="p-0"
							onClick={() => navigate(routes.login.index)}
						>
							Sign in
						</Button>
					</p>
				</CardFooter>
			</Card>
		</div>
	);
};

export default RegisterForm;
