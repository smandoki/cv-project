import React from 'react';
import '../styles/contact.css';
import Modal from './Modal';

class Contact extends React.Component {
	constructor() {
		super();

		this.state = {
			address: '761 Mayfair Ave',
			phone: '123456789',
			email: 'example@email.com',
			show: false,
			form: {
				address: '',
				phone: '',
				email: '',
			},
		};
	}

	toggleModal = () => {
		this.setState((state) => ({
			form: {
				address: state.address,
				phone: state.phone,
				email: state.email,
			},
			show: !state.show,
		}));
	};

	handleChange = (e) => {
		const { name, value } = e.target;

		this.setState((state) => {
			const { form } = state;
			form[name] = value;

			return {
				form,
			};
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		this.setState((state) => {
			const { form } = state;

			return {
				address: form.address,
				phone: form.phone,
				email: form.email,
			};
		});

		this.toggleModal();
	};

	render() {
		const { address, phone, email, show, form } = this.state;

		return (
			<div className='contact'>
				<h3>
					Contact
					<button className='icon-button' onClick={this.toggleModal}>
						<i className='bi bi-pencil'></i>
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

				<Modal show={show} handleClose={this.toggleModal}>
					<h3>Edit Contact</h3>
					<form onSubmit={this.handleSubmit}>
						<label htmlFor='name'>Address</label>
						<input
							type='text'
							name='address'
							value={form.address}
							onChange={this.handleChange}
						/>

						<label htmlFor='title'>Phone</label>
						<input
							type='text'
							name='phone'
							value={form.phone}
							onChange={this.handleChange}
						/>

						<label htmlFor='title'>Email</label>
						<input
							type='text'
							name='email'
							value={form.email}
							onChange={this.handleChange}
						/>

						<span className='form-buttons'>
							<button type='button' onClick={this.toggleModal}>
								cancel
							</button>
							<button type='submit'>edit</button>
						</span>
					</form>
				</Modal>
			</div>
		);
	}
}

export default Contact;
