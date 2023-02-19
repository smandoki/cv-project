import React from 'react';
import '../styles/education.css';
import uniqid from 'uniqid';

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

				<div className='education-items'>
					{educationItems.map(({ id, name, degree, from, to }) => (
						<div className='education-item' key={id}>
							<strong>
								{from} - {to}
							</strong>
							<span>
								<strong>{name}</strong>
								<p>{degree}</p>
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

export default Education;
