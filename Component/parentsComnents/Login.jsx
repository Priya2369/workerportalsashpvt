import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import Head from 'next/head'
import Link from 'next/link'
import{ React, useState, useEffect} from 'react';
import styles from '../../styles/login.module.css'
import TextField from '../propComponents/TextField'

export default function Login() {
    const [detail, setDetail] = useState({
        email:'',
        psw:'',
        })

       function submit(e){
           e.preventDefault();
           console.log(detail)

       }


       

        // useEffect(()=>{
            
        // })
  return (
    <>
    <div className={styles.mainDiv}>

      
        <div className={styles.secDiv}>
    
        </div>

        <div className={styles.loginForm}>
            <form onSubmit={e =>submit(e)}>
                <TextField types="text" InputEvent={e =>setDetail({email:e.target.value, psw:detail.psw})} val={detail.email} 
                // vName="email" 
                 placeholder={"Enter your Mobileno."}
                />
                <TextField types="password" InputEvent={e => setDetail({email:detail.email, psw:e.target.value})} val={detail.psw} 
                // vName="psw"
                placeholder={"Password"}
                />
                <div className={styles.fpass}>
                    <a href="#">Forget password?</a><br/>
                </div>
                <div className={styles.btn}>
                    <button className={styles.login} >login</button>
                </div>
                
            </form>
            <div className={styles.cna}>
                    <button className={styles.newacc}> <Link href="/signup"><a>Create new account</a></Link></button>
                </div>
            
        </div>
    </div>
    </>
  )
}