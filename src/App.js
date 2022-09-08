import GlobalStyles from "./assets/styles/GlobalStyles";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Main from "./components/MainBody/Main";

const Container = styled.div`
	@media all and (min-width: 1024px) {
		padding: 0 7rem;
	}
`;

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<GlobalStyles />
				<Container>
					<Navbar />
					<Main />
				</Container>
			</div>
		</BrowserRouter>
	);
}

export default App;
