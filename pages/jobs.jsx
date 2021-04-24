import FilterJob from '../Component/parentsComnents/FilterJob'
import FeaturedJob from '../Component/parentsComnents/FeaturedJobJobs'
import styles from '../styles/job.module.css'
import Flex from '../Component/Flex'

const Jobs = () =>{
    return(
        <>
        <div> 
        <Flex line1="Get your job"/>
        </div>

        <div className={styles.jobs}>
        <FilterJob/>
        <FeaturedJob/>
    
        </div>
        </>
    )
}

export default Jobs;