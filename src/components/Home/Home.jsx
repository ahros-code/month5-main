import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../Card/Card'
import './Home.css'

const Home = () => {
	const [countries, setCountries] = useState([]);

	const getData = async () => {
		const response = await axios.get('https://restcountries.com/v3.1/all');
		setCountries(response.data);
	}

	useEffect(()=>{
		getData()
	}, [])

 return(
	<div className='all-cards'>
		{countries.map(country => (
			<Card key={country.name.common} name={country.name.common} flag={country.flags.png} population={country.population} region={country.region} capital={country.capital}/>
		))}
	</div>
 )
}

export default Home