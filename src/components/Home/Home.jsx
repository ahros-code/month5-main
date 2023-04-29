import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Home.css';

const Home = () => {
	const [countries, setCountries] = useState([]);
	const [searchData, setSearchData] = useState('');

	const getData = async () => {
		const response = await axios.get('https://restcountries.com/v3.1/all');
		setCountries(response.data);
	};

	useEffect(() => {
		getData();
	}, []);

	const myData = countries
		.filter(country => {
			if (!searchData.trim()) {
				return country;
			} else if (
				country.name.common.toLowerCase().includes(searchData.toLowerCase())
			) {
				return country;
			}
		})
		.map(country => (
			<Card
				key={country.name.common}
				name={country.name.common}
				flag={country.flags.png}
				population={country.population}
				region={country.region}
				capital={country.capital}
			/>
		));

	return (
		<div>
			<input
				type='text'
				value={searchData}
				onChange={e => setSearchData(e.target.value)}
			/>
			<div className='all-cards'>{myData}</div>
		</div>
	);
};

export default Home;
