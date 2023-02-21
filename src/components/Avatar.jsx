import React, { useRef, useState } from 'react';
import img from '../img/avatar-placeholder.png';
import '../styles/avatar.css';

function Avatar() {
  const fileInput = useRef();
  const [file, setFile] = useState(null);

  const uploadPicture = () => {
    fileInput.current.click();
  };

  const changePicture = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className='avatar'>
      <img src={file ? file : img} alt='avatar placeholder' />
      <div className='change-avatar' onClick={uploadPicture}>
        <i className='bi bi-camera'></i>
        <p>Change Picture</p>
      </div>
      <input
        type='file'
        accept='image/*'
        ref={fileInput}
        onChange={changePicture}
      />
    </div>
  );
}

export default Avatar;
