import React from 'react';

class EducationCardForm extends React.Component {
	render() {
		const {
			from,
			to,
			name,
			degree,
			handleSubmit,
			formTitle,
			toggleModal,
			handleChange,
		} = this.props;

		return (
			<>
				<h3>{formTitle}</h3>

				<form onSubmit={handleSubmit}>
					<label htmlFor='name'>Name</label>
					<input type='text' name='name' value={name} onChange={handleChange} />

					<label htmlFor='degree'>Degree</label>
					<input
						type='text'
						name='degree'
						value={degree}
						onChange={handleChange}
					/>

					<label htmlFor='from'>From</label>
					<input type='text' name='from' value={from} onChange={handleChange} />

					<label htmlFor='to'>To</label>
					<input type='text' name='to' value={to} onChange={handleChange} />

					<span className='form-buttons'>
						<button type='button' onClick={toggleModal}>
							cancel
						</button>
						<button type='submit'>edit</button>
					</span>
				</form>
			</>
		);
	}
}

export default EducationCardForm;
