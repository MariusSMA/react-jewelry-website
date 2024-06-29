import React from "react";
import Contact from "../Contact";
import Form from "../Form";
import Newsletter from "../Newsletter";
import Footer from "../Footer";

const ContactPage = () => {
	return (
		<>
			<main>
				<Contact />
				<Form />
			</main>
			<Newsletter />
			<Footer />
		</>
	);
};

export default ContactPage;
