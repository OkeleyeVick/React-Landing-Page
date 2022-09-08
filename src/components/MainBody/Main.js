import React from "react";
import styled from "styled-components";
import About from "./Pages/About";
import Enterprise from "./Pages/Enterprise";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

const MainBody = styled.main`
	padding-top: 5rem;
`;

const Main = () => {
	return (
		<MainBody>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="enterprise" element={<Enterprise />} />
			</Routes>
		</MainBody>
	);
};

export default Main;
