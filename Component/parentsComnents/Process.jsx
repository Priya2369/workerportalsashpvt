import Head from 'next/head'
import { useState } from 'react'
import styles from '../../styles/process.module.css'
import Jobseekers from '../propComponents/Jobseeker'
import Employer from '../propComponents/Employer'
export default function Process () {
     const[JobSeeker,setJobSeeker]=useState(true)
     const[employer,setEmployer]=useState(false)
     function JobSeekers(){
         setJobSeeker(true)
         setEmployer(false)
     };
     function employers(){
        setJobSeeker(false)
        setEmployer(true)
    }


    return(
        <>
            <div className={styles.mane}>
                  <h1>How it Works</h1>
                  <div className={styles.btnd}>
                      <button  onClick={()=>JobSeekers()} className={styles.jobs}><a> For Jobseekers</a></button>
                      <button onClick={()=>employers()} className={styles.empn}><a>For Employers</a></button>
                      {JobSeeker?<Jobseekers/>:null}
                      {employer?<Employer/>:null}
                  </div>
                  
            </div>
        </>
    )
}