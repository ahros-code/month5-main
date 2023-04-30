import settings from '../../assets/images/rightSideBar/settings.svg';
import threeDots from '../../assets/images/rightSideBar/Vector.svg';
import css from './Trends.module.css';

const Trends = () => {
	return (
		<div className={css.wrapper}>
			<div className={css.titleWrapper}>
				<h3 className={css.title}>Trends for you</h3>
				<img className={css.img} src={settings} alt='settings icon' />
			</div>
			<div className={css.sectionWrapper}>
				<div className={css.section}>
					<p>Trending in Germany</p>
					<h4>Revolution</h4>
					<p>50.4K Tweets</p>
				</div>
				<img src={threeDots} alt='img' />
			</div>
			<div className={css.sectionWrapper}>
				<div className={css.section}>
					<p>Trending in Germany</p>
					<h4>Revolution</h4>
					<p>50.4K Tweets</p>
				</div>
				<img src={threeDots} alt='img' />
			</div>
			<div className={css.sectionWrapper}>
				<div className={css.section}>
					<p>Trending in Germany</p>
					<h4>Revolution</h4>
					<p>50.4K Tweets</p>
				</div>
				<img src={threeDots} alt='img' />
			</div>
			<p className={css.showMore}>Show more</p>
		</div>
	);
};

export default Trends;
