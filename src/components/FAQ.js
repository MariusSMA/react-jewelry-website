// src/components/FAQ.js
import React, { useState } from "react";
import downArrow from "../assets/images/down-arrow.svg";

const FAQ = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const toggleAccordion = index => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<section className="faq" id="faq">
			<div className="container">
				<p className="faq-description gradient">Get your answers</p>
				<h2 className="faq-title">
					Frequently Asked Questions<span className="gradient">.</span>
				</h2>
				<ul className="faq-accordion">
					{faqItems.map((item, index) => (
						<li
							key={index}
							className={`faq-accordion-item-gradient ${
								activeIndex === index ? "acc-active" : ""
							}`}
							onClick={() => toggleAccordion(index)}
						>
							<div className="faq-accordion-item">
								<p className="faq-accordion-item-text">{item.question}</p>
								<img src={downArrow} alt="Down arrow" />
							</div>
							<div className="faq-accordion-item-answer">
								<p>{item.answer}</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

const faqItems = [
	{
		question: "How can I check the status of my order?",
		answer:
			"You can check the status of your order here. You will find the shipping date and estimated delivery date at the bottom of the page.",
	},
	{
		question: "How do I find out when new items are launched?",
		answer:
			"You can find out when new products are launched by subscribing to our newsletter or by installing our mobile app.",
	},
	{
		question: "How do I submit a complaint?",
		answer:
			"You can submit a complaint or a reclamation by accessing our contact form where you can describe your issue and we will respond in maximum 48 hours.",
	},
	{
		question: "Where can I track the status of my order?",
		answer:
			"Once you have ordered a product through our platform, you'll receive an e-mail with your order ID, shipping information of your parcel, and a hyperlink where you can track the order in real time.",
	},
	{
		question: "What shipping carriers do you use?",
		answer:
			"We offer services of major carriers, including UPS, DHL, FedEx, Parcel2Go and many others. If you have a preferred carrier, you can select it in the order process.",
	},
];

export default FAQ;
