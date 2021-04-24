import Head from 'next/head'
import styles from '../../styles/otp.module.css'

export default function Otp ({otp, setOtp, otpSubmit}){

const{otp1, otp2, otp3, otp4, otp5, otp6} = otp
    return(
    <>
        <div className={styles.container}>
        <h1 className={styles.toper}>Enter OTP</h1>
            <div className={styles.userInput}>
                <input className={styles.inpt} type="text"  maxLength="1" value={otp1} 
                onChange={(e) => setOtp({ ...otp, otp1: e.target.value })}/>

                <input className={styles.inpt} type="text"  maxLength="1" value={otp2} 
                onChange={(e) => setOtp({ ...otp, otp2: e.target.value })}/>

                <input className={styles.inpt} type="text"  maxLength="1" value={otp3} 
                onChange={(e) => setOtp({ ...otp, otp3: e.target.value })}/>

                <input className={styles.inpt} type="text"  maxLength="1" value={otp4} 
                onChange={(e) => setOtp({ ...otp, otp4: e.target.value })}/>

                <input className={styles.inpt} type="text"  maxLength="1" value={otp5} 
                onChange={(e) => setOtp({ ...otp, otp5: e.target.value })}/>

                <input className={styles.inpt} type="text"  maxLength="1" value={otp6} 
                onChange={(e) => setOtp({ ...otp, otp6: e.target.value })}/>
            </div>
            <button className={styles.butm} onClick={(e)=>otpSubmit(e)}>Register</button>
        </div>
    </>
    )

}