import React from "react";

const Subscribe = () => {
	return (
		<section className="subscribe">
			<div className="container">
				<h1 className="hero-title">
					Subscribe to our newsletter<span className="gradient">.</span>
				</h1>
				<p className="hero-description">
					Subscribe today to our newsletter and you receive a 20% discount for
					your next order.
				</p>
				<div className="subscribe-input">
					<input type="email" name="email" placeholder="Your e-mail" />
					<div className="input-gradient">
						<input type="submit" defaultValue="Join Now" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Subscribe;
