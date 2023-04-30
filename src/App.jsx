import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout/Layout.jsx';
import Home from './pages/Home/Home.jsx';
import Explore from './pages/Explore/Explore.jsx'
import Notifications from './pages/Notifications/Notifications.jsx'
import Messages from './pages/Messages/Messages.jsx'
import Bookmarks from './pages/Bookmarks/Bookmarks.jsx'
import Lists from './pages/Lists/Lists.jsx'
import Profile from './pages/Profile/Profile.jsx'
import More from './pages/More/More.jsx'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='/' element={<Home />} />
				<Route path='/explore' element={<Explore />} />
				<Route path='/notifications' element={<Notifications />}/>
				<Route path='/messages' element={<Messages />}/>
				<Route path='/bookmarks' element={<Bookmarks />}/>
				<Route path='/lists' element={<Lists />}/>
				<Route path='/profile' element={<Profile />}/>
				<Route path='/more' element={<More />}/>
				<Route />
			</Route>
		</Routes>
	);
};

export default App;
