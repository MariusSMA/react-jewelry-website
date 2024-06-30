import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import HomePage from "./components/pages/HomePage";
import CataloguePage from "./components/pages/CataloguePage";
import AboutPage from "./components/pages/AboutPage";
import ShoppingCartPage from "./components/pages/ShoppingCartPage";
import CheckoutPage from "./components/pages/CheckoutPage";
import ContactPage from "./components/pages/ContactPage";
import NewsletterPage from "./components/pages/NewsletterPage";
import Header from "./components/Header";
import { Navigate } from "react-router-dom";
import ProductPage from "./components/pages/ProductPage";
import ProfilePage from "./components/pages/ProfilePage";
import LoginPage from "./components/pages/LoginPage"; // Correct import

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [username, setUsername] = useState("");

	const handleLogout = () => {
		setIsLoggedIn(false);
		setUsername("");
	};

	return (
		<CartProvider>
			<div basename="/react-jewelry-website/">
			<BrowserRouter>
				<Header
					isLoggedIn={isLoggedIn}
					username={username}
					setLoggedIn={setIsLoggedIn}
				/>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/catalogue" element={<CataloguePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/shopping-cart" element={<ShoppingCartPage />} />
					<Route path="/checkout" element={<CheckoutPage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/newsletter" element={<NewsletterPage />} />
					<Route path="/products/:productId" element={<ProductPage />} />
					<Route
						path="/login"
						element={
							<LoginPage
								setLoggedIn={setIsLoggedIn}
								setUsername={setUsername}
							/>
						}
					/>
					<Route
						path="/profile"
						element={
							isLoggedIn ? (
								<ProfilePage username={username} handleLogout={handleLogout} />
							) : (
								<Navigate to="/login" replace />
							)
						}
					/>
				</Routes>
			</BrowserRouter>
			</div>
		</CartProvider>
	);
}

export default App;
