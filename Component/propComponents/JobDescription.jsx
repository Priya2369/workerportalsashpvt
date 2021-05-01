import Head from 'next/head'
import styles from '../../styles/jobDescription.module.css'
import TextField from './TextField'
import Select from 'react-select'
import options from '../array/state'
import state from '../array/option'
import { useState } from 'react'

export default function JobDescription({setStep,userData, setUserData}) {
    const [data, setData] = useState([])
    let { fullName,
        interestArea,
        prefferedLocation,
        sector,
        skill,
        experience,
        } = userData;

        function onchange(value){
        prefferedLocation = value
            console.log(prefferedLocation);
        }
         
    return (
    <>
     <div id="jobDescription"  className={styles.tabcontent}>
        <div className={styles.main}>
            <div className={styles.long}>
            <TextField  types="text"  placeholder={"Interest Area"}
            val={interestArea}
            InputEvent={(e)=>setUserData({...userData, interestArea:e.target.value})}/>
            </div>
            
            <div className={styles.long}>
            <Select isMulti={true} options={state} placeholder="preffered Location" 
              onChange={onchange}></Select>
             {/* <TextField  types="text"  placeholder={"Preffered Location"}
             val={prefferedLocation}
             InputEvent={(e)=>setUserData({...userData, prefferedLocation:e.target.value})}/> */}


            </div>
            <div className={styles.flexdiv}>
                <div className={styles.short}>
                <TextField  types="text"  placeholder={"Sector"}
                val={sector}
                InputEvent={(e)=>setUserData({...userData, sector:e.target.value})}/>
                </div>
                <div className={styles.short, styles.leftmargin}>
                <TextField  types="text"  placeholder={"Skill"}
                val={skill}
                InputEvent={(e)=>setUserData({...userData, skill:e.target.value})}/>
                </div>
            </div>
            <div className={styles.flexdiv}>
                <div className={styles.short1}>
                <TextField  types="text"  placeholder={"Experience"}
                val={experience}
                InputEvent={(e)=>setUserData({...userData, experience:e.target.value})}/>
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