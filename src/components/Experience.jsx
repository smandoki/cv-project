import React from 'react';
import '../styles/experience.css';

class Experience extends React.Component {
	constructor() {
		super();

		this.state = {
			experienceItems: [
				{
					company: 'Google',
					title: 'Junior Web Developer',
					from: '2010',
					to: '2012',
				},
				{
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
						<i class='bi bi-plus-lg'></i>
						add
					</button>
				</h3>

				<div className='experience-items'>
					{experienceItems.map(({ company, title, from, to }) => (
						<div className='experience-item'>
							<strong>
								{from} - {to}
							</strong>
							<span>
								<strong>{title}</strong>
								<p>{company}</p>
							</span>
							<button className='icon-button mr-5 mla'>
								<i class='bi bi-pencil'></i>
								edit
							</button>
							<button className='icon-button'>
								<i class='bi bi-trash'></i>
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
