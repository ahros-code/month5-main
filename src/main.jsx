import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './assets/styles/global.css';
import { AuthContextProvider } from './context/AuthContext.jsx';
import { SearchContextProvider } from './context/searchContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<SearchContextProvider>
			<AuthContextProvider>
				<App />
			</AuthContextProvider>
		</SearchContextProvider>
	</BrowserRouter>
);
