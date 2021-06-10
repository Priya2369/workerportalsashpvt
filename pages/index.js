import Head from 'next/head';
import { useState } from "react";
import styles from '../styles/Home.module.css';
import BrowseTopCategories from '../Component/propComponents/BrowseTopCategories';
import Sdata from '../Component/propComponents/Sdata';
import { v4 as uuidv4 } from 'uuid';
import Search from '../Component/parentsComnents/Search'
import Open from '../Component/parentsComnents/Open'
import TestimonialSlide from '../Component/parentsComnents/TestimonialSlide'
import FeaturedJob from '../Component/parentsComnents/FeaturedJobParents'
import Flex from '../Component/Flex'
import Footer from '../Component/Footer'
import { JobSearchContext } from '../Component/context/JobSearchContext';

// function nbox(val){

// }

export default function Home() {
// 	const [searchLocation, setSearchLocation] = useState("")
//   const [searchJob, setSearchJob] = useState("")
	
// 	const [catagories ,setCatagories]=useState();
// 	const [location, setLocation] = useState("");
//   const[jobType, setJobType] = useState("");
	let topCategoryCards = Sdata.map(val => <BrowseTopCategories key={uuidv4()} image={val.image} sName={val.sName} />);

	return (
		<>
		
		
		
		
		{/* <JobSearchContext.Provider value={{setLocation, setJobType, location, jobType,catagories, setCatagories, searchLocation, setSearchLocation,searchJob, setSearchJob}}> */}
		<Flex />
		{/* <Search/> */}
			<div className="indexh1">
				{/* <h1>Browse Top categories</h1> */}
				{/* <div className={styles.cardsContainer}>
					<div className={styles.cards}>{topCategoryCards}</div>
				</div> */}
			</div>
			{/* <h1>Featured Jobs</h1>
      <div className={styles.fjob}>
		  <FeaturedJob/>
	  
        </div> */}
		
		{/* </JobSearchContext.Provider> */}
      <Open/>
	  <div><TestimonialSlide /></div>
	  
<Footer/>
	  </>
	); 
}
