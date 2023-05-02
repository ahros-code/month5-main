import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
	const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : null)
	return (
		<AuthContext.Provider value={{token, setToken}}>
			{children}
		</AuthContext.Provider>
	)
}