import React from 'react';
import '../styles/iconButton.css';

class IconButton extends React.Component {
	render() {
		const { icon, text } = this.props;

		return (
			<button className='icon-button'>
				{icon}
				{text}
			</button>
		);
	}
}

export default IconButton;
