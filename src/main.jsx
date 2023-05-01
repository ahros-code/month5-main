import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './assets/styles/global.css';
import { SearchContextProvider } from './components/context/searchContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<SearchContextProvider>
			<App />
		</SearchContextProvider>
	</BrowserRouter>
);
