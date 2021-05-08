import Head from 'next/head';
import { useState, useEffect, createContext, useReducer } from "react";
import styles from '../styles/Home.module.css';
import Header from './Header';
import Footer from './Footer';
import Flex from './Flex';
import {userContext} from '../Component/context/UserContext'
import {initialState, reducer} from '../Component/reducer/UseReducer'


const Layout = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<>
		<userContext.Provider value = {{state, dispatch}}>
			<Header />
			
			
			{/* <Flex/> */}
			{children}
			</userContext.Provider>
			

			
			
		</>
	);
};
export default Layout;
