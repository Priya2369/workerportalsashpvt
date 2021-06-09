import Link from 'next/link'
import { useState, useEffect, createContext, useReducer,useContext } from "react";
import style from './Header_Bottom.module.css';
import Header_SideBar from './Header_SideBar';
import navigation from './Header_Navigation.module.css';
import { logout } from '../config/FirebaseToken';
import Cookies from 'universal-cookie';
import {userContext} from '../context/UserContext'
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import initFirebase from '../config/firebaseConfig'
import firebase from "firebase/app";
import { useRouter } from 'next/router'
import { API_CONSTANTS } from "../config/apiConstant";
import { getCookies } from "../config/FirebaseToken";
import axios from "axios";



// import StateManager from 'react-select';

// import {logout} from '../config/FirebaseToken'

const Header_Bottom = () => {
	

	initFirebase(); 
	const router = useRouter();
	const cookies = new Cookies();
	
	const {state, dispatch, setNaShow, navShow,  setSingleUser, singleUser} = useContext(userContext)
// function for user logOut.....................
	 function logout(e){
		e.preventDefault();
		
		
		firebase.auth().signOut()
	.then(() => {
	  console.log('Signed Out');
	  cookies.remove('access_token')
	  if(!cookies.get("acess_token")){
	//    dispatch({type:'USER', payload: false})
	 setNaShow(false)
	  router.push('/');}

	
	})
	.catch(e=>{
	 console.error('Sign Out Error', e);
	});
	
	  }


	// function for user user profile page ...............
	async function profileEdit(e){
		e.preventDefault();
		try{
			const reqUrl =
				  API_CONSTANTS.baseUrl + API_CONSTANTS.enrollment.SELF_PROFILE;
				  const res = await axios.get(reqUrl,{
					headers: {
					  // authorization:cookies.get('access_token') ,
					  authorization: getCookies(),
					},
				  });
				  console.log(res.data.data)
				  setSingleUser(res.data.data)
				  console.log("single user data save in state")
				  
				  router.push('/profile');
				 
				  
				  
				}catch (error){
				  console.log(error.message)
				}
	}

	// useEffect(()=>{
	// 	const userFormLocalStorage = localStorage.getItem("singleUser");
	// 	setSingleUser(JSON.parse(JSON.stringify(userFormLocalStorage)))
	// 	},[singleUser])
		
	// 	useEffect(()=>{
	// 	localStorage.setItem("singleUser", JSON.stringify(singleUser))
	// 	},[singleUser]);

	// useEffect(()=>{
	// 	localStorage.removeItem('data');
	// 	localStorage.removeItem('singleUser');
	// })


	

useEffect(()=>{

const data = localStorage.getItem('data')

if(data){ 
  setSingleUser(JSON.parse(JSON.stringify(data)))
 }

},[singleUser])

// SetItem in localStorage for single user

useEffect(()=>{
console.log(singleUser)
  localStorage.setItem('data',JSON.stringify(singleUser))

},[])
		
	


	
	return (
		<>
		

		{navShow && <div className={style.headerBottom}>
			<span><img src='/logo.png' alt="Logo" /></span>
			{/* <Header_Navigation></Header_Navigation> */}
			<nav className={navigation.navigation}>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/jobs">
				<a>Jobs</a>
			</Link>
			{/* <Link href="/companies">
				<a>Companies</a>
			</Link> */}
			<Link href="/about">
				<a>About</a>
			</Link>
			<Link href="/contact">
				<a>Contact</a>
			</Link>
			{/* <Link href="/profile"> */}
				<a onClick={(e)=>profileEdit(e)}>Profile</a>
				{/* </Link> */}
		</nav>
			{/* <Link href="/signup"><a><button className={style.loginButton}> Login</button></a></Link> */}
			<div className={style.notification}><NotificationsActiveOutlinedIcon fontSize='small'/></div>
		         <button onClick={(e)=>logout(e)}>Logout</button>
			<div className={style.sideBar}>
				<Header_SideBar />
			</div>
		</div>}
		{!navShow && <div className={style.headerBottom}>
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
