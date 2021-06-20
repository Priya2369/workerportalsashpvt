
import style from './Header_Top.module.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { YouTube } from '@material-ui/icons';
import Link from "next/link";

const Header_Top = () => {
	return (
		<>
			<div className={style.headerTop}>
				<span className="header-email">
					<a>Email:mosahay.adm@gmail.com</a>
				</span>
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
		</>
	);
};

export default Header_Top;
