import React from 'react';
import '../styles/header.css';
import IconButton from './IconButton';
import { CiEdit } from 'react-icons/ci';

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
					<IconButton icon={<CiEdit />} text='edit' />
				</span>
				<p>{title}</p>
			</div>
		);
	}
}

export default Header;
