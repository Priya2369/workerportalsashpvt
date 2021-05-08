import Head from 'next/head'
import Select from 'react-select'
import styles from '../../styles/education.module.css'
import TextField from './TextField'
import state from '../array/state'


export default function Education({ setStep, userData, setUserData, formik }) {

    


    return (
        <>
            <div id="education" className={styles.tabcontent}>
                <div className={styles.main}>
                    <div className={styles.long}>
                        <select required=""  name="education" ismulti="true" className={styles.Education}
                            onBlur={formik.handleBlur}
                            
                                value={formik.values.Education}
                                onChange={formik.handleChange}>
                       
                            <option value="edc">Higest Education</option>
                            {state.map((val, i)=>{
                                return(
                                    <option key={i} value={val}>{val}</option>

                                )
                            })}
                            
                            
                        </select>
                        {formik.touched.education && formik.errors.education?<p className={styles.error}>{formik.errors.education}</p>:null}
                        {/* <label alt="Higest Education" placeholder="Higest Education"></label> */}
                    </div>
                    <div className={styles.long}>
                        <TextField types="text" placeholder={"Specialization"}
                             onBlur={formik.handleBlur}
                             name="specialization"
                                 val={formik.values.specialization}
                                 InputEvent={formik.handleChange} />
                             {formik.touched.specialization && formik.errors.specialization?<p className={styles.error}>{formik.errors.specialization}</p>:null}
                    </div>
                    <div className={styles.flexdiv}>
                        <div className={styles.short}>
                            <TextField types="date" placeholder={"Passing Year"}
                                onBlur={formik.handleBlur}
                                name=" PassingYear"
                                    val={formik.values. PassingYear}
                                    InputEvent={formik.handleChange}/>
                       
                        
                        </div>
                        <div className={styles.short, styles.leftmargin}>
                            <TextField types="text" placeholder={"Year Gap"}
                             onBlur={formik.handleBlur}
                                name="yearGap"
                                val={formik.values.yearGap}
                                InputEvent={formik.handleChange}/>
                        {formik.touched.yearGap && formik.errors.yearGap?<p className={styles.error}>{formik.errors.yearGap}</p>:null}
                        </div>
                    </div>
                    <div className="long">
                        <TextField types="text" placeholder={"College/University"}
                         onBlur={formik.handleBlur}
                            name="collegeUniversity"
                            val={formik.values.collegeUniversity}
                            InputEvent={formik.handleChange} />
                     {formik.touched.collegeUniversity && formik.errors.collegeUniversity?<p className={styles.error}>{formik.errors.collegeUniversity}</p>:null}
                    </div>
                    <div className="long">
                        <TextField types="text" placeholder={"CGPA/Percentage%"}
                         onBlur={formik.handleBlur}
                            name="CGPAPercentage"
                            val={formik.values.CGPAPercentage}
                            InputEvent={formik.handleChange} />
                     {formik.touched.CGPAPercentage && formik.errors.CGPAPercentage?<p className={styles.error}>{formik.errors.CGPAPercentage}</p>:null}
                    </div>
                    {/* <div className={styles.short, styles.leftmargin}>
            <TextField  types="text"  placeholder={"CGPA/Percentage%"}/>
            </div> */}
                    <div className={styles.abs}>
                        <div >
                            <button type="button" onClick={() => setStep(1)} className={styles.btn} >Back</button>
                        </div>
                        <div>
                            <button type="button" onClick={() => setStep(3)} className={styles.btn} >Next</button>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}