import Head from 'next/head'
import styles from '../../styles/profile.module.css'
import TextField from './TextField'


export default function Profile({ setStep, userData, setUserData }) {

    const { firstName,
        lastName,
        date,
        phoneNo,
        gender,
        age,
        email,
        address,
        pincode,
        city,
        state,
        country, } = userData;

    return (
        <>

            <div className={styles.tabcontent}>
                <div className={styles.main}>
                    {/* <div className={styles.long}>
                        <TextField types="text" placeholder={"Full Name"}
                            val={fullName}
                            InputEvent={(e) => setUserData({ ...userData, fullName: e.target.value })}

                        />

                    </div> */}
                    <div className={styles.flexdiv}>
                        <div className={styles.short}>
                            <TextField types="text" placeholder={"First Name"}
                                val={firstName}
                                InputEvent={(e) => setUserData({ ...userData, firstName: e.target.value })}
 />
                        </div>
                        <div className={styles.short, styles.leftmargin}>
                            <TextField types="text" placeholder={"Last Name"}
                                val={lastName}
                                InputEvent={(e) => setUserData({ ...userData, lastName: e.target.value })} />
                        </div>
                    </div>
                    <div className={styles.flexdiv}>
                        <div className={styles.short}>
                            <TextField types="date"
                                val={date}
                                InputEvent={(e) => setUserData({ ...userData, date: e.target.value })} />
                        </div>
                        <div className={styles.short, styles.leftmargin}>
                            <TextField types="number" placeholder={"Phone no."} val={phoneNo}
                                InputEvent={(e) => setUserData({ ...userData, phoneNo: e.target.value })} />
                        </div>
                    </div>
                    <div className={styles.flexdiv}>
                        <div className={styles.short}>
                            <select className={styles.gen} value={gender}
                                onChange={(e) => setUserData({ ...userData, gender: e.target.value })}>
                                <option value="Gender">Gender</option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                                <option value="Other">Other</option>


                            </select>
                        </div>
                        <div className={styles.short, styles.leftmargin}>
                            <TextField types="number" placeholder={"Age"}
                                val={age}
                                InputEvent={(e) => setUserData({ ...userData, age: e.target.value })} />
                        </div>
                    </div>

                    <div className={styles.long}>
                        <TextField types="text" placeholder={"E-mail"}
                            val={email}
                            InputEvent={(e) => setUserData({ ...userData, email: e.target.value })} />
                    </div>
                    <div className={styles.mailp}>
                        <div className={styles.mail}>
                            <a href="#">Creat New E-mail</a><br />
                        </div>
                    </div>
                    <div className={styles.long}>
                        <TextField types="text" placeholder={"Address"}
                            val={address}
                            InputEvent={(e) => setUserData({ ...userData, address: e.target.value })} />
                    </div>

                    <div className={styles.flexdiv}>
                        <div className={styles.short}>
                            <TextField types="number" placeholder={"Pincode"}
                                val={pincode}
                                InputEvent={(e) => setUserData({ ...userData, pincode: e.target.value })} />
                        </div>
                        <div className={styles.short, styles.leftmargin}>
                            <TextField types="text" placeholder={"City"}
                                val={city}
                                InputEvent={(e) => setUserData({ ...userData, city: e.target.value })} />
                        </div>
                    </div>
                    <div className={styles.flexdiv}>
                        <div className={styles.short}>
                            <TextField types="text" placeholder={"State"}
                                val={state}
                                InputEvent={(e) => setUserData({ ...userData, state: e.target.value })} />
                        </div>
                        <div className={styles.short, styles.leftmargin}>
                            <TextField types="text" placeholder={"Country"}
                                val={country}
                                InputEvent={(e) => setUserData({ ...userData, country: e.target.value })} />
                        </div>
                    </div>
                    <div className={styles.abs}>
                        <button type="button" onClick={() => setStep(2)} className={styles.btn} >Next</button>

                    </div>
                </div>
            </div>


        </>
    )
}