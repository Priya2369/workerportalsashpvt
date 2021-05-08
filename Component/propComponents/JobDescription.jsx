import Head from 'next/head'
import styles from '../../styles/jobDescription.module.css'
import TextField from './TextField'
import Select from 'react-select'
import options from '../array/state'
import state from '../array/option'
import { useState } from 'react'

export default function JobDescription({setStep,userData, setUserData, prefferedLocation, setPrefferedLocation, formik}) {
    const [data, setData] = useState([])
   
    // let { fullName,
    //     interestArea,
        
    //     sector,
    //     skill,
    //     experience,
    //     } = userData;


        function onchange(value){
            setPrefferedLocation( value)
            
                console.log(prefferedLocation);
            }
         
    return (
    <>
     <div id="jobDescription"  className={styles.tabcontent}>
        <div className={styles.main}>
            <div className={styles.long}>
            <TextField  types="text"  placeholder={"Interest Area"}
            onBlur={formik.handleBlur}
           name="interestArea"
           val={formik.values.interestArea}
           InputEvent={formik.handleChange} />
           {formik.touched.interestArea && formik.errors.interestArea?<p className={styles.error}>{formik.errors.interestArea}</p>:null}
            </div>
            
            {/* <div className={styles.long}>
             <Select isMulti={true} options={state}  placeholder="preffered Location" 
             onBlur={formik.handleBlur}
             name="prefferedLocation"
             value={formik.values.prefferedLocation}
             onChange={formik.handleChange}
             ></Select>
             {formik.touched.prefferedLocation && formik.errors.prefferedLocation?<p className={styles.error}>{formik.errors.prefferedLocation}</p>:null}
             

            </div> */}
            <div className={styles.flexdiv}>
                <div className={styles.short}>
                <TextField  types="text"  placeholder={"Sector"}
                onBlur={formik.handleBlur}
                name="sector"
                val={formik.values.sector}
                InputEvent={formik.handleChange}/>
                {formik.touched.sector && formik.errors.sector?<p className={styles.error}>{formik.errors.sector}</p>:null}
                </div>
                <div className={styles.short, styles.leftmargin}>
                <TextField  types="text"  placeholder={"Skill"}
                onBlur={formik.handleBlur}
                name="skill"
                val={formik.values.skill}
                InputEvent={formik.handleChange}/>
                {formik.touched.skill && formik.errors.skill?<p className={styles.error}>{formik.errors.skill}</p>:null}
                </div>
            </div>
            <div className={styles.flexdiv}>
                <div className={styles.short1}>
                <TextField  types="text"  placeholder={"Experience"}
                onBlur={formik.handleBlur}
                name="experience"
                val={formik.values.experience}
                InputEvent={formik.handleChange}/>
                {formik.touched.experience && formik.errors.experience?<p className={styles.error}>{formik.errors.experience}</p>:null}
                </div>
            </div>
            {/* <div className={styles.short, styles.leftmargin}>
                <TextField  types="text"  placeholder={"Skill"}/>
                </div>
            </div> */}
            <div className={styles.abs}>
            
                <button type="submit" onClick={() => setStep(4)} className={styles.btn}>Next</button>
                <button type="button" onClick={() => setStep(2)} className={styles.btn} >Back</button>
            </div>
           
        </div>
    </div>
    
    </>
  )
}