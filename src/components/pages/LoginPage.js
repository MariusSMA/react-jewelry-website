import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setLoggedIn, setUsername }) => {
	const [username, setUsernameState] = useState(""); // State variable for username
	const [password, setPassword] = useState("");
	const [showLogin, setShowLogin] = useState(true); // Track which form to show
	const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State for success message
	const [showErrorMessage, setShowErrorMessage] = useState(false); // State for error message
	const navigate = useNavigate();

	// Simulate user data (replace with actual authentication logic)
	const [users, setUsers] = useState({
		user1: {
			username: "user1",
			password: "password1",
		},
		user2: {
			username: "user2",
			password: "password2",
		},
	});

	const handleLogin = event => {
		event.preventDefault();
		const enteredUsername = username;
		const enteredPassword = password;

		const user = users[enteredUsername];
		if (user && user.password === enteredPassword) {
			// Set login status in a higher-level component (e.g., App.js)
			setLoggedIn(true); // Call the prop function to update login status in App.js
			setUsername(enteredUsername); // Call the prop function to update username in App.js
			navigate("/"); // Redirect to the home page
			setShowSuccessMessage(true); // Show success message
			setTimeout(() => {
				setShowSuccessMessage(false);
			}, 1000); // Hide after 1 second
		} else {
			setShowErrorMessage(true); // Show error message
			setTimeout(() => {
				setShowErrorMessage(false);
			}, 1000); // Hide after 1 second
		}
	};

	const handleRegister = event => {
		event.preventDefault();
		// ... (Implement registration logic)
		// For now, just display an alert
		if (users[username]) {
			setShowErrorMessage(true); // Show error message
			setTimeout(() => {
				setShowErrorMessage(false);
			}, 1000); // Hide after 1 second
		} else {
			setUsers(prevUsers => ({
				...prevUsers,
				[username]: { username, password },
			}));
			setShowSuccessMessage(true); // Show success message
			setTimeout(() => {
				setShowSuccessMessage(false);
			}, 1000); // Hide after 1 second
		}
	};

	const toggleForm = () => {
		setShowLogin(!showLogin);
	};

	return (
		<div className="login-page">
			{showSuccessMessage && (
				<div className="success-message">
					<p>Success!</p>
				</div>
			)}
			{showErrorMessage && (
				<div className="error-message">
					<p>Error: Invalid username or password.</p>
				</div>
			)}
			{showLogin ? (
				// Login Form
				<form onSubmit={handleLogin}>
					<h2>Login</h2>
					<input
						type="text"
						placeholder="Username"
						value={username}
						onChange={e => setUsernameState(e.target.value)} // Update state variable
					/>
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<button type="submit">Login</button>
					<p>
						Don't have an account?{" "}
						<span onClick={toggleForm} style={{ cursor: "pointer" }}>
							Register
						</span>
					</p>
				</form>
			) : (
				// Registration Form
				<form onSubmit={handleRegister}>
					<h2>Register</h2>
					<input
						type="text"
						placeholder="Username"
						value={username}
						onChange={e => setUsernameState(e.target.value)} // Update state variable
					/>
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<button type="submit">Register</button>
					<p>
						Already have an account?{" "}
						<span onClick={toggleForm} style={{ cursor: "pointer" }}>
							Login
						</span>
					</p>
				</form>
			)}
		</div>
	);
};

export default LoginPage;
