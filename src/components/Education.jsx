import React from 'react';
import uniqid from 'uniqid';
import ItemCard from './ItemCard';

class Education extends React.Component {
	constructor() {
		super();

		this.state = {
			educationItems: [
				{
					id: uniqid(),
					name: 'Massachusetts Institute of Technology',
					degree: 'Bachelor of Computer Science',
					from: '2010',
					to: '2012',
				},
				{
					id: uniqid(),
					name: 'Stanford University',
					degree: 'Bachelor of Mathematics and statistics',
					from: '2013',
					to: '2015',
				},
			],
		};
	}

	render() {
		const { educationItems } = this.state;

		return (
			<div className='education'>
				<h3>
					Education
					<button className='icon-button'>
						<i className='bi bi-plus-lg'></i>
						add
					</button>
				</h3>

				<div className='item-cards'>
					{educationItems.map(({ id, name, degree, from, to }) => (
						<ItemCard key={id} from={from} to={to} name={name} title={degree} />
					))}
				</div>
			</div>
		);
	}
}

export default Education;
