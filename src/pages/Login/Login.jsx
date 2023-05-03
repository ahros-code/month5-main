import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/sidebar/twitter-logo-4 1.png';
import { AuthContext } from '../../context/AuthContext';
import css from './Login.module.css';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();
	const { setToken } = useContext(AuthContext);

	const submitHandler = e => {
		e.preventDefault();

		fetch('https://reqres.in/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'Application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})
			.then(res => {
				if (res.status !== 200) {
					alert('User topilmadi');
				}
				return res.json();
			})
			.then(data => {
				console.log(data);
				if (data.token) {
					setToken(data.token);
					localStorage.setItem('token', data.token);
					navigate('/');
				}
			}).catch(err => {
				alert(err)
			})
	};

	return (
		<>
			<img src={logo} alt='sdf' className={css.logo} />
			<h2 className={css.title}>Log in to Twitter</h2>
			<div className={css.wrapper}>
				<form onSubmit={submitHandler} className={css.form}>
					<input
						type='text'
						value={email}
						onChange={e => setEmail(e.target.value)}
						className={css.input}
						placeholder='Email address'
					/>
					<input
						type='text'
						value={password}
						onChange={e => setPassword(e.target.value)}
						className={css.input}
						placeholder='Password'
					/>
					<button type='submit' className={css.btn}>
						Log In
					</button>
				</form>
			</div>
		</>
	);
};

export default Login;
