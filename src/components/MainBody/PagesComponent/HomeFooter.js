import React from "react";
import styled from "styled-components";
import { variable as vary } from "../../../assets/styles/GlobalStyles";
import { Link } from "react-router-dom";
import {
	ArrowRight,
	Facebook,
	LinkedIn,
	Play,
	Twitter,
} from "../../../assets/icons/Icons";

const FooterWrapper = styled.footer`
	margin-top: 5rem;
	padding: 0 1rem 0;
`;

const Footer = styled.div`
	display: flex;
	align-items: flex-start;
	padding-bottom: 4rem;
	justify-content: space-between;
	flex-wrap: wrap;

	@media all and (max-width: 600px) {
		flex-direction: column;
	}
`;

const EachDiv = styled.div`
	width: 24%;

	@media all and (max-width: 991px) {
		margin-bottom: 2rem;
		width: 45%;
	}
	@media all and (max-width: 650px) {
		margin-bottom: 2rem;
		width: 100%;
	}
`;
const LogoContent = styled(EachDiv)``;
const LogoDiv = styled.div`
	margin-bottom: 1.3rem;
`;
const Logo = styled(Link)`
	text-decoration: none;
	display: flex;
	align-items: center;
	color: ${vary.fontColor};
`;

const LogoSvg = styled.div`
	margin-right: 0.7rem;
	display: flex;
`;
const LogoText = styled.h3`
	font-weight: 600;
	font-size: 1.5rem;
`;
const LogoSubDiv = styled(LogoDiv)``;
const LogoSubText = styled.p`
	font-size: 14px;
	color: ${vary.ash};
`;

const LogoIconWrapper = styled.div`
	margin-top: 3rem;
`;
const LogoIconTitle = styled.small`
	display: block;
	color: ${vary.fontColor};
	font-size: 14px;
	font-weight: 600;
	letter-spacing: 0.3px;
`;
const LogoIcons = styled.div`
	display: flex;
	align-items: center;
	margin-top: 1rem;
`;
const LogoIconsSvg = styled.div`
	margin-right: 1rem;
	width: 2rem;
	height: 2rem;
	padding: 7px;
	border: 2px solid ${vary.green};
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	&:hover {
		background-color: ${vary.green};
		& > * {
			color: ${vary.white};
		}
	}
	& > * {
		width: 1.5rem;
		height: 1.5rem;
		color: ${vary.green};
	}
`;

const OtherLinksTitleDiv = styled.div`
	margin-bottom: 1.5rem;
`;
const OtherLinksTitle = styled.h3`
	color: ${vary.fontColor};
	font-size: 1.3rem;
`;
const Sublinks = styled.ul`
	list-style-type: none;
	margin-top: 1.8rem;
`;
const LinkWrap = styled.li`
	margin: 1.05rem 0 0;
	display: block;

	&:hover > a {
		color: ${vary.green};
	}
`;
const LinkItem = styled(Link)`
	text-decoration: none;
	font-size: 14px;
	color: ${vary.ash};
`;

const PreInputTextDiv = styled.div`
	margin-bottom: 2rem;
`;
const PreInputText = styled.small`
	color: ${vary.ash};
`;
const InputDiv = styled.div`
	display: flex;
	align-items: center;
	margin-right: 1rem;
`;
const Input = styled.input.attrs({
	placeholder: "Email address",
	type: "email",
})`
	border-radius: 3px;
	border: 1px solid #bfbfc236;
	padding: 0 0 0 10px;
	font-size: 14px;
	min-height: 2.6rem;
	transition: 100ms ease-in-out;
	background-color: #f4f4f4;

	&:focus {
		outline: 1px solid transparent;
		border: 2px solid ${vary.green};
		background-color: ${vary.white};
	}
	&::placeholder {
		color: #d3d3d3;
	}
`;

