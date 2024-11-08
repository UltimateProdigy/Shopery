import {
	createBrowserRouter,
	createRoutesFromElements,
	Outlet,
	Route,
	RouterProvider,
} from "react-router-dom";
import { routes } from "./constants";
import { Home } from "./pages/homepage";
import Shop from "./pages/shop";
import "./App.css";
import { Suspense, useState, useEffect } from "react";
import { Loader } from "./components/loader";

const InitialLoader = ({ children }: any) => {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 3000);
		return () => clearTimeout(timer);
	}, []);

	if (isLoading) {
		return <Loader />;
	}
	return children;
};

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path={routes.index}
			element={
				<>
					<Outlet />
				</>
			}
		>
			<Route
				index
				path={routes.index}
				element={<Suspense fallback={<Loader />}>{<Home />}</Suspense>}
			/>
			<Route
				path={routes.shop.index}
				element={<Suspense fallback={<Loader />}>{<Shop />}</Suspense>}
			/>
		</Route>
	)
);

function App() {
	return (
		<InitialLoader>
			<RouterProvider router={router} />
		</InitialLoader>
	);
}

export default App;
