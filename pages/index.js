import Head from 'next/head';
import { useState } from "react";
import styles from '../styles/Home.module.css';
import BrowseTopCategories from '../Component/propComponents/BrowseTopCategories';
import Sdata from '../Component/propComponents/Sdata';
import { v4 as uuidv4 } from 'uuid';
import Search from '../Component/parentsComnents/Search'

import TestimonialSlide from '../Component/parentsComnents/TestimonialSlide'
import FeaturedJob from '../Component/parentsComnents/FeaturedJobParents'
import Flex from '../Component/Flex'
import {jobSearchContext} from '../Component/parentsComnents/Search'
import { JobSearchContext } from '../Component/context/JobSearchContext';

// function nbox(val){

// }

export default function Home() {
	const [searchLocation, setSearchLocation] = useState("")
  const [searchJob, setSearchJob] = useState("")
	
	const [catagories ,setCatagories]=useState();
	const [location, setLocation] = useState("");
  const[jobType, setJobType] = useState("");
	let topCategoryCards = Sdata.map(val => <BrowseTopCategories key={uuidv4()} image={val.image} sName={val.sName} />);

	return (
		<>
		
		<Flex line1="Find the"  line2="most exciting" line3="Job here"/>
		{/* <JobSearchContext.Provider value={{setLocation, setJobType, location, jobType}}><Search/></JobSearchContext.Provider> */}
		<JobSearchContext.Provider value={{setLocation, setJobType, location, jobType,catagories, setCatagories, searchLocation, setSearchLocation,searchJob, setSearchJob}}>
		<Search/>
			<div className="indexh1">
				<h1>Browse Top categories</h1>
				<div className={styles.cardsContainer}>
					<div className={styles.cards}>{topCategoryCards}</div>
				</div>
			</div>
			<h1>Featured Jobs</h1>
      <div className={styles.fjob}>
		  <FeaturedJob/>
	  {/* <JobSearchContext.Provider value={{setLocation, setJobType, location, jobType}}><FeaturedJob/></JobSearchContext.Provider> */}
        </div>
		</JobSearchContext.Provider>

	  <div><TestimonialSlide /></div>
	  

	  </>
	); 
}
