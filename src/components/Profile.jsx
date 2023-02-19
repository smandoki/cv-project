import React from 'react';
import Modal from './Modal';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profile:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate velit inventore nemo, aperiam atque distinctio ipsum pariatur laborum quibusdam dolores iusto quae cum? Facilis voluptatibus consequatur, expedita dignissimos ad aliquid adipisci at, voluptate rem quo omnis voluptas. Ullam consectetur sequi cumque debitis. Aut atque numquam illum, adipisci odit obcaecati exercitationem?',
      show: false,
      form: { profile: '' },
    };
  }

  toggleModal = () => {
    this.setState((state) => ({
      form: {
        profile: state.profile,
      },
      show: !state.show,
    }));
  };

  handleChange = (e) => {
    const { value } = e.target;

    this.setState((state) => {
      const { form } = state;
      form.profile = value;

      return {
        form,
      };
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState((state) => {
      const { form } = state;

      return {
        profile: form.profile,
      };
    });

    this.toggleModal();
  };

  render() {
    const { profile, show, form } = this.state;
    const showButtons = this.props.showButtons ? '' : ' display-none';

    return (
      <div className='profile'>
        <h3>
          Profile
          <button
            className={'icon-button' + showButtons}
            onClick={this.toggleModal}
          >
            <i className='bi bi-pencil'></i>
            edit
          </button>
        </h3>
        <p>{profile}</p>

        <Modal show={show} handleClose={this.toggleModal}>
          <h3>Edit Profile</h3>

          <form onSubmit={this.handleSubmit}>
            <label htmlFor='profile'>Profile</label>
            <textarea
              value={form.profile}
              name='profile'
              onChange={this.handleChange}
            />

            <span className='form-buttons'>
              <button type='button' onClick={this.toggleModal}>
                cancel
              </button>
              <button type='submit'>edit</button>
            </span>
          </form>
        </Modal>
      </div>
    );
  }
}

export default Profile;
