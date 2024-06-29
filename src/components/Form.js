import React from "react";

const Form = () => {
	return (
		<section className="form">
			<div className="container">
				<form>
					<div className="form-row">
						<div className="form-row-item">
							<label htmlFor="first-name">
								First name<span className="gradient">*</span>
							</label>
							<div className="input-gradient">
								<input
									type="text"
									name="first-name"
									placeholder="Your first name"
								/>
							</div>
						</div>
						<div className="form-row-item">
							<label htmlFor="last-name">
								Last name<span className="gradient">*</span>
							</label>
							<div className="input-gradient">
								<input
									type="text"
									name="last-name"
									placeholder="Your last name"
								/>
							</div>
						</div>
					</div>
					<div className="form-row">
						<div className="form-row-item">
							<label htmlFor="email">
								E-mail<span className="gradient">*</span>
							</label>
							<div className="input-gradient">
								<input type="email" name="email" placeholder="Your e-mail" />
							</div>
						</div>
						<div className="form-row-item">
							<label htmlFor="country">
								Country<span className="gradient">*</span>
							</label>
							<div className="input-gradient">
								<input type="text" name="country" placeholder="Your country" />
							</div>
						</div>
					</div>
					<div className="form-row">
						<div className="form-row-item">
							<label htmlFor="phone-number"> Phone number </label>
							<div className="input-gradient">
								<input
									type="tel"
									name="phone-number"
									placeholder="Your phone number"
								/>
							</div>
						</div>
						<div className="form-row-item">
							<label htmlFor="subject">
								Subject<span className="gradient">*</span>
							</label>
							<div className="input-gradient">
								<select name="subject">
									<option value="default" selected="">
										Select
									</option>
									<option value="store-info">Store Information</option>
									<option value="brand-info">Brand Information</option>
									<option value="job-request">Job Request</option>
									<option value="data">Privacy Data Treatment</option>
									<option value="complaint">Complaint</option>
									<option value="other">Other</option>
								</select>
							</div>
						</div>
					</div>
					<div className="form-row">
						<div className="form-row-item">
							<label htmlFor="message">
								Message<span className="gradient">*</span>
							</label>
							<div className="input-gradient igm">
								<textarea
									name="message"
									placeholder="Your message"
									defaultValue={""}
								/>
							</div>
						</div>
						<div className="form-row-item">
							<label htmlFor="submit" />
							<div className="input-gradient igs">
								<input type="submit" name="submit" defaultValue="Submit" />
							</div>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Form;
