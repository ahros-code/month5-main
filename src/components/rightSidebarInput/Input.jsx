import { useContext } from 'react';
import { SearchContext } from '../context/searchContext';
import css from './Input.module.css';

const Input = () => {
	const { searchData, setSearchData } = useContext(SearchContext);
	return (
		<>
		<input
			type='text'
			placeholder='Search Twitter'
			className={css.input}
			value={searchData}
			onChange={e => setSearchData(e.target.value)}
		/>
		</>
	);
};

export default Input;
