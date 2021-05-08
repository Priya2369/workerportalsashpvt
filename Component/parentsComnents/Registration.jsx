import react, {useState} from 'react'
import styles from '../../styles/registration.module.css'
import Profile from '../propComponents/Profile'
import JobDescription from '../propComponents/JobDescription'
import Education from '../propComponents/Education'
import TermCondition from '../propComponents/TermCondition'


export default function Registration() {
const [active, setActive] = useState("FirstCard")

    return (
        <>
            <div className={styles.tab}>
                <button className={styles.tablinks} onClick={()=>setActive("FirstCard")}>Profile</button>
                <button className={styles.tablinks} onClick={()=>setActive("SecondCard")}>Education</button>
                <button className={styles.tablinks} onClick={()=>setActive("ThirdCard")}>Job Description</button>
                <button className={styles.tablinks} onClick={()=>setActive("FourthCard")}>Terms & Conditions</button>
            </div>

            <div>
                {active === "FirstCard" &&  <Profile />}
                {active === "SecondCard" &&  <Education />}
                {active === "ThirdCard" &&  <JobDescription />}
                {active === "FourthCard" &&  <TermCondition />}
           
           
            
            
            </div>


        </>
    )
}