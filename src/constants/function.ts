export const getInitials = (name: string) => {
	return name
		.split(" ")
		.map((word) => word[0])
		.join("")
		.toUpperCase();
};

export const validateEmail = (email: string) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!email) return "Email is required";
	if (!emailRegex.test(email)) return "Invalid email format";
	return "";
};


export const validatePassword = (password: string) => {
	if (!password) return "Password is required";
	if (password.length < 8) return "Password must be at least 8 characters";
	return "";
};
