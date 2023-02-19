import React from 'react';
import uniqid from 'uniqid';
import ItemCard from './ItemCard';

class Experience extends React.Component {
	constructor() {
		super();

		this.state = {
			experienceItems: [
				{
					id: uniqid(),
					company: 'Google',
					title: 'Junior Web Developer',
					from: '2010',
					to: '2012',
				},
				{
					id: uniqid(),
					company: 'Uber',
					title: 'Senior Web Developer',
					from: '2013',
					to: '2015',
				},
			],
		};
	}

	render() {
		const { experienceItems } = this.state;

		return (
			<div className='experience'>
				<h3>
					Experience
					<button className='icon-button'>
						<i className='bi bi-plus-lg'></i>
						add
					</button>
				</h3>

				<div className='item-cards'>
					{experienceItems.map(({ id, company, title, from, to }) => (
						<ItemCard
							key={id}
							from={from}
							to={to}
							name={company}
							title={title}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default Experience;
