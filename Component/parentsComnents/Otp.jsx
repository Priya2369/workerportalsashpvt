import Head from 'next/head'
import styles from '../../styles/otp.module.css'

export default function Otp ({otp, setOtp, otpSubmit, setShow}){

 const{otp1} = otp
    return(
    <>
        <div className={styles.container}>
         <h1 className={styles.toper}>Check Your Mobile For OTP</h1>
            <div className={styles.userInput}>
                <input className={styles.inpt} type="text"  maxLength="6" value={otp1} 
                onChange={(e) => setOtp({  otp1: e.target.value })} placeholder="Enter OTP"/>

                
            </div>
            <button className={styles.butm} onClick={(e)=>otpSubmit(e)}>Verify</button>
            <p className={styles.toper}>Didn't receive the code?<span>RESEND</span></p>
            
        </div>
       
    </>
    )

}