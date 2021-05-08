import Head from 'next/head'
import React, { useContext,createContext,useState } from 'react';
import styles from '../../styles/profile.module.css'
import TextField from './TextField'
import stat from '../array/pincodeCityDistrictState'
import { ErrorSharp } from '@material-ui/icons';
import validation from '../validation/Validation'
import { validate } from 'uuid';


export default function Profile({ firstNext, formik}) {

    // let { firstName,
    //     lastName,
    //     date,
    //     phoneNo,
    //     gender,
    //     age,
    //     email,
    //     address,
    //     pincode,
    //     city,
    //     state,
    //     country, } = formik;
       

        

    //    const code = address.split(',')[0].trim()
    //    const citi = address.split(',')[1]
    //    const dist = address.split(',')[2]
    //    const sta = address.split(',')[3]

    //    const firstNext = (e) =>{
    //     setError(validation(userData));
    //     setStep(2)
    //    }



    return (
        <>

            <div className={styles.tabcontent}>
                <div className={styles.main}> 
                   
                    <div className={styles.flexdiv}>
                        <div className={styles.short}>
                            <TextField types="text" placeholder={"First Name"}
                            required
                            onBlur={formik.handleBlur}
                            name="firstName"
                                val={formik.values.firstName}
                                InputEvent={formik.handleChange}/>
                                {formik.touched.firstName && formik.errors.firstName?<p className={styles.error}>{formik.errors.firstName}</p>:null}
                        </div>
                        <div className={styles.short, styles.leftmargin}>
                            <TextField types="text" placeholder={"Last Name"}
                            onBlur={formik.handleBlur}
                            name="lastName"
                                val={formik.values.lastName}
                                InputEvent={formik.handleChange} />
                                 {formik.touched.lastName && formik.errors.lastName?<p className={styles.error}>{formik.errors.lastName}</p>:null}
                        </div>
                    </div>
                    <div className={styles.flexdiv}>
                        <div className={styles.short}>
                            <TextField types="date"
                              name="date"
                                val={formik.values.date}
                                InputEvent={formik.handleChange} placeholder={"Date of birth"} />
                        </div>
                        <div className={styles.short, styles.leftmargin}>
                            <TextField types="number" placeholder={"Phone no."} 
                             onBlur={formik.handleBlur}
                            name="phoneNo"
                            val={formik.values.phoneNo}
                                InputEvent={formik.handleChange} />
                            {formik.touched.phoneNo && formik.errors.phoneNo?<p className={styles.error}>{formik.errors.phoneNo}</p>:null}
                        </div>
                    </div>
                    <div className={styles.flexdiv}>
                        <div className={styles.short}>
                            <select className={styles.gen} name="gender" onBlur={formik.handleBlur} value={formik.values.gender}
                                onChange={formik.handleChange}>
                                <option value="gender">Gender</option>
                                <option value="female">female</option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                                </select>
                        {formik.touched.gender && formik.errors.gender?<p className={styles.error}>{formik.errors.gender}</p>:null}
                        </div>
                        <div className={styles.short, styles.leftmargin}>
                            <TextField types="number" placeholder={"Age"}
                            onBlur={formik.handleBlur}
                            name="age"
                                val={formik.values.age}
                                InputEvent={formik.handleChange} />
                                {formik.touched.age && formik.errors.age?<p className={styles.error}>{formik.errors.age}</p>:null}
                        </div>
                    </div>

                    <div className={styles.long}>
                        <TextField types="text" placeholder={"E-mail"}
                        name="email"
                            val={formik.values.email}
                            onBlur={formik.handleBlur}
                            InputEvent={formik.handleChange} />
                            {formik.touched.email && formik.errors.email?<p className={styles.error}>{formik.errors.email}</p>:null}
                    </div>
                    <div className={styles.mailp}>
                        <div className={styles.mail}>
                            <a href="#">Creat New E-mail</a><br />
                        </div>
                    </div>
                               
                    <div className={styles.long}>
                        <input list="jobs" placeholder="address"
                        onBlur={formik.handleBlur}
                        name="address"
                         value={formik.values.address}
                        onChange={formik.handleChange} 
                        // className={styles.Education}
                        className={styles.long}/>
                        <datalist id="jobs" >
                             {stat.map((val, i)=>{
                                return <option key={i} value={val}></option>

                                })}
                            
                          </datalist>
                          {formik.touched.address && formik.errors.address?<p className={styles.error}>{formik.errors.address}</p>:null}
                        
                    </div>

                  
                    <div className={styles.abs}>
                        <button type="button" onClick={() => firstNext()} className={styles.btn} >Next</button>

                    </div>
                </div>
            </div>


        </>
    )
}