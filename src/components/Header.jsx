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
			edit: {
				name: '',
				title: '',
			},
		};
	}

	showModal = () => {
		this.setState((state) => ({
			edit: {
				name: state.name,
				title: state.title,
			},
			show: true,
		}));
	};

	closeModal = () => {
		this.setState({ show: false });
	};

	handleChange = (e) => {
		const { name, value } = e.target;

		this.setState((state) => {
			const { edit } = state;
			edit[name] = value;

			return {
				edit: { ...edit },
			};
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		this.setState((state) => {
			const { edit } = state;

			return {
				name: edit.name,
				title: edit.title,
			};
		});

		this.closeModal();
	};

	render() {
		const { name, title, show, edit } = this.state;

		return (
			<>
				<div className='cv-header'>
					<span>
						<h1>{name}</h1>
						<button className='icon-button' onClick={this.showModal}>
							<i className='bi bi-pencil'></i>
							edit
						</button>
					</span>
					<p>{title}</p>
				</div>

				<Modal show={show} handleClose={this.closeModal}>
					<form onSubmit={this.handleSubmit}>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							name='name'
							value={edit.name}
							onChange={this.handleChange}
						/>

						<label htmlFor='title'>Title</label>
						<input
							type='text'
							name='title'
							value={edit.title}
							onChange={this.handleChange}
						/>

						<span className='form-buttons'>
							<button type='button' onClick={this.closeModal}>
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
