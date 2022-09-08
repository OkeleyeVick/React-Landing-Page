import React from "react";
import styled from "styled-components";
import logo1 from "../../../assets/images/logos/logoipsum-214.svg";
import logo7 from "../../../assets/images/logos/logoipsum-215.svg";
import logo8 from "../../../assets/images/logos/logoipsum-224.svg";
import logo2 from "../../../assets/images/logos/logoipsum-234.svg";
import logo3 from "../../../assets/images/logos/logoipsum-237.svg";
import logo4 from "../../../assets/images/logos/logoipsum-244.svg";
import logo5 from "../../../assets/images/logos/logoipsum-254.svg";
import logo6 from "../../../assets/images/logos/logoipsum-264.svg";

const LogoWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-inline: auto;
	justify-content: space-around;
	padding: 6rem 0 4rem;
	@media all and (max-width: 600px) {
		width: 100%;
		padding: 2rem 1rem 3rem;
	}
	@media all and (min-width: 600.5px) {
		width: 70%;
	}
`;
const ImageLogo = styled.img`
	width: 110px;
	max-width: 100%;
	height: auto;
	display: inline-flex;
	margin: 0.5rem 1.5rem;
`;

let arrayLogo = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

const HomeLogosSection = () => {
	return (
		<LogoWrapper>
			{arrayLogo.map((logo, index) => {
				return <ImageLogo src={logo} key={index} />;
			})}
		</LogoWrapper>
	);
};

export default HomeLogosSection;
