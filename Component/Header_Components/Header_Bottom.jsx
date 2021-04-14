import Link from 'next/link'
import Header_Navigation from './Header_Navigation';
import style from './Header_Bottom.module.css';
import Header_SideBar from './Header_SideBar';


const Header_Bottom = () => {
	return (
		<div className={style.headerBottom}>
			<span><img src='/logo.png' alt="Logo" /></span>
			<Header_Navigation></Header_Navigation>
			<Link href="/login"><a><button className={style.loginButton}> Login</button></a></Link>
			<div className={style.sideBar}>
				<Header_SideBar />
			</div>
		</div>
	);
};

export default Header_Bottom;
