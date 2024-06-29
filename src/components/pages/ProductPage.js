import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // For getting product ID from URL
import { useCart } from "../CartContext"; // Import useCart
import data from "../../assets/data/products.json"; // Import your JSON file
import Newsletter from "../Newsletter";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ProductPage = () => {
	const { productId } = useParams(); // Get the product ID from the URL
	const [product, setProduct] = useState(null);
	const { handleAddToCart } = useCart(); // Get handleAddToCart
	const navigate = useNavigate(); // Get useNavigate

	useEffect(() => {
		const foundProduct = data.find(item => item.id === parseInt(productId));
		setProduct(foundProduct);
	}, [productId]);

	if (!product) {
		return <div>Product not found</div>;
	}

	const imageContext = require.context("../../assets/images", true);
	const imagePath = imageContext(`./${product.imageUrl}`);

	const handleBuyNow = () => {
		// Implement your "Buy Now" logic here
		// For example:
		// 1. Add the product to the cart
		handleAddToCart(product);
		// 2. Redirect to the checkout page
		navigate("/checkout"); // Redirect to the checkout page
	};

	return (
		<>
			<main>
				<div className="product-page">
					<div className="product-card">
						<div className="product-details">
							<img
								src={imagePath} // Use the dynamically loaded image path
								alt={product.name}
								className="product-image"
							/>
							<h2>{product.name}</h2>
							<p className="product-price">£{product.price.toFixed(2)}</p>
							<p className="product-description">{product.description}</p>
							{/* Add more details as needed (size, color, etc.) */}
						</div>
						<div className="add-to-cart">
							<button
								onClick={() => handleAddToCart(product)}
								className="add-to-cart-button"
							>
								Add to Cart
							</button>
							<button className="buy-now-button" onClick={handleBuyNow}>
								Buy Now
							</button>
						</div>
					</div>
				</div>
			</main>
			<Newsletter />
			<Footer />
		</>
	);
};

export default ProductPage;
