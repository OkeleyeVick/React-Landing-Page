import React from "react";
import styled from "styled-components";
import { variable as vary } from "../../../assets/styles/GlobalStyles";
import {
	CheckMarkGreen,
	CustomerSupport,
	MapLocation,
} from "../../../assets/icons/Icons";
import { Link } from "react-router-dom";
import Image from "../../../assets/images/image2.jpg";

const SectionTwoWrapper = styled.div`
	padding: 5rem 0 4rem;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
`;

const SectionTwoLeft = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	@media all and (max-width: 650px) {
		width: 100%;
	}
`;
const SectionTwoLeftTitle = styled.div`
	margin-bottom: 1.8rem;
`;
const SectionTwoTitleText = styled.h2`
	color: ${vary.fontColor};
`;
const SectionTwoSubText = styled.div`
	margin-bottom: 2rem;
	width: 80%;
`;

const SectionTwoSmall = styled.small`
	color: ${vary.ash};
	word-spacing: 0.6px;
`;
const SectionTwoCheckers = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	margin-bottom: 2rem;
	justify-content: space-between;

	@media all and (min-width: 425px) {
		& {
			width: 80%;
		}
	}
`;
const SectionTwoEach = styled.div`
	display: inline-flex;
	align-items: center;
	margin-top: 1.2rem;
`;
const SectionTwoEachSVG = styled.i`
	fill: ${vary.green};
	display: flex;
	& > * {
		width: 1.2rem;
	}
`;
const SectionTwoEachText = styled.span`
	font-size: 14px;
	margin-left: 10px;
`;
const SectionTwoLeftLinkDiv = styled.div`
	margin-top: 1.2rem;
`;
const SectionTwoLeftLink = styled(Link)`
	border: 2px solid ${vary.green};
	background-color: ${vary.white};
	color: ${vary.green};
	font-size: 14px;
	letter-spacing: 0.5px;
	padding: 13px 2rem;
	border-radius: 4px;
	text-transform: capitalize;
	-webkit-transition: 300ms ease-in-out;
	-moz-transition: 300ms ease-in-out;
	-ms-transition: 300ms ease-in-out;
	-o-transition: 300ms ease-in-out;
	transition: 300ms ease-in-out;

	&:hover {
		background-color: ${vary.green};
		color: ${vary.white};
	}
`;

const SectionTwoRight = styled.div`
	width: 50%;
	position: relative;
	min-height: 500px;
	@media all and (max-width: 650px) {
		& {
			width: 100%;
			margin-top: 2rem;
		}
	}
`;
const Clippy = styled.div`
	position: absolute;
	background-color: ${vary.grey};
	clip-path: polygon(18% 0, 100% 0, 100% 100%, 0% 100%);
	bottom: -50%;
	right: -50%;
	z-index: -1;
	transform: translate(-50%, -50%);
	@media all and (min-width: 991px) {
		width: 94%;
		min-height: 100%;
	}
`;

const CardsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	@media all and (max-width: 650px) {
		& {
			align-items: center;
		}
	}
`;
const Card = styled.div`
	background-color: ${vary.white};
	border-radius: 4px;
	padding: 1rem 1.5rem;
	min-height: 200px;
	position: relative;
	margin-top: 2rem;
	width: 350px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
		rgba(17, 17, 26, 0.05) 0px 8px 32px;
`;
const CardIconDiv = styled.div``;
const CardIcon = styled.em`
	color: ${vary.blue};
`;
const CardTitleDiv = styled.div``;
const CardTitle = styled.h4`
	color: ${vary.blue};
	font-size: 1.1rem;
	letter-spacing: 0.25px;
`;
const CardTextDiv = styled.div``;
const CardText = styled.p`
	font-size: 14px;
	color: ${vary.ash};
`;

const CardXtra = styled.div`
	display: flex;
	align-items: center;
	position: absolute;
	right: 0;
	top: 0;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
		rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
	border-radius: 3px;
	background-color: ${vary.lightGreen};
	min-height: 3rem;
	width: 200px;
	padding: 0.5rem 0.5rem;
	margin-top: 1rem;
	margin-right: -3rem;
`;

const CardXtraImageDiv = styled.div`
	width: 30%;
	display: grid;
	place-content: center;
	margin-right: 3px;
`;
const CardXtraImage = styled.img`
	border-radius: 50%;
	height: auto;
	max-width: 100%;
	width: 40px;
`;

const CardXtraTextDiv = styled.div`
	width: 65%;
`;
const CardXtraText = styled.small`
	color: ${vary.fontColor};
	font-size: 11px;
`;
const HomeSectionTwo = () => {
	return (
		<SectionTwoWrapper>
			<SectionTwoLeft>
				<SectionTwoLeftTitle>
					<SectionTwoTitleText>GDPR Complaint</SectionTwoTitleText>
				</SectionTwoLeftTitle>
				<SectionTwoSubText>
					<SectionTwoSmall>
						Be Completely transparent and GDPR complaint with
						GetResponse const fields. Allow your contacts to provide
						their proper consent right when they sign up.{" "}
					</SectionTwoSmall>
				</SectionTwoSubText>
				<SectionTwoCheckers>
					{values.map((value, index) => {
						return (
							<SectionTwoEach key={index}>
								<SectionTwoEachSVG>
									{<CheckMarkGreen />}
								</SectionTwoEachSVG>
								<SectionTwoEachText>
									{value.label}
								</SectionTwoEachText>
							</SectionTwoEach>
						);
					})}
				</SectionTwoCheckers>
				<SectionTwoLeftLinkDiv>
					<SectionTwoLeftLink to="">Learn more</SectionTwoLeftLink>
				</SectionTwoLeftLinkDiv>
			</SectionTwoLeft>
			<SectionTwoRight>
				<Clippy />
				<CardsWrapper>
					{cards.map((card, index) => {
						return card.hasCard !== true ? (
							<Card key={index}>
								<CardIconDiv>
									<CardIcon>{card.icon}</CardIcon>
								</CardIconDiv>
								<CardTitleDiv>
									<CardTitle>{card.title}</CardTitle>
								</CardTitleDiv>
								<CardTextDiv>
									<CardText>{card.text}</CardText>
								</CardTextDiv>
							</Card>
						) : (
							<Card key={index}>
								<CardXtra>
									<CardXtraImageDiv>
										<CardXtraImage
											src={card.image}
											alt="photo"
										/>
									</CardXtraImageDiv>
									<CardXtraTextDiv>
										<CardXtraText>
											Vickk sent you a Message from
											Leonard Buyd!
										</CardXtraText>
									</CardXtraTextDiv>
								</CardXtra>
								<CardIconDiv>
									<CardIcon>{card.icon}</CardIcon>
								</CardIconDiv>
								<CardTitleDiv>
									<CardTitle>{card.title}</CardTitle>
								</CardTitleDiv>
								<CardTextDiv>
									<CardText>{card.text}</CardText>
								</CardTextDiv>
							</Card>
						);
					})}
				</CardsWrapper>
			</SectionTwoRight>
		</SectionTwoWrapper>
	);
};

const values = [
	{
		label: "All EU Countries and California",
	},
	{
		label: "Track changes",
	},
	{
		label: "Multiple fields creation",
	},
	{
		label: "Fully integrated",
	},
];

const cards = [
	{
		icon: <CustomerSupport />,
		title: "Mail Support",
		text: "BenchMark Email makes the tools you need simple.",
		hasCard: true,
		image: Image,
	},
	{
		icon: <MapLocation />,
		title: "Location Tracking",
		text: "Accelerating your business and raising the bar.",
	},
];

export default HomeSectionTwo;
