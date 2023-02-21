import React, { useState } from 'react';
import '../styles/contact.css';
import Modal from './Modal';

function Contact(props) {
  const [contact, setContact] = useState({
    address: '761 Mayfair Ave',
    phone: '123456789',
    email: 'example@email.com',
  });

  const [showModal, setShowModal] = useState(false);

  const [formInput, setFormInput] = useState({
    address: '',
    phone: '',
    email: '',
  });

  const toggleModal = () => {
    setFormInput({ ...contact });
    setShowModal((prevShowModal) => !prevShowModal);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormInput((prevFormInput) => ({ ...prevFormInput, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContact({ ...formInput });
    toggleModal();
  };

  const showButtons = props.showButtons ? '' : ' display-none';

  return (
    <div className='contact'>
      <h3>
        Contact
        <button className={'icon-button' + showButtons} onClick={toggleModal}>
          <i className='bi bi-pencil'></i>
          edit
        </button>
      </h3>

      <span>
        <h4>Address</h4>
        <p>{contact.address}</p>
      </span>

      <span>
        <h4>Phone</h4>
        <p>{contact.phone}</p>
      </span>

      <span>
        <h4>Email</h4>
        <p>{contact.email}</p>
      </span>

      <Modal show={showModal} handleClose={toggleModal}>
        <h3>Edit Contact</h3>

        <form onSubmit={handleSubmit}>
          <label htmlFor='address'>Address</label>
          <input
            type='text'
            name='address'
            value={formInput.address}
            onChange={handleChange}
          />

          <label htmlFor='phone'>Phone</label>
          <input
            type='text'
            name='phone'
            value={formInput.phone}
            onChange={handleChange}
          />

          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            value={formInput.email}
            onChange={handleChange}
          />

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

export default Contact;
