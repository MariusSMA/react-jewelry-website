import React from "react";
import logoDark from "../assets/images/logo-darkblue.svg";
import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";
import tiktok from "../assets/images/tiktok.svg";

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="footer-row">
					<div className="footer-col">
						<div className="footer-col-logo">
							<a href="./">
								<img src={logoDark} alt="London Jewelry Logo" />
							</a>
							<p className="footer-col-vision">
								Our vision is to offer the highest quality products to our
								customers and make their lives better.
							</p>
						</div>
					</div>
					<div className="footer-col">
						<div className="footer-col-item">
							<p className="footer-col-item-title">About</p>
							<div className="footer-col-item-subitems">
								<p className="footer-col-item-subitem">
									<a href="/about">About us</a>
								</p>
								<p className="footer-col-item-subitem">
									<a href="./">Features</a>
								</p>
								<p className="footer-col-item-subitem">
									<a href="./newsletter">Newsletter</a>
								</p>
							</div>
						</div>

						<div className="footer-col-item">
							<p className="footer-col-item-title">Company</p>
							<div className="footer-col-item-subitems">
								<p className="footer-col-item-subitem">
									<a href="./">How we work</a>
								</p>
								<p className="footer-col-item-subitem">
									<a href="./">Capital</a>
								</p>
								<p className="footer-col-item-subitem">
									<a href="./">Security</a>
								</p>
							</div>
						</div>

						<div className="footer-col-item">
							<p className="footer-col-item-title">Support</p>
							<div className="footer-col-item-subitems">
								<p className="footer-col-item-subitem">
									<a href="#faq">FAQs</a>
								</p>
								<p className="footer-col-item-subitem">
									<a href="./">Support center</a>
								</p>
								<p className="footer-col-item-subitem">
									<a href="/contact">Contact us</a>
								</p>
							</div>
						</div>

						<div className="footer-col-item">
							<p className="footer-col-item-title">Follow us</p>
							<div className="footer-col-item-subitems-icons">
								<a href="./">
									<img src={instagram} alt="Instagram Logo" />
								</a>
								<a href="./">
									<img src={facebook} alt="Facebook Logo" />
								</a>
								<a href="./">
									<img src={tiktok} alt="Tiktok Logo" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-row">
					<div className="footer-row-left">
						<p className="footer-row-left-copyright">
							© London Jewelry. All rights reserved
						</p>
					</div>
					<div className="footer-row-right">
						<p className="footer-row-right-terms">
							<a href="./">Terms & Agreements</a>
						</p>
						<p className="footer-row-right-policy">
							<a href="./">Privacy Policy</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
