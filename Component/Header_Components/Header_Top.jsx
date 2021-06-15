import {
	faFacebookSquare,
	faTwitterSquare,
	faYoutubeSquare,
	faInstagramSquare,
	faLinkedin,
	
	
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './Header_Top.module.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { YouTube } from '@material-ui/icons';

const Header_Top = () => {
	return (
		<>
			<div className={style.headerTop}>
				<span className="header-email">
					<a>Email:mosahay.adm@gmail.com</a>
				</span>
				<div className={style.icons}>
					{/* <FontAwesomeIcon icon={faFacebookSquare} />
					<FontAwesomeIcon icon={faTwitterSquare} />
					<FontAwesomeIcon icon={faInstagramSquare} />
					<FontAwesomeIcon icon={faYoutubeSquare} />
					<FontAwesomeIcon icon={faLinkedin} /> */}
					<FacebookIcon/>
					<TwitterIcon/>
					<InstagramIcon/>
					<YouTube/>
					<LinkedInIcon/>

				</div>
			</div>
		</>
	);
};

export default Header_Top;
