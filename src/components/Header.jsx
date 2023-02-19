import React from 'react';
import '../styles/header.css';

class Header extends React.Component {
	constructor() {
		super();

		this.state = {
			name: 'John Doe',
			title: 'Software Engineer',
		};
	}

	render() {
		const { name, title } = this.state;

		return (
			<div className='cv-header'>
				<span>
					<h1>{name}</h1>
					<button className='icon-button'>
						<i className='bi bi-pencil'></i>
						edit
					</button>
				</span>
				<p>{title}</p>
			</div>
		);
	}
}

export default Header;
