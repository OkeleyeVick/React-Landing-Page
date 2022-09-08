import React from "react";
import styled from "styled-components";
import { variable as vary } from "../../../assets/styles/GlobalStyles";
import User from "../../../assets/images/image2.jpg";

const TestimonialWrapper = styled.div`
	padding: 5rem 0;
`;
const TestimonialHeader = styled.div`
	text-align: center;
	margin-bottom: 3rem;
	margin-inline: auto;
	width: 50%;

	@media all and (max-width: 768px) {
		& {
			width: 70%;
		}
	}
`;
const HeaderTitleDiv = styled.div`
	margin-bottom: 1.5rem;
`;
const HeaderTitleText = styled.h2`
	color: ${vary.fontColor};
	font-size: 2.2rem;
`;
const TestimonialSubDiv = styled.div``;
const SubDivText = styled.p`
	color: ${vary.ash};
	font-size: 14px;
	line-height: 1.6;
	word-spacing: 1.2px;
	letter-spacing: 0.3px;
`;
const TestimonialBody = styled.div`
	min-height: 350px;
	background-color: ${vary.lightGreen};
	padding: 0 2rem;
	display: flex;
	flex-wrap: wrap;
	width: 95%;
	margin-inline: auto;
	border-radius: 6px;
	justify-content: space-between;

	@media all and (min-width: 600px) {
		width: 85%;
	}
`;
const TestimonialBodyInner = styled.div`
	min-height: 80%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
`;
const BodyLeft = styled.div`
	@media all and (min-width: 768px) {
		width: 45%;
		margin-bottom: 0;
	}
`;
const BodyLeftText = styled.h2`
	color: ${vary.fontColor};
	letter-spacing: -0.25px;
	font-weight: 500;
	font-size: 1.8rem;
	line-height: 1.3;
	@media all and (min-width: 768px) {
		font-size: 2.3rem;
	}
`;
const BodyRight = styled.div`
	@media all and (min-width: 768px) {
		width: 50%;
	}
`;
const BodyRightTextTopDiv = styled.div`
	margin-bottom: 2rem;
`;
const BodyRightTextTop = styled.p`
	font-size: 15px;
	color: ${vary.fontColor};
	word-spacing: 1.2px;
	letter-spacing: 0.25px;
	line-height: 1.5;
`;
const BodyRightBottomDiv = styled.div`
	display: flex;
	align-items: center;
`;

const ImageDiv = styled.div``;
const Image = styled.img`
	border-radius: 50%;
	height: 45px;
	width: 45px;
	max-width: 100%;
`;
const NameTitleDiv = styled.div`
	margin-left: 13px;
`;
const NameDiv = styled.div`
	display: block;
`;
const NameText = styled.h5`
	font-weight: 100;
	color: ${vary.fontColor};
`;

const TitleTextDiv = styled.div``;
const TitleText = styled.small`
	color: ${vary.ash};
`;

const HomeTestimonial = () => {
	return (
		<TestimonialWrapper>
			<TestimonialHeader>
				<HeaderTitleDiv>
					<HeaderTitleText>Testimonials</HeaderTitleText>
				</HeaderTitleDiv>
				<TestimonialSubDiv>
					<SubDivText>
						Sign up for Benchmark today to stay focused on the
						reason you're using email marketing in the first place:
						bringing vision to life.
					</SubDivText>
				</TestimonialSubDiv>
			</TestimonialHeader>
			<TestimonialBody>
				<TestimonialBodyInner>
					<BodyLeft>
						<BodyLeftText>
							"Customers, Visitors & interested parties engage"
						</BodyLeftText>
					</BodyLeft>
					<BodyRight>
						<BodyRightTextTopDiv>
							<BodyRightTextTop>
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. A facere tenetur totam unde
								tempore aut, corporis iste blanditiis.
							</BodyRightTextTop>
						</BodyRightTextTopDiv>
						<BodyRightBottomDiv>
							<ImageDiv>
								<Image src={User} />
							</ImageDiv>
							<NameTitleDiv>
								<NameDiv>
									<NameText>King Star</NameText>
								</NameDiv>
								<TitleTextDiv>
									<TitleText>
										- Gavin Wieske, Marketing Manager
									</TitleText>
								</TitleTextDiv>
							</NameTitleDiv>
						</BodyRightBottomDiv>
					</BodyRight>
				</TestimonialBodyInner>
			</TestimonialBody>
		</TestimonialWrapper>
	);
};

export default HomeTestimonial;
