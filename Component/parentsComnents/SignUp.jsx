import Head from "next/head";
import { useRouter } from "next/router";
import { React, useState, useEffect, useContext } from "react";
import styles from "../../styles/login.module.css";
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
  const { state, dispatch, setNaShow, detail, setDetail } =
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

  // async function getData() {
  //   console.log(" get function call......................");
    
  //   try {
  //     if(getCookies){
  //     const reqUrl =
  //       API_CONSTANTS.baseUrl + API_CONSTANTS.enrollment.SELF_PROFILE;
  //     const res = await axios.get(reqUrl, {
  //       headers: {
  //         // authorization:cookies.get('access_token') ,
  //         authorization: getCookies(),
  //       },
  //     });
  //     console.log(res.data.data);
  //     if (!res.data.data) {
  //       router.push("/registration");
  //     } else if (res.data.data) {
  //       setNaShow(true);
  //       router.push("/jobs");
  //     }
  //   }
  //   } catch (error) {
  //     console.log("profile" + error);
  //   }
  // }

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

    const cornfirmResults = tokenauth(detail, setShow);
    // if(cornfirmResults.confirmationResult){
    //   setShow(true)
    // }
  }

  const props = { otp, setOtp, otpSubmit, setShow };

  function otpSubmit(e) {
    e.preventDefault();
    otpModule(otp, router, dispatch, setNaShow, setOpen);
    // dispatch({type:'USER', payload: true})
    // getData()
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

            <div className={styles.btn}>
              <button className={styles.login}>Send OTP</button>
            </div>
            {/* <div className={styles.cna}>
                    <button className={styles.newacc}> <Link href="/login"><a> Move to login page</a></Link></button>
                </div> */}
            {/* <div className={styles.fpass}>
              <Link href="/login">
                <a>Move to login page</a>
              </Link>
              <br />
            </div> */}
          </form>
          <div>{show ? <Otp {...props} /> : null}</div>
        </div>
      </div>
    </>
  );
}
