import Menu from 'react-burger-menu/lib/menus/slide';
import { useState, useEffect, createContext, useContext } from "react";
import { userContext } from '../context/UserContext'
import firebase from "firebase/app";
import { useRouter } from 'next/router'
import Cookies from 'universal-cookie';
import Link from 'next/link';

const buttonStyle = {
	margin: 12,
	borderRadius: 5,
	height: 30,
	fontSize: 20
}

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
		height: '30px',
		width: '6px',
	},
	bmMenuWrap: {
		display: 'inline-block',
		position: 'fixed',
		height: '100%',
		left: '100vw',
		top: '0',
	},
	bmMenu: {
		zIndex: '4',
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
		marginBottom: '10px',
	},
	bmItem: {
		display: 'flex',
		flexDirection: 'column',
		// 		color: '#d1d1d1',
		//   marginBottom: '10px',
		//   textAlign: 'left',
		//   textDecoration: 'none',

	},

	bmOverlay: {
		background: 'rgba(0, 0, 0, 0.3)',
	},

};

const MyContext = createContext();

const MyProvider = (props) => {
	const [menuOpenState, setMenuOpenState] = useState(true)

	return (
		<MyContext.Provider value={{
			isMenuOpen: menuOpenState,
			toggleMenu: () => setMenuOpenState(!menuOpenState),
			stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen)
		}}>
			{props.children}
		</MyContext.Provider>
	)
}

const Navigation = () => {
	const ctx = useContext(MyContext)
	const router = useRouter();
	const cookies = new Cookies();
	const { showHeader, setShowHeader } = useContext(userContext)
	function logout(e) {
		e.preventDefault();
		firebase.auth().signOut()
			.then(() => {
				// console.log('Signed Out');
				cookies.remove('access_token')
				localStorage.removeItem("user_info");
				setShowHeader(false)
				router.push('/')
			})
			.catch(e => {
				// console.error('Sign Out Error', e);
			});
	}

	useEffect(() => {
		const data = localStorage.getItem("user_info")
		if (data) {
			setShowHeader(true)
		}
	}, [])

	return (
		<Menu
			isOpen={ctx.isMenuOpen}
			onStateChange={(state) => ctx.stateChangeHandler(state)}
			styles={styles}
		>
			{/* <div >X</div> */}
			{
				showHeader ? <nav>
					<Link href="/">
						<a className="menuItem" onClick={ctx.toggleMenu} style={{ margin: 12 }}>Home</a>
					</Link>
					<Link href="/jobs">
						<a className="menuItem" onClick={ctx.toggleMenu} style={{ margin: 12 }}>Jobs</a>
					</Link>
					<Link href="/about">
						<a className="menuItem" onClick={ctx.toggleMenu} style={{ margin: 12 }}>About</a>
					</Link>
					<Link href="/contact">
						<a className="menuItem" onClick={ctx.toggleMenu} style={{ margin: 12 }}>Contact</a>
					</Link>
					<Link href="/profile">
						<a className="menuItem" onClick={ctx.toggleMenu} style={{ margin: 12 }}>Profile</a>
					</Link>
					<Link href="/">
						<button className="loginButton" style={buttonStyle} onClick={(e) => { logout(e); ctx.toggleMenu }}>Logout</button>
					</Link>
				</nav>

					: <nav >
						<Link href="/">
							<a className="menuItem" onClick={ctx.toggleMenu} style={{ margin: 12 }}>Home</a>
						</Link>
						<Link href="/jobs">
							<a className="menuItem" onClick={ctx.toggleMenu} style={{ margin: 12 }}>Jobs</a>
						</Link>
						<Link href="/about">
							<a className="menuItem" onClick={ctx.toggleMenu} style={{ margin: 12 }} >About</a>
						</Link>
						<Link href="/contact">
							<a className="menuItem" onClick={ctx.toggleMenu} style={{ margin: 12 }}>Contact</a>
						</Link>
						<Link href="/signup">
							<button className="loginButton" onClick={ctx.toggleMenu} style={buttonStyle}>Login</button>
						</Link></nav>
			}
		</Menu >
	)
}

const Header_SideBar = () => {

	return (
		<MyProvider>
			<div id="outer-container">
				<Navigation />
			</div>
		</MyProvider>

	)
};

export default Header_SideBar;