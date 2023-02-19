import React from 'react';
import '../styles/header.css';
import Modal from './Modal';

class Header extends React.Component {
	constructor() {
		super();

		this.state = {
			name: 'John Doe',
			title: 'Software Engineer',
			show: false,
			form: {
				name: '',
				title: '',
			},
		};
	}

	toggleModal = () => {
		this.setState((state) => ({
			form: {
				name: state.name,
				title: state.title,
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
				name: form.name,
				title: form.title,
			};
		});

		this.toggleModal();
	};

	render() {
		const { name, title, show, form } = this.state;

		return (
			<>
				<div className='cv-header'>
					<span>
						<h1>{name}</h1>
						<button className='icon-button' onClick={this.toggleModal}>
							<i className='bi bi-pencil'></i>
							edit
						</button>
					</span>
					<p>{title}</p>
				</div>

				<Modal show={show} handleClose={this.toggleModal}>
					<h3>Edit Name</h3>

					<form onSubmit={this.handleSubmit}>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							name='name'
							value={form.name}
							onChange={this.handleChange}
						/>

						<label htmlFor='title'>Title</label>
						<input
							type='text'
							name='title'
							value={form.title}
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
			</>
		);
	}
}

export default Header;
