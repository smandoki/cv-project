import React from 'react';
import '../styles/education.css';

class Education extends React.Component {
	constructor() {
		super();

		this.state = {
			educationItems: [
				{
					name: 'Massachusetts Institute of Technology',
					degree: 'Bachelor of Computer Science',
					from: '2010',
					to: '2012',
				},
				{
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
						<i class='bi bi-plus-lg'></i>
						add
					</button>
				</h3>

				<div className='education-items'>
					{educationItems.map(({ name, degree, from, to }) => (
						<div className='education-item'>
							<strong>
								{from} - {to}
							</strong>
							<span>
								<strong>{name}</strong>
								<p>{degree}</p>
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

export default Education;
