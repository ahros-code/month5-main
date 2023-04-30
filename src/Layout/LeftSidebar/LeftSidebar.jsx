import { NavLink } from 'react-router-dom';
import css from './LeftSidebar.module.css';

const LeftSidebar = () => {
	return (
		<ul className={css.list}>
			<li className={css.items}>
				<NavLink to='/'>Home</NavLink>
			</li>
			<li className={css.items}>
				<NavLink to='/explore'>Explore</NavLink>
			</li>
			<li className={css.items}>
				<NavLink to='/notifications'>Notifications</NavLink>
			</li>
			<li className={css.items}>
				<NavLink to='/messages'>Messages</NavLink>
			</li>
			<li className={css.items}>
				<NavLink to='/bookmarks'>Bookmarks</NavLink>
			</li>
			<li className={css.items}>
				<NavLink to='/lists'>Lists</NavLink>
			</li>
			<li className={css.items}>
				<NavLink to='/profile'>Profile</NavLink>
			</li>
			<li className={css.items}>
				<NavLink to='/more'>More</NavLink>
			</li>
		</ul>
	);
};

export default LeftSidebar;
