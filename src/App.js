import "./assets/styles/custom.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NewMovie from "./components/NewMovie";
// import MovieDetail from "./components/MovieDetail";
import MovieDetailFake from "./components/MovieDetailFake";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StyledComponents from "./components/StyledComponents";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<div className="container">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="addmovies" element={<NewMovie />} />
						{/* <Route
							path="moviedetail/:id"
							element={<MovieDetail />}
						/> */}
						<Route
							path="moviedetail/:id"
							element={<MovieDetailFake />}
						/>
						<Route
							path="components"
							element={<StyledComponents />}
						/>
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
