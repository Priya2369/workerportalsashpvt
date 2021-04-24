import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from './Header';
import Footer from './Footer';
import Flex from './Flex';

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			{/* <Flex/> */}
			{children}
			<Footer />
		</>
	);
};
export default Layout;
