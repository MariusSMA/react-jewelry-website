// src/components/pages/ShoppingCartPage.js
import React, { useState, useEffect } from "react";
import ShoppingCart from "../ShoppingCart";
import Newsletter from "../Newsletter";
import Footer from "../Footer";

const ShoppingCartPage = () => {
	const [cartItems, setCartItems] = useState([]);

	// Load cart items from local storage (or a backend API)
	useEffect(() => {
		const storedCartItems = localStorage.getItem("cartItems");
		if (storedCartItems) {
			setCartItems(JSON.parse(storedCartItems));
		}
	}, []);

	// Function to add an item to the cart
	const addToCart = product => {
		// Check if the product already exists in the cart
		const existingItem = cartItems.find(item => item.id === product.id);

		if (existingItem) {
			// Update quantity if the product exists
			setCartItems(
				cartItems.map(item =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				)
			);
		} else {
			// Add the product to the cart
			setCartItems([...cartItems, { ...product, quantity: 1 }]);
		}
	};

	// Function to remove an item from the cart
	const removeFromCart = productId => {
		setCartItems(cartItems.filter(item => item.id !== productId));
	};

	// Function to update the quantity of an item in the cart
	const updateQuantity = (productId, newQuantity) => {
		setCartItems(
			cartItems.map(item =>
				item.id === productId ? { ...item, quantity: newQuantity } : item
			)
		);
	};

	// Calculate the total price of the cart
	const calculateTotalPrice = () => {
		return cartItems.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		);
	};

	// Save cart items to local storage
	useEffect(() => {
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	}, [cartItems]);

	return (
		<>
			<main className="shopping-cart-page">
				<ShoppingCart
					cartItems={cartItems} // Pass cartItems to the ShoppingCart component
					addToCart={addToCart} // Pass addToCart function
					removeFromCart={removeFromCart} // Pass removeFromCart function
					updateQuantity={updateQuantity} // Pass updateQuantity function
					calculateTotalPrice={calculateTotalPrice} // Pass calculateTotalPrice function
				/>
			</main>
			<Newsletter />
			<Footer />
		</>
	);
};

export default ShoppingCartPage;
