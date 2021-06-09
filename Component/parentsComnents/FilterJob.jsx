import { useState, useContext} from 'react';
import styles from '../../styles/filterJob.module.css'
import FilterListIcon from '@material-ui/icons/FilterList';
import {JobSearchContext} from '../context/JobSearchContext'
import {userContext} from '../context/UserContext'

export default function FilterJob() {
  const {getfilterValue, setFilterValue, jobCatagories, jobType, jobLocation, experience, postedWithin, salary} = useContext(userContext)
  const [show, setShow] = useState(true )
  // const [getfilterValue, setFilterValue] = useState({
  //   jobCatagories:"",
  //   jobType:"",
  //   jobLocation:"",
  //   experience:"",
  //   postedWithin:"",
  //   salary:""
  //   })
  //   let{jobCatagories, jobType, jobLocation, experience, postedWithin, salary} = getfilterValue
console.log(getfilterValue)


  return (
    <>
      <div className={styles.first}>
        <h4>
          <div onClick={() => setShow(!show)} className={styles.show}>
            <FilterListIcon fontSize='large' onClick={() => setShow(!show)} />Filter jobs
            </div>
            </h4>
       
        {show ?
          <div className={styles.second}>
            <h6 >Job Category</h6>
            <input list="jobs" placeholder="All Categories" 
            value={jobCatagories}
            onChange={(e) => setFilterValue({ ...getfilterValue, jobCatagories: e.target.value })} />
            <datalist id="jobs" >
              <option value="front-end developer"></option>
              <option value="Back-end developer"></option>
              <option value="Software developer"></option>


            </datalist><br /><br />
            <h6>Job Type</h6>
            <input type="checkbox" name="Full Time" /> Full Time<br />
            <input type="checkbox" name="Part Time" /> Part Time <br />
            <input type="checkbox" name="Remote" /> Remote <br />
            <input type="checkbox" name="Freelance" /> Freelance<br /><br />

            <h6>Job Location</h6>
            <input list="locations" placeholder="Anywhere" 
            value={jobLocation}
            onChange={(e) => setFilterValue({ ...getfilterValue, jobLocation: e.target.value })} 
            /><br />
            <datalist id="locations">
              <option value="Mumbai"></option>
              <option value="Delhi"></option>
              <option value="Banglore"></option>
            </datalist><br />
            <h6>Experience</h6>
            <input type="checkbox" name="1-2 years" /> 1-2 Years<br />
            <input type="checkbox" name="2-3 years" /> 2-3 years <br />
            <input type="checkbox" name="3-4 years" /> 3-4 years <br />
            <input type="checkbox" name="4-more.." /> 4-more..<br /><br />
            <h6>Posted Within</h6>
            <input type="checkbox" name="Any" /> Any<br />
            <input type="checkbox" name="Today" /> Today <br />
            <input type="checkbox" name="Last Week" /> Last Week <br />
            <input type="checkbox" name="Last Month" /> Last Month<br />
            <h6>Salary</h6>
            <input type="range" min="8000" max="15000" />
          </div>
          

          : null}
      </div>
    </>
  )
}