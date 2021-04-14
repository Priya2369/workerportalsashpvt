import navigation from './Header_Navigation.module.css';
import Link from 'next/link';

const Header_Navigation = () => {
	return (
		<nav className={navigation.navigation}>
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
			<Link href="/profile"><a>profile</a></Link>
		</nav>
	);
};

export default Header_Navigation;
