import Head from 'next/head'
import styles from '../../styles/profile.module.css'
import TextField from './TextField'


export default function Profile() {
    return (
    <>

            <div  className={styles.tabcontent}>
                <div className={styles.main}>
                    {/* <div className={styles.long}>
                        <TextField  types="text"  placeholder={"Full Name"}/>
                        
                    </div> */}
                    <div className={styles.flexdiv}>
                        <div className={styles.short}>
                        <div className={styles.firstname}>
                        <label htmlFor="name">Firstname</label>
                        <TextField  types="text"  placeholder={"FirstName"} vName={"FirstName"} required/>
                        </div>
                        </div>
                        <div className={styles.short, styles.leftmargin}>
                        <label htmlFor="name">Lastname</label>
                        <TextField  types="text"  placeholder={"LastName"} required/>
                        </div>
                    </div>
                    <div className={styles.flexdiv}>
                        <div className={styles.short}>
                        <label htmlFor="name">Date Of Birth</label>
                        <TextField  types="date" placeholder={"Date of Birth"} required />
                        </div>
                        <div className={styles.short, styles.leftmargin}>
                        <label htmlFor="name">Mobile no.</label>
                        <TextField  types="number"  placeholder={"Phone no."} required/>
                        </div>
                    </div>
                    <div className={styles.flexdiv}>
                        <div className={styles.short}>
                        <select className={styles.gen}>
                            <option value="Gender">Gender</option>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                            <option value="Other">Other</option>


                        </select>
                        </div>
                    <div className={styles.short, styles.leftmargin}>
                        <TextField  types="number"  placeholder={"Age"}/>
                    </div>
                    </div>
                        
                    <div className={styles.long}>
                    <TextField  types="text"  placeholder={"E-mail"}/>
                    </div>
                    <div className={styles.mailp}>
                        <div className={styles.mail}>
                            <a href="#">Creat New E-mail</a><br/>
                         </div>
                    </div>
                        <div className={styles.long}>
                        <TextField  types="text"  placeholder={"Address"}/>
                        </div>
                        {/* <div className={styles.flexdiv}>
                            <div className={styles.short}>
                            <TextField  types="number"  placeholder={"Pincode"}/>
                            </div>
                            <div className={styles.short, styles.leftmargin}>
                            <TextField  types="text"  placeholder={"City"} />
                            </div>
                        </div>
                        <div className={styles.flexdiv}>
                            <div className={styles.short}>
                            <TextField  types="text"  placeholder={"State"}/>
                            </div>
                            <div className={styles.short, styles.leftmargin}>
                            <TextField  types="text"  placeholder={"Country"}/>
                            </div>
                        </div> */}
                         <div className={styles.flexdiv}>
                        <div className={styles.short}>
                        <TextField  types="number" placeholder={"Pincode"} />
                        </div>
                        <div className={styles.short, styles.leftmargin}>
                        <TextField  types="text"  placeholder={"City"}/>
                        </div>
                    </div>
                    <div className={styles.flexdiv}>
                        <div className={styles.short}>
                        <TextField  types="text" placeholder={"State"}  />
                        </div>
                        <div className={styles.short, styles.leftmargin}>
                        <TextField  types="text"  placeholder={"County"}/>
                        </div>
                    </div>
                        <div className={styles.abs}>
                            <button type="submit" className={styles.btn}>Next</button>
                        </div>
                    </div>
                </div>


    </>
  )
}