import React from 'react'
import '../styles/globals.css';
// import Layout from '../Component/Layout';
import dynamic from 'next/dynamic'
import '../styles/Home.module.css';
import 'react-toastify/dist/ReactToastify.css'; 

const Layout = dynamic(()=>import('../Component/Layout'))

function MyApp({ Component, pageProps }) {
	return (
		<>
		<Layout>
			<Component {...pageProps} />
		</Layout>
		</>
	);
}

export default MyApp;
