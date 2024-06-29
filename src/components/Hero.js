// src/components/Hero.js
import React from "react";
import heroImage from "../assets/images/illustration.svg";
import rightArrow from "../assets/images/right-arrow.png";
import scrollForMore from "../assets/images/scroll-for-more.svg";

const Hero = () => {
	return (
		<section className="hero">
			<div className="container">
				<div className="hero-content">
					<div className="hero-text">
						<h1 className="hero-title">
							Discover the realm of luxuriousness
							<span className="gradient">.</span>
						</h1>
						<p className="hero-description">
							Find a variety of accessories that suit you perfectly, enhance
							your day-to-day outfits and allow yourself to be free.
						</p>
						<a href="./Catalogue">
							<button className="hero-btn">
								<p className="hero-btn-text">Explore our catalogue</p>
								<img
									src={rightArrow}
									className="right-arrow"
									alt="Right arrow"
								/>
							</button>
						</a>
					</div>
					<img
						src={heroImage}
						alt="Illustration"
						className="hero-illustration"
					/>
				</div>
				<img src={scrollForMore} alt="Down Arrow" className="scroll-for-more" />
			</div>
		</section>
	);
};

export default Hero;
