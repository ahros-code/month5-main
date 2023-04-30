import brat from '../../assets/images/mainbar/brat.png';
import css from './SinglePost.module.css';

const SinglePost = props => {
	return (
		<div className={css.cardWrapper}>
			<div className={css.card}>
				<img src={brat} alt='bratti rasmide' />
				<div className={css.cardTextSection}>
				<h4 className={css.name}>Hamidulloh</h4>
				<p className={css.text}>{props.text}</p>
				</div>
			</div>
		</div>
	);
};

export default SinglePost;
