import Head from 'next/head'
import styles from '../../styles/otp.module.css'

export default function Otp (){


    return(
    <>
        <div className={styles.container}>
        <h1 className={styles.toper}>Enter OTP</h1>
            <div className={styles.userInput}>
                <input className={styles.inpt} type="text"  maxLength="1"/>
                <input className={styles.inpt} type="text"  maxLength="1" />
                <input className={styles.inpt} type="text"  maxLength="1" />
                <input className={styles.inpt} type="text"  maxLength="1" />
            </div>
            <button className={styles.butm}>Register</button>
        </div>
    </>
    )

}