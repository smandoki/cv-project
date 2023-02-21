import React, { useState } from 'react';
import uniqid from 'uniqid';
import ItemCard from './ItemCard';
import Modal from './Modal';
import EducationItemForm from './EducationItemForm';

function Education(props) {
  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [formInput, setFormInput] = useState({
    id: '',
    name: '',
    degree: '',
    from: '',
    to: '',
  });
  const [educationItems, setEducationItems] = useState([
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
  ]);

  const openEditModal = (id) => {
    const item = educationItems.find((item) => item.id === id);
    setFormInput({ ...item });
    setShowEdit(true);
  };

  const closeModal = () => {
    setShowAdd(false);
    setShowEdit(false);
  };

  const openAddModal = () => {
    setFormInput({
      id: uniqid(),
      name: '',
      degree: '',
      from: '',
      to: '',
    });

    setShowAdd(true);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    setEducationItems((prevEducationItems) => [
      ...prevEducationItems,
      { ...formInput },
    ]);

    closeModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormInput((prevFormInput) => ({ ...prevFormInput, [name]: value }));
  };

  const handleEdit = (e, id) => {
    e.preventDefault();

    setEducationItems((prevEducationItems) => {
      const index = prevEducationItems.findIndex((item) => item.id === id);
      prevEducationItems[index] = { ...formInput };

      return [...prevEducationItems];
    });

    closeModal();
  };

  const deleteItem = (id) => {
    setEducationItems((prevEducationItems) => {
      return [...prevEducationItems.filter((item) => item.id !== id)];
    });
  };

  const showButtons = props.showButtons ? '' : ' display-none';

  return (
    <div className='education'>
      <h3>
        Education
        <button className={'icon-button' + showButtons} onClick={openAddModal}>
          <i className='bi bi-plus-lg'></i>
          add
        </button>
      </h3>

      <div className='item-cards'>
        {educationItems.map(({ id, name, degree, from, to }) => (
          <ItemCard
            key={id}
            from={from}
            to={to}
            name={name}
            title={degree}
            toggleModal={() => openEditModal(id)}
            handleDelete={() => deleteItem(id)}
            showButtons={props.showButtons}
          />
        ))}
      </div>

      <Modal show={showEdit || showAdd} handleClose={closeModal}>
        <EducationItemForm
          {...formInput}
          formTitle={(showEdit ? 'Edit' : 'Add') + ' Education Item'}
          toggleModal={closeModal}
          handleChange={handleChange}
          handleSubmit={(e) =>
            showEdit ? handleEdit(e, formInput.id) : handleAdd(e)
          }
          buttonText={showEdit ? 'Edit' : 'Add'}
        />
      </Modal>
    </div>
  );
}

export default Education;
