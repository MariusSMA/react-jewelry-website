import React from "react";
import earrings from "../assets/images/earrings.png";
import necklace from "../assets/images/necklace.png";
import ring from "../assets/images/ring.png";
import bracelet from "../assets/images/bracelet.png";
import { useCart } from "./CartContext"; // Import useCart
import { Link } from "react-router-dom"; // Import Link

const Accessories = () => {
	const { handleAddToCart } = useCart(); // Get handleAddToCart

	return (
		<section className="accessories">
			<div className="container">
				<p className="accessories-description gradient">Best choices</p>
				<h2 className="accessories-title">
					Popular accessories<span className="gradient">.</span>
				</h2>
				<div className="accessories-cards">
					<div className="accessories-card-row">
						<div className="accessories-card">
							<Link to={`/products/1`}>
								{" "}
								{/* Link to product page with ID 1 */}
								<div className="accessories-card-img">
									<img src={earrings} alt="Dream Earrings" />
								</div>
								<p className="accessories-card-title">Dream Earrings</p>
								<p className="accessories-card-price">
									<span className="gradient">£</span>2,500.00
								</p>
							</Link>
							<button
								className="add-to-cart-button"
								onClick={() =>
									handleAddToCart({
										id: 1, // Assign a unique ID to this product
										name: "Dream Earrings",
										price: 2500,
										imageUrl: earrings,
									})
								}
							>
								Add to Cart
							</button>
						</div>
						<div className="accessories-card">
							<Link to={`/products/2`}>
								{" "}
								{/* Link to product page with ID 2 */}
								<div className="accessories-card-img">
									<img
										src={necklace}
										alt="Dream Necklace"
										className="dream-necklace"
									/>
								</div>
								<p className="accessories-card-title">Dream Necklace</p>
								<p className="accessories-card-price">
									<span className="gradient">£</span>12,500.00
								</p>
							</Link>
							<button
								className="add-to-cart-button"
								onClick={() =>
									handleAddToCart({
										id: 2, // Assign a unique ID to this product
										name: "Dream Necklace",
										price: 12500,
										imageUrl: necklace,
									})
								}
							>
								Add to Cart
							</button>
						</div>
					</div>
					<div className="accessories-card-row">
						<div className="accessories-card">
							<Link to={`/products/3`}>
								{" "}
								{/* Link to product page with ID 3 */}
								<div className="accessories-card-img">
									<img src={ring} alt="Panthère Ring" />
								</div>
								<p className="accessories-card-title">Panthère Ring</p>
								<p className="accessories-card-price">
									<span className="gradient">£</span>8,500.00
								</p>
							</Link>
							<button
								className="add-to-cart-button"
								onClick={() =>
									handleAddToCart({
										id: 3, // Assign a unique ID to this product
										name: "Panthère Ring",
										price: 8500,
										imageUrl: ring,
									})
								}
							>
								Add to Cart
							</button>
						</div>
						<div className="accessories-card">
							<Link to={`/products/4`}>
								{" "}
								{/* Link to product page with ID 4 */}
								<div className="accessories-card-img">
									<img src={bracelet} alt="Love Bracelet" />
								</div>
								<p className="accessories-card-title">Love Bracelet</p>
								<p className="accessories-card-price">
									<span className="gradient">£</span>5,000.00
								</p>
							</Link>
							<button
								className="add-to-cart-button"
								onClick={() =>
									handleAddToCart({
										id: 4, // Assign a unique ID to this product
										name: "Love Bracelet",
										price: 5000,
										imageUrl: bracelet,
									})
								}
							>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Accessories;
