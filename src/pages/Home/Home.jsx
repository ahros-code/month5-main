import { useState } from 'react';
import brat from '../../assets/images/mainbar/brat.png';
import SinglePost from '../../components/SinglePost/SinglePost';
import css from './Home.module.css';
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';

const Home = () => {
	const [newPosts, setNewPosts] = useState([]);
	const [posts, setPosts] = useState(() => {
		const storedPost = localStorage.getItem('posts');
		return storedPost ? JSON.parse(storedPost) : [];
	});

	const {token} = useContext(AuthContext)

	const handleNewPostChange = e => {
		setNewPosts(e.target.value);
	};

	const handleNewPostSubmit = e => {
		e.preventDefault();
		if (!newPosts.trim()) return;
		setPosts([...posts, { id: Date.now(), text: newPosts }]);
		setNewPosts('');
	};

	localStorage.setItem('posts', JSON.stringify(posts));

	const {searchData} = useContext(SearchContext);

	const myData = posts.filter((post)=>{
		if(!searchData.trim()) {
			return post;
		} else if (
			post.text.toLowerCase().includes(searchData.toLowerCase())
		) {
			return post
		}
	}).map(post => (
		<SinglePost key={post.id} text={post.text} />
	));

	return (
		<div className={css.wrapper}>
			<p className={css.title}>Home</p>
			<form className={css.inputSection} onSubmit={handleNewPostSubmit}>
				<img src={brat} alt='bratti rasmi' className={css.bratImg} />
				<input
					type='text'
					placeholder='What’s happening'
					className={css.input}
					value={newPosts}
					onChange={handleNewPostChange}
				/>
				<button type='submit' className={css.btn}>
					Tweet
				</button>
			</form>
			<ul>{myData}</ul>
		</div>
	);
};

export default Home;
