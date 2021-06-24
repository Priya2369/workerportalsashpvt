import React from 'react'
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import '../styles/globals.css';
// import Layout from '../Component/Layout';
import dynamic from 'next/dynamic'
import '../styles/Home.module.css';
import 'react-toastify/dist/ReactToastify.css'; 

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());  
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
