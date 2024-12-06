import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
	user: any | null;
	loggedIn: boolean;
}

const initialState: AuthState = {
	user: null,
	loggedIn: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser(state, action) {
			state.user = action.payload;
			state.loggedIn = !!action.payload;
		},
		clearUser(state) {
			state.user = null;
			state.loggedIn = false;
		},
	},
});

export const { setUser, clearUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
