import Head from "next/head";
import { useRouter } from 'next/router'
import { React, useState, useEffect } from "react";
import styles from "../../styles/login.module.css";
import TextField from "../propComponents/TextField";
import Otp from "../parentsComnents/Otp";
import Link from "next/link";
import firebase from "firebase/app";
import initFirebase from "../config/firebaseConfig";
import "firebase/auth";
// import { auth } from 'firebase'

export default function SignUp() {
  
  
  initFirebase();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [detail, setDetail] = useState({
    phoneNo: "",
  });
  const [otp, setOtp] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  });
  
  // Setup Recatcha...................

  const setUpRecaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha",
      {
        size: "invisible",
        callback: function (response) {
          console.log("Captcha Resolved");
          submit();
        },
        defaultCountry: "IN",
      }
    );
  };

  function submit(e) {
    e.preventDefault();
    console.log(detail);
    setUpRecaptcha();

    let phoneNumber = "+91" + detail.phoneNo;
    console.log(phoneNumber);
    let appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        if ((window.confirmationResult = confirmationResult)) {
          setShow(true);
        }
        // console.log(confirmationResult);
        console.log("OTP is sent");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // useEffect(()=>{

  // })
  const props = { otp, setOtp, otpSubmit };


  function otpSubmit(e) {
    console.log(otp);
    let otpInput =
      otp.otp1 + otp.otp2 + otp.otp3 + otp.otp4 + otp.otp5 + otp.otp6;
    let optConfirm = window.confirmationResult;
    // console.log(codee);
    optConfirm
      .confirm(otpInput)
      .then(function (result) {
        console.log("User signed in successfully.");
        
        // console.log("Result" + result.verificationID);
        let user = result.user;
        const token = firebase.auth().currentUser.getIdToken(true)
        console.log(token)
        console.log(user);

        router.push('/profile');
        
      })
      .catch(function (error) {
        console.log(error);
        alert("Incorrect OTP");
      });
  }
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.secDiv}></div>
        <div className={styles.loginForm}>
          <form onSubmit={(e) => submit(e)}>
            <div id="recaptcha"></div>
            <TextField
              types="phone number"
              InputEvent={(e) => setDetail({ phoneNo: e.target.value })}
              val={detail.phoneNo}
              placeholder={"Enter your Mobile no."}
            />
            {/* <TextField types="password" InputEvent={e => setDetail({email:detail.email, psw:e.target.value, Cpsw:detail.Cpsw})} val={detail.psw} placeholder={"Enter Password"} />
                <TextField types="password" InputEvent={e => setDetail({email:detail.email, psw:detail.psw, Cpsw:e.target.value})} val={detail.Cpsw} placeholder={"Re-Enter Password"}/> */}

            <div className={styles.btn}>
              <button className={styles.login}>Send OTP</button>
            </div>
            {/* <div className={styles.cna}>
                    <button className={styles.newacc}> <Link href="/login"><a> Move to login page</a></Link></button>
                </div> */}
            <div className={styles.fpass}>
              <Link href="/login">
                <a>Move to login page</a>
              </Link>
              <br />
            </div>
          </form>
          <div>{show ? <Otp {...props} /> : null}</div>
        </div>
      </div>
     
    </>
  );
}
