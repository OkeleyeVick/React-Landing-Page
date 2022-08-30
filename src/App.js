import "./App.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ErrorPage from "./ErrorPage";
import React, { Suspense } from 'react';
import Login from "./Login"
const LazyRegister = React.lazy(() => {
	return import('./Register')
})


function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/register" element={
						<Suspense fallback={<div><h2>Content is loading...</h2></div>}>
							<LazyRegister />
						</Suspense>}/>
					<Route path="*" element={<ErrorPage />}/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
