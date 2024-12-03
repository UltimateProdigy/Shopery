export const config = {
	endpoint: import.meta.env.VITE_API_URL || "",
	projectId: import.meta.env.VITE_PROJECT_ID || "",
	databaseId: import.meta.env.VITE_DATABASE_ID || "",
	email: import.meta.env.VITE_EMAIL || "",
	paystackKey: import.meta.env.VITE_PAYSTACK_KEY || "",
};
