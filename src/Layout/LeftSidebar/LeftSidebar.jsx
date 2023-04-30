import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/sidebar/twitter-logo-4 1.png';
import css from './LeftSidebar.module.css';

const LeftSidebar = () => {
	return (
		<>
			<div className={css.wrapper}>
				<NavLink to='/'>
					<img src={logo} className={css.logo} alt='logojon' />
				</NavLink>

				<ul className={css.list}>
					<li className={css.items}>
						<NavLink className={css.home} to='/'>Home</NavLink>
					</li>
					<li className={css.items}>
						<NavLink className={css.explore} to='/explore'>Explore</NavLink>
					</li>
					<li className={css.items}>
						<NavLink className={css.notifications} to='/notifications'>Notifications</NavLink>
					</li>
					<li className={css.items}>
						<NavLink className={css.messages} to='/messages'>Messages</NavLink>
					</li>
					<li className={css.items}>
						<NavLink className={css.bookmarks} to='/bookmarks'>Bookmarks</NavLink>
					</li>
					<li className={css.items}>
						<NavLink className={css.lists} to='/lists'>Lists</NavLink>
					</li>
					<li className={css.items}>
						<NavLink className={css.profile} to='/profile'>Profile</NavLink>
					</li>
					<li className={css.items}>
						<NavLink className={css.more} to='/more'>More</NavLink>
					</li>
				</ul>
			</div>
		</>
	);
};

export default LeftSidebar;
