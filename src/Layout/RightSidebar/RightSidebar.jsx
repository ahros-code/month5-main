import MightLike from '../../components/MightLike/MightLike'
import Trends from '../../components/Trends/Trends'
import Input from '../../components/rightSidebarInput/Input'
import css from './RightSidebar.module.css'

const RightSidebar = () => {
 return (
	<div className={css.wrapper}>
		<Input />
		<Trends />
		<MightLike />
	</div>
 )
}

export default RightSidebar