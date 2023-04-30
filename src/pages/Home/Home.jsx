import { useState } from 'react';
import brat from '../../assets/images/mainbar/brat.png';
import SinglePost from '../../components/SinglePost/SinglePost';
import css from './Home.module.css';

const Home = () => {
	const [newPosts, setNewPosts] = useState([]);
	const [posts, setPosts] = useState(() => {
		const storedPost = localStorage.getItem('posts');
		return storedPost ? JSON.parse(storedPost) : [];
	});

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

	const myData = posts.map(post => (
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
