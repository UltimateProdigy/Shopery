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

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path={routes.index} element={<><Outlet /></>}>
			<Route index path={routes.index} element={<Home />} />
            <Route path={routes.shop.index} element={<Shop />} />
		</Route>
	)
);
function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
