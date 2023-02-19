import React from 'react';
import '../styles/contact.css';
import IconButton from './IconButton';
import { CiEdit } from 'react-icons/ci';

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
					<IconButton icon={<CiEdit />} text='edit' />
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
