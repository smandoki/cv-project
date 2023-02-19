import React from 'react';
import '../styles/experience.css';
import uniqid from 'uniqid';

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

				<div className='experience-items'>
					{experienceItems.map(({ id, company, title, from, to }) => (
						<div className='experience-item' key={id}>
							Name
							<strong>
								{from} - {to}
							</strong>
							<span>
								<strong>{title}</strong>
								<p>{company}</p>
							</span>
							<button className='icon-button mr-5 mla'>
								<i className='bi bi-pencil'></i>
								edit
							</button>
							<button className='icon-button'>
								<i className='bi bi-trash'></i>
								delete
							</button>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default Experience;
