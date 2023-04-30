import qiz from '../../assets/images/rightSideBar/Ellipse 5.png';
import css from './MightLike.module.css';
import bola from '../../assets/images/rightSideBar/bola.png'

const MightLike = () => {
	return (
		<div className={css.wrapper}>
			<h3 className={css.title}>You might like</h3>
			<div className={css.sectionWrapper}>
				<div className={css.section}>
					<img src={qiz} alt='igm' />
					<div className={css.nameAndNick}>
						<h4 className={css.name}>Mushtariy</h4>
						<p className={css.nick}>@Mushtar565266</p>
					</div>
					<button className={css.followBtn}>Follow</button>
				</div>
			</div>
			<div className={css.sectionWrapper}>
				<div className={css.section}>
					<img src={bola} alt='igm' />
					<div className={css.nameAndNick}>
						<h4 className={css.name}>Shuhratbek</h4>
						<p className={css.nick}>@mrshukhrat</p>
					</div>
					<button className={css.followBtn}>Follow</button>
				</div>
			</div>
			<p className={css.showMore}>Show more</p>
		</div>
	);
};

export default MightLike;
