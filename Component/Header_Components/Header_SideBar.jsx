// import { slide as Menu } from 'react-burger-menu';
import Menu from 'react-burger-menu/lib/menus/slide';
import { useState, useEffect, createContext, useReducer,useContext } from "react";
import {userContext} from '../context/UserContext'
import initFirebase from '../config/firebaseConfig'
import firebase from "firebase/app";
import { useRouter } from 'next/router'
import { getCookies } from "../config/FirebaseToken";
import Cookies from 'universal-cookie';
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



const Header_SideBar = () => {
	const router = useRouter();
	const cookies = new Cookies();

	const {state, dispatch, showHeader, setShowHeader,  setSingleUser, singleUser} = useContext(userContext)
	function logout(e){
		e.preventDefault();
		
		
		firebase.auth().signOut()
	.then(() => {
	  console.log('Signed Out');
	  cookies.remove('access_token')
	  
	  localStorage.removeItem("user_info");
	  setShowHeader(false)
	  router.push('/')

	
	})
	.catch(e=>{
	 console.error('Sign Out Error', e);
	});
	
	  }


	useEffect(()=>{
	
		const data = localStorage.getItem("user_info")
		
		if(data){ 
		  setShowHeader(true)
		 }
		
		},[])


	return(
		<>
	<Menu styles={styles}>
		{showHeader?<nav>
			<Link href="/">
				<a className="menuItem">Home</a>
			</Link>
			<Link href="/jobs">
				<a className="menuItem">Jobs</a>
			</Link>
			{/* <Link href="/companies">
				<a className="menuItem">Companies</a>
			</Link> */}
			<Link href="/about">
				<a className="menuItem">About</a>
			</Link>
			<Link href="/contact">
				<a className="menuItem">Contact</a>
			</Link>
			<Link href="/profile">
			<a className="menuItem">profile</a>
			</Link>
			<Link href="/">
			<button className="loginButton" onClick={(e)=>logout(e)}>Logout</button>
			</Link>
		</nav>
		
		:<nav>
			<Link href="/">
				<a className="menuItem">Home</a>
			</Link>
			{/* <Link href="/jobs">
				<a className="menuItem">Jobs</a>
			</Link> */}
			{/* <Link href="/companies">
				<a className="menuItem">Companies</a>
			</Link> */}
			<Link href="/about">
				<a className="menuItem">About</a>
			</Link>
			<Link href="/contact">
				<a className="menuItem">Contact</a>
			</Link>
			<Link href="/signup">
			<button className="loginButton">Login</button>
			</Link></nav>}
	</Menu>
	</>
	)};

export default Header_SideBar;
