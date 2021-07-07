import Link from 'next/link';
import Head from 'next/head';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { YouTube } from '@material-ui/icons';
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
						
						<Link href ="/jobs">
						<a><b>Jobs</b></a></Link>
						
						{/* <a href=""><b>Companies</b></a> */}
						<Link href ="/about">
						<a href=""><b>About</b></a></Link>
						<Link href ="/contact">
						<a href=""><b>Contact</b></a></Link>
						
					</div>
					<div className="social-links">
							<div className={style.icons}>
								
								<a className={style.iconh} href="https://www.facebook.com/MoSahay-104123531455625/" 
					rel="noopener noreferrer" target="_blank"><FacebookIcon/></a>
					<a className={style.iconh} href="https://twitter.com/MoSahaymedia?s=08" 
					rel="noopener noreferrer" target="_blank"><TwitterIcon/></a>
					<a className={style.iconh} href="https://instagram.com/mosahaymedia?igshid=1914qch8611su" 
					rel="noopener noreferrer" target="_blank"><InstagramIcon/></a>
					<a className={style.iconh} href="https://youtube.com/channel/UCSqG4BHuKSaBvNsb-MDy9cQ" 
					rel="noopener noreferrer" target="_blank"><YouTube/></a>
					<a className={style.iconh} href="https://www.linkedin.com/company/mosahay" 
					rel="noopener noreferrer" target="_blank"><LinkedInIcon/></a>
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
