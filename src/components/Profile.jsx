import React from 'react';
import '../styles/profile.css';

class Profile extends React.Component {
	constructor() {
		super();

		this.state = {
			profile:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate velit inventore nemo, aperiam atque distinctio ipsum pariatur laborum quibusdam dolores iusto quae cum? Facilis voluptatibus consequatur, expedita dignissimos ad aliquid adipisci at, voluptate rem quo omnis voluptas. Ullam consectetur sequi cumque debitis. Aut atque numquam illum, adipisci odit obcaecati exercitationem?',
		};
	}

	render() {
		const { profile } = this.state;

		return (
			<div className='profile'>
				<h3>
					Profile
					<button className='edit-button'>
						<i class='bi bi-pencil'></i>
						edit
					</button>
				</h3>
				<p>{profile}</p>
			</div>
		);
	}
}

export default Profile;
