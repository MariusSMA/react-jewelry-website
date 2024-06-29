import React, { createContext, useState, useContext, useEffect } from "react";

// Create the Cart Context
const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		// Load cart items from local storage (or a backend API)
		const storedCartItems = localStorage.getItem("cartItems");
		if (storedCartItems) {
			setCartItems(JSON.parse(storedCartItems));
		}
	}, []);

	const handleAddToCart = product => {
		// Check if the product is already in the cart
		const existingItem = cartItems.find(item => item.id === product.id);

		if (existingItem) {
			// If the product exists, increase its quantity
			setCartItems(
				cartItems.map(item =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				)
			);
		} else {
			// If the product doesn't exist, add it to the cart with quantity 1
			setCartItems([...cartItems, { ...product, quantity: 1 }]);
		}

		// Save cart items to local storage
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	};

	const handleRemoveFromCart = productId => {
		// Update the cartItems state by filtering out the item with the given productId
		setCartItems(cartItems.filter(item => item.id !== productId));
	};

	const handleQuantityChange = (productId, newQuantity) => {
		setCartItems(
			cartItems.map(item =>
				item.id === productId ? { ...item, quantity: newQuantity } : item
			)
		);
	};

	return (
		<CartContext.Provider
			value={{
				cartItems,
				handleAddToCart,
				handleRemoveFromCart,
				handleQuantityChange,
				setCartItems,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);

// Export the CartContext
export default CartContext;
