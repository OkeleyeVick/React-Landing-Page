import React from "react";
import styled from "styled-components";
import { variable as vary } from "../../../assets/styles/GlobalStyles";
import { Play } from "../../../assets/icons/Icons";
import ImageHero from "../../../assets/images/image.png";

const SectionOneWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
`;
const SectionOneLeft = styled.div`
	width: 50%;
	color: ${vary.fontColor};
	padding: 0 2rem;

	@media all and (max-width: 650px) {
		width: 100%;
	}
`;
const LeftBigText = styled.h1`
	font-size: 3.5rem;
	text-transform: capitalize;
`;
const SmallTextContainer = styled.div`
	margin-top: 2rem;
	@media all and (min-width: 650px) {
		& {
			width: 80%;
		}
	}
`;
const SmallTextLeft = styled.p`
	font-size: 14px;
	word-spacing: 1px;
`;

const LeftLinks = styled.div`
	display: flex;
	align-items: center;
	margin-top: 2.5rem;
`;
const CTA1 = styled.a`
	font-size: 14px;
	padding: 13px 2rem;
	border-radius: 4px;
	background-color: ${vary.fontColor};
	border: 2px solid ${vary.fontColor};
	-webkit-transition: 300ms ease-in-out;
	-moz-transition: 300ms ease-in-out;
	-ms-transition: 300ms ease-in-out;
	-o-transition: 300ms ease-in-out;
	transition: 300ms ease-in-out;
	color: ${vary.white};

	&:hover {
		background-color: ${vary.white};
		color: ${vary.fontColor};
	}
`;
const CTA2 = styled.a`
	color: ${vary.fontColor};
	display: flex;
	align-items: center;
	margin-left: 3em;
`;
const CTA2span = styled.span`
	font-size: 14px;
	word-spacing: 1.2px;
`;
const CTA2Svg = styled.span`
	margin-left: 1.1rem;
`;

const SectionOneRight = styled.div`
	width: 50%;
	@media all and (max-width: 650px) {
		& {
			width: 100%;
			margin-top: 2rem;
		}
	}
`;
const ImageContainerRight = styled.div``;

const Image = styled.img`
	height: auto;
	max-width: 100%;
	width: 100%;
	@media all and (min-width: 1024px) {
		& {
			transform: scale(1.28);
		}
	}
`;

const SectionOne = () => {
	return (
		<SectionOneWrapper>
			<SectionOneLeft>
				<LeftBigText>
					Best Digital <br /> Agency Whole <br />
					Online Today.
				</LeftBigText>
				<SmallTextContainer>
					<SmallTextLeft>
						We help to create clients desire task properly & our
						team also collaborate with you.
					</SmallTextLeft>
				</SmallTextContainer>
				<LeftLinks>
					<CTA1>Get Started</CTA1>
					<CTA2>
						<CTA2span>How it works</CTA2span>
						<CTA2Svg>
							<Play />
						</CTA2Svg>
					</CTA2>
				</LeftLinks>
			</SectionOneLeft>
			<SectionOneRight>
				<ImageContainerRight>
					<Image src={ImageHero} alt="Hero Photo" />
				</ImageContainerRight>
			</SectionOneRight>
		</SectionOneWrapper>
	);
};

export default SectionOne;
