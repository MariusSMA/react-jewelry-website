import React from "react";
import About from "../About";
import Collaborations from "../Collaborations";
import Newsletter from "../Newsletter";
import Footer from "../Footer";

const AboutPage = () => {
	return (
		<>
			<main>
				<About />
				<Collaborations />
			</main>
			<Newsletter />
			<Footer />
		</>
	);
};

export default AboutPage;
