import React from "react";
import rightBlueArrow from "../assets/images/right-blue-arrow.svg";
import bracelet1 from "../assets/images/bracelet-1.png";
import bracelet2 from "../assets/images/bracelet-2.png";
import bracelet3 from "../assets/images/bracelet-3.png";
import necklace1 from "../assets/images/necklace-1.png";
import necklace2 from "../assets/images/necklace-2.png";
import necklace3 from "../assets/images/necklace-3.png";
import earrings1 from "../assets/images/earrings-1.png";
import earrings2 from "../assets/images/earrings-2.png";
import earrings3 from "../assets/images/earrings-3.png";
import ring1 from "../assets/images/ring-1.png";
import ring2 from "../assets/images/ring-2.png";
import ring3 from "../assets/images/ring-3.png";
import { useCart } from "../components/CartContext";
import { Link } from "react-router-dom"; // Import Link

const Items = () => {
	const { handleAddToCart } = useCart();

	return (
		<section className="items">
			<div className="container">
				<div className="products">
					<div className="products-header">
						<div className="products-text">
							<span className="gradient">New collection</span>
							<h2>
								Bracelets<span className="gradient">.</span>
							</h2>
						</div>
						<div className="products-view-more">
							<p>View more</p>
							<img src={rightBlueArrow} alt="Right blue arrow" />
						</div>
					</div>
					<div className="products-body">
						<div className="product-card">
							<Link to={`/products/5`}>
								{/* Link to product page with ID 5 */}
								<div className="product-card-img">
									<img src={bracelet1} alt="Trinity Bracelet" />
								</div>
								<p className="product-card-title">Trinity Bracelet</p>
								<p className="product-card-price">
									<span className="gradient">£</span>2,500.00
								</p>
							</Link>
							<button
								className="add-to-cart-button"
								onClick={() =>
									handleAddToCart({
										id: 5,
										name: "Trinity Bracelet",
										price: 2500,
										imageUrl: bracelet1,
									})
								}
							>
								Add to Cart
							</button>
						</div>
						<div className="product-card">
							<Link to={`/products/6`}>
								{/* Link to product page with ID 6 */}
								<div className="product-card-img">
									<img src={bracelet2} alt="Trinity Bracelet" />
								</div>
								<p className="product-card-title">Panthére Bracelet</p>
								<p className="product-card-price">
									<span className="gradient">£</span>3,500.00
								</p>
							</Link>
							<button
								className="add-to-cart-button"
								onClick={() =>
									handleAddToCart({
										id: 6,
										name: "Panthére Bracelet",
										price: 3500,
										imageUrl: bracelet2,
									})
								}
							>
								Add to Cart
							</button>
						</div>
						<div className="product-card">
							<Link to={`/products/7`}>
								{/* Link to product page with ID 7 */}
								<div className="product-card-img">
									<img src={bracelet3} alt="Trinity Bracelet" />
								</div>
								<p className="product-card-title">Clash Bracelet</p>
								<p className="product-card-price">
									<span className="gradient">£</span>7,500.00
								</p>
							</Link>
							<button
								className="add-to-cart-button"
								onClick={() =>
									handleAddToCart({
										id: 7,
										name: "Clash Bracelet",
										price: 7500,
										imageUrl: bracelet3,
									})
								}
							>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
				<div className="products">
					<div className="products-header">
						<div className="products-text">
							<span className="gradient">Recommended</span>
							<h2>
								Necklaces<span className="gradient">.</span>
							</h2>
						</div>
						<div className="products-view-more">
							<p>View more</p>
							<img src={rightBlueArrow} alt="Right blue arrow" />
						</div>
					</div>
					<div className="products-body">
						<div className="product-card">
							<Link to={`/products/8`}>
								{/* Link to product page with ID 8 */}
								<div className="product-card-img">
									<img src={necklace1} alt="Agrafe Necklace" />
								</div>
								<p className="product-card-title">Agrafe Necklace</p>
								<p className="product-card-price">
									<span className="gradient">£</span>9,500.00
								</p>
							</Link>
							<button
								className="add-to-cart-button"
								onClick={() =>
									handleAddToCart({
										id: 8,
										name: "Agrafe Necklace",
										price: 9500,
										imageUrl: necklace1,
									})
								}
							>
								Add to Cart
							</button>
						</div>
						<div className="product-card">
							<Link to={`/products/9`}>
								{/* Link to product page with ID 9 */}
								<div className="product-card-img">
									<img src={necklace2} alt="Amulette Necklace" />
								</div>
								<p className="product-card-title">Amulette Necklace</p>
								<p className="product-card-price">
									<span className="gradient">£</span>1,500.00
								</p>
							</Link>
							<button
								className="add-to-cart-button"
								onClick={() =>
									handleAddToCart({
										id: 9,
										name: "Amulette Necklace",
										price: 1500,
										imageUrl: necklace2,
									})
								}
							>
								Add to Cart
							</button>
						</div>
						<div className="product-card">
							<Link to={`/products/10`}>
								{/* Link to product page with ID 10 */}
								<div className="product-card-img">
									<img src={necklace3} alt="Cactus Necklace" />
								</div>
								<p className="product-card-title">Cactus Necklace</p>
								<p className="product-card-price">
									<span className="gradient">£</span>15,000.00
								</p>
							</Link>
							<button
								className="add-to-cart-button"
								onClick={() =>
									handleAddToCart({
										id: 10,
										name: "Cactus Necklace",
										price: 15000,
										imageUrl: necklace3,
									})
								}
							>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
				<div className="products">
					<div className="products-header">
						<div className="products-text">
							<span className="gradient">Popular</span>
							<h2>
								Earrings<span className="gradient">.</span>
							</h2>
						</div>
						<div className="products-view-more">
							<p>View more</p>
							<img src={rightBlueArrow} alt="Right blue arrow" />
						</div>
					</div>
					<div className="products-body">
						<div className="product-card">
							<Link to={`/products/11`}>
								{/* Link to product page with ID 11 */}
								<div className="product-card-img">
									<img src={earrings1} alt="Dream Earrings" />
								</div>
								<p className="product-card-title">Dream Earrings</p>
								<p className="product-card-price">
									<span className="gradient">£</span>20,000.00
								</p>
							</Link>
							<button
								className="add-to-cart-button"
								onClick={() =>
									handleAddToCart({
										id: 11,
										name: "Dream Earrings",
										price: 20000,
										imageUrl: earrings1,
									})
								}
							>
								Add to Cart
							</button>
						</div>
						<div className="product-card">
							<Link to={`/products/12`}>
								{/* Link to product page with ID 12 */}
								<div className="product-card-img">
									<img src={earrings2} alt="Serpenti Earrings" />
								</div>
								<p className="product-card-title">Serpenti Earrings</p>
								<p className="product-card-price">
									<span className="gradient">£</span>15,000.00
								</p>
							</Link>
							<button
								className="add-to-cart-button"
								onClick={() =>
									handleAddToCart({
										id: 12,
										name: "Serpenti Earrings",
										price: 15000,
										imageUrl: earrings2,
									})
								}
							>
								Add to Cart
							</button>
						</div>
						<div className="product-card">
							<Link to={`/products/13`}>
								{/* Link to product page with ID 13 */}
								<div className="product-card-img">
									<img src={earrings3} alt="B.Zero1 Earrings" />
								</div>
								<p className="product-card-title">B.Zero1 Earrings</p>
								<p className="product-card-price">
									<span className="gradient">£</span>2,000.00
								</p>
							</Link>
							<button
								className="add-to-cart-button"
								onClick={() =>
									handleAddToCart({
										id: 13,
										name: "B.Zero1 Earrings",
										price: 2000,
										imageUrl: earrings3,
									})
								}
							>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
				<div className="products">
					<div className="products-header">
						<div className="products-text">
							<span className="gradient">New</span>
							<h2>
								Rings<span className="gradient">.</span>
							</h2>
						</div>
						<div className="products-view-more">
							<p>View more</p>
							<img src={rightBlueArrow} alt="Right blue arrow" />
						</div>
					</div>
					<div className="products-body">
						<div className="product-card">
							<Link to={`/products/14`}>
								{/* Link to product page with ID 14 */}
								<div className="product-card-img">
									<img src={ring1} alt="Serpenti Ring" />
								</div>
								<p className="product-card-title">Serpenti Ring</p>
								<p className="product-card-price">
									<span className="gradient">£</span>1,500.00
								</p>
							</Link>
							<button
								className="add-to-cart-button"
								onClick={() =>
									handleAddToCart({
										id: 14,
										name: "Serpenti Ring",
										price: 1500,
										imageUrl: ring1,
									})
								}
							>
								Add to Cart
							</button>
						</div>
						<div className="product-card">
							<Link to={`/products/15`}>
								{/* Link to product page with ID 15 */}
								<div className="product-card-img">
									<img src={ring2} alt="B.Zero1 Ring" />
								</div>
								<p className="product-card-title">B.Zero1 Ring</p>
								<p className="product-card-price">
									<span className="gradient">£</span>1,000.00
								</p>
							</Link>
							<button
								className="add-to-cart-button"
								onClick={() =>
									handleAddToCart({
										id: 15,
										name: "B.Zero1 Ring",
										price: 1000,
										imageUrl: ring2,
									})
								}
							>
								Add to Cart
							</button>
						</div>
						<div className="product-card">
							<Link to={`/products/16`}>
								{/* Link to product page with ID 16 */}
								<div className="product-card-img">
									<img src={ring3} alt="Bvulgari Ring" />
								</div>
								<p className="product-card-title">Bvulgari Ring</p>
								<p className="product-card-price">
									<span className="gradient">£</span>3,500.00
								</p>
							</Link>
							<button
								className="add-to-cart-button"
								onClick={() =>
									handleAddToCart({
										id: 16,
										name: "Bvulgari Ring",
										price: 3500,
										imageUrl: ring3,
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

export default Items;
