import '../styles/itemCard.css';

function ItemCard({ from, to, name, title }) {
	return (
		<div className='item-card'>
			<strong>
				{from} - {to}
			</strong>
			<span>
				<strong>{name}</strong>
				<p>{title}</p>
			</span>
			<button className='icon-button mr-5 mla'>
				<i className='bi bi-pencil'></i>
				edit
			</button>
			<button className='icon-button'>
				<i className='bi bi-trash'></i>
				delete
			</button>
		</div>
	);
}

export default ItemCard;
