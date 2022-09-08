import React from "react";
import HomeFooter from "../PagesComponent/HomeFooter";
import HomeLogosSection from "../PagesComponent/HomeLogosSection";
import SectionOne from "../PagesComponent/HomeSectionOne";
import HomeSectionThree from "../PagesComponent/HomeSectionThree";
import HomeSectionTwo from "../PagesComponent/HomeSectionTwo";
import HomeServices from "../PagesComponent/HomeServices";
import HomeTestimonial from "../PagesComponent/HomeTestimonial";

const Home = () => {
	return (
		<>
			<SectionOne />
			<HomeLogosSection />
			<HomeSectionTwo />
			<HomeSectionThree />
			<HomeServices />
			<HomeTestimonial />
			<HomeFooter />
		</>
	);
};

export default Home;
