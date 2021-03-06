import { useEffect, useContext } from 'react';
import firebase from "firebase/app";
import { userContext } from '../Header_Components/Header_Bottom'
import initFirebase from "./firebaseConfig";
import "firebase/auth";
import Cookies from 'universal-cookie';
import { SettingsInputSvideoRounded } from '@material-ui/icons';
import axios from "axios";
import { API_CONSTANTS } from "./apiConstant";
import { toast } from "react-toastify";
// import { useRouter } from 'next/router'

toast.configure();

export default async function tokenauth(detail, setShow) {
  initFirebase();

  

  let phoneNumber = "+91" + detail.phoneNo;
  console.log(phoneNumber);
  let appVerifier = window.recaptchaVerifier;
  try {
    const confirmationResult = await firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function(confirmationResult) {
        
        if ((window.confirmationResult = confirmationResult)) {
          setShow(true)
        }
        
        console.log("OTP is sent");
        return window.confirmationResult
      })
    return confirmationResult

  } catch (error) {
    console.log(error);
    if(error.code==="auth/internal-error" ){
    toast.error("network errors", {
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      position: "bottom-right",
      autoClose: 5000,
    });
  }else if(error.code ==="auth/invalid-phone-number"){
    toast.error("invalid phone number", {
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      position: "bottom-right",
      autoClose: 5000,
    });
  }else{
    toast.error(error.message, {
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      position: "bottom-right",
      autoClose: 5000,
    });
  }

  };

}
export function otpModule(otp, router, dispatch,  setOpen, setShowHeader) {
 
  const cookies = new Cookies();
  
  console.log(otp);
  let otpInput =
    otp.otp1;
  let optConfirm = window.confirmationResult;

  
  optConfirm
    .confirm(otpInput)
    .then(async function(result) {
      console.log("User signed in successfully.");
      toast.success("OTP verified", {
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        position: "bottom-right",
        autoClose: 5000,
      });

      
      let user = result.user;
       let userToken = await firebase.auth().currentUser.getIdToken(true);
       console.log(userToken)
     
      console.log(user);
      // setCookies();
      setCookies.then(() => {
        const cookies = getCookies()
        console.log(cookies);
        
        console.log("get data runing")
        try {
          if (user) {
            console.log(cookies)
            const reqUrl =
              API_CONSTANTS.baseUrl + API_CONSTANTS.enrollment.SELF_PROFILE;
            axios.get(reqUrl, {
              headers: {
                
                authorization:userToken,
              },
            }).then((res) => {
              console.log(res.data.data);
              if (!res.data.data) {
                router.push("/registration");
              } else if (res.data.data) {
               
                console.log(res.data.data);
                localStorage.setItem("user_info",JSON.stringify(res.data.data))
                setShowHeader(true)
                router.push("/jobs");
              }
            }).catch(error => console.log(error.message));

          }
        } catch (error) {
          console.log("profile" + error);
        }

       
      })
    })
    .catch(function(error) {
      console.log(error);
      
      toast.error("Incorrect OTP", {
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        position: "bottom-right",
        autoClose: 5000,
      });

    });
  
}



export let setCookies = new Promise((resolve, reject) => {
  initFirebase()
  const cookies = new Cookies();
  console.log("set cookies")
  firebase.auth().onIdTokenChanged(async user => {
    
    if (user) {
      const token = await user.getIdToken(true);
      cookies.set('access_token', token, { path: '/', maxAge: 60 * 60 });
    }
  });
  console.log(cookies);
  return resolve(true)
})


export function getCookies() {
  const cookies = new Cookies()
  console.log("getcookies")
  initFirebase();

  console.log(cookies);
  return cookies.get('access_token');
}



