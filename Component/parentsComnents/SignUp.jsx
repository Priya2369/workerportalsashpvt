import Head from "next/head";
import { useRouter } from "next/router";
import { React, useState, useEffect, useContext } from "react";
import styles from "../../styles/signUp.module.css";
import TextField from "../propComponents/TextField";
import Otp from "../parentsComnents/Otp";
import Link from "next/link";
import firebase from "firebase/app";
import axios from "axios";
import { getCookies } from "../config/FirebaseToken";
import initFirebase from "../config/firebaseConfig";
import Cookies from "universal-cookie";
import { userContext } from "../context/UserContext";
import { API_CONSTANTS } from "../config/apiConstant";
import "firebase/auth";

import tokenauth, { otpModule, cookies } from "../config/FirebaseToken";
// import { auth } from 'firebase'

export default function SignUp() {
  const { state, dispatch,  detail, setDetail,showHeader, setShowHeader } =
    useContext(userContext);

  initFirebase();

  const cookies = new Cookies();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  // const [user, setUser] = useState([])
  // const [detail, setDetail] = useState({
  //   phoneNo: "",
  // });

  const [otp, setOtp] = useState({
    otp1: "",
  });

  

  // Setup Recatcha...................

  const setUpRecaptcha = () => {
    try{
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

    }catch(error){
      
    }
   
  };

  function submit(e) {
    e.preventDefault();
    console.log(detail);
    setUpRecaptcha();

    const cornfirmResults = tokenauth(detail,setShow );
    // if(cornfirmResults.confirmationResult){
    //   setShow(true)
    // }
  }

  const props = { otp, setOtp, otpSubmit,  };

  function otpSubmit(e) {
    e.preventDefault();
    otpModule(otp, router, dispatch,  setOpen,setShowHeader);
    // dispatch({type:'USER', payload: true})
    // getData()
  }

  return (
    <>
      <div className={styles.mainDiv}>
        {/* <div className={styles.secDiv}></div> */}
        <div className={styles.loginForm}>
          <form onSubmit={(e) => submit(e)}>
            <div id="recaptcha"></div> 
            <TextField
              types="phone number"
              InputEvent={(e) => setDetail({ phoneNo: e.target.value })}
              val={detail.phoneNo}
              placeholder={"Enter your Mobile no."}
            />

            <div className={styles.btn}>
              <button className={styles.login}>Send OTP</button>
            </div>
            
          </form>
          <div>{show ? <Otp {...props} /> : null}</div>
        </div>
      </div>
    </>
  );
}