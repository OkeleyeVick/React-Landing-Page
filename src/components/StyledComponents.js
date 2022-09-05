import React from "react";
import styled, { keyframes } from "styled-components";

const StyledButton = styled.button`
	border: ${(props) =>
		props.vary === "outline" ? "2px solid #090ffd" : "none"};
	background-color: ${(props) =>
		props.vary === "outline" ? "#fff" : "#090ffd"};
	border-radius: 4px;
	padding: 13px 2rem;
	color: ${(props) => (props.vary === "outline" ? "#090ffd" : "#fff")};
	font-size: 14px;
	cursor: pointer;
	-webkit-transition: 300ms all ease-in-out;
	-moz-transition: 300ms all ease-in-out;
	-ms-transition: 300ms all ease-in-out;
	-o-transition: 300ms all ease-in-out;
	transition: 300ms all ease;
	// * <===== pseudo class for styled components =====>
	&:hover {
		background-color: #090eef;
	}
`;

// ? <====== extending / inheriting from styled button already =====>
const FancyButton = styled(StyledButton)`
	background-image: linear-gradient(to right, #5590b7 20%, #090ddf 100%);
`;

// ? <===== extending / inheriting form styled button component and passing down props to it =====>
const ButtonWithProperty = styled(StyledButton).attrs({
	type: "submit",
	id: "button-with-property",
})`
	border-radius: 2em;
	color: #fff;
	font-size: 14px;
`;

// ! <==== Keyframes ====>
const rotate = keyframes`
	from{
		transform :rotate(0deg);
	}
	to{
		transform: rotate(360deg)
	}
`;

const RotatingButtonWithText = styled.div`
	background-color: #1038e1;
	color: #fff;
	height: 80px;
	width: 80px;
	border-radius: 50%;
	font-size: 1.5rem;
	place-content: center;
	display: grid;
	animation: ${rotate} infinite 1000ms linear;
`;

function StyledComponents() {
	return (
		<div>
			<StyledButton>Fill Button</StyledButton> <br />
			<br />
			<StyledButton vary="outline">
				Outline Button
			</StyledButton> <br /> <br />
			<FancyButton>Fancy Gradient Button</FancyButton> <br />
			<br />
			<ButtonWithProperty>Button With Property</ButtonWithProperty> <br />
			<br />
			<RotatingButtonWithText>X</RotatingButtonWithText>
		</div>
	);
}

export default StyledComponents;
