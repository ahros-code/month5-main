import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
			{country.map(c => (
				<div>{c.name.common}</div>
			))}
		</div>
	);
};

export default SingleCountry;
