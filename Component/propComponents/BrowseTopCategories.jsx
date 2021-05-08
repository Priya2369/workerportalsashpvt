import Head from 'next/head';
import { useState, useContext} from 'react';
import styles from './BrowseTopCategories.module.css';
import FeaturedJob from './FeaturedJob';
import {JobSearchContext} from '../context/JobSearchContext'

export default function BrowseTopCategories(props) {
	const {catagories, setCatagories} = useContext(JobSearchContext)
	// const [catagories ,setCatagories]=useState();
    const click =()=>{
		setCatagories(props.sName)
	};
	
	return (
		<>
			<div className={styles.container}  onClick={click}>
				<img src={props.image} alt="compass" />
				<span>{props.sName}</span>
                
			</div>
			

		</>
		
    )
}

                                                                                                             