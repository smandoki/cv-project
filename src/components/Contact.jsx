import React from 'react';
import '../styles/contact.css';

class Contact extends React.Component {
	constructor() {
		super();

		this.state = {
			address: '761 Mayfair Ave',
			phone: '123456789',
			email: 'example@email.com',
		};
	}

	render() {
		const { address, phone, email } = this.state;

		return (
			<div className='contact'>
				<h3>
					Contact
					<button className='icon-button'>
						<i class='bi bi-pencil'></i>
						edit
					</button>
				</h3>

				<span>
					<h4>Address</h4>
					<p>{address}</p>
				</span>

				<span>
					<h4>Phone</h4>
					<p>{phone}</p>
				</span>

				<span>
					<h4>Email</h4>
					<p>{email}</p>
				</span>
			</div>
		);
	}
}

export default Contact;
