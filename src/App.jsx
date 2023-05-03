import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout/Layout.jsx';
import Bookmarks from './pages/Bookmarks/Bookmarks.jsx';
import Explore from './pages/Explore/Explore.jsx';
import Home from './pages/Home/Home.jsx';
import Lists from './pages/Lists/Lists.jsx';
import Messages from './pages/Messages/Messages.jsx';
import More from './pages/More/More.jsx';
import Notifications from './pages/Notifications/Notifications.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Login from './pages/Login/Login.jsx';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext.jsx'

const App = () => {
	const {token} = useContext(AuthContext)
	return (
		<Routes>
			{!token ? <Route path='/' element={<Login />}/>: <Route path='/' element={<Layout />}>
				<Route path='/' element={<Home />} />
				<Route path='/explore' element={<Explore />} />
				<Route path='/notifications' element={<Notifications />} />
				<Route path='/messages' element={<Messages />} />
				<Route path='/bookmarks' element={<Bookmarks />} />
				<Route path='/lists' element={<Lists />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/more' element={<More />} />
			</Route>}
			<Route path='*' element={<h1>Not found</h1>} />
		</Routes>
	);
};

export default App;
