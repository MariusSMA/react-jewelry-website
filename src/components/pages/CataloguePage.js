import React from "react";
import Catalogue from "../Catalogue";
import Items from "../Items";
import Newsletter from "../Newsletter";
import Footer from "../Footer";

const CataloguePage = () => {
	return (
		<>
			<main>
				<Catalogue />
				<Items />
			</main>
			<Newsletter />
			<Footer />
		</>
	);
};

export default CataloguePage;
