import { Outlet } from 'react-router-dom';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import RightSidebar from '../RightSidebar/RightSidebar';
import './Layout.css';
import '../../assets/styles/global.css'

const Layout = () => {
	return (
		<>
			<div className='container'>
				<div className='layout__block'>
					<div className='layout__left'>
						<LeftSidebar />
					</div>
					<div className='layout__center'>
						<Outlet />
					</div>
					<div className='layout__right'>
						<RightSidebar />
					</div>
				</div>
			</div>
		</>
	);
};

export default Layout;
