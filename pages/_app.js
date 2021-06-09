import '../styles/globals.css';
import Layout from '../Component/Layout';
import '../styles/Home.module.css';
import 'react-toastify/dist/ReactToastify.css'; 

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
