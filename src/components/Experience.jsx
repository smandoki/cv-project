import React from 'react';
import uniqid from 'uniqid';
import ItemCard from './ItemCard';
import ExperienceItemForm from './ExperienceItemForm';
import Modal from './Modal';

class Experience extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			experienceItems: [
				{
					id: uniqid(),
					company: 'Google',
					title: 'Junior Web Developer',
					from: '2010',
					to: '2012',
				},
				{
					id: uniqid(),
					company: 'Uber',
					title: 'Senior Web Developer',
					from: '2013',
					to: '2015',
				},
			],
			showEdit: false,
			showAdd: false,
			form: {
				id: '',
				company: '',
				title: '',
				from: '',
				to: '',
			},
		};
	}

	openEditModal = (idFind) => {
		this.setState((state) => {
			const { experienceItems } = state;
			const item = experienceItems.find((item) => item.id === idFind);
			const { id, company, title, from, to } = item;

			return {
				form: {
					id,
					company,
					title,
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
				company: '',
				title: '',
				from: '',
				to: '',
			},
			showAdd: true,
		});
	};

	handleAdd = (e) => {
		e.preventDefault();

		this.setState((state) => {
			const { experienceItems, form } = state;
			form.id = uniqid();

			return {
				experienceItems: [...experienceItems, form],
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
			const { experienceItems, form } = state;
			const item = experienceItems.find((item) => item.id === id);

			item.company = form.company;
			item.title = form.title;
			item.from = form.from;
			item.to = form.to;

			return {
				experienceItems,
			};
		});

		this.closeModal();
	};

	deleteItem = (id) => {
		this.setState((state) => {
			const { experienceItems } = state;
			const index = experienceItems.findIndex((item) => item.id === id);

			experienceItems.splice(index, 1);

			return {
				experienceItems: [...experienceItems],
			};
		});
	};

	render() {
		const { experienceItems, showEdit, showAdd, form } = this.state;
		const showButtons = this.props.showButtons ? '' : ' display-none';

		return (
			<div className='experience'>
				<h3>
					Experience
					<button
						className={'icon-button' + showButtons}
						onClick={this.openAddModal}
					>
						<i className='bi bi-plus-lg'></i>
						add
					</button>
				</h3>

				<div className='item-cards'>
					{experienceItems.map(({ id, company, title, from, to }) => (
						<ItemCard
							key={id}
							from={from}
							to={to}
							name={company}
							title={title}
							toggleModal={() => this.openEditModal(id)}
							handleDelete={() => this.deleteItem(id)}
							showButtons={this.props.showButtons}
						/>
					))}
				</div>

				<Modal show={showEdit || showAdd} handleClose={this.closeModal}>
					<ExperienceItemForm
						from={form.from}
						to={form.to}
						company={form.company}
						title={form.title}
						formTitle={(showEdit ? 'Edit' : 'Add') + ' Experience Item'}
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

export default Experience;
