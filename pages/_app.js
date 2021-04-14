import '../styles/globals.css';
import Layout from '../Component/Layout';
import '../styles/Home.module.css';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
