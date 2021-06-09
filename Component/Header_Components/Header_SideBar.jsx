// import { slide as Menu } from 'react-burger-menu';
import Menu from 'react-burger-menu/lib/menus/slide';

import Link from 'next/link';

const styles = {
	bmBurgerButton: {
		position: 'absolute',
		width: '36px',
		height: '30px',
		left: '80vw',
	},
	bmBurgerBars: {
		background: '#373a47',
	},
	bmBurgerBarsHover: {
		background: '#a90000',
	},
	bmCrossButton: {
		height: '24px',
		width: '24px',
	},
	bmCross: {
		background: '#bdc3c7',
	},
	bmMenuWrap: {
		position: 'fixed',
		height: '100%',
		left: '100vw',
	},
	bmMenu: {
		background: '#373a47',
		padding: '2.5em 1.5em 0',
		fontSize: '1.15em',
	},
	bmMorphShape: {
		fill: '#373a47',
	},
	bmItemList: {
		color: '#b8b7ad',
		padding: '1em',
	},
	bmItem: {
		display: 'flex',
		flexDirection: 'column',
	},
	bmOverlay: {
		background: 'rgba(0, 0, 0, 0.3)',
	},
	menuItem: {
		padding: '1rem',
	},
	loginButton: {
		display: 'block',
		backgroundColor: '#ff6600',
		border: 'none',
		color: 'white',
		padding: '15px 32px',
		textAlign: 'center',
		textDecoration: 'none',
		display:' inline-block',
		fontsize: '16px',
		borderRadius: '10px',
	},
};

const Header_SideBar = () => (
	<Menu styles={styles}>
		<nav>
			<Link href="/">
				<a className="menuItem">Home</a>
			</Link>
			<Link href="/jobs">
				<a className="menuItem">Jobs</a>
			</Link>
			<Link href="/companies">
				<a className="menuItem">Companies</a>
			</Link>
			<Link href="/about">
				<a className="menuItem">About</a>
			</Link>
			<Link href="/contact">
				<a className="menuItem">Contact</a>
			</Link>
			<Link href="/contact">
			<button className="loginButton">Login</button>
			</Link>
		</nav>
	</Menu>
);

export default Header_SideBar;
