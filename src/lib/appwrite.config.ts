import { Client, Account, ID } from "appwrite";

export const config = {
	endpoint: "https://cloud.appwrite.io/vi",
	projectId: "67445056003b68181232",
	databaseId: "66e3106f002dd04edebe",
	userCollectionId: "66e310b40023fde6dbd8",
	productCollectionId: "66e310ec000e873b1dd4",
};

const client = new Client()
	.setEndpoint(config.endpoint)
	.setProject(config.projectId);

export const account = new Account(client);

export const authService = {
	async createAccount(email: string, password: string, name?: string) {
		try {
			const response = await account.create(
				ID.unique(),
				email,
				password,
				name
			);
			return response;
		} catch (error) {
			console.error("Appwrite create account error:", error);
			throw error;
		}
	},

	async login(email: string, password: string) {
		try {
			const session = await account.createEmailPasswordSession(
				email,
				password
			);
			return session;
		} catch (error) {
			console.error("Appwrite login error:", error);
			throw error;
		}
	},

	async logout() {
		try {
			await account.deleteSessions();
		} catch (error) {
			console.error("Appwrite logout error:", error);
			throw error;
		}
	},

	async getCurrentUser() {
		try {
			return await account.get();
		} catch (error) {
			console.error("No active session:", error);
			return null;
		}
	},
};
