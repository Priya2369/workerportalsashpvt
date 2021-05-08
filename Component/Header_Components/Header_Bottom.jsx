import Link from 'next/link'
import { useState, useEffect, createContext, useReducer,useContext } from "react";
import Header_Navigation from './Header_Navigation';
import style from './Header_Bottom.module.css';
import Header_SideBar from './Header_SideBar';
import navigation from './Header_Navigation.module.css';
import { logout } from '../config/FirebaseToken';
import Cookies from 'universal-cookie';
import {userContext} from '../context/UserContext'
import initFirebase from '../config/firebaseConfig'
import firebase from "firebase/app";
import { useRouter } from 'next/router'


// import StateManager from 'react-select';

// import {logout} from '../config/FirebaseToken'

const Header_Bottom = () => {
	initFirebase(); 
	const router = useRouter();
	const cookies = new Cookies();
	const [navShow, setNaShow] = useState()
	const {state, dispatch} = useContext(userContext)

	 function logout(){
		
		const cookies = new Cookies();
		
		firebase.auth().signOut()
	.then(() => {
	  console.log('Signed Out');
	  cookies.remove('access_token')
	   dispatch({type:'USER', payload: false})
	  router.push('/');

	
	})
	.catch(e=>{
	 console.error('Sign Out Error', e);
	});
	
	  }
	


	
	return (
		<>
		

		{state?<div className={style.headerBottom}>
			<span><img src='/logo.png' alt="Logo" /></span>
			{/* <Header_Navigation></Header_Navigation> */}
			<nav className={navigation.navigation}>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/jobs">
				<a>Jobs</a>
			</Link>
			<Link href="/companies">
				<a>Companies</a>
			</Link>
			<Link href="/about">
				<a>About</a>
			</Link>
			<Link href="/contact">
				<a>Contact</a>
			</Link>
			<Link href="/profile"><a>profile</a></Link>
		</nav>
			{/* <Link href="/signup"><a><button className={style.loginButton}> Login</button></a></Link> */}
		         <button onClick={logout}>Logout</button>
			<div className={style.sideBar}>
				<Header_SideBar />
			</div>
		</div>:<div className={style.headerBottom}>
			<span><img src='/logo.png' alt="Logo" /></span>
			{/* <Header_Navigation></Header_Navigation> */}
			<nav className={navigation.navigation}>
			<Link href="/">
				<a>Home</a>
			</Link>
			{/* <Link href="/jobs">
				<a>Jobs</a>
			</Link> */}
			{/* <Link href="/companies">
				<a>Companies</a>
			</Link> */}
			<Link href="/about">
				<a>About</a>
			</Link>
			<Link href="/contact">
				<a>Contact</a>
			</Link>
			{/* <Link href="/profile"><a>profile</a></Link> */}
		</nav>
			<Link href="/signup"><a><button className={style.loginButton}> Login</button></a></Link>
		         {/* <button onClick={logout}>Logout</button> */}
			<div className={style.sideBar}>
				<Header_SideBar />
			</div>
		</div>}
		
		</>
	);
};

export default Header_Bottom;
