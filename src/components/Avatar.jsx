import React from 'react';
import img from '../img/avatar-placeholder.png';
import '../styles/avatar.css';

class Avatar extends React.Component {
  constructor() {
    super();

    this.fileInput = React.createRef();
    this.state = { file: null };
  }

  uploadPicture = (e) => {
    e.preventDefault();
    this.fileInput.current.click();
  };

  changePicture = (e) => {
    this.setState({ file: URL.createObjectURL(e.target.files[0]) });
  };

  render() {
    const { file } = this.state;

    return (
      <div className='avatar'>
        <img src={file ? file : img} alt='avatar placeholder' />
        <div className='change-avatar' onClick={this.uploadPicture}>
          <i className='bi bi-camera'></i>
          <p>Change Picture</p>
        </div>
        <input
          type='file'
          accept='image/*'
          ref={this.fileInput}
          onChange={this.changePicture}
        />
      </div>
    );
  }
}

export default Avatar;
