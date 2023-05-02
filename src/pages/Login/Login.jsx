import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate()
	const {setToken} = useContext(AuthContext);

	const submitHandler = (e) => {
		e.preventDefault();

		fetch('https://reqres.in/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'Application/json',
			},
			body: JSON.stringify({
				email,
				password
			}),
		}).then(res => {
			if(res.status !== 200) {
				alert('User topilmadi')
			}
			return res.json()
		}).then(data => {
			console.log(data);
			if(data.token) {
				setToken(data.token);
				localStorage.setItem('token', data.token)
				navigate('/')
			}
		})
	};

	return (
		<form onSubmit={submitHandler}>
			<input
				type='text'
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<input
				type='text'
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
			<button type='submit'>Login</button>
		</form>
	);
};

export default Login;
