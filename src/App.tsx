import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/homepage";
import "./App.css";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				{/* Add other routes here as needed */}
			</Routes>
		</Router>
	);
}

export default App;
