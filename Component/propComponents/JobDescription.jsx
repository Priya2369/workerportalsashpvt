import Head from 'next/head'
import styles from '../../styles/jobDescription.module.css'
import TextField from './TextField'


export default function JobDescription() {
    return (
    <>
     <div id="jobDescription"  className={styles.tabcontent}>
        <div className={styles.main}>
            <div className={styles.long}>
            <TextField  types="text"  placeholder={"Interest Area"}/>
            </div>
            <div className={styles.long}>
            <TextField  types="text"  placeholder={"Preffered Location"}/>
            </div>
            <div className={styles.flexdiv}>
                <div className={styles.short}>
                <TextField  types="text"  placeholder={"Sector"}/>
                </div>
                <div className={styles.short, styles.leftmargin}>
                <TextField  types="text"  placeholder={"Skill"}/>
                </div>
            </div>
            <div className={styles.flexdiv}>
                <div className={styles.short1}>
                <TextField  types="text"  placeholder={"Experience"}/>
                </div>
            </div>
            {/* <div className={styles.short, styles.leftmargin}>
                <TextField  types="text"  placeholder={"Skill"}/>
                </div>
            </div> */}
            <div className={styles.abs}>
                <button type="submit" className={styles.btn}>Next</button>
            </div>
        </div>
    </div>
    </>
  )
}