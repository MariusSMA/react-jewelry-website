import React from "react";

import tiffany from "../assets/images/tiffany.png";
import david from "../assets/images/david-yurman.png";
import bvulgari from "../assets/images/bvulgari.png";
import cartier from "../assets/images/cartier.png";

const Partners = () => {
	return (
		<section className="partners">
			<div className="container">
				<div className="partners-row">
					<img src={tiffany} alt="Tiffany & Co. Logo" />
					<img src={david} alt="David Yurman Logo" />
				</div>
				<div className="partners-row">
					<img src={bvulgari} alt="Bvulgari Logo" />
					<img src={cartier} alt="Cartier Logo" />
				</div>
			</div>
		</section>
	);
};

export default Partners;
