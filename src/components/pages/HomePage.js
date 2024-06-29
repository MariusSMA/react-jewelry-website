// src/pages/Home.js
import React from "react";
import Hero from "../Hero";
import Partners from "../Partners";
import Accessories from "../Accessories";
import FAQ from "../FAQ";
import Newsletter from "../Newsletter";
import Footer from "../Footer";
import "../../assets/styles/style.css";

const Home = () => {
	return (
		<>
			<main>
				<Hero />
				<Partners />
				<Accessories />
				<FAQ />
			</main>
			<Newsletter />
			<Footer />
		</>
	);
};

export default Home;
