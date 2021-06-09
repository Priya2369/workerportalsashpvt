import {
	faFacebookSquare,
	faTwitterSquare,
	faYoutubeSquare,
	faInstagramSquare,
	faLinkedin,
	
	
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './Header_Top.module.css';

const Header_Top = () => {
	return (
		<>
			<div className={style.headerTop}>
				<span className="header-email">
					<a>Email:mosahay.adm@gmail.com</a>
				</span>
				<div className={style.icons}>
					<FontAwesomeIcon icon={faFacebookSquare} />
					<FontAwesomeIcon icon={faTwitterSquare} />
					<FontAwesomeIcon icon={faInstagramSquare} />
					<FontAwesomeIcon icon={faYoutubeSquare} />
					<FontAwesomeIcon icon={faLinkedin} />
				</div>
			</div>
		</>
	);
};

export default Header_Top;
