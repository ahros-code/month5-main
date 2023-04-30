import {Outlet} from "react-router-dom";
import LeftSidebar from './LeftSidebar/LeftSidebar';
import RightSidebar from './RightSidebar/RightSidebar'
const Layout = () => {
	return (
		<>
			<LeftSidebar />
			<Outlet />
			<RightSidebar />
		</>
	);
};

export default Layout;
