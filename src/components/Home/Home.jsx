import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './Home.css'

const Home = () => {
	const [newsData, setNewsData] = useState([]);

	const fetchData = async () => {
		const response = await axios.get(
			'https://api.spaceflightnewsapi.net/v3/articles'
		);
		setNewsData(response.data);
	};
	
	useEffect(() => {
		fetchData();
	}, []); 
	return (
		<div>
		{	
			newsData.map(news=>(
				<Card key={news.id} title={news.title} image={news.imageUrl} summary={news.summary} id={news.id}/>
			))
		}
</div>
	)
};

export default Home;
