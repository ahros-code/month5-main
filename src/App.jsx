import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import SingleCountry from './components/SingleCountry/SingleCountry';

const App = () => {
	return (
		<div className='container'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='countries/:name' element={<SingleCountry />} />
			</Routes>
		</div>
	);
};

export default App;
