import React from "react";
import styled from "styled-components";
import { variable as vary } from "../../../assets/styles/GlobalStyles";
import { Link } from "react-router-dom";
import { PlusAdd, Script } from "../../../assets/icons/Icons";

const SectionThreeWrapper = styled.div`
	align-items: center;
	flex-wrap: wrap;
	display: flex;
	padding: 4rem 0;
	@media all and (max-width: 768px) {
		& {
			flex-direction: column;
		}
	}
`;
const SectionThreeDiv = styled.div`
	width: 100%;
	min-height: 400px;
	min-width: 50%;
	@media all and (min-width: 768px) {
		& {
			width: 50%;
		}
	}
`;
const SectionThreeLeftDiv = styled(SectionThreeDiv)`
	position: relative;
	height: 350px;
	border-radius: 4px;
	display: grid;
	align-items: center;
`;
const Absolute = styled.div`
	position: absolute;
`;
const AbsoluteOne = styled(Absolute)`
	background-color: ${vary.white};
	padding: 12px 14px;
	box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
		rgba(17, 17, 26, 0.05) 0px 8px 32px;
	top: 0;
	right: 0;
	margin: 0 -1rem 0 0;
`;
const Title = styled.h5`
	text-transform: uppercase;
	margin-bottom: 0.6rem;
`;
const SubText = styled.p`
	font-size: 0.85rem;
	color: ${vary.ash};
	text-transform: uppercase;
	word-spacing: 1px;
`;
const AbsoluteTwo = styled(Absolute)`
	background-color: ${vary.white};
	box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
		rgba(17, 17, 26, 0.05) 0px 8px 32px;
	bottom: 0;
	right: 0;
	margin: -2rem -2rem 0 0;
	display: flex;
	align-items: center;
	padding: 15px 2rem;
	border-radius: 4px;
`;

const AbsoluteTwoIcon = styled.span`
	color: ${vary.white};
	font-size: 2rem;
	height: 1rem;
	width: 1rem;
	display: flex;
	align-items: center;
	border-radius: 50%;
	padding: 0.75rem 0.8rem 0.95rem 0.8rem;
	background: ${vary.green};
	justify-content: center;
`;
const AbsoluteTwoTextDiv = styled.div`
	display: grid;
	place-content: center;
	margin-left: 1.2rem;
`;
const AbsoluteTwoText = styled.p`
	font-size: 15px;
	color: ${vary.fontLinkColor};
`;
const SectionThreeRightDiv = styled(SectionThreeDiv)`
	display: grid;
	place-content: center;
`;
const AbsoluteThree = styled.div`
	background-color: ${vary.lightGreen};
	left: 0;
	bottom: 0;
	border-radius: 4px;
	padding: 10px 5px;
`;
const AbsoluteThreeIcon = styled.em`
	font-size: 2.2rem;
	color: ${vary.white};
`;
const InnerLeft = styled.div`
	background-color: ${vary.grey};
	height: 90%;
	width: 80%;
	margin-inline: auto;
`;
const InnerRight = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	justify-content: center;
	width: 80%;
	margin-inline: auto;
`;

const Container = styled.div`
	margin-bottom: 2rem;
`;
const LinkContainer = styled.div`
	margin-top: 1.3rem;
`;
const SectionThreeTitle = styled.h2`
	display: block;
	color: ${vary.fontColor};
	font-size: 2rem;
`;
const SectionThreeSubtext = styled.p`
	color: ${vary.ash};
	font-size: 14px;
	word-spacing: 1px;
`;
const CTA = styled(Link)`
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

const HomeSectionThree = () => {
	return (
		<SectionThreeWrapper>
			<SectionThreeLeftDiv>
				<InnerLeft>
					<AbsoluteOne>
						<Title>Facebook Engagement</Title>
						<SubText>1230 Interactions</SubText>
					</AbsoluteOne>
					<AbsoluteTwo>
						<AbsoluteTwoIcon>+</AbsoluteTwoIcon>
						<AbsoluteTwoTextDiv>
							<AbsoluteTwoText>Add more Task</AbsoluteTwoText>
						</AbsoluteTwoTextDiv>
					</AbsoluteTwo>
					{/* <AbsoluteThree>
						<AbsoluteThreeIcon>
							<Script />
						</AbsoluteThreeIcon>
					</AbsoluteThree> */}
				</InnerLeft>
			</SectionThreeLeftDiv>
			<SectionThreeRightDiv>
				<InnerRight>
					<Container>
						<SectionThreeTitle>
							Have access to a robust email marketing tool.
						</SectionThreeTitle>
					</Container>
					<Container>
						<SectionThreeSubtext>
							If you're reading this, you already have access to a
							robust email marketing tool.
						</SectionThreeSubtext>
					</Container>
					<LinkContainer>
						<CTA to="">Learn More</CTA>
					</LinkContainer>
				</InnerRight>
			</SectionThreeRightDiv>
		</SectionThreeWrapper>
	);
};

export default HomeSectionThree;
