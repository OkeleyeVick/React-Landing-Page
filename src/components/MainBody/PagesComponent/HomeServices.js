import React from "react";
import { variable as vary } from "../../../assets/styles/GlobalStyles";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SectionService = styled.div`
	padding: 4rem 0;
`;
const SectionTitleDiv = styled.div`
	text-align: center;
`;
const SectionTitle = styled.h2`
	font-size: 2rem;
	color: ${vary.fontColor};
`;
const SectionCardWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	padding-top: 4rem;
	width: 80%;
	margin-inline: auto;
`;
const EachCard = styled.div`
	width: 31%;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 290px;
	border-radius: 4px;
	margin-bottom: 3rem;
	padding: 1.5rem;
	text-align: center;
	cursor: pointer;
	border: 1px solid #bfbfc236;
	background-color: #f5f0f01f;
	-webkit-transition: 300ms ease-in-out;
	-moz-transition: 300ms ease-in-out;
	-ms-transition: 300ms ease-in-out;
	-o-transition: 300ms ease-in-out;
	transition: 300ms ease-in-out;
	box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
		rgba(17, 17, 26, 0.05) 0px 8px 32px;

	@media all and (max-width: 991px) {
		width: 45%;
	}
	@media all and (max-width: 650px) {
		width: 100%;
	}
`;
const CardNumDiv = styled.div`
	margin-bottom: 1rem;
	width: 2rem;
	height: 2rem;
	padding: 1.5rem;
	display: grid;
	place-content: center;
	background-color: ${vary.green};
	border-radius: 50%;
`;
const CardNum = styled.h2`
	font-size: 1.1rem;
	color: #fff;
	font-weight: 100;
`;
const CardTitleDiv = styled.div`
	margin: 1.2rem;
`;
const CardTitle = styled.h5`
	font-size: 1.2rem;
`;
const CardBodyDiv = styled.div`
	margin-top: 2rem;
`;
const CarBodyText = styled.p`
	font-size: 13px;
	margin: 0;
	color: ${vary.ash};
`;

const DivLink = styled.div`
	margin-top: 3em;
	text-align: center;
`;
const A = styled(Link)`
	font-size: 1rem;
	color: ${vary.white};
	background-color: ${vary.green};
	-webkit-transition: 300ms ease-in-out;
	-moz-transition: 300ms ease-in-out;
	-ms-transition: 300ms ease-in-out;
	-o-transition: 300ms ease-in-out;
	transition: 300ms ease-in-out;
	padding: 15px 2rem;
	border-radius: 3px;

	&:hover {
		background-color: ${vary.lightGreen};
	}
`;

const HomeServices = () => {
	return (
		<SectionService>
			<SectionTitleDiv>
				<SectionTitle>Services</SectionTitle>
			</SectionTitleDiv>
			<SectionCardWrapper>
				{items.map(({ title, index, text }) => {
					return (
						<EachCard key={index}>
							<CardNumDiv>
								<CardNum>
									{index < 9 ? `0${index}` : index}
								</CardNum>
							</CardNumDiv>
							<CardTitleDiv>
								<CardTitle>{title}</CardTitle>
							</CardTitleDiv>
							<CardBodyDiv>
								<CarBodyText>{text}</CarBodyText>
							</CardBodyDiv>
						</EachCard>
					);
				})}
			</SectionCardWrapper>
			<DivLink>
				<A to="">Start Now</A>
			</DivLink>
		</SectionService>
	);
};

const items = [
	{
		title: "E-commerce",
		text: "Try out Benchmark for free to discover how simple effective email marketing can be.",
		index: 1,
	},
	{
		title: "Web Development",
		text: "Try out Benchmark for free to discover how simple effective email marketing can be.",
		index: 2,
	},
	{
		title: "Content Writing",
		text: "Try out Benchmark for free to discover how simple effective email marketing can be.",
		index: 3,
	},
];

export default HomeServices;
