import React from "react";
import heroIllustration from "../assets/images/illustration-2.svg";

const Catalogue = () => {
	return (
		<section className="catalogue">
			<div className="container">
				<div className="hero-content">
					<div className="hero-text">
						<h1 className="hero-title">
							Explore the catalogue<span className="gradient">.</span>
						</h1>
						<p className="hero-description">
							The new collections are available right now, check them out!
						</p>
						<ul className="stats">
							<li className="stats-item">
								<p>
									9k<span className="gradient">+</span>
								</p>
								<span className="stats-item-info">
									Products
									<br />
									Available
								</span>
							</li>
							<li className="stats-item">
								<p>
									2k<span className="gradient">+</span>
								</p>
								<span className="stats-item-info">
									Happy <br />
									Customers
								</span>
							</li>
							<li className="stats-item">
								<p>
									20<span className="gradient">+</span>
								</p>
								<span className="stats-item-info">
									New <br />
									Collections
								</span>
							</li>
						</ul>
					</div>
					<div className="hero-illustration">
						<img src={heroIllustration} alt="Illustration" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Catalogue;
