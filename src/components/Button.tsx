export default function Button({ value = '', onClick = () => {}, style = '' }) {
	return (
		<button onClick={onClick} className={style}>
			{value}
		</button>
	);
}
