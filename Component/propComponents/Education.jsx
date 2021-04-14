import Head from 'next/head'
import styles from '../../styles/education.module.css'
import TextField from './TextField'


export default function Education({setStep, userData, setUserData}) {

    const { education,
        specialization,
        PassingYear,
        yearGap,
        collegeUniversity,
        CGPAPercentage,
        } = userData;


  return (
    <>
    <div id="education" className={styles.tabcontent}>
        <div className={styles.main}>
            <div className={styles.long}>
                <select required="" name="education" className={styles.Education}
                value={education}
                onChange={(e) => setUserData({ ...userData, education: e.target.value })}>
                    {/* <option selected disabled value="Highest Education"></option> */}
                    <option value="edc">Higest EducationEducation</option>

                    <option value="PG">PG</option>
                    <option value="UG">UG</option>
                    <option value="12th">12th</option>
                    <option value="ITI">ITI</option>
                    <option value="Diploma">Diploma</option>
                    <option value="10th">10th</option>
                    <option value="Under 10th">Under 10th</option>
                </select>
                {/* <label alt="Higest Education" placeholder="Higest Education"></label> */}
            </div>
             <div className={styles.long}>
            <TextField  types="text"  placeholder={"Specialization"} 
            val={specialization}
            InputEvent={(e)=>setUserData({...userData, specialization:e.target.value})}/>
            </div>
            <div className={styles.flexdiv}>
                <div className={styles.short}>
                <TextField  types="date"  placeholder={"Passing Year"}
                val={PassingYear}
                InputEvent={(e)=>setUserData({...userData, PassingYear:e.target.value})}/>
                </div>
                <div className={styles.short, styles.leftmargin}>
                <TextField  types="text"  placeholder={"Year Gap"}
                val={yearGap}
                InputEvent={(e)=>setUserData({...userData, yearGap:e.target.value})}/>
                </div>
            </div>
            <div class="long">
            <TextField  types="text"  placeholder={"College/University"} 
            val={collegeUniversity}
            InputEvent={(e)=>setUserData({...userData, collegeUniversity:e.target.value})}/>
            </div>
            <div class="long">
            <TextField  types="text"  placeholder={"CGPA/Percentage%"}
            val={CGPAPercentage}
            InputEvent={(e)=>setUserData({...userData, CGPAPercentage:e.target.value})}/>
            </div>
            {/* <div className={styles.short, styles.leftmargin}>
            <TextField  types="text"  placeholder={"CGPA/Percentage%"}/>
            </div> */}
            <div className={styles.abs}>
                <button type="button" onClick={() => setStep(3)} className={styles.btn} >Next</button>
                <button type="button" onClick={() => setStep(1)} className={styles.btn} >Back</button>
            </div>
        </div>
    </div>


    </>
  )
}