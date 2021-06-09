import Link from 'next/link';
import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import style from './Footer.module.css';
import {
	faFacebookSquare,
	faTwitterSquare,
	faYoutubeSquare,
	faInstagramSquare,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let Home = () => {
	return (
		<>
			<footer className="footer">
				<div className="inner-footer">
				
					<div className="quick-links">
						
						
						<a><b>Jobs</b></a>
						
						<a href=""><b>Companies</b></a>
						
						<a href=""><b>About</b></a>
						
						<a href=""><b>Contact</b></a>
						
					</div>
					<div className="social-links">
							<div className={style.icons}>
								<FontAwesomeIcon icon={faFacebookSquare} />
								<FontAwesomeIcon icon={faTwitterSquare} />
								<FontAwesomeIcon icon={faInstagramSquare} />
								<FontAwesomeIcon icon={faYoutubeSquare} />
								<FontAwesomeIcon icon={faLinkedin} />
							</div>
							
					</div>
					<div className="hori-line"></div>
					<div className="footer-heading footer-3">
						<a href="index.html">
							<img src="/logo.png" />
						</a>
					</div>
				</div>
				<div className="outer-footer">
					<b>© Copyright &copy;2021.All Rights Reserved. Privacy-Terms</b>
				</div>
			</footer>
		</>
	);
};
export default Home;
