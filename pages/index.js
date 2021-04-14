import Head from 'next/head';
import styles from '../styles/Home.module.css';
import BrowseTopCategories from '../Component/propComponents/BrowseTopCategories';
import Sdata from '../Component/propComponents/Sdata';
import { v4 as uuidv4 } from 'uuid';
import Testimonial from '../Component/propComponents/Testimonial'
import TestimonialData from '../Component/array/TestimonialData'
import FeaturedJob from '../Component/parentsComnents/FeaturedJobParents'
import Flex from '../Component/Flex'

// function nbox(val){

// }

export default function Home() {
	let topCategoryCards = Sdata.map(val => <BrowseTopCategories key={uuidv4()} image={val.image} sName={val.sName} />);

	return (
		<>
		<Flex line1="Find the"  line2="most exciting" line3="Job here"/>
			<div className="indexh1">
				<h1>Search Category</h1>
				<div className="SearchTitle">
					<input className="jobt" type="text" placeholder="Job Title or Keywords" name="search" />
					<button className="dropbtn">
						Location <i className="fas fa-chevron-down"></i>
					</button>
					{/* <div className="dropdown-content">
              <a href="#">Bangalore</a>
              <a href="#">Mumbai</a>
              <a href="#">Pune</a>
              <a href="#">Hyderabad</a>
              <a href="#">Gurgoan</a>
            </div> */}
					<button className="sbtn" type="submit">
						Search
					</button>
				</div>
			</div>
			<div className="indexh1">
				<h1>Browse Top categories</h1>
				<div className={styles.cardsContainer}>
					<div className={styles.cards}>{topCategoryCards}</div>
				</div>
			</div>
			<h1>Featured Jobs</h1>
      <div className={styles.fjob}>
		  
        <FeaturedJob/>
      </div>

	  {TestimonialData.map((val) => {
          return (
            <Testimonial image={val.image} uName={val.uName} skill={val.skill} 
			Pline1={val.Pline1} Pline2={val.Pline2} Pline3={val.Pline3}/>
          );
        })}

      

     
		</>
	); 
}
