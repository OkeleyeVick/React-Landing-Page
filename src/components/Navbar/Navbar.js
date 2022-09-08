import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Play } from "../../assets/icons/Icons";
import { variable as vary } from "../../assets/styles/GlobalStyles";
import {
	MenuFour,
	MenuOne,
	MenuTwo,
	MenuThree,
} from "../../assets/icons/Icons";

const Header = styled.nav`
	min-height: 3rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.2rem 1rem 0.2rem;
	@media all and (min-width: 768px) {
		& {
			padding: 1.5rem 0 1rem;
		}
	}
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
	align-items: center;
`;
const LogoText = styled.h3`
	font-weight: 600;
	font-size: 1.5rem;
`;

const PrimaryNavLinks = styled.ul`
	display: flex;
	align-items: center;
	@media all and (max-width: 768px) {
		display: none;
	}
`;
const SecondaryNavLinks = styled(PrimaryNavLinks)``;

const PrimaryEachLink = styled.li`
	display: inline-block;
	margin-right: 2rem;
`;
const SecondaryEachLink = styled(PrimaryEachLink)``;
const MenuIcon = styled.div`
	display: none;
	@media all and (max-width: 768px) {
		display: inline-block;
	}
`;

const NavItem = styled(Link)`
	font-size: 15px;
	text-decoration: none;
	color: ${vary.fontLinkColor};
`;

const BorderNavItem = styled(NavItem)`
	padding: 12px 1.5rem;
	border: 2px solid ${vary.green};
	border-radius: 3px;
	font-size: 14px;
	color: ${vary.white};
	background-color: ${(props) => (props.bg === "green" ? vary.green : "")};
	-webkit-transition: 300ms ease-in-out;
	-moz-transition: 300ms ease-in-out;
	-ms-transition: 300ms ease-in-out;
	-o-transition: 300ms ease-in-out;
	transition: 300ms ease-in-out;

	&:hover {
		color: ${vary.green};
		background-color: ${(props) =>
			props.bg === "green" ? vary.white : vary.green};
	}
`;

const Navbar = () => {
	return (
		<Header>
			<Logo to="/">
				<LogoSvg>
					<Play />
				</LogoSvg>
				<LogoText>Delta</LogoText>
			</Logo>
			<PrimaryNavLinks>
				{PrimaryNavlinks.map((navlink, index) => {
					return (
						<PrimaryEachLink key={index}>
							<NavItem to={navlink.to}>{navlink.label}</NavItem>
						</PrimaryEachLink>
					);
				})}
			</PrimaryNavLinks>
			<MenuIcon>
				{/* <MenuOne /> */}
				{/* <MenuTwo /> */}
				{/* <MenuThree /> */}
				<MenuFour />
			</MenuIcon>
			<SecondaryNavLinks>
				{SecondaryNavlinks.map((navlink, index) => {
					return navlink.bordered !== true ? (
						<SecondaryEachLink key={index}>
							<NavItem to="">{navlink.label}</NavItem>
						</SecondaryEachLink>
					) : (
						<SecondaryNavLinks key={index}>
							<BorderNavItem bg="green" to="">
								{navlink.label}
							</BorderNavItem>
						</SecondaryNavLinks>
					);
				})}
			</SecondaryNavLinks>
		</Header>
	);
};

const PrimaryNavlinks = [
	{
		label: "Home",
		to: "/",
	},
	{
		label: "Resources",
		to: "about",
	},
	{
		label: "Pricing",
		to: "about",
	},
	{
		label: "Enterprise",
		to: "enterprise",
	},
	{
		label: "Contact",
		to: "about",
	},
];
const SecondaryNavlinks = [
	{
		label: "Sign In",
	},
	{
		label: "Sign Up",
		bordered: true,
	},
];

export default Navbar;
