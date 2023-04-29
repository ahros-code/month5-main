import { Link } from 'react-router-dom';
import './Card.css';

const Card = props => {
	const { name, flag, population, region, capital } = props;
	
	return (
		<Link className='link' to={`countries/${name}`}>
			<div className='cardWrapper'>
				<img src={flag} />
				<h3 className='card-title'>{name}</h3>
				<div className='smallInfo'>
					<p className='smallInfo-item'>Population: {population}</p>
					<p className='smallInfo-item'>Region: {region}</p>
					<p className='smallInfo-item'>Capital: {capital}</p>
				</div>
			</div>
		</Link>
	);
};

export default Card;
