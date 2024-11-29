import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import { routes } from "./constants";
import { Home } from "./pages/home";
import Shop from "./pages/shop";
import "./index.css";
import { Suspense, useState, useEffect } from "react";
import { Loader } from "./components/loader";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/login";
import Register from "./pages/register";
import Products from "./pages/products";
import ProductDetails from "./pages/products/[id]";
import Cart from "./pages/cart";

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
		<Route path={routes.index} element={<MainLayout />}>
			<Route
				index
				path={routes.index}
				element={
					<Suspense fallback={<Loader />}>
						<Home />
					</Suspense>
				}
			/>
			<Route
				path={routes.shop.index}
				element={
					<Suspense fallback={<Loader />}>
						<Shop />
					</Suspense>
				}
			/>
			<Route
				path={routes.login.index}
				element={
					<Suspense fallback={<Loader />}>
						<Login />
					</Suspense>
				}
			/>
			<Route
				path={routes.register.index}
				element={
					<Suspense fallback={<Loader />}>
						<Register />
					</Suspense>
				}
			/>
			<Route
				path={routes.products.index}
				element={
					<Suspense fallback={<Loader />}>
						<Products />
					</Suspense>
				}
			/>
			<Route
				path={routes.products.details}
				element={
					<Suspense fallback={<Loader />}>
						<ProductDetails />
					</Suspense>
				}
			/>
			<Route
				path={routes.cart.index}
				element={
					<Suspense fallback={<Loader />}>
						<Cart />
					</Suspense>
				}
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
