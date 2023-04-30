import css from './Input.module.css';

const Input = () => {
	return (
		<input type='text' placeholder='Search Twitter' className={css.input} />
	);
};

export default Input;
