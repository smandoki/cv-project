import React, { useState } from 'react';
import Modal from './Modal';

function Profile(props) {
  const [profile, setProfile] = useState(
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate velit inventore nemo, aperiam atque distinctio ipsum pariatur laborum quibusdam dolores iusto quae cum? Facilis voluptatibus consequatur, expedita dignissimos ad aliquid adipisci at, voluptate rem quo omnis voluptas. Ullam consectetur sequi cumque debitis. Aut atque numquam illum, adipisci odit obcaecati exercitationem?'
  );
  const [showModal, setShowModal] = useState(false);
  const [formInput, setFormInput] = useState('');

  const toggleModal = () => {
    setFormInput(profile);
    setShowModal((prevShowModal) => !prevShowModal);
  };

  const handleChange = (e) => {
    setFormInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile(formInput);
    toggleModal();
  };

  const showButtons = props.showButtons ? '' : ' display-none';

  return (
    <div className='profile'>
      <h3>
        Profile
        <button className={'icon-button' + showButtons} onClick={toggleModal}>
          <i className='bi bi-pencil'></i>
          edit
        </button>
      </h3>
      <p>{profile}</p>

      <Modal show={showModal} handleClose={toggleModal}>
        <h3>Edit Profile</h3>

        <form onSubmit={handleSubmit}>
          <label htmlFor='profile'>Profile</label>
          <textarea value={formInput} name='profile' onChange={handleChange} />

          <span className='form-buttons'>
            <button type='button' onClick={toggleModal}>
              cancel
            </button>
            <button type='submit'>edit</button>
          </span>
        </form>
      </Modal>
    </div>
  );
}

export default Profile;
