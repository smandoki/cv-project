import '../styles/itemCard.css';

function ItemCard({
	from,
	to,
	name,
	title,
	toggleModal,
	handleDelete,
	showButtons,
}) {
	const show = showButtons ? '' : ' display-none';

	return (
		<div className='item-card'>
			<strong className='date'>
				{from} - {to}
			</strong>
			<span>
				<strong>{name}</strong>
				<p>{title}</p>
			</span>
			<button className={'icon-button mr-5 mla' + show} onClick={toggleModal}>
				<i className='bi bi-pencil'></i>
				edit
			</button>
			<button className={'icon-button' + show} onClick={handleDelete}>
				<i className='bi bi-trash'></i>
				delete
			</button>
		</div>
	);
}

export default ItemCard;
