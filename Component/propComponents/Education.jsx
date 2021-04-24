import Head from 'next/head'
import styles from '../../styles/education.module.css'
import TextField from './TextField'


export default function Education() {
  return (
    <>
    <div id="education" className={styles.tabcontent}>
        <div className={styles.main}>
            <div className={styles.long}>
                <select required="" name="education" className={styles.Education}>
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
            <TextField  types="text"  placeholder={"Specialization"}/>
            </div>
            <div className={styles.flexdiv}>
                <div className={styles.short}>
                <TextField  types="date"  placeholder={"Passing Year"}/>
                </div>
                <div className={styles.short, styles.leftmargin}>
                <TextField  types="text"  placeholder={"Year Gap"}/>
                </div>
            </div>
            <div class="long">
            <TextField  types="text"  placeholder={"College/University"}/>
            </div>
            <div class="long">
            <TextField  types="text"  placeholder={"CGPA/Percentage%"}/>
            </div>
            {/* <div className={styles.short, styles.leftmargin}>
            <TextField  types="text"  placeholder={"CGPA/Percentage%"}/>
            </div> */}
            <div className={styles.abs}>
                <button type="submit" className={styles.btn}>Next</button>
            </div>
        </div>
    </div>


    </>
  )
}