import Head from 'next/head';
import { useState, useEffect, createContext, useReducer } from "react";
import styles from '../styles/Home.module.css';
import Header from './Header';
import Footer from './Footer';
import Flex from './Flex';
import {userContext} from '../Component/context/UserContext'
import {initialState, reducer} from '../Component/reducer/UseReducer'

// const userFormLocalStorage = JSON.parse(window.localStorage.getItem("singleUser"));

const Layout = ({ children }) => {
	console.log("layout.....................")
	const [navShow, setNaShow] = useState()
	const [singleJob, setSingleJob] = useState([{}])
	const [state, dispatch] = useReducer(reducer, initialState);
	const [searchLocation, setSearchLocation] = useState("")
  const [searchJob, setSearchJob] = useState("")

//   signup state...................
const [detail, setDetail] = useState({
    phoneNo: "",
  });





	
	const [catagories ,setCatagories]=useState();
	const [location, setLocation] = useState("");
  const[jobType, setJobType] = useState("");
  const [getfilterValue, setFilterValue] = useState({
	jobCatagories:"",
	jobTypes:"",
	jobLocation:"",
	experience:"",
	postedWithin:"",
	salary:""
	})
	let{jobCatagories, jobTypes, jobLocation, experience, postedWithin, salary} = getfilterValue
	//   get single user value for profile update 
const [singleUser, setSingleUser] = useState()
console.log(singleUser)

// useEffect(()=>{
// const userFormLocalStorage = window.localStorage.getItem("singleUser");
// setSingleUser(JSON.parse(userFormLocalStorage))
// },[singleUser])

// useEffect(()=>{
// window.localStorage.setItem('singleUser', JSON.stringify(singleUser))
// },[singleUser]);

	return (
		<>
		<userContext.Provider value = {{state, dispatch, navShow, setNaShow,singleJob, setSingleJob,
			setLocation, setJobType, location, jobType,catagories, setCatagories,
			 searchLocation, setSearchLocation,searchJob, setSearchJob,
			 jobCatagories, jobTypes, jobLocation, experience, postedWithin, salary, setFilterValue, getfilterValue,
			 detail, setDetail, singleUser, setSingleUser}}>
			<Header />
			
			
			{/* <Flex/> */}
			{children}
			{/* <Footer/> */}
			</userContext.Provider>
			

			
			
	</>
	);
};
export default Layout;
