// src/components/pages/CheckoutPage.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";

const CheckoutPage = () => {
	const { cartItems } = useCart(); // Access cartItems from CartContext
	const [shippingAddress, setShippingAddress] = useState({
		firstName: "",
		lastName: "",
		address: "",
		city: "",
		postalCode: "",
		country: "",
	});
	const [paymentDetails, setPaymentDetails] = useState({
		cardNumber: "",
		expiryDate: "",
		cvv: "",
	});
	const navigate = useNavigate();

	// Load shipping address and payment details from localStorage
	useEffect(() => {
		const storedShippingAddress = localStorage.getItem("shippingAddress");
		if (storedShippingAddress) {
			setShippingAddress(JSON.parse(storedShippingAddress));
		}

		const storedPaymentDetails = localStorage.getItem("paymentDetails");
		if (storedPaymentDetails) {
			setPaymentDetails(JSON.parse(storedPaymentDetails));
		}
	}, []);

	// Save shipping address and payment details to localStorage
	useEffect(() => {
		localStorage.setItem("shippingAddress", JSON.stringify(shippingAddress));
		localStorage.setItem("paymentDetails", JSON.stringify(paymentDetails));
	}, [shippingAddress, paymentDetails]);

	const handleShippingAddressChange = event => {
		setShippingAddress({
			...shippingAddress,
			[event.target.name]: event.target.value,
		});
	};

	const calculateTotalPrice = () => {
		return cartItems.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		);
	};

	const handlePaymentDetailsChange = event => {
		setPaymentDetails({
			...paymentDetails,
			[event.target.name]: event.target.value,
		});
	};

	const handleCheckout = async () => {
		// 1. Validate shipping address
		if (
			!shippingAddress.firstName ||
			!shippingAddress.lastName ||
			!shippingAddress.address ||
			!shippingAddress.city ||
			!shippingAddress.postalCode ||
			!shippingAddress.country
		) {
			alert("Please fill in all shipping address fields.");
			return;
		}

		// 2. Validate payment details
		if (
			!paymentDetails.cardNumber ||
			!paymentDetails.expiryDate ||
			!paymentDetails.cvv
		) {
			alert("Please fill in all payment details.");
			return;
		}

		// 3. Process payment (using Stripe, PayPal, etc.)
		// This is where you would integrate your payment gateway
		// For this example, we'll simulate a successful payment
		try {
			// Simulate payment processing
			await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a 2-second delay

			// 4. Update order status in your database
			// This is where you would update your database with the order details
			// For this example, we'll just clear the cart
			localStorage.removeItem("cartItems");

			// 5. Send order confirmation email
			// This is where you would send an email to the user confirming their order
			alert("Payment successful! Your order has been placed.");
			navigate("/order-confirmation"); // Redirect to order confirmation page
		} catch (error) {
			console.error("Payment error:", error);
			alert("Payment failed. Please try again.");
		}
	};

	return (
		<>
			<main className="checkout-page">
				<div className="container">
					<h1 className="checkout-title">Checkout</h1>

					<div className="checkout-content">
						<div className="cart-items-checkout">
							<h2>Your Order</h2>
							<table>
								<thead>
									<tr>
										<th>Product</th>
										<th>Price</th>
										<th>Quantity</th>
										<th>Subtotal</th>
									</tr>
								</thead>
								<tbody>
									{cartItems.map(item => (
										<tr key={item.id}>
											<td>{item.name}</td>
											<td>£{item.price.toFixed(2)}</td>
											<td>{item.quantity}</td>
											<td>£{(item.price * item.quantity).toFixed(2)}</td>
										</tr>
									))}
								</tbody>
							</table>
							<p className="cart-total-price">
								Total: £{calculateTotalPrice().toFixed(2)}
							</p>
						</div>

						<form onSubmit={handleCheckout} className="checkout-form">
							<div className="form-section">
								<h2>Shipping Address</h2>
								<div className="form-group">
									<label htmlFor="firstName">First Name:</label>
									<input
										type="text"
										id="firstName"
										name="firstName"
										value={shippingAddress.firstName}
										onChange={handleShippingAddressChange}
										required
									/>
								</div>
								<div className="form-group">
									<label htmlFor="lastName">Last Name:</label>
									<input
										type="text"
										id="lastName"
										name="lastName"
										value={shippingAddress.lastName}
										onChange={handleShippingAddressChange}
										required
									/>
								</div>
								<div className="form-group">
									<label htmlFor="address">Address:</label>
									<input
										type="text"
										id="address"
										name="address"
										value={shippingAddress.address}
										onChange={handleShippingAddressChange}
										required
									/>
								</div>
								<div className="form-group">
									<label htmlFor="city">City:</label>
									<input
										type="text"
										id="city"
										name="city"
										value={shippingAddress.city}
										onChange={handleShippingAddressChange}
										required
									/>
								</div>
								<div className="form-group">
									<label htmlFor="postalCode">Postal Code:</label>
									<input
										type="text"
										id="postalCode"
										name="postalCode"
										value={shippingAddress.postalCode}
										onChange={handleShippingAddressChange}
										required
									/>
								</div>
								<div className="form-group">
									<label htmlFor="country">Country:</label>
									<input
										type="text"
										id="country"
										name="country"
										value={shippingAddress.country}
										onChange={handleShippingAddressChange}
										required
									/>
								</div>
							</div>

							<div className="form-section">
								<h2>Payment Details</h2>
								<div className="form-group">
									<label htmlFor="cardNumber">Card Number:</label>
									<input
										type="text"
										id="cardNumber"
										name="cardNumber"
										value={paymentDetails.cardNumber}
										onChange={handlePaymentDetailsChange}
										required
									/>
								</div>
								<div className="form-group">
									<label htmlFor="expiryDate">Expiry Date:</label>
									<input
										type="text"
										id="expiryDate"
										name="expiryDate"
										value={paymentDetails.expiryDate}
										onChange={handlePaymentDetailsChange}
										required
									/>
								</div>
								<div className="form-group">
									<label htmlFor="cvv">CVV:</label>
									<input
										type="text"
										id="cvv"
										name="cvv"
										value={paymentDetails.cvv}
										onChange={handlePaymentDetailsChange}
										required
									/>
								</div>
							</div>

							<button type="submit" className="checkout-button">
								Place Order
							</button>
						</form>
					</div>
				</div>
			</main>
		</>
	);
};

export default CheckoutPage;
