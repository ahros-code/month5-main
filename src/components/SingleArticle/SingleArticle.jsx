import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './SingleArticle.css'

const SingleArticle = () => {
	const {id} = useParams();
	const [newsData, setNewsData] = useState([]);

	const fetchData = async () => {
		const response = await axios.get(
			`https://api.spaceflightnewsapi.net/v3/articles/${id}`
		);
		setNewsData(response.data);
	};

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div className='singleArticleCardWrapper'>
			<h3>{newsData.title}</h3>
			<img src={newsData.imageUrl} alt={newsData.title} />
			<p>{newsData.summary}</p>
			<Link to='/'>Home</Link>
		</div>
	);
};

export default SingleArticle;
