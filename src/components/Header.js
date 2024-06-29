import { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import shoppingCart from "../assets/images/shopping-cart.svg";
import searchIcon from "../assets/images/search-icon.svg";
import userIcon from "../assets/images/user-icon.svg";
import CartContext from "./CartContext"; // Import CartContext
import data from "./../assets/data/products.json"; // Import your JSON file

const Header = ({ isLoggedIn, username, setLoggedIn, setUsername }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const { cartItems } = useContext(CartContext); // Access cartItems from CartContext
	const [searchResults, setSearchResults] = useState([]); // State for search results
	const searchResultsRef = useRef(null); // Create a ref for the search results element
	const [badgeVisible, setBadgeVisible] = useState(false); // State for cart badge visibility
	const [showLoginDropdown, setShowLoginDropdown] = useState(false); // State for login dropdown visibility

	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top of the page
	}, []); // Run this effect only once when the component mounts

	const handleSearchChange = event => {
		setSearchTerm(event.target.value);
	};

	// Filter products when searchTerm changes
	useEffect(() => {
		// Filter products as the user types, considering case sensitivity
		const foundProducts = data.filter(
			product =>
				// Use includes() to check for partial matches
				product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				product.description.toLowerCase().includes(searchTerm.toLowerCase())
		);

		// Update search results state
		setSearchResults(foundProducts);

		// Show or hide the search results based on the search term
		if (searchTerm.trim() !== "") {
			searchResultsRef.current.classList.add("show");
		} else {
			searchResultsRef.current.classList.remove("show");
		}
	}, [searchTerm]);

	const handleSearchSubmit = event => {
		event.preventDefault();
		// Find the products based on the search term
		const foundProducts = data.filter(
			product =>
				product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				product.description.toLowerCase().includes(searchTerm.toLowerCase())
		);

		setSearchResults(foundProducts); // Update search results state
	};

	// Calculate the total quantity in the cart
	const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

	// Update the badge whenever cartItems changes
	useEffect(() => {
		// Calculate the total quantity in the cart
		const totalQuantity = cartItems.reduce(
			(acc, item) => acc + item.quantity,
			0
		);

		// Update the badge state based on totalQuantity
		setBadgeVisible(totalQuantity > 0);
	}, [cartItems]); // Add cartItems to the dependency array

	const handleCloseSearchResults = () => {
		setSearchTerm("");
		setSearchResults([]);
		searchResultsRef.current.classList.remove("show");
	};

	const toggleLoginDropdown = () => {
		setShowLoginDropdown(!showLoginDropdown);
	};

	// Function to scroll to the top of the page
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth", // Smooth scrolling
		});
	};

	return (
		<header>
			<div className="container">
				<nav className="navbar">
					<Link to="/" onClick={scrollToTop} className="link">
						<img src={logo} alt="London Jewelry Logo" className="logo" />
					</Link>
					<form onSubmit={handleSearchSubmit} className="search-form">
						<input
							type="text"
							placeholder="Search..."
							value={searchTerm}
							onChange={handleSearchChange}
							className="search-input"
						/>
						<button type="submit" className="search-button">
							<img src={searchIcon} alt="Search Icon" className="search-icon" />
						</button>
					</form>
					<ul className="links">
						<li className="link-item">
							<Link to="/" onClick={scrollToTop} className="link active">
								Home
							</Link>
						</li>
						<li className="link-item">
							<Link to="/catalogue" onClick={scrollToTop} className="link">
								Catalogue
							</Link>
						</li>
						<li className="link-item">
							{/* Use Link to navigate to the login/register page */}
							<Link
								to={isLoggedIn ? "/profile" : "/login"}
								className="link"
								onClick={() => {
									toggleLoginDropdown();
									scrollToTop(); // Scroll to top when clicking the user icon
								}}
							>
								<img src={userIcon} alt="User Icon" className="user-icon" />
							</Link>
						</li>
						<li className="link-item">
							<Link to="/shopping-cart" onClick={scrollToTop} className="link">
								<img
									src={shoppingCart}
									alt="Shopping Cart Icon"
									className="shopping-cart-icon"
								/>
								{totalQuantity > 0 && (
									<span className={`cart-badge ${badgeVisible ? "show" : ""}`}>
										{totalQuantity}
									</span>
								)}
							</Link>
						</li>
					</ul>
				</nav>
				{/* Display search results if there are any */}
				<div className="search-results" ref={searchResultsRef}>
					<h2>
						Search Results{" "}
						<span
							className="close-search-results"
							onClick={handleCloseSearchResults}
						>
							X
						</span>
					</h2>
					<ul>
						{searchResults.map(product => (
							<li key={product.id}>
								<Link to={`/products/${product.id}`} onClick={scrollToTop}>
									{product.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
