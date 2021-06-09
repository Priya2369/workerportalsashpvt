import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCoffee } from '@fortawesome/free-solid-svg-icons';
import {
	faFacebookSquare,
	faTwitterSquare,
	faYoutubeSquare,
	faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';

import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import Header_Bottom from './Header_Components/Header_Bottom';
import Header_Top from './Header_Components/Header_Top';

export default function Home() {
	return (
		<>
			<Header_Top></Header_Top>
			<Header_Bottom></Header_Bottom>
			{/* <div className="header">
				<div className="header-logo">
					<a>Email:mosahay.adm@gmail.com</a>
				</div>
				<div className="float-right-header">
					<FontAwesomeIcon icon={faFacebookSquare} />
					<FontAwesomeIcon icon={faTwitterSquare} />
					<FontAwesomeIcon icon={faInstagramSquare} />
					<FontAwesomeIcon icon={faYoutubeSquare} />
				</div>
			</div> */}
			{/* <div className="navbar">
				<div className="navbar-logo">
					<a href="index.html">
						<img src="logo-g.png" />
					</a>
				</div>
				<div className="float-navbar">
					<Link href="/">
						<a>Home</a>
					</Link>
					<Link href="/jobs">
						<a>Jobs</a>
					</Link>
					<Link href="/companies">
						<a>Companies</a>
					</Link>
					<Link href="/about">
						<a>About</a>
					</Link>
					<Link href="/contact">
						<a>Contact</a>
					</Link>
					<Link href="/login">
						<a>Login</a>
					</Link>
				</div> */}
			{/* </div> */}
		{/* </>
	); */}
            
                {/* <div className="float-right-header">
                   <Link  href="#"><a><FaFacebook /></a></Link> 
                   <Link href="#"><a>< FaInstagram/></a></Link>
                   <Link href="#"><a><FaYoutube/></a></Link>
                   <Link href="#"><a>< FaLinkedin/></a></Link>
                </div>
             */}
            {/* <div className="navbar">
                <div className="navbar-logo">
                    <a href="index.html"><img src="logo-g.png" /></a>
                </div>
                <div className="float-navbar">
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/jobs"><a>Jobs</a></Link>
                    <Link href="/companies"><a>Companies</a></Link>
                    <Link href="/about"><a>About</a></Link>
                    <Link href="/contact"><a>Contact</a></Link>
                    <Link href="/login"><a>Login</a></Link>
                    <Link href="/profile"><a>profile</a></Link>
                </div>
            </div> */}
    </>
  )
}