const InputButton = styled.button`
	border: none;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 6px 13px;
	cursor: pointer;
	height: 2.6rem;
	margin-left: 10px;
	color: ${vary.white};
	background-color: ${(props) => (props.bg === "green" ? vary.green : "")};
	transition: 300ms ease-in-out;

	& > svg {
		width: 1.35rem;
	}

	&:hover {
		background-color: ${(props) =>
			props.bg === "green" ? vary.lightGreen : vary.green};
	}
`;

const PostFooter = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.2rem 0 1.1rem;
	border-top: 1px solid ${vary.grey};
	width: 100%;

	@media all and (max-width: 599px) {
		justify-content: center;
	}
`;

const PFooterLeft = styled.div``;
const PFooterLeftText = styled.small`
	color: #4a4c4b;
`;

const PFooterRight = styled.div`
	@media all and (max-width: 599px) {
		display: none;
	}
`;
const PFooterRightText = styled.small`
	color: #4a4c4b;
`;

const HomeFooter = () => {
	return (
		<FooterWrapper>
			<Footer>
				<LogoContent>
					<LogoDiv>
						<Logo to="">
							<LogoSvg>
								<Play />
							</LogoSvg>
							<LogoText>Detail</LogoText>
						</Logo>
					</LogoDiv>
					<LogoSubDiv>
						<LogoSubText>
							Subscribe to keep up with the latest news
						</LogoSubText>
					</LogoSubDiv>
					<LogoIconWrapper>
						<LogoIconTitle>Get in Touch</LogoIconTitle>
					</LogoIconWrapper>
					<LogoIcons>
						{icons.map(({ icon, index }) => {
							return (
								<LogoIconsSvg key={index}>{icon}</LogoIconsSvg>
							);
						})}
					</LogoIcons>
				</LogoContent>
				<EachDiv>
					<OtherLinksTitleDiv>
						<OtherLinksTitle>Learn</OtherLinksTitle>
					</OtherLinksTitleDiv>
					<Sublinks>
						{learnlink.map(({ label, index }) => {
							return (
								<LinkWrap key={index}>
									<LinkItem to="">{label}</LinkItem>
								</LinkWrap>
							);
						})}
					</Sublinks>
				</EachDiv>
				<EachDiv>
					<OtherLinksTitleDiv>
						<OtherLinksTitle>Company</OtherLinksTitle>
					</OtherLinksTitleDiv>
					<Sublinks>
						{companylink.map(({ label, index }) => {
							return (
								<LinkWrap key={index}>
									<LinkItem to="">{label}</LinkItem>
								</LinkWrap>
							);
						})}
					</Sublinks>
				</EachDiv>
				<EachDiv>
					<PreInputTextDiv>
						<PreInputText>
							Contrary to popular belief, Lorem ipsum is not
							simply random texts, it has roots
						</PreInputText>
					</PreInputTextDiv>
					<InputDiv>
						<Input />
						<InputButton bg="green">
							<ArrowRight />
						</InputButton>
					</InputDiv>
				</EachDiv>
			</Footer>
			<PostFooter>
				<PFooterLeft>
					<PFooterLeftText>
						@2022 Vickkk | All Rights Reserved.
					</PFooterLeftText>
				</PFooterLeft>
				<PFooterRight>
					<PFooterRightText>Partner and Contribute</PFooterRightText>
				</PFooterRight>
			</PostFooter>
		</FooterWrapper>
	);
};

const icons = [
	{
		icon: <Facebook />,
	},
	{
		icon: <Twitter />,
	},
	{
		icon: <LinkedIn />,
	},
];
const learnlink = [
	{
		label: "Our Products",
	},
	{
		label: "Tutorials",
	},
	{
		label: "Our Services",
	},
	{
		label: "Best Features",
	},
];
const companylink = [
	{
		label: "About us",
	},
	{
		label: "Careers",
	},
	{
		label: "Contact us",
	},
	{
		label: "News & Blogs",
	},
];

export default HomeFooter;
