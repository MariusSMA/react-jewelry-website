import React from "react";
import Newsletter from "../Newsletter";
import Footer from "../Footer";

const ProfilePage = ({ username, handleLogout }) => {
	return (
		<>
			<main>
				<section className="profile">
					<div className="container">
						<h1>Profile</h1>
						<p>Welcome, {username}</p>
						<ul>
							<li>Order history</li>
							<li>Settings</li>
						</ul>
						{/* Add profile information here (e.g., order history, settings) */}
						<button className="logout-button" onClick={handleLogout}>
							Logout
						</button>
					</div>
				</section>
			</main>
			<Newsletter />
			<Footer />
		</>
	);
};

export default ProfilePage;
