import React from 'react';
import img from '../img/avatar-placeholder.png';
import '../styles/avatar.css';

class Avatar extends React.Component {
	render() {
		return (
			<div className='avatar'>
				<img src={img} alt='avatar placeholder' />
			</div>
		);
	}
}

export default Avatar;
