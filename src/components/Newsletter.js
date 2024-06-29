import React from "react";

const Newsletter = () => {
	return (
		<div className="container">
			<div className="newsletter">
				<h2 className="newsletter-title">Subscribe to our newsletter</h2>
				<p className="newsletter-description">
					Enroll now to our newsletter in order to receive super attractive
					discounts every week.
				</p>
				<div className="newsletter-btn-gradient">
					<a href="./assets/routes/newsletter.html" target="_blank">
						<button className="newsletter-btn">Subscribe</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
