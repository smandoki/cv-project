import React from 'react';
import uniqid from 'uniqid';
import ItemCard from './ItemCard';
import Modal from './Modal';
import EducationItemForm from './EducationItemForm';

class Education extends React.Component {
	constructor() {
		super();

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

	closeEditModal = () => {
		this.setState({ showEdit: false });
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

		this.closeEditModal();
	};

	render() {
		const { educationItems, showEdit, form } = this.state;

		return (
			<div className='education'>
				<h3>
					Education
					<button className='icon-button'>
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
							toggleEditModal={() => this.openEditModal(id)}
						/>
					))}
				</div>

				<Modal show={showEdit} handleClose={this.closeEditModal}>
					<EducationItemForm
						from={form.from}
						to={form.to}
						name={form.name}
						degree={form.degree}
						formTitle='Edit Education Item'
						toggleModal={this.closeEditModal}
						handleChange={this.handleChange}
						handleSubmit={(e) => this.handleEdit(e, form.id)}
					/>
				</Modal>
			</div>
		);
	}
}

export default Education;
