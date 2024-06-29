import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const ShoppingCart = () => {
	const { cartItems, handleAddToCart, setCartItems } = useCart();

	const calculateTotalPrice = () => {
		return cartItems.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		);
	};

	const handleRemoveFromCart = productId => {
		setCartItems(cartItems.filter(item => item.id !== productId));
	};

	const handleQuantityChange = (productId, newQuantity) => {
		setCartItems(
			cartItems.map(item =>
				item.id === productId ? { ...item, quantity: newQuantity } : item
			)
		);
	};

	// Save cart items to local storage whenever cartItems changes
	useEffect(() => {
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	}, [cartItems]);

	return (
		<section className="shopping-cart-page">
			<div className="container">
				<div className="shopping-cart">
					<h2 className="shopping-cart-title">Your Shopping Cart</h2>

					{cartItems.length === 0 ? (
						<div className="empty-cart">
							<p>Your cart is empty.</p>
							<Link to="/catalogue" className="btn-checkout">
								Continue Shopping
							</Link>
						</div>
					) : (
						<>
							<div className="cart-items">
								<table className="cart-table">
									<thead>
										<tr>
											<th>Product</th>
											<th>Price</th>
											<th>Quantity</th>
											<th>Subtotal</th>
											<th>Actions</th>
										</tr>
									</thead>
									<tbody>
										{cartItems.map(item => (
											<tr key={item.id}>
												<td>
													<span className="cart-product-name">{item.name}</span>
												</td>
												<td>£{item.price.toFixed(2)}</td>
												<td>
													<input
														type="number"
														min="1"
														value={item.quantity}
														className="cart-quantity-input"
														onChange={e =>
															handleQuantityChange(
																item.id,
																parseInt(e.target.value, 10)
															)
														}
													/>
												</td>
												<td>£{(item.price * item.quantity).toFixed(2)}</td>
												<td>
													<button
														className="btn-remove"
														onClick={() => handleRemoveFromCart(item.id)}
													>
														Remove
													</button>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>

							<div className="cart-total">
								<p className="cart-total-price">
									Total: £{calculateTotalPrice().toFixed(2)}
								</p>
								<Link to="/checkout" className="btn-checkout">
									Proceed to Checkout
								</Link>
							</div>
						</>
					)}
				</div>
			</div>
		</section>
	);
};

export default ShoppingCart;
