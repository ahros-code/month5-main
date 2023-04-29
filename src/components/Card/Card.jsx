import { Link } from 'react-router-dom';
const Card = props => {
	const { title, image, summary, id } = props;
	return (
		<div className='card'>
			<h3>{title}</h3>
			<img src={image} alt={title} />
			<p>{summary}</p>
			<Link to={`news/${id}`}>Read more</Link>
		</div>
	);
};

export default Card;
