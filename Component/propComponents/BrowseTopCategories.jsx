import Head from 'next/head';
import styles from './BrowseTopCategories.module.css';

export default function BrowseTopCategories(props) {
	return (
		<>
			<div className={styles.container}>
				<img src={props.image} alt="compass" />
				<span>{props.sName}</span>
			</div>
		</>
	);
}
