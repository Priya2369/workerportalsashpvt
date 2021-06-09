import FilterJob from '../Component/parentsComnents/FilterJob'
import { useState, useContext} from 'react';
import FeaturedJob from '../Component/parentsComnents/FeaturedJobJobs'
import styles from '../styles/job.module.css'
import Flex from '../Component/Flex'
import { JobSearchContext } from '../Component/context/JobSearchContext';

const Jobs = () =>{
    const [getfilterValue, setFilterValue] = useState({
        jobCatagories:"",
        jobType:"",
        jobLocation:"",
        experience:"",
        postedWithin:"",
        salary:""
        })
        let{jobCatagories, jobType, jobLocation, experience, postedWithin, salary} = getfilterValue
    return(
        <>
        {/* <div> 
        <Flex line1="Get your job"/>
        </div> */}

        <div className={styles.jobs}>
            
        <div className={styles.filter}><FilterJob/></div>
        <div><FeaturedJob/></div>
           
        
    
        </div>
        </>
    )
}

export default Jobs;