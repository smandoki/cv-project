import React from 'react';

function ExperienceItemForm(props) {
  const {
    from,
    to,
    company,
    title,
    handleSubmit,
    formTitle,
    toggleModal,
    handleChange,
    buttonText,
  } = props;

  return (
    <>
      <h3>{formTitle}</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor='company'>Company</label>
        <input
          type='text'
          name='company'
          value={company}
          onChange={handleChange}
        />

        <label htmlFor='title'>Title</label>
        <input type='text' name='title' value={title} onChange={handleChange} />

        <label htmlFor='from'>From</label>
        <input type='text' name='from' value={from} onChange={handleChange} />

        <label htmlFor='to'>To</label>
        <input type='text' name='to' value={to} onChange={handleChange} />

        <span className='form-buttons'>
          <button type='button' onClick={toggleModal}>
            cancel
          </button>
          <button type='submit'>{buttonText}</button>
        </span>
      </form>
    </>
  );
}

export default ExperienceItemForm;
