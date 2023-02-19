import React from 'react';
import uniqid from 'uniqid';
import ItemCard from './ItemCard';
import Modal from './Modal';
import EducationItemForm from './EducationItemForm';

class Education extends React.Component {
  constructor(props) {
    super(props);

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
      showEdit: false,
      showAdd: false,
      form: {
        id: '',
        name: '',
        degree: '',
        from: '',
        to: '',
      },
    };
  }

  openEditModal = (idFind) => {
    this.setState((state) => {
      const { educationItems } = state;
      const item = educationItems.find((item) => item.id === idFind);
      const { id, name, degree, from, to } = item;

      return {
        form: {
          id,
          name,
          degree,
          from,
          to,
        },
        showEdit: true,
      };
    });
  };

  closeModal = () => {
    this.setState({ showEdit: false, showAdd: false });
  };

  openAddModal = () => {
    this.setState({
      form: {
        id: '',
        name: '',
        degree: '',
        from: '',
        to: '',
      },
      showAdd: true,
    });
  };

  handleAdd = (e) => {
    e.preventDefault();

    this.setState((state) => {
      const { educationItems, form } = state;
      form.id = uniqid();

      return {
        educationItems: [...educationItems, form],
      };
    });

    this.closeModal();
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState((state) => {
      const { form } = state;
      form[name] = value;

      return {
        form,
      };
    });
  };

  handleEdit = (e, id) => {
    e.preventDefault();

    this.setState((state) => {
      const { educationItems, form } = state;
      const item = educationItems.find((item) => item.id === id);

      item.name = form.name;
      item.degree = form.degree;
      item.from = form.from;
      item.to = form.to;

      return {
        educationItems,
      };
    });

    this.closeModal();
  };

  deleteItem = (id) => {
    this.setState((state) => {
      const { educationItems } = state;
      const index = educationItems.findIndex((item) => item.id === id);

      educationItems.splice(index, 1);

      return {
        educationItems: [...educationItems],
      };
    });
  };

  render() {
    const { educationItems, showEdit, showAdd, form } = this.state;
    const showButtons = this.props.showButtons ? '' : ' display-none';

    return (
      <div className='education'>
        <h3>
          Education
          <button
            className={'icon-button' + showButtons}
            onClick={this.openAddModal}
          >
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
              toggleModal={() => this.openEditModal(id)}
              handleDelete={() => this.deleteItem(id)}
              showButtons={this.props.showButtons}
            />
          ))}
        </div>

        <Modal show={showEdit || showAdd} handleClose={this.closeModal}>
          <EducationItemForm
            from={form.from}
            to={form.to}
            name={form.name}
            degree={form.degree}
            formTitle={(showEdit ? 'Edit' : 'Add') + ' Education Item'}
            toggleModal={this.closeModal}
            handleChange={this.handleChange}
            handleSubmit={(e) =>
              showEdit ? this.handleEdit(e, form.id) : this.handleAdd(e)
            }
            buttonText={showEdit ? 'Edit' : 'Add'}
          />
        </Modal>
      </div>
    );
  }
}

export default Education;
