import Head from 'next/head'
import{ React, useState, useEffect} from 'react';
import styles from '../../styles/login.module.css'
import TextField from '../propComponents/TextField'
import Otp from '../parentsComnents/Otp'
import Link from 'next/link'

export default function SignUp() {
    const [detail, setDetail] = useState({
        email:'',
        psw:'',
        Cpsw:'',
        })

       function submit(e){
           e.preventDefault();
           console.log(detail)

       }

        useEffect(()=>{
            
        })
  return (
    <>
    <div className={styles.mainDiv}>

    <div className={styles.secDiv}>

</div>
        <div className={styles.loginForm}>
            <form onSubmit={e =>submit(e)}>
                <TextField types="phone number" InputEvent={e =>setDetail({email:e.target.value, psw:detail.psw, Cpsw:detail.Cpsw})} val={detail.email} placeholder={"Enter your Mobile no."}/>
                <TextField types="password" InputEvent={e => setDetail({email:detail.email, psw:e.target.value, Cpsw:detail.Cpsw})} val={detail.psw} placeholder={"Enter Password"} />
                <TextField types="password" InputEvent={e => setDetail({email:detail.email, psw:detail.psw, Cpsw:e.target.value})} val={detail.Cpsw} placeholder={"Re-Enter Password"}/>
               
                <div className={styles.btn}>
                    <button className={styles.login} >Send OTP</button>
                   
                </div>
                {/* <div className={styles.cna}>
                    <button className={styles.newacc}> <Link href="/login"><a> Move to login page</a></Link></button>
                </div> */}
                <div className={styles.fpass}>
                  <Link href="/login"><a>Move to login page</a></Link><br/>
                </div>
            </form>
            
        </div>
    </div>

    <Otp/>
    </>
  )
}