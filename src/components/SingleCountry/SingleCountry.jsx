import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './SingleCountry.css';

const SingleCountry = () => {
	const { name } = useParams();
	const [country, setCountry] = useState([]);

	const getData = async () => {
		const response = await axios.get(
			`https://restcountries.com/v3.1/name/${name}`
		);
		setCountry(response.data);
	};

	useEffect(() => {
		getData();
	}, []);

	console.log(country);

	return (
		<div className='singleCountry-wrapper'>
			<Link to='/' className='back'>Back</Link>
			{country.map(c => (
				<div className='wrap'>
					<div className='left'>
						<img
							className='singleCountry-flag'
							src={c.flags.png}
							alt={c.name.common}
						/>
					</div>
					<div className='right'>
						<h3>{c.name.common}</h3>
						<p className='smallInfo-item'>Population: {c.population}</p>
						<p className='smallInfo-item'>Region: {c.region}</p>
						<p className='smallInfo-item'>Subregion: {c.subregion}</p>
						<p className='smallInfo-item'>Capital: {c.capital}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default SingleCountry;
